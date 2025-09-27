#!/bin/bash

# Lead Extraction Script for Savant Universal Landing Page
# Extracts business names and emails from JSON leads to CSV format

echo "🚀 Extracting leads from JSON files..."
echo ""

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js to run this script."
    exit 1
fi

# Run the extraction script
node "$(dirname "$0")/extract-leads.js"

# Check if extraction was successful
if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Lead extraction completed!"
    echo "📂 Check the 'extracted-leads' folder for your CSV files"
    
    # Open the output directory if on macOS
    if [[ "$OSTYPE" == "darwin"* ]]; then
        echo "🔍 Opening extracted-leads folder..."
        open "$(dirname "$0")/../extracted-leads"
    fi
else
    echo "❌ Lead extraction failed. Check the error messages above."
    exit 1
fi