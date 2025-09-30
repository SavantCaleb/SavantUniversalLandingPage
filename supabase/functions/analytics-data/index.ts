// @ts-ignore: Deno is available in Supabase Edge Functions
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

// @ts-ignore: Deno namespace is available at runtime
Deno.serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Create Supabase client
    const supabase = createClient(
      // @ts-ignore: Deno.env is available at runtime
      Deno.env.get('SUPABASE_URL') ?? '',
      // @ts-ignore: Deno.env is available at runtime
      Deno.env.get('SERVICE_ROLE_KEY') ?? ''
    )

    const url = new URL(req.url)
    const dateRange = url.searchParams.get('dateRange') || '7d'
    
    const daysAgo = dateRange === '1d' ? 1 : dateRange === '7d' ? 7 : 30
    const since = new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000).toISOString()

    // Get events data
    const { data: events, error: eventsError } = await supabase
      .from('events')
      .select('*')
      .gte('timestamp', since)
      .order('timestamp', { ascending: false })

    if (eventsError) {
      throw eventsError
    }

    // Get form submissions
    const { data: submissions, error: submissionsError } = await supabase
      .from('form_submissions')
      .select('*')
      .gte('submitted_at', since)
      .order('submitted_at', { ascending: false })

    if (submissionsError) {
      throw submissionsError
    }

    // Call the conversion funnel RPC function
    const { data: funnel, error: funnelError } = await supabase
      .rpc('conversion_funnel')

    if (funnelError) {
      console.warn('Funnel RPC failed:', funnelError)
      // Continue without funnel data
    }

    // Get recent activity (last 24 hours)
    const { data: recentActivity, error: activityError } = await supabase
      .from('recent_activity')
      .select('*')
      .limit(100)

    if (activityError) {
      console.warn('Recent activity failed:', activityError)
      // Continue without recent activity
    }

    const filteredEvents = events || []

    const { verticalStats, pricingValidation } = calculateVerticalPerformance(filteredEvents)

    const responseData = {
      events: filteredEvents,
      submissions: submissions || [],
      funnel: funnel || [],
      recentActivity: recentActivity || [],
      verticalStats,
      pricingValidation
    }

    return new Response(
      JSON.stringify(responseData),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )

  } catch (error) {
    console.error('Analytics data error:', error)
    
    return new Response(
      JSON.stringify({ 
        error: 'Failed to fetch analytics data',
        details: error.message 
      }),
      { 
        status: 500,
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )
  }
})

type EventRecord = {
  event_type: string
  session_id: string | null
  event_data: Record<string, unknown> | null
  vertical: string | null
  timestamp: string
  page?: string | null
  tier_price?: string | null
}

type VerticalStats = Record<string, {
  pageViews: number
  totalPageViews: number
  pricingClicks: number
  tierClicks: number
  formCompletions: number
  conversionRate: string
  avgOrderValue: string
  avgDollar: string
  totalRevenue: string
  formStarts: number
  formReaches: number
  expectedRevenue500: string
  mrrPer1000: string
  pricingRate: string
  trialRate: string
  completionRate: string
  tierDistribution: Record<string, number>
  isSignificant: boolean
  sampleNeeded: number
}>

type PricingValidation = Record<string, Record<string, number> & { total: number }>

function calculateVerticalPerformance(events: EventRecord[]): { verticalStats: VerticalStats, pricingValidation: PricingValidation } {
  if (!events || events.length === 0) {
    return { verticalStats: {}, pricingValidation: {} }
  }

  const verticalStats: VerticalStats = {}
  const pricingValidation: PricingValidation = {}

  const eventsByVertical = events.reduce<Record<string, EventRecord[]>>((acc, event) => {
    if (!event.vertical) return acc
    if (!acc[event.vertical]) {
      acc[event.vertical] = []
    }
    acc[event.vertical].push(event)
    return acc
  }, {})

  for (const [vertical, verticalEvents] of Object.entries(eventsByVertical)) {
    const landingEvents = verticalEvents.filter((event) => event.event_type === 'page_view' && event.page === 'landing')
    const pricingEvents = verticalEvents.filter((event) => event.event_type === 'pricing_button_click')
    const tierEvents = verticalEvents.filter((event) => event.event_type === 'pricing_tier_click' && event.tier_price)
    const formStartEvents = verticalEvents.filter((event) => event.event_type === 'email_form_start')
    const formCompletionEvents = verticalEvents.filter((event) => event.event_type === 'email_form_complete')

    const landingSessions = uniqueSessions(landingEvents)
    const pricingSessions = uniqueSessions(pricingEvents)
    const tierSessions = uniqueSessions(tierEvents)
    const formStartSessions = uniqueSessions(formStartEvents)
    const formCompletionSessions = uniqueSessions(formCompletionEvents)

    const landingCount = landingSessions.size
    const pricingCount = pricingSessions.size
    const tierCount = tierSessions.size
    const formCompletionCount = formCompletionSessions.size

    // Adjust form starts to exclude completed sessions to match dashboard logic
    const rawFormStarts = formStartSessions.size
    const formStarts = Math.max(0, rawFormStarts - formCompletionCount)
    const formReaches = Math.max(0, tierCount - rawFormStarts)

    const tierDistribution = calculateTierDistribution(tierEvents)
    const tierTotals = Object.values(tierDistribution).reduce((sum, value) => sum + value, 0)

    const avgOrderValueNumber = tierTotals > 0
      ? calculateAverageTierValue(tierDistribution)
      : (formCompletionCount > 0 ? 149 : 0)

    const avgDollarNumber = tierTotals > 0 ? calculateAverageTierValue(tierDistribution) : 0
    const totalRevenueNumber = formCompletionCount * avgOrderValueNumber
    const expectedRevenue500Number = (formCompletionCount * 0.20 * avgOrderValueNumber) +
      (formStarts * 0.05 * avgOrderValueNumber) +
      (formReaches * 0.03 * avgOrderValueNumber)
    const mrrPer1000Number = expectedRevenue500Number * 2

    const conversionRate = landingCount > 0 ? ((formCompletionCount / landingCount) * 100) : 0
    const pricingRate = landingCount > 0 ? ((pricingCount / landingCount) * 100) : 0
    const trialRate = pricingCount > 0 ? ((tierCount / pricingCount) * 100) : 0
    const completionRate = tierCount > 0 ? ((formCompletionCount / tierCount) * 100) : 0

    verticalStats[vertical] = {
      pageViews: landingCount,
      totalPageViews: landingEvents.length,
      pricingClicks: pricingCount,
      tierClicks: tierCount,
      formCompletions: formCompletionCount,
      conversionRate: conversionRate.toFixed(1),
      avgOrderValue: avgOrderValueNumber.toFixed(0),
      avgDollar: avgDollarNumber.toFixed(0),
      totalRevenue: totalRevenueNumber.toFixed(0),
      formStarts,
      formReaches,
      expectedRevenue500: expectedRevenue500Number.toFixed(0),
      mrrPer1000: mrrPer1000Number.toFixed(2),
      pricingRate: pricingRate.toFixed(1),
      trialRate: trialRate.toFixed(1),
      completionRate: completionRate.toFixed(1),
      tierDistribution,
      isSignificant: landingCount >= 30,
      sampleNeeded: Math.max(0, 30 - landingCount)
    }

    if (tierTotals > 0) {
      pricingValidation[vertical] = calculatePricingValidationPercentages(tierDistribution, tierTotals)
    }
  }

  return { verticalStats, pricingValidation }
}

function uniqueSessions(events: EventRecord[]): Set<string> {
  return events.reduce((set, event) => {
    if (event.session_id) {
      set.add(event.session_id)
    }
    return set
  }, new Set<string>())
}

function calculateTierDistribution(events: EventRecord[]): Record<string, number> {
  if (!events.length) {
    return { '$79': 0, '$149': 0, '$299': 0 }
  }

  const sessionToLatestTier = new Map<string, { price: string, timestamp: number }>()

  events.forEach((event) => {
    if (!event.session_id || !event.tier_price || !event.timestamp) return
    const eventTime = new Date(event.timestamp).getTime()
    const existing = sessionToLatestTier.get(event.session_id)
    if (!existing || eventTime >= existing.timestamp) {
      sessionToLatestTier.set(event.session_id, { price: event.tier_price, timestamp: eventTime })
    }
  })

  const distribution: Record<string, number> = { '$79': 0, '$149': 0, '$299': 0 }

  for (const { price } of sessionToLatestTier.values()) {
    distribution[price] = (distribution[price] || 0) + 1
  }

  return distribution
}

function calculateAverageTierValue(distribution: Record<string, number>): number {
  let totalCount = 0
  let totalValue = 0

  for (const [price, count] of Object.entries(distribution)) {
    if (!count) continue
    totalCount += count
    totalValue += parsePrice(price) * count
  }

  if (totalCount === 0) return 0
  return totalValue / totalCount
}

function calculatePricingValidationPercentages(distribution: Record<string, number>, total: number): Record<string, number> & { total: number } {
  const percentages: Record<string, number> & { total: number } = { total }

  for (const [price, count] of Object.entries(distribution)) {
    percentages[price] = total > 0 ? Math.round((count / total) * 100) : 0
  }

  return percentages
}

function parsePrice(price: string): number {
  if (!price) return 0
  const numeric = parseFloat(price.replace(/[^0-9.]/g, ''))
  return Number.isFinite(numeric) ? numeric : 0
}