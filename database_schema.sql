-- SAVANT UNIVERSAL LANDING PAGE DATABASE SCHEMA
-- Comprehensive analytics and user tracking for Supabase
-- 
-- This schema captures:
-- - Complete user journey from landing to conversion
-- - Real-time analytics across all instances
-- - Vertical performance comparison
-- - Marketing attribution
-- - Lead management
-- - A/B testing framework

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =============================================================================
-- 1. SESSIONS TABLE
-- Tracks individual user sessions across the entire funnel
-- =============================================================================
CREATE TABLE sessions (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    session_id TEXT UNIQUE NOT NULL,
    ip_address INET,
    user_agent TEXT,
    country TEXT,
    city TEXT,
    region TEXT,
    timezone TEXT,
    device_type TEXT, -- mobile, desktop, tablet
    browser TEXT,
    os TEXT,
    screen_resolution TEXT,
    viewport_size TEXT,
    referrer TEXT,
    landing_page TEXT,
    initial_vertical TEXT,
    initial_utm_source TEXT,
    initial_utm_medium TEXT,
    initial_utm_campaign TEXT,
    initial_utm_term TEXT,
    initial_utm_content TEXT,
    session_start_time TIMESTAMPTZ DEFAULT NOW(),
    last_activity_time TIMESTAMPTZ DEFAULT NOW(),
    session_duration_seconds INTEGER DEFAULT 0,
    total_page_views INTEGER DEFAULT 0,
    bounce_rate BOOLEAN DEFAULT false,
    converted BOOLEAN DEFAULT false,
    conversion_type TEXT, -- email_signup, phone_call, etc.
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================================================
-- 2. EVENTS TABLE  
-- Captures all user interactions and analytics events
-- =============================================================================
CREATE TABLE events (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    session_id TEXT REFERENCES sessions(session_id) ON DELETE CASCADE,
    event_type TEXT NOT NULL, -- page_view, pricing_tier_click, email_form_start, etc.
    event_data JSONB, -- flexible storage for event-specific data
    page TEXT, -- landing, pricing, email-capture, analytics
    vertical TEXT, -- personal-injury, hvac, plumbing, etc.
    ip_address INET,
    timestamp TIMESTAMPTZ DEFAULT NOW(),
    
    -- Page view specific
    previous_page TEXT,
    time_on_page_seconds INTEGER,
    
    -- Pricing specific  
    tier_name TEXT, -- Solo Pro, Growth, Enterprise
    tier_price TEXT, -- $147, $297, $597
    
    -- Form specific
    form_field_name TEXT,
    form_step INTEGER,
    
    -- Attribution
    utm_source TEXT,
    utm_medium TEXT,
    utm_campaign TEXT,
    utm_term TEXT,
    utm_content TEXT,
    
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================================================
-- 3. FORM_SUBMISSIONS TABLE
-- Stores completed form submissions with user data
-- =============================================================================
CREATE TABLE form_submissions (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    session_id TEXT REFERENCES sessions(session_id) ON DELETE CASCADE,
    vertical TEXT NOT NULL,
    ip_address INET,
    country TEXT,
    city TEXT,
    
    -- Form data (flexible JSON for different verticals)
    email TEXT NOT NULL,
    form_data JSONB NOT NULL, -- stores all form fields dynamically
    
    -- Pricing context
    selected_tier_name TEXT,
    selected_tier_price TEXT,
    time_to_conversion_seconds INTEGER, -- from first page view to form submit
    
    -- Attribution
    utm_source TEXT,
    utm_medium TEXT,
    utm_campaign TEXT,
    attribution_model TEXT, -- first-touch, last-touch, etc.
    
    -- Lead scoring
    lead_score INTEGER DEFAULT 0,
    lead_quality TEXT, -- hot, warm, cold
    
    submitted_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================================================
-- 4. VISITORS TABLE
-- IP-based visitor identification and aggregation  
-- =============================================================================
CREATE TABLE visitors (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    ip_address INET UNIQUE NOT NULL,
    first_seen TIMESTAMPTZ DEFAULT NOW(),
    last_seen TIMESTAMPTZ DEFAULT NOW(),
    total_sessions INTEGER DEFAULT 1,
    total_page_views INTEGER DEFAULT 0,
    total_time_spent_seconds INTEGER DEFAULT 0,
    
    -- Geographic data
    country TEXT,
    city TEXT,
    region TEXT,
    timezone TEXT,
    
    -- Device fingerprinting
    primary_device_type TEXT,
    primary_browser TEXT,
    primary_os TEXT,
    
    -- Conversion tracking
    converted BOOLEAN DEFAULT false,
    conversion_date TIMESTAMPTZ,
    conversion_vertical TEXT,
    lifetime_value DECIMAL(10,2) DEFAULT 0,
    
    -- Behavior analysis
    bounce_rate DECIMAL(5,2),
    avg_session_duration_seconds DECIMAL(10,2),
    most_viewed_vertical TEXT,
    favorite_pricing_tier TEXT,
    
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================================================
-- 5. VERTICAL_PERFORMANCE TABLE
-- Aggregated performance metrics per vertical
-- =============================================================================
CREATE TABLE vertical_performance (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    vertical TEXT NOT NULL,
    date DATE DEFAULT CURRENT_DATE,
    
    -- Traffic metrics
    unique_visitors INTEGER DEFAULT 0,
    total_page_views INTEGER DEFAULT 0,
    bounce_rate DECIMAL(5,2) DEFAULT 0,
    avg_time_on_page_seconds DECIMAL(10,2) DEFAULT 0,
    
    -- Conversion funnel
    landing_to_pricing_rate DECIMAL(5,2) DEFAULT 0,
    pricing_to_email_rate DECIMAL(5,2) DEFAULT 0,
    email_completion_rate DECIMAL(5,2) DEFAULT 0,
    
    -- Form metrics
    form_starts INTEGER DEFAULT 0,
    form_completions INTEGER DEFAULT 0,
    form_abandonment_rate DECIMAL(5,2) DEFAULT 0,
    
    -- Pricing tier distribution
    tier_147_selections INTEGER DEFAULT 0,
    tier_297_selections INTEGER DEFAULT 0, 
    tier_597_selections INTEGER DEFAULT 0,
    
    -- Revenue estimation
    estimated_revenue DECIMAL(10,2) DEFAULT 0,
    
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    
    UNIQUE(vertical, date)
);

-- =============================================================================
-- 6. AB_TESTS TABLE
-- A/B testing framework
-- =============================================================================
CREATE TABLE ab_tests (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    test_name TEXT UNIQUE NOT NULL,
    test_description TEXT,
    variants JSONB NOT NULL, -- ['control', 'variant_a', 'variant_b']
    traffic_split DECIMAL(3,2) DEFAULT 0.5, -- 0.5 = 50/50 split
    is_active BOOLEAN DEFAULT true,
    start_date TIMESTAMPTZ DEFAULT NOW(),
    end_date TIMESTAMPTZ,
    
    -- Results
    control_conversions INTEGER DEFAULT 0,
    variant_conversions INTEGER DEFAULT 0,
    statistical_significance DECIMAL(5,2),
    winning_variant TEXT,
    
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================================================
-- 7. AB_TEST_ASSIGNMENTS TABLE
-- Track which variant each session sees
-- =============================================================================
CREATE TABLE ab_test_assignments (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    session_id TEXT REFERENCES sessions(session_id) ON DELETE CASCADE,
    test_name TEXT REFERENCES ab_tests(test_name) ON DELETE CASCADE,
    variant TEXT NOT NULL,
    converted BOOLEAN DEFAULT false,
    assigned_at TIMESTAMPTZ DEFAULT NOW(),
    
    UNIQUE(session_id, test_name)
);

-- =============================================================================
-- PERFORMANCE INDEXES
-- =============================================================================
CREATE INDEX idx_events_session_id ON events(session_id);
CREATE INDEX idx_events_timestamp ON events(timestamp);
CREATE INDEX idx_events_vertical ON events(vertical);
CREATE INDEX idx_events_event_type ON events(event_type);
CREATE INDEX idx_form_submissions_vertical ON form_submissions(vertical);
CREATE INDEX idx_form_submissions_submitted_at ON form_submissions(submitted_at);
CREATE INDEX idx_sessions_ip_address ON sessions(ip_address);
CREATE INDEX idx_sessions_initial_vertical ON sessions(initial_vertical);
CREATE INDEX idx_visitors_ip_address ON visitors(ip_address);
CREATE INDEX idx_vertical_performance_date ON vertical_performance(date);

-- =============================================================================
-- ROW LEVEL SECURITY SETUP
-- =============================================================================
ALTER TABLE sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE visitors ENABLE ROW LEVEL SECURITY;
ALTER TABLE vertical_performance ENABLE ROW LEVEL SECURITY;
ALTER TABLE ab_tests ENABLE ROW LEVEL SECURITY;
ALTER TABLE ab_test_assignments ENABLE ROW LEVEL SECURITY;

-- =============================================================================
-- SECURITY POLICIES (Allows all access - adjust based on your auth requirements)
-- =============================================================================

-- Sessions policies
CREATE POLICY "Enable read access for all users" ON sessions FOR SELECT USING (true);
CREATE POLICY "Enable insert access for all users" ON sessions FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update access for all users" ON sessions FOR UPDATE USING (true);

-- Events policies
CREATE POLICY "Enable read access for all users" ON events FOR SELECT USING (true);
CREATE POLICY "Enable insert access for all users" ON events FOR INSERT WITH CHECK (true);

-- Form submissions policies
CREATE POLICY "Enable read access for all users" ON form_submissions FOR SELECT USING (true);
CREATE POLICY "Enable insert access for all users" ON form_submissions FOR INSERT WITH CHECK (true);

-- Visitors policies
CREATE POLICY "Enable read access for all users" ON visitors FOR SELECT USING (true);
CREATE POLICY "Enable insert access for all users" ON visitors FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update access for all users" ON visitors FOR UPDATE USING (true);

-- Vertical performance policies
CREATE POLICY "Enable read access for all users" ON vertical_performance FOR SELECT USING (true);
CREATE POLICY "Enable insert access for all users" ON vertical_performance FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update access for all users" ON vertical_performance FOR UPDATE USING (true);

-- AB testing policies
CREATE POLICY "Enable read access for all users" ON ab_tests FOR SELECT USING (true);
CREATE POLICY "Enable insert access for all users" ON ab_tests FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update access for all users" ON ab_tests FOR UPDATE USING (true);

CREATE POLICY "Enable read access for all users" ON ab_test_assignments FOR SELECT USING (true);
CREATE POLICY "Enable insert access for all users" ON ab_test_assignments FOR INSERT WITH CHECK (true);

-- =============================================================================
-- RPC FUNCTIONS FOR COMPLEX QUERIES
-- =============================================================================

-- Conversion funnel function
CREATE OR REPLACE FUNCTION conversion_funnel()
RETURNS TABLE (
    vertical TEXT,
    landing_views BIGINT,
    pricing_clicks BIGINT,
    tier_clicks BIGINT,
    form_starts BIGINT,
    form_completions BIGINT,
    landing_to_pricing_rate NUMERIC,
    pricing_to_conversion_rate NUMERIC
) 
LANGUAGE SQL
AS $$
SELECT 
    e.vertical,
    COUNT(DISTINCT CASE WHEN e.event_type = 'page_view' AND e.page = 'landing' THEN e.session_id END) as landing_views,
    COUNT(DISTINCT CASE WHEN e.event_type = 'pricing_button_click' THEN e.session_id END) as pricing_clicks,
    COUNT(DISTINCT CASE WHEN e.event_type = 'pricing_tier_click' THEN e.session_id END) as tier_clicks,
    COUNT(DISTINCT CASE WHEN e.event_type = 'email_form_start' THEN e.session_id END) as form_starts,
    COUNT(DISTINCT CASE WHEN e.event_type = 'email_form_complete' THEN e.session_id END) as form_completions,
    ROUND(
        100.0 * COUNT(DISTINCT CASE WHEN e.event_type = 'pricing_button_click' THEN e.session_id END) / 
        NULLIF(COUNT(DISTINCT CASE WHEN e.event_type = 'page_view' AND e.page = 'landing' THEN e.session_id END), 0), 
        2
    ) as landing_to_pricing_rate,
    ROUND(
        100.0 * COUNT(DISTINCT CASE WHEN e.event_type = 'email_form_complete' THEN e.session_id END) / 
        NULLIF(COUNT(DISTINCT CASE WHEN e.event_type = 'pricing_tier_click' THEN e.session_id END), 0), 
        2
    ) as pricing_to_conversion_rate
FROM events e 
WHERE e.timestamp >= NOW() - INTERVAL '7 days'
GROUP BY e.vertical
ORDER BY form_completions DESC;
$$;

-- =============================================================================
-- USEFUL ANALYTICS VIEWS
-- =============================================================================

-- Real-time conversion funnel by vertical
CREATE VIEW conversion_funnel AS
SELECT 
    vertical,
    COUNT(DISTINCT CASE WHEN event_type = 'page_view' AND page = 'landing' THEN session_id END) as landing_views,
    COUNT(DISTINCT CASE WHEN event_type = 'pricing_button_click' THEN session_id END) as pricing_clicks,
    COUNT(DISTINCT CASE WHEN event_type = 'pricing_tier_click' THEN session_id END) as tier_clicks,
    COUNT(DISTINCT CASE WHEN event_type = 'email_form_start' THEN session_id END) as form_starts,
    COUNT(DISTINCT CASE WHEN event_type = 'email_form_complete' THEN session_id END) as form_completions,
    ROUND(
        100.0 * COUNT(DISTINCT CASE WHEN event_type = 'pricing_button_click' THEN session_id END) / 
        NULLIF(COUNT(DISTINCT CASE WHEN event_type = 'page_view' AND page = 'landing' THEN session_id END), 0), 
        2
    ) as landing_to_pricing_rate,
    ROUND(
        100.0 * COUNT(DISTINCT CASE WHEN event_type = 'email_form_complete' THEN session_id END) / 
        NULLIF(COUNT(DISTINCT CASE WHEN event_type = 'pricing_tier_click' THEN session_id END), 0), 
        2
    ) as pricing_to_conversion_rate
FROM events 
WHERE timestamp >= NOW() - INTERVAL '7 days'
GROUP BY vertical
ORDER BY form_completions DESC;

-- Recent activity feed
CREATE VIEW recent_activity AS
SELECT 
    e.event_type,
    e.vertical,
    e.tier_price,
    s.country,
    s.city,
    e.timestamp
FROM events e
LEFT JOIN sessions s ON e.session_id = s.session_id
WHERE e.timestamp >= NOW() - INTERVAL '1 day'
ORDER BY e.timestamp DESC
LIMIT 100;

-- Pricing tier preferences by vertical
CREATE VIEW pricing_preferences AS
SELECT 
    vertical,
    tier_price,
    COUNT(*) as selections,
    ROUND(100.0 * COUNT(*) / SUM(COUNT(*)) OVER (PARTITION BY vertical), 2) as percentage
FROM events 
WHERE event_type = 'pricing_tier_click' 
    AND tier_price IS NOT NULL
    AND timestamp >= NOW() - INTERVAL '30 days'
GROUP BY vertical, tier_price
ORDER BY vertical, selections DESC;

-- =============================================================================
-- COMPLETION MESSAGE
-- =============================================================================

-- Success! Your Savant Universal Landing Page database is ready.
-- 
-- Next steps:
-- 1. Update your frontend to send data to these tables instead of localStorage
-- 2. Create Supabase API endpoints for:
--    - Session tracking
--    - Event logging  
--    - Form submissions
--    - Analytics queries
-- 3. Use the views above for real-time dashboard queries
--
-- The schema captures everything you need for enterprise-level analytics!