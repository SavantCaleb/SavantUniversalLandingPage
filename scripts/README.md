# Lead Extraction Scripts

This directory contains scripts to extract business names and email addresses from JSON lead files and convert them to CSV format for easy import into CRM systems or email marketing tools.

## 🚀 Quick Start

### Option 1: Run the Bash Script (Recommended)
```bash
# Make sure you're in the project root directory
cd /Users/calebbenedict/SavantUniversalLandingPage

# Run the extraction script
./scripts/extract-leads.sh
```

### Option 2: Run the Node.js Script Directly
```bash
# From the project root directory
node scripts/extract-leads.js
```

## 📁 What Gets Created

The script processes all JSON files in the `leads/` directory and creates:

### Individual CSV Files
- `accounting-firm-leads.csv` (591 leads)
- `auto-repair-leads.csv` (612 leads)
- `dentist-leads.csv` (628 leads)
- `hvac-leads.csv` (550 leads)
- ... and 21 more verticals

### Combined CSV File
- `all-leads-combined.csv` (15,968 total leads) - Contains all leads with a vertical column

## 📋 CSV Format

Each CSV file contains the following columns:
- `business_name` - The business name (from location_name or business_name fields)
- `email` - Business email address (from business_emails array)
- `phone` - Primary phone number (optional)
- `website` - Business website URL (optional)
- `city` - Business city (optional)
- `state` - Business state (optional)
- `vertical` - Business vertical (only in combined file)

## 📊 Extraction Summary

**Total Leads Extracted: 15,968**

| Vertical | Leads | File |
|----------|-------|------|
| Equipment Rentals | 833 | equipment-rentals-leads.csv |
| Fitness Studio | 830 | fitness-studio-leads.csv |
| Storage Facilities | 800 | storage-facilities-leads.csv |
| Insurance Agency | 785 | insurance-agency-leads.csv |
| Real Estate Agents | 764 | real-estate-agents-leads.csv |
| Urgent Care | 735 | urgent-care-leads.csv |
| Physical Therapy | 671 | physical-therapy-leads.csv |
| Lawn Care | 659 | lawn-care-leads.csv |
| Property Management | 651 | property-management-leads.csv |
| Mortgage Broker | 646 | mortage-broker-leads.csv |
| Dentist | 628 | dentist-leads.csv |
| Mental Health | 615 | mental-health-leads.csv |
| Auto Repair | 612 | auto-repair-leads.csv |
| Dry Cleaning | 606 | dry-cleaning-leads.csv |
| Accounting Firm | 591 | accounting-firm-leads.csv |
| Electrician | 582 | electrician-leads.csv |
| Pet Grooming | 576 | pet-grooming-leads.csv |
| Pest Control | 562 | pest-control-leads.csv |
| General Contractors | 558 | general-contractors-leads.csv |
| Veterinarian | 558 | veternarian-leads.csv |
| HVAC | 550 | hvac-leads.csv |
| Personal Injury | 548 | personal-injury-leads.csv |
| Hair Salons | 542 | hair-salons-leads.csv |
| Plumbing | 537 | plumbing-leads.csv |
| Locksmith | 529 | locksmith-leads.csv |

## 🛠 Technical Details

### Requirements
- Node.js (ES modules supported)
- Read access to `leads/` directory
- Write access for creating `extracted-leads/` directory

### Script Features
- **Smart Field Detection**: Handles multiple JSON structures and field names
- **Email Validation**: Only includes businesses with valid email addresses
- **CSV Escaping**: Properly escapes commas, quotes, and newlines in CSV output
- **Error Handling**: Continues processing even if individual records fail
- **Progress Reporting**: Shows detailed progress and summary statistics
- **Multiple Outputs**: Creates both individual and combined CSV files

### Data Quality
- Filters out businesses without email addresses
- Handles multiple emails per business (creates separate rows)
- Includes optional contact information when available
- Maintains data integrity with proper CSV formatting

## 🎯 Use Cases

1. **Email Marketing**: Import CSV files into Mailchimp, Constant Contact, etc.
2. **CRM Integration**: Import leads into Salesforce, HubSpot, Pipedrive, etc.
3. **Sales Outreach**: Use for cold email campaigns and lead generation
4. **Market Research**: Analyze business distribution by vertical and geography
5. **A/B Testing**: Split leads by vertical for testing different approaches

## 📈 Next Steps

1. **Import to CRM**: Upload CSV files to your preferred CRM system
2. **Email Campaigns**: Create targeted campaigns by vertical
3. **Data Enrichment**: Use services like ZoomInfo or Apollo to add more contact details
4. **Compliance**: Ensure GDPR/CAN-SPAM compliance for your region
5. **Segmentation**: Create custom segments based on geography or business size

## 🔧 Customization

To modify the extraction logic, edit `extract-leads.js`:
- Add more fields to extract from JSON
- Change CSV column order
- Add data validation rules
- Modify file naming conventions