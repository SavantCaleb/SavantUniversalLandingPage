# 📊 Google Analytics 4 + Dashboard Setup Guide

## 🚀 Quick Setup Instructions

### 1. **Get Your Google Analytics 4 Measurement ID**

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new GA4 property (or use existing)
3. Copy your Measurement ID (format: `G-XXXXXXXXXX`)

### 2. **Update Your HTML File**

In `/Users/calebbenedict/SavantUniversalLandingPage/index.html`, replace `GA_MEASUREMENT_ID` with your actual ID:

```html
<!-- REPLACE THIS LINE: -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>

<!-- WITH YOUR ACTUAL ID: -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>

<!-- AND ALSO REPLACE THIS LINE: -->
gtag('config', 'GA_MEASUREMENT_ID');

<!-- WITH YOUR ACTUAL ID: -->
gtag('config', 'G-XXXXXXXXXX');
```

## 📈 What's Being Tracked

### **Automatic Events:**
1. **`page_view`** - Every page load with vertical/UTM data
2. **`pricing_button_click`** - CTA button clicks from landing page
3. **`pricing_tier_click`** - Which pricing tier ($79/$149/$299)
4. **`email_form_start`** - User starts filling email form
5. **`email_form_complete`** - Form submission success
6. **`conversion_complete`** - Final conversion event

### **Event Properties Tracked:**
- `vertical` - Which industry (plumbing, hvac, etc.)
- `page` - Current page (landing, pricing, email-capture)
- `tier_name` - Pricing tier selected
- `tier_price` - Price point chosen
- `utm_source` - Email campaign source
- `utm_campaign` - Campaign identifier
- `referrer` - Where traffic came from

## 🎯 Email Campaign URLs

Structure your email links like this:

```
https://yourdomain.com/?vertical=plumbing&utm_source=email&utm_campaign=cold-outreach-v1
```

**URL Parameters:**
- `vertical` - Industry vertical (required)
- `utm_source` - Always set to "email"
- `utm_campaign` - Your campaign name
- `utm_content` - Optional: sequence number

## 📊 Accessing Your Dashboard

Visit your site with the analytics parameter:
```
https://yourdomain.com/?page=analytics
```

**Dashboard Features:**
- ✅ Real-time conversion funnel
- ✅ Conversion rates at each step
- ✅ Pricing tier preferences
- ✅ Top performing verticals
- ✅ Recent event stream
- ✅ Date range filtering
- ✅ Vertical-specific analysis
- ✅ Data export (JSON format)

## 🔧 Troubleshooting

### **No Data Showing?**
1. Check browser console for errors
2. Verify GA4 Measurement ID is correct
3. Make sure you're testing with different verticals
4. Allow a few minutes for GA4 to process events

### **Dashboard Empty?**
- Dashboard shows local events stored in browser
- Navigate through your site to generate test data
- Data persists locally and syncs to GA4

### **Testing the Funnel:**
1. Visit: `/?vertical=plumbing`
2. Click "View Plans & Pricing"
3. Click a pricing tier button
4. Start filling the email form
5. Submit the form
6. Check dashboard: `/?page=analytics`

## 📧 Integration with Your Email Campaigns

### **Email Link Format:**
```
https://yourdomain.com/?vertical=[INDUSTRY]&utm_source=email&utm_campaign=[CAMPAIGN_NAME]
```

### **Example Links for Different Verticals:**
```
- Plumbing: /?vertical=plumbing&utm_source=email&utm_campaign=winter-emergency
- HVAC: /?vertical=hvac&utm_source=email&utm_campaign=peak-season
- Legal: /?vertical=personal-injury&utm_source=email&utm_campaign=q1-2024
```

## 🎪 Google Analytics 4 Custom Reports

Create these custom reports in GA4:

### **1. Conversion Funnel Report**
- Events: `page_view` → `pricing_button_click` → `pricing_tier_click` → `email_form_complete`
- Group by: `vertical`, `utm_campaign`

### **2. Pricing Analysis Report**
- Event: `pricing_tier_click`
- Group by: `tier_price`, `vertical`
- Metric: Event count

### **3. Email Campaign Performance**
- Events: All events
- Filter: `utm_source` = "email"
- Group by: `utm_campaign`, `vertical`

## 🚨 Important Notes

- **Data Storage**: Events are stored locally AND sent to GA4
- **Privacy**: No PII is tracked, only business metrics
- **Performance**: Tracking is lightweight and won't slow your site
- **Export**: Use dashboard export for detailed analysis
- **Real-time**: Dashboard updates every 30 seconds automatically

## 📞 Need Help?

The system automatically logs all events to browser console for debugging. Press F12 → Console to see events as they fire.