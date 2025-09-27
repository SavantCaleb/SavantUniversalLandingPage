import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Create Supabase client
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
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

    const responseData = {
      events: events || [],
      submissions: submissions || [],
      funnel: funnel || [],
      recentActivity: recentActivity || []
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