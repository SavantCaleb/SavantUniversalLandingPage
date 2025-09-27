#!/usr/bin/env node

/**
 * Lead Extraction Script for Savant Universal Landing Page
 * 
 * Extracts business names and email addresses from JSON lead files
 * and creates CSV files for each vertical.
 * 
 * Usage: node scripts/extract-leads.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const LEADS_DIR = path.join(__dirname, '../leads');
const OUTPUT_DIR = path.join(__dirname, '../extracted-leads');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

/**
 * Extract leads from a single JSON file
 * @param {string} filePath - Path to the JSON file
 * @returns {Array} Array of lead objects with name and email
 */
function extractLeadsFromFile(filePath) {
  try {
    console.log(`Processing: ${path.basename(filePath)}`);
    
    const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const leads = [];
    
    // Handle different JSON structures
    const dataArray = jsonData.data || jsonData;
    
    if (!Array.isArray(dataArray)) {
      console.warn(`⚠️  Warning: ${path.basename(filePath)} does not contain an array of data`);
      return [];
    }
    
    dataArray.forEach((business, index) => {
      try {
        // Extract business name (try multiple fields)
        const businessName = business.location_name || 
                            business.business_name || 
                            business.name || 
                            `Business ${index + 1}`;
        
        // Extract emails (handle both array and single email)
        let emails = business.business_emails || business.emails || [];
        
        // Ensure emails is an array
        if (typeof emails === 'string') {
          emails = [emails];
        }
        
        // If no emails found, skip this business
        if (!emails || emails.length === 0) {
          return; // Skip businesses without emails
        }
        
        // Create lead entry for each email
        emails.forEach(email => {
          if (email && email.trim()) {
            leads.push({
              business_name: businessName.trim(),
              email: email.trim(),
              // Optional: include additional data
              phone: business.business_phones?.[0] || business.phones?.[0] || '',
              website: business.full_url || business.website || '',
              city: business.city || '',
              state: business.state || ''
            });
          }
        });
        
      } catch (error) {
        console.warn(`⚠️  Error processing business at index ${index}:`, error.message);
      }
    });
    
    console.log(`✅ Extracted ${leads.length} leads from ${path.basename(filePath)}`);
    return leads;
    
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return [];
  }
}

/**
 * Convert leads array to CSV format
 * @param {Array} leads - Array of lead objects
 * @returns {string} CSV content
 */
function leadsToCSV(leads) {
  if (leads.length === 0) {
    return 'business_name,email,phone,website,city,state\n';
  }
  
  // CSV header
  const header = 'business_name,email,phone,website,city,state\n';
  
  // CSV rows
  const rows = leads.map(lead => {
    // Escape quotes and commas in CSV
    const escapeCsvField = (field) => {
      if (!field) return '';
      field = String(field);
      if (field.includes(',') || field.includes('"') || field.includes('\n')) {
        return `"${field.replace(/"/g, '""')}"`;
      }
      return field;
    };
    
    return [
      escapeCsvField(lead.business_name),
      escapeCsvField(lead.email),
      escapeCsvField(lead.phone),
      escapeCsvField(lead.website),
      escapeCsvField(lead.city),
      escapeCsvField(lead.state)
    ].join(',');
  }).join('\n');
  
  return header + rows;
}

/**
 * Main extraction function
 */
function extractAllLeads() {
  console.log('🚀 Starting lead extraction process...\n');
  
  try {
    // Get all JSON files in the leads directory
    const files = fs.readdirSync(LEADS_DIR)
      .filter(file => file.endsWith('.json'))
      .sort();
    
    if (files.length === 0) {
      console.log('❌ No JSON files found in leads directory');
      return;
    }
    
    console.log(`📁 Found ${files.length} JSON files to process\n`);
    
    let totalLeads = 0;
    const summary = [];
    
    files.forEach(filename => {
      const filePath = path.join(LEADS_DIR, filename);
      const vertical = path.basename(filename, '.json');
      
      // Extract leads from JSON file
      const leads = extractLeadsFromFile(filePath);
      
      if (leads.length > 0) {
        // Convert to CSV
        const csvContent = leadsToCSV(leads);
        
        // Write CSV file
        const csvFilename = `${vertical}-leads.csv`;
        const csvPath = path.join(OUTPUT_DIR, csvFilename);
        fs.writeFileSync(csvPath, csvContent, 'utf8');
        
        console.log(`💾 Saved: ${csvFilename} (${leads.length} leads)\n`);
        
        totalLeads += leads.length;
        summary.push({ vertical, count: leads.length, file: csvFilename });
      } else {
        console.log(`⚠️  No leads extracted from ${filename}\n`);
        summary.push({ vertical, count: 0, file: 'none' });
      }
    });
    
    // Create summary report
    console.log('📊 EXTRACTION SUMMARY:');
    console.log('='.repeat(50));
    summary.forEach(item => {
      const status = item.count > 0 ? '✅' : '❌';
      console.log(`${status} ${item.vertical.padEnd(20)} ${item.count.toString().padStart(5)} leads`);
    });
    console.log('='.repeat(50));
    console.log(`🎯 Total leads extracted: ${totalLeads}`);
    console.log(`📂 CSV files saved to: ${OUTPUT_DIR}`);
    
    // Create combined CSV with all leads
    if (totalLeads > 0) {
      console.log('\n📋 Creating combined CSV file...');
      const allLeads = [];
      
      files.forEach(filename => {
        const filePath = path.join(LEADS_DIR, filename);
        const vertical = path.basename(filename, '.json');
        const leads = extractLeadsFromFile(filePath);
        
        // Add vertical information to each lead
        leads.forEach(lead => {
          allLeads.push({
            ...lead,
            vertical: vertical
          });
        });
      });
      
      // Create combined CSV with vertical column
      const combinedHeader = 'business_name,email,phone,website,city,state,vertical\n';
      const combinedRows = allLeads.map(lead => {
        const escapeCsvField = (field) => {
          if (!field) return '';
          field = String(field);
          if (field.includes(',') || field.includes('"') || field.includes('\n')) {
            return `"${field.replace(/"/g, '""')}"`;
          }
          return field;
        };
        
        return [
          escapeCsvField(lead.business_name),
          escapeCsvField(lead.email),
          escapeCsvField(lead.phone),
          escapeCsvField(lead.website),
          escapeCsvField(lead.city),
          escapeCsvField(lead.state),
          escapeCsvField(lead.vertical)
        ].join(',');
      }).join('\n');
      
      const combinedCsv = combinedHeader + combinedRows;
      const combinedPath = path.join(OUTPUT_DIR, 'all-leads-combined.csv');
      fs.writeFileSync(combinedPath, combinedCsv, 'utf8');
      
      console.log(`💾 Saved: all-leads-combined.csv (${allLeads.length} total leads)`);
    }
    
    console.log('\n🎉 Lead extraction completed successfully!');
    
  } catch (error) {
    console.error('❌ Fatal error during extraction:', error.message);
    process.exit(1);
  }
}

// Run the extraction if this script is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  extractAllLeads();
}

export { extractAllLeads, extractLeadsFromFile, leadsToCSV };