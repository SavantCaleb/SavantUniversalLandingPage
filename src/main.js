import Alpine from 'alpinejs';

// Make Alpine available globally
window.Alpine = Alpine;

// Vertical data for all 25 verticals
const verticalData = {
  'personal-injury': {
    brand: 'LegalCallAI',
    headline: 'Never Miss Another High-Value Case Again',
    subheading: 'Our AI voice assistant handles after-hours calls, qualifies leads instantly, and captures case details while you sleep—turning missed calls into $25K+ cases.',
    features: [
      {
        icon: '⚡',
        title: '24/7 Emergency Intake',
        description: 'Captures accident details, injuries, and contact information from potential clients calling at 2 AM, weekends, or holidays when your staff isn\'t available.'
      },
      {
        icon: '🎯',
        title: 'Instant Case Qualification',
        description: 'Pre-screens calls using your criteria—accident type, injury severity, liability assessment—so you only spend time on cases worth pursuing.'
      },
      {
        icon: '📋',
        title: 'Detailed Case Documentation',
        description: 'Automatically generates comprehensive intake reports with caller information, accident details, and preliminary case assessment—delivered to your CRM within minutes.'
      }
    ],
    socialProof: 'Join 150+ personal injury firms already using AI to capture more cases and increase revenue by an average of $500K annually.',
    pricing: {
      headline: 'Simple, Transparent Pricing',
      subheading: 'Select the plan that fits your firm\'s size and call volume',
      tiers: [
        {
          name: 'Starter',
          price: '$79',
          features: [
            'Up to 200 calls/month',
            'Basic case qualification',
            'Email & SMS notifications',
            'Standard integrations',
            'Business hours support'
          ],
          description: 'Perfect for solo practitioners'
        },
        {
          name: 'Professional',
          price: '$149',
          featured: true,
          features: [
            'Up to 500 calls/month',
            'Advanced case scoring',
            'CRM integration',
            'Custom qualification logic',
            'Priority support',
            'Call analytics dashboard'
          ],
          description: 'Ideal for growing firms'
        },
        {
          name: 'Enterprise',
          price: '$299',
          features: [
            'Unlimited calls',
            'Multi-location support',
            'Custom AI training',
            'White-label option',
            'Dedicated account manager',
            'API access'
          ],
          description: 'For large firms & multiple offices'
        }
      ],
      guarantee: '14 day free trial • No setup fees • Cancel anytime'
    },
    emailCapture: {
      headline: 'You\'re Here Early!',
      message: 'We\'re putting the finishing touches on LegalCallAI and preparing for our launch next month.',
      benefits: [
        '50% off your first 3 months',
        'Free custom setup and training',
        'Direct line to our founding team'
      ],
      formFields: [
        { name: 'email', type: 'email', placeholder: 'Email address' },
        { name: 'firmName', type: 'text', placeholder: 'Law firm name' },
        { 
          name: 'firmSize', 
          type: 'select', 
          placeholder: 'Select firm size',
          options: [
            { value: 'solo', label: 'Solo' },
            { value: '2-5', label: '2-5 attorneys' },
            { value: '6-15', label: '6-15 attorneys' },
            { value: '16+', label: '16+ attorneys' }
          ]
        }
      ],
      privacy: 'We respect your privacy. Unsubscribe at any time. No spam, ever.'
    }
  },
  
  'hvac': {
    brand: 'HVACAssistAI',
    headline: 'Handle Peak Season Rush Without Adding Staff',
    subheading: 'Our AI handles emergency calls, schedules appointments, and qualifies jobs 24/7—so you never miss a $1,200 service call again, even during your busiest months.',
    features: [
      {
        icon: '❄️',
        title: 'Peak Season Call Management',
        description: 'Automatically handles the surge in emergency repair calls during heat waves and cold snaps when your phones are ringing non-stop and every call is urgent.'
      },
      {
        icon: '⚡',
        title: 'Emergency Response Triage',
        description: 'Intelligently prioritizes calls by urgency—elderly customers without heat, commercial buildings down, versus routine maintenance—routing critical issues directly to your emergency line.'
      },
      {
        icon: '📅',
        title: 'Smart Appointment Scheduling',
        description: 'Automatically books appointments based on your availability, service type, and location—preventing the back-and-forth that loses customers to faster competitors.'
      }
    ],
    socialProof: 'Trusted by 200+ HVAC contractors who\'ve reduced missed calls by 95% and increased booking rates by 60% during peak season.',
    pricing: {
      headline: 'Plans That Scale With Your Business',
      subheading: 'From solo contractors to multi-truck operations',
      tiers: [
        {
          name: 'Solo Pro',
          price: '$79',
          features: [
            'Up to 300 calls/month',
            'Emergency call screening',
            'Basic appointment booking',
            'SMS notifications',
            'Simple CRM integration'
          ],
          description: 'Perfect for 1-2 truck operations'
        },
        {
          name: 'Growth',
          price: '$149',
          featured: true,
          features: [
            'Up to 800 calls/month',
            'Advanced emergency triage',
            'Multi-tech scheduling',
            'Customer follow-up automation',
            'ServiceTitan integration',
            'Call analytics & reporting'
          ],
          description: 'Ideal for growing companies (3-10 trucks)'
        },
        {
          name: 'Enterprise',
          price: '$299',
          features: [
            'Unlimited calls',
            'Multi-location support',
            'Custom call flows',
            'Priority emergency routing',
            'White-label option',
            'Dedicated success manager'
          ],
          description: 'For large contractors (10+ trucks)'
        }
      ],
      guarantee: '14 day free trial • No setup fees • Cancel anytime'
    },
    emailCapture: {
      headline: 'You\'re Here Early!',
      message: 'We\'re putting the finishing touches on HVACAssistAI and preparing for our launch next month.',
      benefits: [
        '50% off your first 3 months',
        'Free custom setup and training',
        'Direct line to our founding team'
      ],
      formFields: [
        { name: 'email', type: 'email', placeholder: 'Business email' },
        { name: 'companyName', type: 'text', placeholder: 'Company name' },
        { 
          name: 'companySize', 
          type: 'select', 
          placeholder: 'Company size',
          options: [
            { value: 'solo', label: 'Solo' },
            { value: '2-5', label: '2-5 trucks' },
            { value: '6-15', label: '6-15 trucks' },
            { value: '16+', label: '16+ trucks' }
          ]
        },
        {
          name: 'primaryService',
          type: 'select',
          placeholder: 'Primary service',
          options: [
            { value: 'residential', label: 'Residential' },
            { value: 'commercial', label: 'Commercial' },
            { value: 'both', label: 'Both' },
            { value: 'specialty', label: 'Specialty' }
          ]
        }
      ],
      privacy: 'We respect your privacy. Unsubscribe at any time. No spam, ever.'
    }
  },

  'plumbing': {
    brand: 'PlumbingCallAI',
    headline: 'Never Miss Another Emergency Plumbing Call',
    subheading: 'Our AI handles urgent calls 24/7, dispatches your on-call plumber instantly, and captures every $800+ emergency job—even at 3 AM on weekends.',
    features: [
      {
        icon: '🚨',
        title: '24/7 Emergency Dispatch',
        description: 'Instantly identifies burst pipes, flooding, and sewer backups, immediately connecting customers with your on-call plumber while capturing job details.'
      },
      {
        icon: '💧',
        title: 'Smart Urgency Assessment',
        description: 'Distinguishes between true emergencies requiring immediate response and jobs that can wait until morning, optimizing your after-hours costs.'
      },
      {
        icon: '📱',
        title: 'Real-Time Tech Notification',
        description: 'Automatically texts your on-call plumber with customer details, location, problem type, and access instructions—no missed connections.'
      }
    ],
    socialProof: 'Used by 180+ plumbing companies to capture 40% more emergency calls and reduce response time by half.',
    pricing: {
      headline: 'Emergency-Ready Pricing Plans',
      subheading: 'Choose the coverage that protects your revenue',
      tiers: [
        {
          name: 'Essential',
          price: '$79',
          features: [
            'Up to 400 calls/month',
            'Basic emergency screening',
            'On-call tech notification',
            'Simple scheduling',
            'SMS alerts'
          ],
          description: 'Perfect for smaller operations'
        },
        {
          name: 'Professional',
          price: '$149',
          featured: true,
          features: [
            'Up to 800 calls/month',
            'Advanced emergency triage',
            'Multi-tech dispatch',
            'Customer follow-up',
            'ServiceTitan/Housecall Pro integration',
            'Detailed reporting'
          ],
          description: 'Ideal for established companies'
        },
        {
          name: 'Enterprise',
          price: '$299',
          features: [
            'Unlimited calls',
            'Multi-location dispatch',
            'Custom emergency protocols',
            'Priority routing',
            'White-label solution',
            'Dedicated account manager'
          ],
          description: 'For large plumbing contractors'
        }
      ],
      guarantee: '14 day free trial • No setup fees • Cancel anytime'
    },
    emailCapture: {
      headline: 'You\'re Here Early!',
      message: 'We\'re putting the finishing touches on PlumbCallAI and preparing for our launch next month.',
      benefits: [
        '50% off your first 3 months',
        'Free custom setup and training',
        'Direct line to our founding team'
      ],
      formFields: [
        { name: 'email', type: 'email', placeholder: 'Email address' },
        { name: 'companyName', type: 'text', placeholder: 'Company name' },
        { 
          name: 'companySize', 
          type: 'select', 
          placeholder: 'Number of plumbers',
          options: [
            { value: 'solo', label: 'Solo' },
            { value: '2-5', label: '2-5 plumbers' },
            { value: '6-15', label: '6-15 plumbers' },
            { value: '16+', label: '16+ plumbers' }
          ]
        },
        {
          name: 'serviceArea',
          type: 'select',
          placeholder: 'Service area coverage',
          options: [
            { value: 'local', label: 'Local' },
            { value: 'regional', label: 'Regional' },
            { value: 'multi-city', label: 'Multi-city' }
          ]
        }
      ],
      privacy: 'We respect your privacy. Unsubscribe at any time. No spam, ever.'
    }
  },

  'real-estate': {
    brand: 'RealtyCallAI',
    headline: 'Convert More Leads While You Sleep',
    subheading: 'Our AI captures buyer inquiries 24/7, qualifies prospects instantly, and books showing appointments—so you never lose a $12K commission to a faster agent again.',
    features: [
      {
        icon: '🏠',
        title: 'Instant Lead Qualification',
        description: 'Pre-qualifies prospects by budget, timeline, and mortgage pre-approval status within the first 60 seconds of their call.'
      },
      {
        icon: '📅',
        title: 'Smart Showing Coordination',
        description: 'Automatically schedules property showings based on your availability and property access, sending confirmations to both parties.'
      },
      {
        icon: '🚀',
        title: 'Speed-to-Lead Champion',
        description: 'Responds to all inquiries within 30 seconds, giving you the critical first-mover advantage in today\'s competitive market.'
      }
    ],
    socialProof: '350+ real estate professionals using AI to increase conversion rates by 45% and close 3+ additional deals per month.',
    pricing: {
      headline: 'Plans Built for Real Estate Success',
      subheading: 'Scale your lead response without adding staff',
      tiers: [
        {
          name: 'Solo Agent',
          price: '$79',
          features: [
            'Up to 500 inquiries/month',
            'Basic lead qualification',
            'Showing scheduling',
            'CRM integration',
            'Mobile notifications'
          ],
          description: 'Perfect for individual agents'
        },
        {
          name: 'Team Leader',
          price: '$149',
          featured: true,
          features: [
            'Up to 1,200 inquiries/month',
            'Advanced buyer/seller qualification',
            'Multi-agent scheduling',
            'Lead distribution',
            'Detailed analytics',
            'Follow-up automation'
          ],
          description: 'Ideal for agent teams (3-8 agents)'
        },
        {
          name: 'Brokerage',
          price: '$299',
          features: [
            'Unlimited inquiries',
            'Multi-office support',
            'Custom qualification criteria',
            'White-label option',
            'API integrations',
            'Dedicated success manager'
          ],
          description: 'For brokerages (10+ agents)'
        }
      ],
      guarantee: '14 day free trial • No setup fees • Cancel anytime'
    },
    emailCapture: {
      headline: 'You\'re Here Early!',
      message: 'We\'re putting the finishing touches on RealtyCallAI and preparing for our launch next month.',
      benefits: [
        '50% off your first 3 months',
        'Free custom setup and training',
        'Direct line to our founding team'
      ],
      formFields: [
        { name: 'email', type: 'email', placeholder: 'Email address' },
        { name: 'brokerageName', type: 'text', placeholder: 'Brokerage/team name' },
        { 
          name: 'numberOfAgents', 
          type: 'select', 
          placeholder: 'Number of agents',
          options: [
            { value: 'solo', label: 'Solo agent' },
            { value: '2-5', label: '2-5 agents' },
            { value: '6-15', label: '6-15 agents' },
            { value: '16+', label: '16+ agents' }
          ]
        },
        {
          name: 'marketFocus',
          type: 'select',
          placeholder: 'Primary market focus',
          options: [
            { value: 'residential', label: 'Residential' },
            { value: 'commercial', label: 'Commercial' },
            { value: 'luxury', label: 'Luxury' },
            { value: 'first-time', label: 'First-time buyers' }
          ]
        }
      ],
      privacy: 'We respect your privacy. Unsubscribe at any time. No spam, ever.'
    }
  },

  'electrical': {
    brand: 'ElectricCallAI',
    headline: 'Never Miss Another Safety-Critical Emergency',
    subheading: 'Our AI handles electrical emergency calls 24/7, assesses danger levels instantly, and dispatches your electricians to high-priority jobs—protecting lives and capturing every $1,100+ service call.',
    features: [
      {
        icon: '⚡',
        title: 'Safety-First Call Screening',
        description: 'Immediately identifies electrical hazards like sparking outlets, burning smells, or power outages, prioritizing dangerous situations for instant response.'
      },
      {
        icon: '🚨',
        title: 'Emergency Priority Routing',
        description: 'Automatically escalates life-threatening electrical issues to your emergency line while scheduling routine work for normal business hours.'
      },
      {
        icon: '📋',
        title: 'Code Compliance Documentation',
        description: 'Captures detailed information about electrical problems and building codes to help your techs arrive fully prepared with the right permits and materials.'
      }
    ],
    socialProof: 'Trusted by 160+ electrical contractors to reduce emergency response time by 65% and capture 35% more after-hours revenue.',
    pricing: {
      headline: 'Electrical Emergency Coverage Plans',
      subheading: 'Protect your customers and your revenue 24/7',
      tiers: [
        {
          name: 'Residential',
          price: '$79',
          features: [
            'Up to 400 calls/month',
            'Basic emergency screening',
            'Safety assessment protocols',
            'Scheduling automation',
            'Tech dispatch notifications'
          ],
          description: 'Perfect for residential electricians'
        },
        {
          name: 'Commercial',
          price: '$149',
          featured: true,
          features: [
            'Up to 800 calls/month',
            'Advanced safety triage',
            'Multi-tech coordination',
            'Code compliance tracking',
            'ServiceTitan integration',
            'Emergency escalation protocols'
          ],
          description: 'Ideal for commercial electrical contractors'
        },
        {
          name: 'Enterprise',
          price: '$299',
          features: [
            'Unlimited calls',
            'Multi-location support',
            'Custom safety protocols',
            'Priority emergency routing',
            'Industrial compliance tracking',
            'Dedicated account manager'
          ],
          description: 'For large electrical contractors'
        }
      ],
      guarantee: '14 day free trial • No setup fees • Cancel anytime'
    },
    emailCapture: {
      headline: 'You\'re Here Early!',
      message: 'We\'re putting the finishing touches on ElectricCallAI and preparing for our launch next month.',
      benefits: [
        '50% off your first 3 months',
        'Free custom setup and training',
        'Direct line to our founding team'
      ],
      formFields: [
        { name: 'email', type: 'email', placeholder: 'Email address' },
        { name: 'companyName', type: 'text', placeholder: 'Company name' },
        { 
          name: 'serviceFocus', 
          type: 'select', 
          placeholder: 'Service focus',
          options: [
            { value: 'residential', label: 'Residential' },
            { value: 'commercial', label: 'Commercial' },
            { value: 'industrial', label: 'Industrial' }
          ]
        },
        {
          name: 'numberOfElectricians',
          type: 'select',
          placeholder: 'Number of licensed electricians',
          options: [
            { value: 'solo', label: 'Solo' },
            { value: '2-5', label: '2-5 electricians' },
            { value: '6-15', label: '6-15 electricians' },
            { value: '16+', label: '16+ electricians' }
          ]
        }
      ],
      privacy: 'We respect your privacy. Unsubscribe at any time. No spam, ever.'
    }
  },

  'insurance': {
    brand: 'InsureCallAI',
    headline: 'Win More Quotes By Responding Faster',
    subheading: 'Our AI captures insurance inquiries instantly, qualifies prospects by coverage type, and delivers warm leads to your agents—helping you win more quotes in today\'s speed-obsessed market.',
    features: [
      {
        icon: '🏃',
        title: 'Lightning-Fast Quote Response',
        description: 'Responds to insurance inquiries within 15 seconds, gathering essential information while prospects are still motivated to buy.'
      },
      {
        icon: '🎯',
        title: 'Smart Coverage Qualification',
        description: 'Pre-qualifies prospects by insurance type, coverage needs, and budget range, so your agents focus on serious buyers only.'
      },
      {
        icon: '📊',
        title: 'Competitive Analysis Integration',
        description: 'Captures what competitors quoted and identifies opportunities to win business with better rates or coverage options.'
      }
    ],
    socialProof: 'Used by 225+ insurance agencies to increase quote conversion rates by 38% and close 25+ additional policies per month.',
    pricing: {
      headline: 'Insurance Success Plans',
      subheading: 'Convert more quotes into policies',
      tiers: [
        {
          name: 'Independent Agent',
          price: '$79',
          features: [
            'Up to 600 inquiries/month',
            'Basic qualification',
            'Quote tracking',
            'CRM integration',
            'Lead follow-up automation'
          ],
          description: 'Perfect for independent agents'
        },
        {
          name: 'Agency Team',
          price: '$149',
          featured: true,
          features: [
            'Up to 1,500 inquiries/month',
            'Advanced qualification logic',
            'Multi-agent distribution',
            'Competitive analysis',
            'Policy renewal tracking',
            'Detailed conversion analytics'
          ],
          description: 'Ideal for agency teams (3-10 agents)'
        },
        {
          name: 'Multi-Location',
          price: '$299',
          features: [
            'Unlimited inquiries',
            'Multi-office coordination',
            'Custom qualification workflows',
            'White-label solution',
            'API integrations',
            'Dedicated success manager'
          ],
          description: 'For large agencies & brokerages'
        }
      ],
      guarantee: '14 day free trial • No setup fees • Cancel anytime'
    },
    emailCapture: {
      headline: 'You\'re Here Early!',
      message: 'We\'re putting the finishing touches on InsureCallAI and preparing for our launch next month.',
      benefits: [
        '50% off your first 3 months',
        'Free custom setup and training',
        'Direct line to our founding team'
      ],
      formFields: [
        { name: 'email', type: 'email', placeholder: 'Email address' },
        { name: 'agencyName', type: 'text', placeholder: 'Agency name' },
        { 
          name: 'insuranceTypes', 
          type: 'select', 
          placeholder: 'Primary insurance types',
          options: [
            { value: 'auto-home', label: 'Auto & Home' },
            { value: 'commercial', label: 'Commercial' },
            { value: 'life-health', label: 'Life & Health' },
            { value: 'specialty', label: 'Specialty' }
          ]
        },
        {
          name: 'numberOfAgents',
          type: 'select',
          placeholder: 'Number of agents',
          options: [
            { value: 'solo', label: 'Solo agent' },
            { value: '2-5', label: '2-5 agents' },
            { value: '6-15', label: '6-15 agents' },
            { value: '16+', label: '16+ agents' }
          ]
        }
      ],
      privacy: 'We respect your privacy. Unsubscribe at any time. No spam, ever.'
    }
  },

  'dental': {
    brand: 'DentalCallAI',
    headline: 'Fill Your Schedule With New Patients',
    subheading: 'Our AI handles appointment calls 24/7, qualifies new patients by insurance and treatment needs, and fills last-minute cancellations—maximizing your $2,000 new patient lifetime value.',
    features: [
      {
        icon: '🦷',
        title: 'New Patient Screening',
        description: 'Pre-qualifies callers by insurance acceptance, treatment urgency, and budget to ensure good patient-practice fit before booking.'
      },
      {
        icon: '📅',
        title: 'Smart Scheduling Optimization',
        description: 'Automatically fills cancelled appointments and schedules new patients during optimal time slots to maximize practice revenue.'
      },
      {
        icon: '💳',
        title: 'Insurance Verification',
        description: 'Instantly verifies insurance benefits and explains coverage to patients, reducing appointment no-shows and payment issues.'
      }
    ],
    socialProof: 'Helping 140+ dental practices increase new patient bookings by 42% and reduce scheduling gaps by 60%.',
    pricing: {
      headline: 'Dental Practice Growth Plans',
      subheading: 'Keep your schedule full and profitable',
      tiers: [
        {
          name: 'Solo Practice',
          price: '$79',
          features: [
            'Up to 400 calls/month',
            'Basic patient screening',
            'Appointment scheduling',
            'Insurance verification',
            'Cancellation management'
          ],
          description: 'Perfect for single-doctor practices'
        },
        {
          name: 'Group Practice',
          price: '$149',
          featured: true,
          features: [
            'Up to 800 calls/month',
            'Advanced patient qualification',
            'Multi-doctor scheduling',
            'Treatment plan follow-up',
            'Recall automation',
            'Practice analytics'
          ],
          description: 'Ideal for multi-doctor practices'
        },
        {
          name: 'DSO/Multi-Location',
          price: '$299',
          features: [
            'Unlimited calls',
            'Multi-location scheduling',
            'Custom screening workflows',
            'Centralized patient routing',
            'White-label solution',
            'Dedicated account manager'
          ],
          description: 'For dental service organizations'
        }
      ],
      guarantee: '14 day free trial • No setup fees • Cancel anytime'
    },
    emailCapture: {
      headline: 'You\'re Here Early!',
      message: 'We\'re putting the finishing touches on DentalCallAI and preparing for our launch next month.',
      benefits: [
        '50% off your first 3 months',
        'Free custom setup and training',
        'Direct line to our founding team'
      ],
      formFields: [
        { name: 'email', type: 'email', placeholder: 'Email address' },
        { name: 'practiceName', type: 'text', placeholder: 'Practice name' },
        { 
          name: 'numberOfDentists', 
          type: 'select', 
          placeholder: 'Number of dentists',
          options: [
            { value: 'solo', label: 'Solo dentist' },
            { value: '2-3', label: '2-3 dentists' },
            { value: '4-8', label: '4-8 dentists' },
            { value: '9+', label: '9+ dentists' }
          ]
        },
        {
          name: 'practiceManagementSoftware',
          type: 'select',
          placeholder: 'Practice management software',
          options: [
            { value: 'dentrix', label: 'Dentrix' },
            { value: 'eaglesoft', label: 'Eaglesoft' },
            { value: 'open-dental', label: 'Open Dental' },
            { value: 'other', label: 'Other' }
          ]
        }
      ],
      privacy: 'We respect your privacy. Unsubscribe at any time. No spam, ever.'
    }
  },

  'auto-repair': {
    brand: 'AutoCallAI',
    headline: 'Never Miss Another Breakdown Emergency',
    subheading: 'Our AI handles automotive emergency calls 24/7, schedules urgent repairs instantly, and captures towing referrals—so you never lose an $800+ repair job to competitors again.',
    features: [
      {
        icon: '🚗',
        title: 'Emergency Breakdown Response',
        description: 'Immediately identifies stranded motorists, coordinates towing services, and schedules repair appointments while customers are stressed and need help most.'
      },
      {
        icon: '🔧',
        title: 'Smart Service Scheduling',
        description: 'Automatically books appointments based on repair type, parts availability, and bay capacity—optimizing your shop\'s workflow and revenue.'
      },
      {
        icon: '📋',
        title: 'Detailed Problem Documentation',
        description: 'Captures comprehensive vehicle information, symptoms, and customer concerns to help your technicians diagnose issues faster and more accurately.'
      }
    ],
    socialProof: 'Used by 175+ auto repair shops to increase emergency response bookings by 50% and reduce appointment scheduling time by 70%.',
    pricing: {
      headline: 'Auto Repair Coverage Plans',
      subheading: 'Keep your bays full and customers happy',
      tiers: [
        {
          name: 'Independent Shop',
          price: '$79',
          features: [
            'Up to 300 calls/month',
            'Basic emergency response',
            'Simple appointment booking',
            'Customer follow-up',
            'Basic reporting'
          ],
          description: 'Perfect for single-location shops'
        },
        {
          name: 'Multi-Bay Shop',
          price: '$149',
          featured: true,
          features: [
            'Up to 700 calls/month',
            'Advanced scheduling optimization',
            'Parts availability integration',
            'Towing coordination',
            'Customer communication automation',
            'Detailed analytics'
          ],
          description: 'Ideal for busy repair shops'
        },
        {
          name: 'Chain/Franchise',
          price: '$299',
          features: [
            'Unlimited calls',
            'Multi-location support',
            'Custom workflows',
            'Brand-specific protocols',
            'API integrations',
            'Dedicated support manager'
          ],
          description: 'For automotive chains & franchises'
        }
      ],
      guarantee: '14 day free trial • No setup fees • Cancel anytime'
    },
    emailCapture: {
      headline: 'You\'re Here Early!',
      message: 'We\'re putting the finishing touches on AutoCallAI and preparing for our launch next month.',
      benefits: [
        '50% off your first 3 months',
        'Free custom setup and training',
        'Direct line to our founding team'
      ],
      formFields: [
        { name: 'email', type: 'email', placeholder: 'Email address' },
        { name: 'shopName', type: 'text', placeholder: 'Shop name' },
        { 
          name: 'numberOfBays', 
          type: 'select', 
          placeholder: 'Number of service bays',
          options: [
            { value: '1-2', label: '1-2 bays' },
            { value: '3-5', label: '3-5 bays' },
            { value: '6-10', label: '6-10 bays' },
            { value: '11+', label: '11+ bays' }
          ]
        },
        {
          name: 'shopManagementSystem',
          type: 'select',
          placeholder: 'Shop management system',
          options: [
            { value: 'mitchell', label: 'Mitchell' },
            { value: 'alldata', label: 'AllData' },
            { value: 'tekmetric', label: 'Tekmetric' },
            { value: 'other', label: 'Other' }
          ]
        }
      ],
      privacy: 'We respect your privacy. Unsubscribe at any time. No spam, ever.'
    }
  },

  'pest-control': {
    brand: 'PestCallAI',
    headline: 'Capture Every Emergency Infestation Call',
    subheading: 'Our AI handles urgent pest emergencies 24/7, assesses infestation severity, and schedules immediate treatments—so you never miss a $1,500+ emergency job again.',
    features: [
      {
        icon: '🐛',
        title: 'Emergency Infestation Triage',
        description: 'Instantly identifies urgent pest problems like bed bugs, wasp nests, or rodent infestations that require immediate professional attention.'
      },
      {
        icon: '📅',
        title: 'Smart Treatment Scheduling',
        description: 'Automatically books follow-up treatments and seasonal services based on pest type and treatment protocols, maximizing customer lifetime value.'
      },
      {
        icon: '🗺️',
        title: 'Geographic Coverage Optimization',
        description: 'Routes emergency calls to your nearest available technician and schedules regular service calls efficiently by geographic area.'
      }
    ],
    socialProof: 'Trusted by 120+ pest control companies to increase emergency response bookings by 65% and improve customer retention by 40%.',
    pricing: {
      headline: 'Pest Control Service Plans',
      subheading: 'Protect more homes and businesses',
      tiers: [
        {
          name: 'Residential Focus',
          price: '$79',
          features: [
            'Up to 400 calls/month',
            'Basic pest identification',
            'Emergency scheduling',
            'Follow-up automation',
            'Customer reminders'
          ],
          description: 'Perfect for residential pest control'
        },
        {
          name: 'Commercial Plus',
          price: '$149',
          featured: true,
          features: [
            'Up to 800 calls/month',
            'Advanced pest assessment',
            'Multi-tech coordination',
            'Commercial contract management',
            'Seasonal service scheduling',
            'Detailed route optimization'
          ],
          description: 'Ideal for commercial pest control'
        },
        {
          name: 'Multi-Location',
          price: '$299',
          features: [
            'Unlimited calls',
            'Multi-office coordination',
            'Custom treatment protocols',
            'Franchise management tools',
            'White-label solution',
            'Dedicated account manager'
          ],
          description: 'For pest control franchises'
        }
      ],
      guarantee: '14 day free trial • No setup fees • Cancel anytime'
    },
    emailCapture: {
      headline: 'You\'re Here Early!',
      message: 'We\'re putting the finishing touches on PestCallAI and preparing for our launch next month.',
      benefits: [
        '50% off your first 3 months',
        'Free custom setup and training',
        'Direct line to our founding team'
      ],
      formFields: [
        { name: 'email', type: 'email', placeholder: 'Email address' },
        { name: 'companyName', type: 'text', placeholder: 'Company name' },
        { 
          name: 'serviceTypes', 
          type: 'select', 
          placeholder: 'Service types',
          options: [
            { value: 'residential', label: 'Residential' },
            { value: 'commercial', label: 'Commercial' },
            { value: 'both', label: 'Both' }
          ]
        },
        {
          name: 'coverageArea',
          type: 'select',
          placeholder: 'Coverage area',
          options: [
            { value: 'local', label: 'Local' },
            { value: 'regional', label: 'Regional' },
            { value: 'multi-state', label: 'Multi-state' }
          ]
        }
      ],
      privacy: 'We respect your privacy. Unsubscribe at any time. No spam, ever.'
    }
  },

  'veterinary': {
    brand: 'VetCallAI',
    headline: 'Handle Pet Emergencies With Compassion',
    subheading: 'Our AI manages emotional pet emergency calls 24/7, assesses medical urgency with empathy, and schedules urgent appointments—so worried pet parents always reach caring help.',
    features: [
      {
        icon: '❤️',
        title: 'Compassionate Emergency Triage',
        description: 'Uses empathetic language to calm worried pet owners while quickly assessing symptoms to determine if immediate veterinary care is needed.'
      },
      {
        icon: '⏰',
        title: 'Urgent Appointment Coordination',
        description: 'Automatically prioritizes and schedules emergency appointments while managing routine wellness visits and follow-up care efficiently.'
      },
      {
        icon: '📋',
        title: 'Detailed Medical History Capture',
        description: 'Gathers comprehensive pet health information, current symptoms, and medical history to help veterinarians prepare for appointments and provide better care.'
      }
    ],
    socialProof: 'Supporting 95+ veterinary clinics to improve emergency response times by 55% while maintaining the compassionate care pet families expect.',
    pricing: {
      headline: 'Veterinary Care Plans',
      subheading: 'Provide better care for more pets',
      tiers: [
        {
          name: 'Small Clinic',
          price: '$79',
          features: [
            'Up to 500 calls/month',
            'Basic emergency assessment',
            'Appointment scheduling',
            'Pet medical history capture',
            'Owner communication'
          ],
          description: 'Perfect for single-doctor clinics'
        },
        {
          name: 'Multi-Vet Practice',
          price: '$149',
          featured: true,
          features: [
            'Up to 1,000 calls/month',
            'Advanced triage protocols',
            'Multi-doctor scheduling',
            'Emergency prioritization',
            'Follow-up care coordination',
            'Practice analytics'
          ],
          description: 'Ideal for multi-veterinarian practices'
        },
        {
          name: 'Emergency/Specialty',
          price: '$299',
          features: [
            'Unlimited calls',
            '24/7 emergency protocols',
            'Specialty referral coordination',
            'Multi-location support',
            'Custom medical workflows',
            'Dedicated veterinary consultant'
          ],
          description: 'For emergency & specialty clinics'
        }
      ],
      guarantee: '14 day free trial • No setup fees • Cancel anytime'
    },
    emailCapture: {
      headline: 'You\'re Here Early!',
      message: 'We\'re putting the finishing touches on VetCallAI and preparing for our launch next month.',
      benefits: [
        '50% off your first 3 months',
        'Free custom setup and training',
        'Direct line to our founding team'
      ],
      formFields: [
        { name: 'email', type: 'email', placeholder: 'Email address' },
        { name: 'clinicName', type: 'text', placeholder: 'Clinic name' },
        { 
          name: 'practiceType', 
          type: 'select', 
          placeholder: 'Practice type',
          options: [
            { value: 'general', label: 'General' },
            { value: 'emergency', label: 'Emergency' },
            { value: 'specialty', label: 'Specialty' }
          ]
        },
        {
          name: 'practiceManagementSoftware',
          type: 'select',
          placeholder: 'Practice management software',
          options: [
            { value: 'cornerstone', label: 'Cornerstone' },
            { value: 'ezyvet', label: 'ezyVet' },
            { value: 'avimark', label: 'Avimark' },
            { value: 'other', label: 'Other' }
          ]
        }
      ],
      privacy: 'We respect your privacy. Unsubscribe at any time. No spam, ever.'
    }
  },

  'property-management': {
    brand: 'PropertyCallAI',
    headline: 'Handle Tenant Emergencies Around The Clock',
    subheading: 'Our AI manages urgent tenant calls 24/7, prioritizes maintenance requests by severity, and dispatches repair crews instantly—so you never lose tenants over slow emergency response.',
    features: [
      {
        icon: '🏠',
        title: 'Smart Emergency Triage',
        description: 'Instantly distinguishes between true emergencies (flooding, no heat, security issues) and routine maintenance requests, ensuring proper response prioritization.'
      },
      {
        icon: '🔧',
        title: 'Automated Work Order Creation',
        description: 'Generates detailed work orders with tenant contact info, unit details, and problem descriptions, automatically routing to appropriate maintenance staff.'
      },
      {
        icon: '📱',
        title: 'Real-Time Tenant Communication',
        description: 'Keeps tenants informed about repair status and arrival times, reducing follow-up calls and improving tenant satisfaction scores.'
      }
    ],
    socialProof: 'Used by 85+ property management companies to reduce tenant emergency response time by 60% and decrease maintenance-related move-outs by 35%.',
    pricing: {
      headline: 'Property Management Plans',
      subheading: 'Keep tenants happy and properties profitable',
      tiers: [
        {
          name: 'Small Portfolio',
          price: '$79',
          features: [
            'Up to 200 units coverage',
            'Basic emergency screening',
            'Work order generation',
            'Tenant notifications',
            'Simple reporting'
          ],
          description: 'Perfect for 50-200 unit portfolios'
        },
        {
          name: 'Growing Portfolio',
          price: '$149',
          featured: true,
          features: [
            'Up to 500 units coverage',
            'Advanced priority routing',
            'Multi-vendor coordination',
            'Tenant satisfaction tracking',
            'Property management software integration',
            'Detailed analytics'
          ],
          description: 'Ideal for 200-500 unit portfolios'
        },
        {
          name: 'Enterprise Portfolio',
          price: '$299',
          features: [
            'Unlimited units coverage',
            'Multi-property coordination',
            'Custom emergency protocols',
            'White-label tenant communication',
            'API integrations',
            'Dedicated account manager'
          ],
          description: 'For large property management companies'
        }
      ],
      guarantee: '14 day free trial • No setup fees • Cancel anytime'
    },
    emailCapture: {
      headline: 'You\'re Here Early!',
      message: 'We\'re putting the finishing touches on PropertyCallAI and preparing for our launch next month.',
      benefits: [
        '50% off your first 3 months',
        'Free custom setup and training',
        'Direct line to our founding team'
      ],
      formFields: [
        { name: 'email', type: 'email', placeholder: 'Email address' },
        { name: 'companyName', type: 'text', placeholder: 'Company name' },
        { 
          name: 'unitsManaged', 
          type: 'select', 
          placeholder: 'Number of units managed',
          options: [
            { value: '50-200', label: '50-200 units' },
            { value: '200-500', label: '200-500 units' },
            { value: '500-1000', label: '500-1000 units' },
            { value: '1000+', label: '1000+ units' }
          ]
        },
        {
          name: 'propertyManagementSoftware',
          type: 'select',
          placeholder: 'Property management software',
          options: [
            { value: 'yardi', label: 'Yardi' },
            { value: 'rentmanager', label: 'RentManager' },
            { value: 'appfolio', label: 'AppFolio' },
            { value: 'other', label: 'Other' }
          ]
        }
      ],
      privacy: 'We respect your privacy. Unsubscribe at any time. No spam, ever.'
    }
  },

  'lawn-care': {
    brand: 'LawnCallAI',
    headline: 'Never Miss Spring Rush Bookings Again',
    subheading: 'Our AI handles seasonal call spikes 24/7, schedules lawn treatments automatically, and manages recurring services—so you capture every $200+ job during peak season without adding office staff.',
    features: [
      {
        icon: '🌱',
        title: 'Seasonal Surge Management',
        description: 'Automatically handles the massive influx of spring cleanup and treatment calls when your phone rings non-stop from March through May.'
      },
      {
        icon: '📅',
        title: 'Smart Route Scheduling',
        description: 'Books new services based on geographic efficiency and existing route optimization, maximizing daily revenue per truck.'
      },
      {
        icon: '🔄',
        title: 'Recurring Service Automation',
        description: 'Automatically schedules weekly mowing, monthly treatments, and seasonal services, building predictable recurring revenue streams.'
      }
    ],
    socialProof: 'Helping 110+ lawn care companies capture 45% more spring bookings and increase recurring service retention by 55%.',
    pricing: {
      headline: 'Lawn Care Growth Plans',
      subheading: 'Grow your business without growing your overhead',
      tiers: [
        {
          name: 'Solo Crew',
          price: '$79',
          features: [
            'Up to 300 calls/month',
            'Basic service scheduling',
            'Customer reminders',
            'Simple route planning',
            'Mobile notifications'
          ],
          description: 'Perfect for single-crew operations'
        },
        {
          name: 'Multi-Crew',
          price: '$149',
          featured: true,
          features: [
            'Up to 700 calls/month',
            'Advanced route optimization',
            'Multi-crew scheduling',
            'Seasonal service management',
            'Customer follow-up automation',
            'Growth analytics'
          ],
          description: 'Ideal for 2-5 crew operations'
        },
        {
          name: 'Franchise/Large',
          price: '$299',
          features: [
            'Unlimited calls',
            'Multi-location coordination',
            'Custom service workflows',
            'Franchise management tools',
            'White-label solution',
            'Dedicated success manager'
          ],
          description: 'For large landscaping companies'
        }
      ],
      guarantee: '14 day free trial • No setup fees • Cancel anytime'
    },
    emailCapture: {
      headline: 'You\'re Here Early!',
      message: 'We\'re putting the finishing touches on LawnCallAI and preparing for our launch next month.',
      benefits: [
        '50% off your first 3 months',
        'Free custom setup and training',
        'Direct line to our founding team'
      ],
      formFields: [
        { name: 'email', type: 'email', placeholder: 'Email address' },
        { name: 'businessName', type: 'text', placeholder: 'Business name' },
        { 
          name: 'numberOfCrews', 
          type: 'select', 
          placeholder: 'Number of crews/trucks',
          options: [
            { value: 'solo', label: 'Solo crew' },
            { value: '2-3', label: '2-3 crews' },
            { value: '4-8', label: '4-8 crews' },
            { value: '9+', label: '9+ crews' }
          ]
        },
        {
          name: 'primaryServices',
          type: 'select',
          placeholder: 'Primary services',
          options: [
            { value: 'mowing', label: 'Mowing' },
            { value: 'treatments', label: 'Treatments' },
            { value: 'landscaping', label: 'Landscaping' },
            { value: 'all', label: 'All services' }
          ]
        }
      ],
      privacy: 'We respect your privacy. Unsubscribe at any time. No spam, ever.'
    }
  },

  'mortgage-broker': {
    brand: 'MortgageCallAI',
    headline: 'Close More Loans By Responding Instantly',
    subheading: 'Our AI captures mortgage inquiries 24/7, pre-qualifies borrowers immediately, and delivers hot leads to your desk—so you never lose a $6K commission to faster competitors again.',
    features: [
      {
        icon: '⚡',
        title: 'Lightning-Fast Rate Quotes',
        description: 'Provides preliminary rate estimates and payment calculations within 60 seconds, keeping prospects engaged while they\'re actively shopping.'
      },
      {
        icon: '📊',
        title: 'Instant Pre-Qualification',
        description: 'Gathers income, credit score, and down payment information to determine loan eligibility before competitors even call back.'
      },
      {
        icon: '🏃',
        title: 'Speed-to-Lead Victory',
        description: 'Responds to all inquiries within 30 seconds, giving you the critical first-mover advantage in today\'s rate-sensitive market.'
      }
    ],
    socialProof: 'Trusted by 180+ mortgage professionals to increase loan application conversions by 52% and close 8+ additional loans per month.',
    pricing: {
      headline: 'Mortgage Success Plans',
      subheading: 'Close more loans with instant response',
      tiers: [
        {
          name: 'Independent Broker',
          price: '$79',
          features: [
            'Up to 400 inquiries/month',
            'Basic pre-qualification',
            'Rate quote automation',
            'CRM integration',
            'Lead follow-up sequences'
          ],
          description: 'Perfect for independent brokers'
        },
        {
          name: 'Team Leader',
          price: '$149',
          featured: true,
          features: [
            'Up to 1,000 inquiries/month',
            'Advanced qualifying algorithms',
            'Multi-loan-officer routing',
            'Competitive rate analysis',
            'Detailed conversion tracking',
            'Pipeline management'
          ],
          description: 'Ideal for broker teams'
        },
        {
          name: 'Enterprise/Bank',
          price: '$299',
          features: [
            'Unlimited inquiries',
            'Multi-branch support',
            'Custom loan programs',
            'Compliance management',
            'White-label solution',
            'Dedicated account manager'
          ],
          description: 'For large mortgage companies'
        }
      ],
      guarantee: '14 day free trial • No setup fees • Cancel anytime'
    },
    emailCapture: {
      headline: 'You\'re Here Early!',
      message: 'We\'re putting the finishing touches on MortgageCallAI and preparing for our launch next month.',
      benefits: [
        '50% off your first 3 months',
        'Free custom setup and training',
        'Direct line to our founding team'
      ],
      formFields: [
        { name: 'email', type: 'email', placeholder: 'Email address' },
        { name: 'companyName', type: 'text', placeholder: 'Company/broker name' },
        { 
          name: 'loanVolume', 
          type: 'select', 
          placeholder: 'Loan volume per month',
          options: [
            { value: '1-10', label: '1-10 loans' },
            { value: '11-25', label: '11-25 loans' },
            { value: '26-50', label: '26-50 loans' },
            { value: '51+', label: '51+ loans' }
          ]
        },
        {
          name: 'nmlsNumber',
          type: 'text',
          placeholder: 'NMLS license number'
        }
      ],
      privacy: 'We respect your privacy. Unsubscribe at any time. No spam, ever.'
    }
  },

  'general-contractors': {
    brand: 'ContractorCallAI',
    headline: 'Convert Project Inquiries Into Signed Contracts',
    subheading: 'Our AI captures construction project calls 24/7, qualifies homeowners by budget and timeline, and books estimates instantly—so you never miss a $25K+ project again.',
    features: [
      {
        icon: '🏗️',
        title: 'Project Scope Assessment',
        description: 'Intelligently gathers project details, timeline requirements, and budget ranges to help you prioritize high-value opportunities.'
      },
      {
        icon: '📋',
        title: 'Instant Estimate Scheduling',
        description: 'Automatically coordinates site visits based on your availability and project location, optimizing your sales team\'s time.'
      },
      {
        icon: '💰',
        title: 'Budget Pre-Qualification',
        description: 'Tactfully determines homeowner budget and financing readiness before you invest time in detailed estimates.'
      }
    ],
    socialProof: 'Used by 95+ general contractors to increase project inquiry conversion by 65% and add $400K+ in annual contract value.',
    pricing: {
      headline: 'Construction Business Plans',
      subheading: 'Build more projects with better leads',
      tiers: [
        {
          name: 'Small Contractor',
          price: '$79',
          features: [
            'Up to 200 inquiries/month',
            'Basic project qualification',
            'Estimate scheduling',
            'Lead tracking',
            'Customer follow-up'
          ],
          description: 'Perfect for smaller contractors'
        },
        {
          name: 'Established Contractor',
          price: '$149',
          featured: true,
          features: [
            'Up to 500 inquiries/month',
            'Advanced budget qualification',
            'Multi-project coordination',
            'Subcontractor scheduling',
            'Detailed project analytics',
            'CRM integration'
          ],
          description: 'Ideal for established contractors'
        },
        {
          name: 'Large Contractor',
          price: '$299',
          features: [
            'Unlimited inquiries',
            'Multi-location support',
            'Custom qualification workflows',
            'Enterprise integrations',
            'White-label solution',
            'Dedicated account manager'
          ],
          description: 'For large construction companies'
        }
      ],
      guarantee: '14 day free trial • No setup fees • Cancel anytime'
    },
    emailCapture: {
      headline: 'You\'re Here Early!',
      message: 'We\'re putting the finishing touches on ContractorCallAI and preparing for our launch next month.',
      benefits: [
        '50% off your first 3 months',
        'Free custom setup and training',
        'Direct line to our founding team'
      ],
      formFields: [
        { name: 'email', type: 'email', placeholder: 'Email address' },
        { name: 'companyName', type: 'text', placeholder: 'Company name' },
        { 
          name: 'projectTypes', 
          type: 'select', 
          placeholder: 'Primary project types',
          options: [
            { value: 'remodeling', label: 'Remodeling' },
            { value: 'new-construction', label: 'New construction' },
            { value: 'commercial', label: 'Commercial' },
            { value: 'all', label: 'All types' }
          ]
        },
        {
          name: 'averageProjectValue',
          type: 'select',
          placeholder: 'Average project value range',
          options: [
            { value: '5k-25k', label: '$5K-$25K' },
            { value: '25k-75k', label: '$25K-$75K' },
            { value: '75k-200k', label: '$75K-$200K' },
            { value: '200k+', label: '$200K+' }
          ]
        }
      ],
      privacy: 'We respect your privacy. Unsubscribe at any time. No spam, ever.'
    }
  },

  'accounting': {
    brand: 'AccountingCallAI',
    headline: 'Handle Tax Season Rush Without Burning Out',
    subheading: 'Our AI manages client calls during peak tax season, schedules appointments efficiently, and captures new client inquiries—so you never miss revenue opportunities when you\'re busiest.',
    features: [
      {
        icon: '📊',
        title: 'Tax Season Call Management',
        description: 'Handles the overwhelming volume of client calls from January through April when your phones ring constantly with questions and appointment requests.'
      },
      {
        icon: '📅',
        title: 'Smart Appointment Optimization',
        description: 'Automatically schedules tax prep appointments, quarterly reviews, and consultations based on service type and CPA availability.'
      },
      {
        icon: '💼',
        title: 'New Client Qualification',
        description: 'Pre-screens potential clients by business complexity, service needs, and engagement value to help you focus on profitable relationships.'
      }
    ],
    socialProof: 'Supporting 75+ accounting firms to reduce tax season stress by 50% and capture 30% more new clients during peak periods.',
    pricing: {
      headline: 'Accounting Practice Plans',
      subheading: 'Stay organized during your busiest seasons',
      tiers: [
        {
          name: 'Solo Practitioner',
          price: '$79',
          features: [
            'Up to 300 calls/month',
            'Basic appointment scheduling',
            'Tax season surge support',
            'Client reminders',
            'Simple reporting'
          ],
          description: 'Perfect for solo CPAs'
        },
        {
          name: 'Small Firm',
          price: '$149',
          featured: true,
          features: [
            'Up to 600 calls/month',
            'Multi-CPA scheduling',
            'Advanced client triage',
            'Tax deadline management',
            'Practice management integration',
            'Seasonal analytics'
          ],
          description: 'Ideal for 2-5 CPA firms'
        },
        {
          name: 'Large Firm',
          price: '$299',
          features: [
            'Unlimited calls',
            'Multi-location support',
            'Custom client workflows',
            'Enterprise integrations',
            'White-label solution',
            'Dedicated success manager'
          ],
          description: 'For large accounting firms'
        }
      ],
      guarantee: '14 day free trial • No setup fees • Cancel anytime'
    },
    emailCapture: {
      headline: 'You\'re Here Early!',
      message: 'We\'re putting the finishing touches on AccountingCallAI and preparing for our launch next month.',
      benefits: [
        '50% off your first 3 months',
        'Free custom setup and training',
        'Direct line to our founding team'
      ],
      formFields: [
        { name: 'email', type: 'email', placeholder: 'Email address' },
        { name: 'firmName', type: 'text', placeholder: 'Firm name' },
        { 
          name: 'numberOfCPAs', 
          type: 'select', 
          placeholder: 'Number of CPAs',
          options: [
            { value: 'solo', label: 'Solo CPA' },
            { value: '2-5', label: '2-5 CPAs' },
            { value: '6-15', label: '6-15 CPAs' },
            { value: '16+', label: '16+ CPAs' }
          ]
        },
        {
          name: 'practiceManagementSoftware',
          type: 'select',
          placeholder: 'Practice management software',
          options: [
            { value: 'drake', label: 'Drake' },
            { value: 'proseries', label: 'ProSeries' },
            { value: 'lacerte', label: 'Lacerte' },
            { value: 'other', label: 'Other' }
          ]
        }
      ],
      privacy: 'We respect your privacy. Unsubscribe at any time. No spam, ever.'
    }
  },

  'physical-therapy': {
    brand: 'PhysioCallAI',
    headline: 'Streamline Insurance Authorization Calls',
    subheading: 'Our AI handles insurance verification, pre-authorization requests, and appointment scheduling—so you spend more time treating patients and less time on hold with insurance companies.',
    features: [
      {
        icon: '🏥',
        title: 'Insurance Pre-Auth Automation',
        description: 'Automatically verifies insurance benefits and initiates prior authorization requests, reducing administrative delays that postpone treatment.'
      },
      {
        icon: '📅',
        title: 'Smart Patient Scheduling',
        description: 'Coordinates initial evaluations, follow-up sessions, and discharge planning based on insurance coverage and therapist availability.'
      },
      {
        icon: '📋',
        title: 'Treatment Documentation Support',
        description: 'Captures patient symptoms, injury details, and treatment goals to help therapists prepare comprehensive care plans faster.'
      }
    ],
    socialProof: 'Helping 60+ physical therapy clinics reduce insurance processing time by 70% and increase patient appointment bookings by 40%.',
    pricing: {
      headline: 'Physical Therapy Practice Plans',
      subheading: 'Spend more time treating, less time on admin',
      tiers: [
        {
          name: 'Solo PT',
          price: '$79',
          features: [
            'Up to 400 calls/month',
            'Basic insurance verification',
            'Patient scheduling',
            'Appointment reminders',
            'Simple documentation'
          ],
          description: 'Perfect for single-therapist practices'
        },
        {
          name: 'Multi-Therapist',
          price: '$149',
          featured: true,
          features: [
            'Up to 800 calls/month',
            'Advanced pre-auth processing',
            'Multi-therapist scheduling',
            'Treatment plan coordination',
            'EMR integration',
            'Insurance analytics'
          ],
          description: 'Ideal for multi-therapist clinics'
        },
        {
          name: 'Clinic Network',
          price: '$299',
          features: [
            'Unlimited calls',
            'Multi-location support',
            'Custom insurance workflows',
            'Enterprise EMR integration',
            'White-label solution',
            'Dedicated healthcare consultant'
          ],
          description: 'For PT clinic networks'
        }
      ],
      guarantee: '14 day free trial • No setup fees • Cancel anytime'
    },
    emailCapture: {
      headline: 'You\'re Here Early!',
      message: 'We\'re putting the finishing touches on PhysioCallAI and preparing for our launch next month.',
      benefits: [
        '50% off your first 3 months',
        'Free custom setup and training',
        'Direct line to our founding team'
      ],
      formFields: [
        { name: 'email', type: 'email', placeholder: 'Email address' },
        { name: 'practiceName', type: 'text', placeholder: 'Practice name' },
        { 
          name: 'numberOfTherapists', 
          type: 'select', 
          placeholder: 'Number of therapists',
          options: [
            { value: 'solo', label: 'Solo therapist' },
            { value: '2-5', label: '2-5 therapists' },
            { value: '6-15', label: '6-15 therapists' },
            { value: '16+', label: '16+ therapists' }
          ]
        },
        {
          name: 'emrSystem',
          type: 'select',
          placeholder: 'EMR system',
          options: [
            { value: 'webpt', label: 'WebPT' },
            { value: 'therabill', label: 'TheraBill' },
            { value: 'clinicient', label: 'Clinicient' },
            { value: 'other', label: 'Other' }
          ]
        }
      ],
      privacy: 'We respect your privacy. Unsubscribe at any time. No spam, ever.'
    }
  },
  
  'hair-salons': {
    brand: 'StyleCallAI',
    headline: 'Never Miss Another Booking Again',
    subheading: 'Our AI handles appointment scheduling, rebooking, and client consultations 24/7—turning missed calls into $200+ service bookings.',
    features: [
      {
        icon: '✂️',
        title: '24/7 Appointment Booking',
        description: 'Schedules cuts, colors, and treatments instantly by checking stylist availability and managing your booking calendar in real-time.'
      },
      {
        icon: '💬',
        title: 'Service Consultation',
        description: 'Discusses hair goals, previous treatments, and allergies to recommend appropriate services and estimate timing and pricing.'
      },
      {
        icon: '📱',
        title: 'Client Communication Hub',
        description: 'Sends appointment confirmations, reminder texts, and follow-up messages to reduce no-shows and encourage rebooking.'
      }
    ],
    socialProof: 'Used by 200+ salons and stylists to reduce booking admin time by 80% and increase client retention by 35%.',
    pricing: {
      headline: 'Salon & Stylist Plans',
      subheading: 'Focus on styling, not scheduling',
      tiers: [
        {
          name: 'Solo Stylist',
          price: '$79',
          features: [
            'Up to 300 calls/month',
            'Basic booking management',
            'Client communication',
            'Service recommendations',
            'Appointment reminders'
          ],
          description: 'Perfect for independent stylists'
        },
        {
          name: 'Full Salon',
          price: '$149',
          featured: true,
          features: [
            'Up to 600 calls/month',
            'Multi-stylist scheduling',
            'Service package booking',
            'Client history tracking',
            'POS system integration',
            'Advanced analytics'
          ],
          description: 'Ideal for busy salons'
        },
        {
          name: 'Salon Chain',
          price: '$299',
          features: [
            'Unlimited calls',
            'Multi-location booking',
            'Enterprise POS integration',
            'Staff performance tracking',
            'Custom service workflows',
            'Dedicated beauty consultant'
          ],
          description: 'For salon chains and franchises'
        }
      ],
      guarantee: '14 day free trial • No setup fees • Cancel anytime'
    },
    emailCapture: {
      headline: 'You\'re Here Early!',
      message: 'We\'re putting the finishing touches on StyleCallAI and preparing for our launch next month.',
      benefits: [
        '50% off your first 3 months',
        'Free custom setup and training',
        'Direct line to our founding team'
      ],
      formFields: [
        { name: 'email', type: 'email', placeholder: 'Email address' },
        { name: 'salonName', type: 'text', placeholder: 'Salon name' },
        { 
          name: 'numberOfStylists', 
          type: 'select', 
          placeholder: 'Number of stylists',
          options: [
            { value: 'solo', label: 'Solo stylist' },
            { value: '2-4', label: '2-4 stylists' },
            { value: '5-10', label: '5-10 stylists' },
            { value: '11+', label: '11+ stylists' }
          ]
        },
        {
          name: 'currentBookingSystem',
          type: 'select',
          placeholder: 'Current booking system',
          options: [
            { value: 'none', label: 'No system currently' },
            { value: 'schedulicity', label: 'Schedulicity' },
            { value: 'acuity', label: 'Acuity Scheduling' },
            { value: 'other', label: 'Other' }
          ]
        }
      ],
      privacy: 'We respect your privacy. Unsubscribe at any time. No spam, ever.'
    }
  },
  
  'fitness-studios': {
    brand: 'FitCallAI',
    headline: 'Never Miss Another Membership Lead Again',
    subheading: 'Our AI handles membership inquiries, class bookings, and trial signups 24/7—turning after-hours calls into $150+ monthly memberships.',
    features: [
      {
        icon: '🏋️',
        title: 'Membership Sales Assistant',
        description: 'Answers questions about membership options, pricing, and facility amenities while scheduling tours and free trial sessions.'
      },
      {
        icon: '📅',
        title: 'Class & Training Booking',
        description: 'Books group classes, personal training sessions, and specialized programs based on member preferences and instructor availability.'
      },
      {
        icon: '💪',
        title: 'Member Retention Support',
        description: 'Handles billing questions, freeze requests, and cancellation attempts while offering retention incentives and program alternatives.'
      }
    ],
    socialProof: 'Powering 180+ fitness studios to increase membership conversions by 45% and reduce front desk administrative time by 60%.',
    pricing: {
      headline: 'Fitness Studio Plans',
      subheading: 'Grow your community, automate your admin',
      tiers: [
        {
          name: 'Boutique Studio',
          price: '$79',
          features: [
            'Up to 400 calls/month',
            'Basic membership inquiries',
            'Class booking assistance',
            'Tour scheduling',
            'Payment reminders'
          ],
          description: 'Perfect for smaller studios'
        },
        {
          name: 'Full Fitness Center',
          price: '$149',
          featured: true,
          features: [
            'Up to 800 calls/month',
            'Advanced membership sales',
            'Personal trainer scheduling',
            'Retention call campaigns',
            'Gym management integration',
            'Performance analytics'
          ],
          description: 'Ideal for growing fitness centers'
        },
        {
          name: 'Franchise Network',
          price: '$299',
          features: [
            'Unlimited calls',
            'Multi-location support',
            'Enterprise gym software integration',
            'Franchise-wide reporting',
            'Custom retention workflows',
            'Dedicated fitness consultant'
          ],
          description: 'For fitness franchises'
        }
      ],
      guarantee: '14 day free trial • No setup fees • Cancel anytime'
    },
    emailCapture: {
      headline: 'You\'re Here Early!',
      message: 'We\'re putting the finishing touches on FitCallAI and preparing for our launch next month.',
      benefits: [
        '50% off your first 3 months',
        'Free custom setup and training',
        'Direct line to our founding team'
      ],
      formFields: [
        { name: 'email', type: 'email', placeholder: 'Email address' },
        { name: 'studioName', type: 'text', placeholder: 'Studio/gym name' },
        { 
          name: 'studioType', 
          type: 'select', 
          placeholder: 'Studio type',
          options: [
            { value: 'yoga', label: 'Yoga Studio' },
            { value: 'pilates', label: 'Pilates Studio' },
            { value: 'crossfit', label: 'CrossFit Box' },
            { value: 'traditional', label: 'Traditional Gym' },
            { value: 'boutique', label: 'Boutique Fitness' }
          ]
        },
        {
          name: 'currentMembers',
          type: 'select',
          placeholder: 'Current membership size',
          options: [
            { value: 'under-100', label: 'Under 100 members' },
            { value: '100-300', label: '100-300 members' },
            { value: '300-500', label: '300-500 members' },
            { value: '500+', label: '500+ members' }
          ]
        }
      ],
      privacy: 'We respect your privacy. Unsubscribe at any time. No spam, ever.'
    }
  },
  
  'urgent-care': {
    brand: 'UrgentCallAI',
    headline: 'Never Miss Another Patient Again',
    subheading: 'Our HIPAA-compliant AI handles patient triage, appointment scheduling, and insurance verification 24/7—ensuring critical care access around the clock.',
    features: [
      {
        icon: '🏥',
        title: 'Medical Triage Assistant',
        description: 'Assesses symptom urgency, directs patients to appropriate care levels, and schedules urgent appointments based on clinical protocols.'
      },
      {
        icon: '🔍',
        title: 'Insurance Verification',
        description: 'Verifies coverage, explains benefits, and estimates patient costs before arrival to streamline check-in and reduce billing delays.'
      },
      {
        icon: '📋',
        title: 'Pre-Visit Documentation',
        description: 'Collects patient history, current medications, and visit reasons to help providers prepare and reduce wait times.'
      }
    ],
    socialProof: 'Trusted by 90+ urgent care centers to reduce wait times by 25% and increase patient satisfaction scores by 40%.',
    pricing: {
      headline: 'Urgent Care Plans',
      subheading: 'Streamline patient access, improve care delivery',
      tiers: [
        {
          name: 'Single Location',
          price: '$79',
          features: [
            'Up to 500 calls/month',
            'Basic triage protocols',
            'Insurance verification',
            'Appointment scheduling',
            'HIPAA compliance included'
          ],
          description: 'Perfect for standalone clinics'
        },
        {
          name: 'Multi-Provider',
          price: '$149',
          featured: true,
          features: [
            'Up to 1000 calls/month',
            'Advanced triage protocols',
            'Multi-provider scheduling',
            'EMR integration',
            'Patient flow analytics',
            'Custom care pathways'
          ],
          description: 'Ideal for busy urgent care centers'
        },
        {
          name: 'Healthcare Network',
          price: '$299',
          features: [
            'Unlimited calls',
            'Multi-location coordination',
            'Enterprise EMR integration',
            'Advanced analytics dashboard',
            'Custom clinical workflows',
            'Dedicated healthcare consultant'
          ],
          description: 'For urgent care networks'
        }
      ],
      guarantee: '14 day free trial • No setup fees • Cancel anytime'
    },
    emailCapture: {
      headline: 'You\'re Here Early!',
      message: 'We\'re putting the finishing touches on UrgentCallAI and preparing for our launch next month.',
      benefits: [
        '50% off your first 3 months',
        'Free custom setup and training',
        'Direct line to our founding team'
      ],
      formFields: [
        { name: 'email', type: 'email', placeholder: 'Email address' },
        { name: 'facilityName', type: 'text', placeholder: 'Facility name' },
        { 
          name: 'patientVolume', 
          type: 'select', 
          placeholder: 'Monthly patient volume',
          options: [
            { value: 'under-500', label: 'Under 500 patients' },
            { value: '500-1000', label: '500-1000 patients' },
            { value: '1000-2000', label: '1000-2000 patients' },
            { value: '2000+', label: '2000+ patients' }
          ]
        },
        {
          name: 'emrSystem',
          type: 'select',
          placeholder: 'EMR system',
          options: [
            { value: 'epic', label: 'Epic' },
            { value: 'cerner', label: 'Cerner' },
            { value: 'athenahealth', label: 'athenahealth' },
            { value: 'other', label: 'Other' }
          ]
        }
      ],
      privacy: 'We respect your privacy. Unsubscribe at any time. No spam, ever.'
    }
  },
  
  'locksmith': {
    brand: 'LockCallAI',
    headline: 'Never Miss Another Emergency Call Again',
    subheading: 'Our AI handles lockout emergencies, security consultations, and service bookings 24/7—turning urgent calls into $150+ service visits.',
    features: [
      {
        icon: '🔐',
        title: 'Emergency Lockout Response',
        description: 'Handles urgent lockout calls, provides pricing estimates, and dispatches nearest available technician with ETA updates.'
      },
      {
        icon: '🏠',
        title: 'Security Consultation',
        description: 'Discusses security needs, recommends lock upgrades, and schedules assessment visits for residential and commercial properties.'
      },
      {
        icon: '⏰',
        title: 'Service Coordination',
        description: 'Manages technician schedules, handles service callbacks, and coordinates follow-up visits for warranty work and installations.'
      }
    ],
    socialProof: 'Helping 120+ locksmiths capture 90% more emergency calls and increase average job value by $75.',
    pricing: {
      headline: 'Locksmith Service Plans',
      subheading: 'Secure more business, streamline dispatch',
      tiers: [
        {
          name: 'Solo Locksmith',
          price: '$79',
          features: [
            'Up to 300 calls/month',
            'Emergency dispatch',
            'Basic pricing quotes',
            'Customer communication',
            'Simple scheduling'
          ],
          description: 'Perfect for independent locksmiths'
        },
        {
          name: 'Mobile Team',
          price: '$149',
          featured: true,
          features: [
            'Up to 600 calls/month',
            'Multi-technician dispatch',
            'Advanced quote calculator',
            'GPS tracking integration',
            'Customer follow-up',
            'Performance analytics'
          ],
          description: 'Ideal for locksmith teams'
        },
        {
          name: 'Locksmith Company',
          price: '$299',
          features: [
            'Unlimited calls',
            'Enterprise dispatch system',
            'Custom pricing workflows',
            'Multi-location coordination',
            'Advanced reporting',
            'Dedicated security consultant'
          ],
          description: 'For locksmith companies'
        }
      ],
      guarantee: '14 day free trial • No setup fees • Cancel anytime'
    },
    emailCapture: {
      headline: 'You\'re Here Early!',
      message: 'We\'re putting the finishing touches on LockCallAI and preparing for our launch next month.',
      benefits: [
        '50% off your first 3 months',
        'Free custom setup and training',
        'Direct line to our founding team'
      ],
      formFields: [
        { name: 'email', type: 'email', placeholder: 'Email address' },
        { name: 'businessName', type: 'text', placeholder: 'Business name' },
        { 
          name: 'serviceArea', 
          type: 'select', 
          placeholder: 'Service area',
          options: [
            { value: 'local', label: 'Local city only' },
            { value: 'metro', label: 'Metro area' },
            { value: 'regional', label: 'Regional coverage' },
            { value: 'statewide', label: 'Statewide' }
          ]
        },
        {
          name: 'teamSize',
          type: 'select',
          placeholder: 'Team size',
          options: [
            { value: 'solo', label: 'Just me' },
            { value: '2-5', label: '2-5 technicians' },
            { value: '6-15', label: '6-15 technicians' },
            { value: '16+', label: '16+ technicians' }
          ]
        }
      ],
      privacy: 'We respect your privacy. Unsubscribe at any time. No spam, ever.'
    }
  },
  
  'mental-health': {
    brand: 'MindCallAI',
    headline: 'Never Miss Another Client Connection Again',
    subheading: 'Our HIPAA-compliant AI handles intake calls, crisis support triage, and appointment scheduling 24/7—ensuring mental health support is always accessible.',
    features: [
      {
        icon: '🧠',
        title: 'Crisis Triage Support',
        description: 'Provides immediate crisis assessment, safety planning resources, and emergency service coordination while connecting clients to appropriate care levels.'
      },
      {
        icon: '📅',
        title: 'Therapeutic Appointment Matching',
        description: 'Matches clients with therapists based on specialties, insurance coverage, and availability while handling intake paperwork coordination.'
      },
      {
        icon: '💬',
        title: 'Confidential Intake Processing',
        description: 'Conducts secure initial assessments, collects treatment history, and coordinates care plans while maintaining strict privacy standards.'
      }
    ],
    socialProof: 'Supporting 150+ mental health professionals to reduce intake processing time by 60% and improve client access to care.',
    pricing: {
      headline: 'Mental Health Practice Plans',
      subheading: 'Expand access, maintain confidentiality',
      tiers: [
        {
          name: 'Private Practice',
          price: '$79',
          features: [
            'Up to 200 calls/month',
            'Basic intake processing',
            'Crisis resource directory',
            'Insurance verification',
            'HIPAA compliance included'
          ],
          description: 'Perfect for solo practitioners'
        },
        {
          name: 'Group Practice',
          price: '$149',
          featured: true,
          features: [
            'Up to 500 calls/month',
            'Advanced intake workflows',
            'Multi-therapist scheduling',
            'Crisis intervention protocols',
            'EMR integration',
            'Outcome tracking'
          ],
          description: 'Ideal for group practices'
        },
        {
          name: 'Healthcare System',
          price: '$299',
          features: [
            'Unlimited calls',
            'Enterprise-grade security',
            'Multi-location coordination',
            'Advanced crisis protocols',
            'Custom care pathways',
            'Dedicated clinical consultant'
          ],
          description: 'For healthcare systems'
        }
      ],
      guarantee: '14 day free trial • No setup fees • Cancel anytime'
    },
    emailCapture: {
      headline: 'You\'re Here Early!',
      message: 'We\'re putting the finishing touches on MindCallAI and preparing for our launch next month.',
      benefits: [
        '50% off your first 3 months',
        'Free custom setup and training',
        'Direct line to our founding team'
      ],
      formFields: [
        { name: 'email', type: 'email', placeholder: 'Email address' },
        { name: 'practiceName', type: 'text', placeholder: 'Practice name' },
        { 
          name: 'practiceType', 
          type: 'select', 
          placeholder: 'Practice type',
          options: [
            { value: 'solo', label: 'Solo therapist' },
            { value: 'group', label: 'Group practice' },
            { value: 'clinic', label: 'Mental health clinic' },
            { value: 'hospital', label: 'Hospital system' }
          ]
        },
        {
          name: 'specialties',
          type: 'select',
          placeholder: 'Primary specialty',
          options: [
            { value: 'general', label: 'General therapy' },
            { value: 'trauma', label: 'Trauma therapy' },
            { value: 'addiction', label: 'Addiction counseling' },
            { value: 'family', label: 'Family therapy' },
            { value: 'other', label: 'Other specialty' }
          ]
        }
      ],
      privacy: 'We respect your privacy. Unsubscribe at any time. No spam, ever.'
    }
  },
  
  'pet-grooming': {
    brand: 'GroomCallAI',
    headline: 'Never Miss Another Pampering Appointment Again',
    subheading: 'Our AI handles pet grooming bookings, breed consultations, and service recommendations 24/7—turning missed calls into $80+ grooming appointments.',
    features: [
      {
        icon: '🐕',
        title: 'Breed-Specific Booking',
        description: 'Schedules grooming appointments based on breed requirements, coat type, and service history while managing groomer availability.'
      },
      {
        icon: '✂️',
        title: 'Service Consultation',
        description: 'Discusses grooming needs, recommends appropriate services, and provides pricing estimates based on pet size and coat condition.'
      },
      {
        icon: '📱',
        title: 'Pet Parent Communication',
        description: 'Sends appointment reminders, pickup notifications, and grooming care tips while handling rescheduling and special requests.'
      }
    ],
    socialProof: 'Used by 180+ pet groomers to reduce booking time by 75% and increase appointment retention by 45%.',
    pricing: {
      headline: 'Pet Grooming Plans',
      subheading: 'More time grooming, less time on the phone',
      tiers: [
        {
          name: 'Solo Groomer',
          price: '$79',
          features: [
            'Up to 300 calls/month',
            'Basic appointment booking',
            'Breed consultation',
            'Service recommendations',
            'Client reminders'
          ],
          description: 'Perfect for independent groomers'
        },
        {
          name: 'Grooming Salon',
          price: '$149',
          featured: true,
          features: [
            'Up to 600 calls/month',
            'Multi-groomer scheduling',
            'Advanced breed profiles',
            'Service package booking',
            'Client history tracking',
            'Performance analytics'
          ],
          description: 'Ideal for grooming salons'
        },
        {
          name: 'Pet Care Center',
          price: '$299',
          features: [
            'Unlimited calls',
            'Multi-service coordination',
            'Enterprise POS integration',
            'Advanced client profiles',
            'Custom service workflows',
            'Dedicated pet care consultant'
          ],
          description: 'For full-service pet centers'
        }
      ],
      guarantee: '14 day free trial • No setup fees • Cancel anytime'
    },
    emailCapture: {
      headline: 'You\'re Here Early!',
      message: 'We\'re putting the finishing touches on GroomCallAI and preparing for our launch next month.',
      benefits: [
        '50% off your first 3 months',
        'Free custom setup and training',
        'Direct line to our founding team'
      ],
      formFields: [
        { name: 'email', type: 'email', placeholder: 'Email address' },
        { name: 'businessName', type: 'text', placeholder: 'Business name' },
        { 
          name: 'businessType', 
          type: 'select', 
          placeholder: 'Business type',
          options: [
            { value: 'mobile', label: 'Mobile grooming' },
            { value: 'salon', label: 'Grooming salon' },
            { value: 'pet-store', label: 'Pet store with grooming' },
            { value: 'veterinary', label: 'Veterinary clinic' }
          ]
        },
        {
          name: 'monthlyAppointments',
          type: 'select',
          placeholder: 'Monthly appointments',
          options: [
            { value: 'under-50', label: 'Under 50' },
            { value: '50-150', label: '50-150' },
            { value: '150-300', label: '150-300' },
            { value: '300+', label: '300+' }
          ]
        }
      ],
      privacy: 'We respect your privacy. Unsubscribe at any time. No spam, ever.'
    }
  },
  
  'dry-cleaning': {
    brand: 'CleanCallAI',
    headline: 'Never Miss Another Pickup Again',
    subheading: 'Our AI handles garment intake, delivery coordination, and special care consultations 24/7—turning missed calls into $35+ cleaning orders.',
    features: [
      {
        icon: '👔',
        title: 'Garment Care Consultation',
        description: 'Discusses fabric types, stain removal needs, and special handling requirements while providing accurate pricing and timing estimates.'
      },
      {
        icon: '🚚',
        title: 'Pickup & Delivery Coordination',
        description: 'Schedules convenient pickup and delivery times, manages route optimization, and handles special delivery instructions.'
      },
      {
        icon: '⏰',
        title: 'Order Status Communication',
        description: 'Provides real-time updates on cleaning progress, sends ready-for-pickup notifications, and handles customer inquiries about orders.'
      }
    ],
    socialProof: 'Serving 150+ dry cleaners to increase order volume by 40% and reduce front desk administrative time by 65%.',
    pricing: {
      headline: 'Dry Cleaning Plans',
      subheading: 'Focus on cleaning, automate communication',
      tiers: [
        {
          name: 'Local Cleaner',
          price: '$79',
          features: [
            'Up to 400 calls/month',
            'Basic garment consultation',
            'Pickup/delivery scheduling',
            'Order status updates',
            'Customer notifications'
          ],
          description: 'Perfect for neighborhood cleaners'
        },
        {
          name: 'Full Service',
          price: '$149',
          featured: true,
          features: [
            'Up to 800 calls/month',
            'Advanced fabric consultation',
            'Route optimization',
            'POS system integration',
            'Customer loyalty tracking',
            'Performance analytics'
          ],
          description: 'Ideal for busy cleaning operations'
        },
        {
          name: 'Multi-Location',
          price: '$299',
          features: [
            'Unlimited calls',
            'Multi-store coordination',
            'Enterprise POS integration',
            'Advanced order tracking',
            'Custom service workflows',
            'Dedicated operations consultant'
          ],
          description: 'For cleaning chains'
        }
      ],
      guarantee: '14 day free trial • No setup fees • Cancel anytime'
    },
    emailCapture: {
      headline: 'You\'re Here Early!',
      message: 'We\'re putting the finishing touches on CleanCallAI and preparing for our launch next month.',
      benefits: [
        '50% off your first 3 months',
        'Free custom setup and training',
        'Direct line to our founding team'
      ],
      formFields: [
        { name: 'email', type: 'email', placeholder: 'Email address' },
        { name: 'businessName', type: 'text', placeholder: 'Business name' },
        { 
          name: 'serviceType', 
          type: 'select', 
          placeholder: 'Service type',
          options: [
            { value: 'traditional', label: 'Traditional dry cleaning' },
            { value: 'eco-friendly', label: 'Eco-friendly cleaning' },
            { value: 'pickup-delivery', label: 'Pickup & delivery' },
            { value: 'specialty', label: 'Specialty garments' }
          ]
        },
        {
          name: 'orderVolume',
          type: 'select',
          placeholder: 'Monthly order volume',
          options: [
            { value: 'under-500', label: 'Under 500 items' },
            { value: '500-1500', label: '500-1500 items' },
            { value: '1500-3000', label: '1500-3000 items' },
            { value: '3000+', label: '3000+ items' }
          ]
        }
      ],
      privacy: 'We respect your privacy. Unsubscribe at any time. No spam, ever.'
    }
  },
  
  'equipment-rental': {
    brand: 'RentCallAI',
    headline: 'Never Miss Another Rental Opportunity Again',
    subheading: 'Our AI handles equipment inquiries, availability checks, and rental bookings 24/7—turning after-hours calls into $200+ daily rentals.',
    features: [
      {
        icon: '🚜',
        title: 'Equipment Availability Engine',
        description: 'Checks real-time inventory, provides pricing quotes, and books equipment rentals based on customer project needs and timeline.'
      },
      {
        icon: '📋',
        title: 'Project Consultation',
        description: 'Discusses project requirements, recommends appropriate equipment, and calculates total rental costs including delivery and insurance.'
      },
      {
        icon: '🚚',
        title: 'Delivery Coordination',
        description: 'Schedules equipment delivery and pickup times, manages driver routes, and handles special delivery requirements and job site access.'
      }
    ],
    socialProof: 'Powering 100+ equipment rental companies to increase utilization rates by 35% and reduce booking administrative time by 70%.',
    pricing: {
      headline: 'Equipment Rental Plans',
      subheading: 'Maximize utilization, minimize admin',
      tiers: [
        {
          name: 'Small Fleet',
          price: '$79',
          features: [
            'Up to 300 calls/month',
            'Basic inventory management',
            'Rental booking',
            'Customer communication',
            'Simple scheduling'
          ],
          description: 'Perfect for small rental operations'
        },
        {
          name: 'Full Rental Yard',
          price: '$149',
          featured: true,
          features: [
            'Up to 600 calls/month',
            'Advanced inventory tracking',
            'Multi-category rentals',
            'Delivery coordination',
            'Rental software integration',
            'Utilization analytics'
          ],
          description: 'Ideal for established rental companies'
        },
        {
          name: 'Rental Network',
          price: '$299',
          features: [
            'Unlimited calls',
            'Multi-location inventory',
            'Enterprise software integration',
            'Advanced fleet management',
            'Custom rental workflows',
            'Dedicated rental consultant'
          ],
          description: 'For rental chains and networks'
        }
      ],
      guarantee: '14 day free trial • No setup fees • Cancel anytime'
    },
    emailCapture: {
      headline: 'You\'re Here Early!',
      message: 'We\'re putting the finishing touches on RentCallAI and preparing for our launch next month.',
      benefits: [
        '50% off your first 3 months',
        'Free custom setup and training',
        'Direct line to our founding team'
      ],
      formFields: [
        { name: 'email', type: 'email', placeholder: 'Email address' },
        { name: 'companyName', type: 'text', placeholder: 'Company name' },
        { 
          name: 'equipmentTypes', 
          type: 'select', 
          placeholder: 'Primary equipment type',
          options: [
            { value: 'construction', label: 'Construction equipment' },
            { value: 'landscaping', label: 'Landscaping tools' },
            { value: 'party', label: 'Party & event supplies' },
            { value: 'industrial', label: 'Industrial equipment' },
            { value: 'general', label: 'General tools' }
          ]
        },
        {
          name: 'fleetSize',
          type: 'select',
          placeholder: 'Fleet size',
          options: [
            { value: 'under-50', label: 'Under 50 items' },
            { value: '50-200', label: '50-200 items' },
            { value: '200-500', label: '200-500 items' },
            { value: '500+', label: '500+ items' }
          ]
        }
      ],
      privacy: 'We respect your privacy. Unsubscribe at any time. No spam, ever.'
    }
  },
  
  'storage-facilities': {
    brand: 'StoreCallAI',
    headline: 'Never Miss Another Unit Rental Again',
    subheading: 'Our AI handles storage inquiries, unit availability, and move-in coordination 24/7—turning missed calls into $150+ monthly rentals.',
    features: [
      {
        icon: '🏢',
        title: 'Unit Availability & Pricing',
        description: 'Provides real-time unit availability, customized pricing based on size and features, and schedules facility tours for prospective renters.'
      },
      {
        icon: '📦',
        title: 'Storage Needs Assessment',
        description: 'Assesses customer storage requirements, recommends appropriate unit sizes, and explains facility features like climate control and security.'
      },
      {
        icon: '🔐',
        title: 'Move-In Coordination',
        description: 'Handles lease documentation, coordinates move-in appointments, and manages payment processing while ensuring smooth facility access setup.'
      }
    ],
    socialProof: 'Supporting 120+ storage facilities to increase occupancy rates by 30% and reduce leasing administrative time by 80%.',
    pricing: {
      headline: 'Storage Facility Plans',
      subheading: 'Fill units faster, manage smarter',
      tiers: [
        {
          name: 'Small Facility',
          price: '$79',
          features: [
            'Up to 200 calls/month',
            'Basic unit management',
            'Tour scheduling',
            'Customer inquiries',
            'Simple reporting'
          ],
          description: 'Perfect for smaller facilities'
        },
        {
          name: 'Full Facility',
          price: '$149',
          featured: true,
          features: [
            'Up to 500 calls/month',
            'Advanced unit tracking',
            'Multi-facility support',
            'Management software integration',
            'Occupancy analytics',
            'Customer retention tools'
          ],
          description: 'Ideal for established facilities'
        },
        {
          name: 'Facility Network',
          price: '$299',
          features: [
            'Unlimited calls',
            'Multi-location management',
            'Enterprise software integration',
            'Advanced analytics dashboard',
            'Custom leasing workflows',
            'Dedicated facility consultant'
          ],
          description: 'For storage facility chains'
        }
      ],
      guarantee: '14 day free trial • No setup fees • Cancel anytime'
    },
    emailCapture: {
      headline: 'You\'re Here Early!',
      message: 'We\'re putting the finishing touches on StoreCallAI and preparing for our launch next month.',
      benefits: [
        '50% off your first 3 months',
        'Free custom setup and training',
        'Direct line to our founding team'
      ],
      formFields: [
        { name: 'email', type: 'email', placeholder: 'Email address' },
        { name: 'facilityName', type: 'text', placeholder: 'Facility name' },
        { 
          name: 'facilityType', 
          type: 'select', 
          placeholder: 'Facility type',
          options: [
            { value: 'self-storage', label: 'Self-storage facility' },
            { value: 'climate-controlled', label: 'Climate-controlled' },
            { value: 'vehicle-storage', label: 'Vehicle storage' },
            { value: 'business-storage', label: 'Business storage' }
          ]
        },
        {
          name: 'unitCount',
          type: 'select',
          placeholder: 'Number of units',
          options: [
            { value: 'under-100', label: 'Under 100 units' },
            { value: '100-300', label: '100-300 units' },
            { value: '300-600', label: '300-600 units' },
            { value: '600+', label: '600+ units' }
          ]
        }
      ],
      privacy: 'We respect your privacy. Unsubscribe at any time. No spam, ever.'
    }
  }
};

// Ripple Background Component
Alpine.data('rippleBackground', () => ({
  animatingCells: [],
  cellStyles: {},
  clickedCell: null,
  rippleKey: 0,
  rows: 13,
  cols: 50,
  
  init() {
    this.cellStyles = {};
  },
  
  handleCellClick(event, cellIndex) {
    event.stopPropagation();
    
    const rowIdx = Math.floor(cellIndex / this.cols);
    const colIdx = cellIndex % this.cols;
    
    this.clickedCell = { row: rowIdx, col: colIdx };
    this.rippleKey++;
    this.startRippleAnimation();
  },
  
  startRippleAnimation() {
    if (!this.clickedCell) return;
    
    const totalCells = this.rows * this.cols;
    const newStyles = {};
    const newAnimatingCells = [];
    
    // Calculate animation for each cell
    for (let i = 0; i < totalCells; i++) {
      const rowIdx = Math.floor(i / this.cols);
      const colIdx = i % this.cols;
      
      const distance = Math.hypot(
        this.clickedCell.row - rowIdx, 
        this.clickedCell.col - colIdx
      );
      
      const delay = Math.max(0, distance * 55); // ms
      const duration = 200 + distance * 80; // ms
      
      newStyles[i] = {
        '--delay': `${delay}ms`,
        '--duration': `${duration}ms`
      };
      
      newAnimatingCells.push(i);
    }
    
    this.cellStyles = newStyles;
    this.animatingCells = newAnimatingCells;
    
    // Clear animation after it completes
    setTimeout(() => {
      this.animatingCells = [];
      this.cellStyles = {};
    }, 3000); // Give enough time for all animations to complete
  }
}));

// Import Supabase Analytics (will be loaded from supabase.js)
// Analytics tracking functions - now powered by Supabase + localStorage fallback
const Analytics = {
  // Track any custom event
  async track(eventName, properties = {}) {
    // Use Supabase Analytics if available, otherwise fallback to local storage
    if (window.SupabaseAnalytics) {
      await window.SupabaseAnalytics.trackEvent(eventName, properties);
      return;
    }
    
    // Fallback to original localStorage method
    const ipData = await this.getIPData();
    
    const eventData = {
      vertical: window.currentVertical || 'unknown',
      page: window.currentPage || 'unknown',
      timestamp: new Date().toISOString(),
      url: window.location.href,
      ip: ipData.ip,
      country: ipData.country,
      city: ipData.city,
      ...properties
    };
    
    // Send to Google Analytics 4
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, eventData);
    }
    
    // Also log to console for debugging
    console.log('Analytics Event:', eventName, eventData);
    
    // Store locally for dashboard
    this.storeEvent(eventName, eventData);
  },

  // Get IP address and location data
  async getIPData() {
    try {
      // Check if we already have IP data cached
      const cachedIP = localStorage.getItem('visitor_ip_data');
      if (cachedIP) {
        const parsed = JSON.parse(cachedIP);
        // Cache for 1 hour
        if (Date.now() - parsed.timestamp < 3600000) {
          return parsed.data;
        }
      }

      // Fetch IP data from ipapi.co (free tier: 1000 requests/day)
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      
      const ipData = {
        ip: data.ip || 'unknown',
        country: data.country_name || 'unknown',
        city: data.city || 'unknown'
      };

      // Cache the result
      localStorage.setItem('visitor_ip_data', JSON.stringify({
        data: ipData,
        timestamp: Date.now()
      }));

      return ipData;
    } catch (error) {
      console.warn('Failed to get IP data:', error);
      return {
        ip: 'unknown',
        country: 'unknown', 
        city: 'unknown'
      };
    }
  },
  
  // Store events locally for dashboard
  async storeEvent(eventName, eventData) {
    try {
      const events = JSON.parse(localStorage.getItem('analytics_events') || '[]');
      events.push({ event: eventName, data: eventData });
      
      // Keep only last 1000 events
      if (events.length > 1000) {
        events.splice(0, events.length - 1000);
      }
      
      localStorage.setItem('analytics_events', JSON.stringify(events));

      // Also store form submissions separately for easy access
      if (eventName === 'email_form_complete' && eventData.formData) {
        if (window.SupabaseAnalytics) {
          // Supabase will handle form submission tracking automatically
          await window.SupabaseAnalytics.trackFormSubmission(eventData);
        } else {
          // Fallback to localStorage
          this.storeFormSubmission(eventData);
        }
      }
    } catch (e) {
      console.warn('Failed to store analytics event:', e);
    }
  },

  // Store form submission data separately
  storeFormSubmission(eventData) {
    try {
      const submissions = JSON.parse(localStorage.getItem('form_submissions') || '[]');
      
      // Find the user's latest pricing tier selection for this vertical and IP
      const events = this.getEvents();
      const tierEvents = events.filter(e => 
        e.event === 'pricing_tier_click' && 
        e.data.ip === eventData.ip && 
        e.data.vertical === eventData.vertical
      );
      
      // Get the most recent tier selection
      let selectedTier = null;
      if (tierEvents.length > 0) {
        const latestTierEvent = tierEvents.sort((a, b) => new Date(b.data.timestamp) - new Date(a.data.timestamp))[0];
        selectedTier = latestTierEvent.data.tier_price;
      }
      
      submissions.push({
        timestamp: eventData.timestamp,
        vertical: eventData.vertical,
        ip: eventData.ip,
        country: eventData.country,
        city: eventData.city,
        formData: eventData.formData,
        selectedTier: selectedTier
      });
      
      // Keep only last 500 submissions
      if (submissions.length > 500) {
        submissions.splice(0, submissions.length - 500);
      }
      
      localStorage.setItem('form_submissions', JSON.stringify(submissions));
    } catch (e) {
      console.warn('Failed to store form submission:', e);
    }
  },
  
  // Get stored events for dashboard
  getEvents() {
    try {
      return JSON.parse(localStorage.getItem('analytics_events') || '[]');
    } catch (e) {
      return [];
    }
  },

  // Get form submissions
  getFormSubmissions() {
    try {
      return JSON.parse(localStorage.getItem('form_submissions') || '[]');
    } catch (e) {
      return [];
    }
  }
};

// Main Alpine.js app
Alpine.data('app', () => {
  // Check URL parameters immediately to avoid flash of wrong content
  const urlParams = new URLSearchParams(window.location.search);
  const urlVertical = urlParams.get('vertical');
  const urlPage = urlParams.get('page');
  
  return {
    currentPage: (urlPage && ['landing', 'pricing', 'email-capture', 'analytics'].includes(urlPage)) ? urlPage : 'landing',
    currentVertical: (urlVertical && verticalData[urlVertical]) ? urlVertical : null,
    
    // Analytics password protection
    showPasswordPrompt: false,
    analyticsPassword: '',
    analyticsPasswordError: '',
    analyticsAccessGranted: false,
    
    init() {
      // Check URL for vertical and page parameters (redundant check for safety)
      const urlParams = new URLSearchParams(window.location.search);
      const vertical = urlParams.get('vertical');
      const page = urlParams.get('page');
      const utm_source = urlParams.get('utm_source');
      const utm_campaign = urlParams.get('utm_campaign');
      
      if (vertical && verticalData[vertical]) {
        this.currentVertical = vertical;
      }
      
      if (page && ['landing', 'pricing', 'email-capture', 'analytics'].includes(page)) {
        this.currentPage = page;
        
        // Password protection for analytics page
        if (page === 'analytics') {
          this.checkAnalyticsAccess();
        }
      }
    
    // Make current state globally available
    window.currentVertical = this.currentVertical;
    window.currentPage = this.currentPage;
    
    // Track page view - only if we have a valid vertical to avoid false tracking
    if (this.currentVertical) {
      Analytics.track('page_view', {
        page: this.currentPage,
        vertical: this.currentVertical,
        utm_source: utm_source,
        utm_campaign: utm_campaign,
        referrer: document.referrer
      });
    }
  },
  
  goToPage(page, tierData = null) {
    const previousPage = this.currentPage;
    this.currentPage = page;
    window.currentPage = page;
    
    // Update URL without page reload
    const url = new URL(window.location);
    url.searchParams.set('page', page);
    url.searchParams.set('vertical', this.currentVertical);
    window.history.pushState({}, '', url);
    
    // Track navigation
    if (page === 'pricing') {
      Analytics.track('pricing_button_click', {
        source_page: previousPage,
        vertical: this.currentVertical,
        button_location: previousPage === 'landing' ? 'hero_cta' : 'mobile_cta'
      });
    } else if (page === 'email-capture' && tierData) {
      Analytics.track('pricing_tier_click', {
        tier_name: tierData.name,
        tier_price: tierData.price,
        tier_featured: tierData.featured || false,
        vertical: this.currentVertical
      });
    }
    
    // Track page view for new page - only if we have a valid vertical
    if (this.currentVertical) {
      Analytics.track('page_view', {
        page: page,
        vertical: this.currentVertical,
        previous_page: previousPage
      });
    }
  },
  
  get verticalData() {
    // If we have a current vertical, use it. If not, check URL directly to avoid flash
    if (this.currentVertical && verticalData[this.currentVertical]) {
      return verticalData[this.currentVertical];
    }
    
    // Check URL directly as a fallback
    const urlParams = new URLSearchParams(window.location.search);
    const urlVertical = urlParams.get('vertical');
    if (urlVertical && verticalData[urlVertical]) {
      return verticalData[urlVertical];
    }
    
    // Only use personal-injury as very last resort if no URL param exists
    const hasVerticalParam = urlParams.has('vertical');
    return hasVerticalParam ? null : verticalData['personal-injury'];
  },
  
  // Form data
  formData: {},
  formStarted: false,
  showSuccessModal: false,
  
  // Track form start
  onFormFieldFocus() {
    if (!this.formStarted && this.currentVertical && this.verticalData) {
      this.formStarted = true;
      Analytics.track('email_form_start', {
        vertical: this.currentVertical,
        form_fields: this.verticalData.emailCapture.formFields.map(f => f.name)
      });
    }
  },
  
  submitForm() {
    // Don't proceed if no valid vertical data
    if (!this.currentVertical || !this.verticalData) {
      alert('Please reload the page and try again.');
      return;
    }
    
    // Validate required fields
    const requiredFields = this.verticalData.emailCapture.formFields.filter(f => f.required !== false);
    const missingFields = requiredFields.filter(field => !this.formData[field.name] || this.formData[field.name].trim() === '');
    
    if (missingFields.length > 0) {
      alert(`Please fill in all required fields: ${missingFields.map(f => f.placeholder).join(', ')}`);
      return;
    }
    
    // Track form completion
    Analytics.track('email_form_complete', {
      vertical: this.currentVertical,
      formData: this.formData,
      fields_completed: Object.keys(this.formData).length
    });
    
    console.log('Form submitted:', this.formData);
    
    // Show success modal instead of alert
    this.showSuccessModal = true;
    
    // Track conversion
    Analytics.track('conversion_complete', {
      vertical: this.currentVertical,
      conversion_type: 'email_signup'
    });
    
    // Optional: Clear form after submission
    this.formData = {};
    this.formStarted = false;
  },

  // Analytics password protection methods
  checkAnalyticsAccess() {
    // Check if password was already entered this session
    const sessionAuth = sessionStorage.getItem('analytics_authenticated');
    if (sessionAuth === 'true') {
      this.analyticsAccessGranted = true;
      return;
    }
    
    // Show password prompt
    this.showPasswordPrompt = true;
    this.analyticsAccessGranted = false;
    
    // Auto-focus password input after modal appears
    this.$nextTick(() => {
      if (this.$refs.passwordInput) {
        this.$refs.passwordInput.focus();
      }
    });
  },

  submitAnalyticsPassword() {
    const correctPassword = import.meta.env.VITE_ANALYTICS_PASSWORD || 'SavantAnalytics2024!';
    
    if (this.analyticsPassword === correctPassword) {
      this.analyticsAccessGranted = true;
      this.showPasswordPrompt = false;
      this.analyticsPasswordError = '';
      
      // Remember authentication for this session
      sessionStorage.setItem('analytics_authenticated', 'true');
    } else {
      this.analyticsPasswordError = 'Incorrect password. Please try again.';
      this.analyticsPassword = '';
    }
  },

  closePasswordPrompt() {
    this.showPasswordPrompt = false;
    this.analyticsPassword = '';
    this.analyticsPasswordError = '';
    
    // Redirect to home page if access denied
    window.location.href = window.location.pathname;
  }
  };
});

// Analytics Dashboard Component
Alpine.data('analyticsDashboard', () => ({
  events: [],
  formSubmissions: [],
  verticalStats: {},
  winningVertical: null,
  selectedVertical: null, // Track which vertical is selected for detailed view
  pricingValidation: {},
  dateRange: '7d',
  showResetModal: false,
  
  // Total number of businesses per vertical in the US
  businessCounts: {
    'personal-injury': 45000,
    'hvac': 117449,
    'plumbing': 132000,
    'real-estate': 360000,
    'electrical': 89200,
    'insurance': 39000,
    'dental': 181000,
    'auto-repair': 290000,
    'pest-control': 28000,
    'veterinary': 31000,
    'property-management': 304000,
    'lawn-care': 650000,
    'mortgage-broker': 35000,
    'general-contractors': 25000,
    'accounting': 125000,
    'physical-therapy': 39000,
    'hair-salons': 82000,
    'fitness-studios': 41000,
    'urgent-care': 12000,
    'locksmith': 15000,
    'mental-health': 200000,
    'pet-grooming': 18000,
    'dry-cleaning': 20000,
    'equipment-rental': 8500,
    'storage-facilities': 22000
  },
  
  init() {
    this.loadData();
    setInterval(() => this.loadData(), 30000); // Refresh every 30 seconds
  },
  
  async loadData() {
    try {
      if (window.SupabaseAnalytics) {
        console.log('Loading analytics data from Supabase...');
        // Get data from Supabase
        const analyticsData = await window.SupabaseAnalytics.getAnalyticsData(this.dateRange);
        console.log('Supabase analytics data:', analyticsData);
        
        this.events = this.formatEventsForLocalCompatibility(analyticsData.events || []);
        this.formSubmissions = analyticsData.submissions || [];
        
        console.log('Formatted events:', this.events.length);
        console.log('Form submissions:', this.formSubmissions.length);
      } else {
        console.log('SupabaseAnalytics not available, using localStorage');
        // Fallback to localStorage
        this.events = Analytics.getEvents() || [];
        this.formSubmissions = Analytics.getFormSubmissions() || [];
      }
      this.calculateStats();
    } catch (error) {
      console.error('Failed to load analytics data:', error);
      // Fallback to localStorage on error
      this.events = Analytics.getEvents() || [];
      this.formSubmissions = Analytics.getFormSubmissions() || [];
      this.calculateStats();
    }
  },
  
  // Format Supabase events to match localStorage format for compatibility
  formatEventsForLocalCompatibility(supabaseEvents) {
    return supabaseEvents.map(event => ({
      event: event.event_type,
      data: {
        ...event.event_data,
        timestamp: new Date(event.timestamp).getTime(),
        ip: event.ip_address,
        vertical: event.vertical,
        page: event.page,
        tier_price: event.tier_price,
        utm_source: event.utm_source,
        utm_campaign: event.utm_campaign,
        referrer: event.referrer
      }
    }));
  },
  
  calculateStats() {
    const now = new Date();
    const cutoffDate = new Date();
    
    // Set date range
    switch(this.dateRange) {
      case '1d': cutoffDate.setDate(now.getDate() - 1); break;
      case '7d': cutoffDate.setDate(now.getDate() - 7); break;
      case '30d': cutoffDate.setDate(now.getDate() - 30); break;
      default: cutoffDate.setDate(now.getDate() - 7);
    }
    
    // Filter events by date
    const filteredEvents = this.events.filter(e => {
      const eventDate = new Date(e.data.timestamp);
      return eventDate >= cutoffDate;
    });
    
    // Calculate comprehensive market validation stats
    this.verticalStats = this.calculateVerticalStats(filteredEvents);
    this.winningVertical = this.getWinningVertical();
    
    // Set selectedVertical to winning vertical if not already set, or if winning vertical changed
    if (!this.selectedVertical || (this.winningVertical && this.selectedVertical.vertical !== this.winningVertical.vertical)) {
      this.selectedVertical = this.winningVertical;
    }
    
    this.pricingValidation = this.calculatePricingValidation(filteredEvents);
  },
  
  calculateVerticalStats(events) {
    const verticals = ['personal-injury', 'hvac', 'plumbing', 'real-estate', 'electrical', 'insurance', 'dental', 'auto-repair', 'pest-control', 'veterinary', 'property-management', 'lawn-care', 'mortgage-broker', 'general-contractors', 'accounting', 'physical-therapy', 'hair-salons', 'fitness-studios', 'urgent-care', 'locksmith', 'mental-health', 'pet-grooming', 'dry-cleaning', 'equipment-rental', 'storage-facilities'];
    const stats = {};
    
    verticals.forEach(vertical => {
      const verticalEvents = events.filter(e => e.data && e.data.vertical === vertical);
      
      // Count unique visitors by IP address for each funnel stage
      const landingViews = verticalEvents.filter(e => e.event === 'page_view' && e.data.page === 'landing');
      const uniqueVisitorIPs = new Set(landingViews.map(e => e.data.ip).filter(ip => ip && ip !== 'unknown'));
      const uniqueVisitors = uniqueVisitorIPs.size;
      const totalPageViews = landingViews.length;
      
      // Count unique IPs that clicked pricing button (max 1 per IP)
      const pricingClickEvents = verticalEvents.filter(e => e.event === 'pricing_button_click');
      const uniquePricingIPs = new Set(pricingClickEvents.map(e => e.data.ip).filter(ip => ip && ip !== 'unknown'));
      const pricingClicks = uniquePricingIPs.size;
      
      // Count unique IPs that clicked tier buttons (max 1 per IP)
      const tierClickEvents = verticalEvents.filter(e => e.event === 'pricing_tier_click');
      const uniqueTierIPs = new Set(tierClickEvents.map(e => e.data.ip).filter(ip => ip && ip !== 'unknown'));
      const tierClicks = uniqueTierIPs.size;
      
      // Count unique IPs that completed forms (max 1 per IP)
      const formCompletionEvents = verticalEvents.filter(e => e.event === 'email_form_complete');
      const uniqueFormIPs = new Set(formCompletionEvents.map(e => e.data.ip).filter(ip => ip && ip !== 'unknown'));
      const formCompletions = uniqueFormIPs.size;
      
      // Count unique IPs that started forms (began typing) but didn't complete
      const formStartEvents = verticalEvents.filter(e => e.event === 'email_form_start');
      const uniqueFormStartIPs = new Set(formStartEvents.map(e => e.data.ip).filter(ip => ip && ip !== 'unknown'));
      const formStarts = uniqueFormStartIPs.size - formCompletions; // Subtract completions to avoid double counting
      
      // Count form reaches: people who clicked pricing tiers but didn't start or complete forms
      // (This represents people who reached the form page but didn't begin typing)
      const formReaches = Math.max(0, tierClicks - uniqueFormStartIPs.size);
      
      // Calculate pricing tier distribution (only count latest selection per IP)
      const tierDistribution = { '$79': 0, '$149': 0, '$299': 0 };
      const ipToLatestTier = new Map();
      
      // Get the latest tier selection for each IP
      tierClickEvents
        .filter(e => e.data && e.data.tier_price && e.data.ip && e.data.ip !== 'unknown')
        .sort((a, b) => new Date(a.data.timestamp) - new Date(b.data.timestamp))
        .forEach(e => {
          ipToLatestTier.set(e.data.ip, e.data.tier_price);
        });
      
      // Count the latest selections
      for (const tierPrice of ipToLatestTier.values()) {
        tierDistribution[tierPrice] = (tierDistribution[tierPrice] || 0) + 1;
      }
      
      // Calculate average order value
      const totalTierClicks = tierClicks;
      const avgOrderValue = totalTierClicks > 0 ? 
        ((tierDistribution['$79'] * 79) + (tierDistribution['$149'] * 149) + (tierDistribution['$299'] * 299)) / totalTierClicks 
        : (formCompletions > 0 ? 149 : 0); // Use middle tier ($149) as default if forms completed but no tier clicks
      
      const conversionRate = uniqueVisitors > 0 ? (formCompletions / uniqueVisitors * 100) : 0;
      // Calculate average dollar amount from tier clicks (sum of clicks * price for all tiers / total clicks)
      const avgDollarFromClicks = totalTierClicks > 0 ? 
        ((tierDistribution['$79'] * 79) + (tierDistribution['$149'] * 149) + (tierDistribution['$299'] * 299)) / totalTierClicks 
        : 0;
      const totalRevenue = formCompletions * avgOrderValue;
      
      // Calculate expected revenue from 500 cold email leads
      // 20% of form completions convert, 5% of form starts convert, 3% of form reaches convert
      const expectedRevenue500 = (formCompletions * 0.20 * avgOrderValue) + (formStarts * 0.05 * avgOrderValue) + (formReaches * 0.03 * avgOrderValue);
      
      // Calculate MRR per 1000 emails (expectedRevenue500 * 2 to scale to 1000)
      const mrrPer1000 = expectedRevenue500 * 2;
      
      // Statistical significance (need 30+ unique visitors for basic confidence)
      const isSignificant = uniqueVisitors >= 30;
      const sampleNeeded = Math.max(0, 30 - uniqueVisitors);
      
      stats[vertical] = {
        pageViews: uniqueVisitors, // Now represents unique visitors
        totalPageViews, // Total page views for reference
        pricingClicks,
        tierClicks,
        formCompletions,
        conversionRate: conversionRate.toFixed(1),
        avgOrderValue: avgOrderValue.toFixed(0),
        avgDollar: avgDollarFromClicks.toFixed(0),
        totalRevenue: totalRevenue.toFixed(0),
        formStarts: formStarts,
        formReaches: formReaches,
        expectedRevenue500: expectedRevenue500.toFixed(0),
        mrrPer1000: mrrPer1000.toFixed(2),
        pricingRate: uniqueVisitors > 0 ? (pricingClicks / uniqueVisitors * 100).toFixed(1) : 0,
        trialRate: pricingClicks > 0 ? (tierClicks / pricingClicks * 100).toFixed(1) : 0,
        completionRate: tierClicks > 0 ? (formCompletions / tierClicks * 100).toFixed(1) : 0,
        tierDistribution,
        isSignificant,
        sampleNeeded,
        uniqueIPs: Array.from(uniqueVisitorIPs) // For debugging
      };
    });
    
    return stats;
  },
  
  getWinningVertical() {
    if (!this.verticalStats) return null;
    
    // Find vertical with highest expected revenue from 500 cold email leads
    let winner = null;
    let bestScore = 0;
    
    Object.entries(this.verticalStats).forEach(([vertical, stats]) => {
      if (stats.pageViews >= 1) { // Show current leader with any data
        const score = parseFloat(stats.expectedRevenue500);
        if (score > bestScore) {
          bestScore = score;
          winner = { vertical, stats, score };
        }
      }
    });
    
    return winner;
  },

  // Select a vertical for detailed view
  selectVertical(vertical, stats) {
    this.selectedVertical = { vertical, stats };
  },

  // Get verticals sorted by market readiness score (highest to lowest)
  getVerticalsByReadiness() {
    if (!this.verticalStats) return [];
    
    return Object.entries(this.verticalStats)
      .filter(([vertical, stats]) => stats.pageViews > 0)
      .sort(([,a], [,b]) => parseFloat(this.getMarketReadinessScore(b)) - parseFloat(this.getMarketReadinessScore(a)));
  },
  
  calculatePricingValidation(events) {
    const validation = {};
    const tierEvents = events.filter(e => e.event === 'pricing_tier_click' && e.data && e.data.tier_price);
    
    ['personal-injury', 'hvac', 'plumbing', 'real-estate', 'electrical', 'insurance', 'dental', 'auto-repair', 'pest-control', 'veterinary', 'property-management', 'lawn-care', 'mortgage-broker', 'general-contractors', 'accounting', 'physical-therapy', 'hair-salons', 'fitness-studios', 'urgent-care', 'locksmith', 'mental-health', 'pet-grooming', 'dry-cleaning', 'equipment-rental', 'storage-facilities'].forEach(vertical => {
      const verticalTiers = tierEvents.filter(e => e.data.vertical === vertical);
      
      // Only count latest tier selection per IP for this vertical
      const ipToLatestTier = new Map();
      verticalTiers
        .filter(e => e.data.ip && e.data.ip !== 'unknown')
        .sort((a, b) => new Date(a.data.timestamp) - new Date(b.data.timestamp))
        .forEach(e => {
          ipToLatestTier.set(e.data.ip, e.data.tier_price);
        });
      
      const total = ipToLatestTier.size;
      
      if (total > 0) {
        const tierCounts = { '$79': 0, '$149': 0, '$299': 0 };
        for (const tierPrice of ipToLatestTier.values()) {
          tierCounts[tierPrice] = (tierCounts[tierPrice] || 0) + 1;
        }
        
        validation[vertical] = {
          '$79': Math.round((tierCounts['$79'] / total) * 100),
          '$149': Math.round((tierCounts['$149'] / total) * 100),
          '$299': Math.round((tierCounts['$299'] / total) * 100),
          total
        };
      }
    });
    
    return validation;
  },
  
  getTierBreakdown() {
    if (!this.events || this.events.length === 0) return {};
    
    const tierEvents = this.events.filter(e => 
      e && e.event === 'pricing_tier_click' && e.data &&
      (this.selectedVertical === 'all' || e.data.vertical === this.selectedVertical)
    );
    
    // Only count latest tier selection per IP
    const ipToLatestTier = new Map();
    tierEvents
      .filter(e => e.data.ip && e.data.ip !== 'unknown')
      .sort((a, b) => new Date(a.data.timestamp) - new Date(b.data.timestamp))
      .forEach(e => {
        ipToLatestTier.set(e.data.ip, e.data.tier_price);
      });
    
    const breakdown = {};
    for (const tierPrice of ipToLatestTier.values()) {
      breakdown[tierPrice] = (breakdown[tierPrice] || 0) + 1;
    }
    
    return breakdown;
  },
  
  getVerticalBreakdown() {
    if (!this.events || this.events.length === 0) return {};
    
    const events = this.events.filter(e => 
      e && e.event === 'page_view' && e.data && e.data.page === 'landing'
    );
    
    // Only count unique visitors per vertical
    const verticalToUniqueIPs = new Map();
    events.forEach(e => {
      if (e.data && e.data.vertical && e.data.ip && e.data.ip !== 'unknown') {
        if (!verticalToUniqueIPs.has(e.data.vertical)) {
          verticalToUniqueIPs.set(e.data.vertical, new Set());
        }
        verticalToUniqueIPs.get(e.data.vertical).add(e.data.ip);
      }
    });
    
    const breakdown = {};
    for (const [vertical, ipSet] of verticalToUniqueIPs.entries()) {
      breakdown[vertical] = ipSet.size;
    }
    
    return breakdown;
  },
  
  exportData() {
    const dataStr = JSON.stringify(this.events, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `analytics-export-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
  },

  // Helper functions for the new dashboard
  getSortedVerticals() {
    if (!this.verticalStats) return [];
    
    return Object.entries(this.verticalStats)
      .filter(([vertical, stats]) => stats.pageViews > 0)
      .sort(([,a], [,b]) => parseFloat(b.expectedRevenue500) - parseFloat(a.expectedRevenue500));
  },

  getPricingInsight(vertical, validation) {
    const winner = Object.keys(validation).reduce((a, b) => 
      validation[a] > validation[b] ? a : b
    );
    
    if (validation[winner] >= 60) {
      return `Strong preference for ${winner} tier (${validation[winner]}%)`;
    } else if (validation[winner] >= 40) {
      return `Moderate preference for ${winner} tier (${validation[winner]}%)`;
    } else {
      return `Mixed pricing preferences - no clear winner`;
    }
  },

  getNextSteps() {
    if (!this.winningVertical) return 'Collect more data to identify winning vertical';
    
    const sorted = this.getSortedVerticals();
    const runner_up = sorted[1];
    
    if (runner_up) {
      return `Test ${runner_up[0].replace('-', ' ')} next ($${runner_up[1].expectedRevenue500} expected from 500 emails)`;
    } else {
      return 'Focus all 500 cold emails on winning vertical';
    }
  },

  // Calculate Market Readiness Score (0-10) - Focus on FORM COMPLETION PATTERNS (highest purchase intent)
  getMarketReadinessScore(stats) {
    if (!stats || stats.pageViews === 0) return 0;
    
    // PRIMARY: Form completion rate (% of visitors who gave credit card - highest intent)
    const formCompletionRate = stats.formCompletions / stats.pageViews;
    const completionScore = Math.min(formCompletionRate * 100, 3); // Max 3 points (3% form completion = 3 pts)
    
    // SECONDARY: Form start rate (% who started typing - medium-high intent)  
    const formStartRate = stats.formStarts / stats.pageViews;
    const startScore = Math.min(formStartRate * 50, 2); // Max 2 points (4% form start = 2 pts)
    
    // TERTIARY: Form reach rate (% who reached form but didn't start - medium intent)  
    const formReachRate = stats.formReaches / stats.pageViews;
    const reachScore = Math.min(formReachRate * 50, 1.5); // Max 1.5 points (3% form reach = 1.5 pts)
    
    // QUATERNARY: Expected revenue from 500 leads (business value)
    const expectedRevenue = parseFloat(stats.expectedRevenue500);
    const revenueScore = Math.min(expectedRevenue * 0.004, 2); // Max 2 points ($500+ expected = 2 pts)
    
    // QUATERNARY: Statistical significance
    const confidenceScore = stats.isSignificant ? 1 : 0.5; // 1 point for statistical significance
    
    // BONUS: High form completion rate gets extra points (credit card friction overcome)
    const bonusScore = formCompletionRate >= 0.03 ? 0.5 : 0; // Bonus 0.5 pts for 3%+ form completion
    
    return (completionScore + startScore + reachScore + revenueScore + confidenceScore + bonusScore).toFixed(1);
  },

  // Calculate Revenue Potential for 500 cold email leads - Based on FORM ACTIONS (purchase intent)
  calculateRevenuePotential(stats) {
    if (!stats || stats.pageViews === 0) return { conversions: 0, revenue: 0 };
    
    // Calculate rates from current data
    const formCompletionRate = stats.formCompletions / stats.pageViews;
    const formReachRate = stats.formReaches / stats.pageViews;
    const avgOrderValue = parseFloat(stats.avgOrderValue);
    
    // Project to 500 cold email leads
    const expectedFormCompletions = Math.round(500 * formCompletionRate);
    const expectedFormReaches = Math.round(500 * formReachRate);
    
    // Apply conversion multipliers: 20% of completions convert, 3% of reaches convert
    const paidConversions = Math.round((expectedFormCompletions * 0.20) + (expectedFormReaches * 0.03));
    const revenue = paidConversions * avgOrderValue;
    
    return { 
      formCompletions: expectedFormCompletions,
      formReaches: expectedFormReaches, 
      conversions: paidConversions, 
      revenue 
    };
  },

  // Get funnel drop-off percentages
  getFunnelDropoffs(stats) {
    if (!stats || stats.pageViews === 0) return { landingToPricing: 0, pricingToTrial: 0, trialToComplete: 0 };
    
    const landingToPricingLoss = 100 - parseFloat(stats.pricingRate);
    const pricingToTrialLoss = 100 - parseFloat(stats.trialRate);
    const trialToCompleteLoss = 100 - parseFloat(stats.completionRate);
    
    return {
      landingToPricing: landingToPricingLoss.toFixed(0),
      pricingToTrial: pricingToTrialLoss.toFixed(0),
      trialToComplete: trialToCompleteLoss.toFixed(0)
    };
  },

  // Identify problem areas in funnel
  identifyProblemAreas(dropoffs) {
    const problems = [];
    
    if (parseFloat(dropoffs.landingToPricing) > 60) problems.push('Landing page interest');
    if (parseFloat(dropoffs.pricingToTrial) > 75) problems.push('Pricing resistance');
    if (parseFloat(dropoffs.trialToComplete) > 50) problems.push('Form completion');
    
    return problems;
  },

  // Calculate Total Market Analysis (Total Addressable Market)
  getTotalMarketAnalysis() {
    if (!this.verticalStats) return [];
    
    return Object.entries(this.verticalStats)
      .filter(([vertical, stats]) => stats.pageViews > 0)
      .map(([vertical, stats]) => {
        const businessCount = this.businessCounts[vertical] || 0;
        const mrrPer1000 = parseFloat(stats.mrrPer1000);
        const totalMarketValue = (mrrPer1000 * businessCount).toFixed(0);
        
        return {
          vertical,
          stats,
          businessCount,
          mrrPer1000,
          totalMarketValue: parseInt(totalMarketValue)
        };
      })
      .sort((a, b) => b.totalMarketValue - a.totalMarketValue);
  },

  // Reset data functions
  confirmResetData() {
    this.showResetModal = true;
  },

  cancelReset() {
    this.showResetModal = false;
  },

  resetAllData() {
    try {
      // Clear localStorage analytics data
      localStorage.removeItem('analytics_events');
      localStorage.removeItem('visitor_ip_data');
      localStorage.removeItem('form_submissions');
      
      // Reset component data
      this.events = [];
      this.formSubmissions = [];
      this.verticalStats = {};
      this.winningVertical = null;
      this.pricingValidation = {};
      
      // Close modal
      this.showResetModal = false;
      
      // Show success message
      console.log('Analytics data has been reset successfully');
      
      // Recalculate with empty data
      this.calculateStats();
      
    } catch (error) {
      console.error('Error resetting analytics data:', error);
    }
  }
}));

// Start Alpine
Alpine.start();