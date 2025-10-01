import Alpine from 'alpinejs';

// Make Alpine available globally
window.Alpine = Alpine;

// Vertical data for all 25 verticals
const verticalData = {
  'personal-injury': {
    brand: 'LegalCallAI',
    headline: 'Never Miss Another Case Again',
    subheading: 'Our AI answers 24/7, captures injury details and contact info, and sends you complete intake reports—so you can focus on winning cases, not answering midnight calls.',
    features: [
      {
        icon: '⚡',
        title: '24/7 Case Intake',
        description: 'Answers calls after-hours and weekends, asks "What happened in the accident?", "Were you injured?", "When did this occur?", and captures detailed responses for your review.'
      },
      {
        icon: '🎯',
        title: 'Accident Documentation',
        description: 'Discusses injury severity, accident circumstances, and other party information to build preliminary case profiles while victims are still motivated to hire representation.'
      },
      {
        icon: '📋',
        title: 'Instant Attorney Notification',
        description: 'Sends you text and email summaries with caller details, accident type, injury description, and urgency level—so you can follow up on serious cases immediately.'
      }
    ],
    socialProof: 'Available 24/7',
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
    headline: 'Never Miss Another Job Again',
    subheading: 'Our AI answers while you\'re on-site, diagnoses heating/cooling issues, and schedules appointments by urgency—so you can finish the job you\'re on without missing the next one.',
    features: [
      {
        icon: '❄️',
        title: 'Emergency Call Screening',
        description: 'Answers immediately, asks "Is your heating or cooling not working?", "When did it stop?", "Is anyone uncomfortable?", and determines if it\'s an emergency or routine service.'
      },
      {
        icon: '⚡',
        title: 'Service Appointment Booking',
        description: 'Checks your calendar availability, offers appointment times, books the service call, and captures the address and problem description for your technicians.'
      },
      {
        icon: '📅',
        title: 'Pricing & Quote Questions',
        description: 'Answers common questions about service call costs, maintenance pricing, and system replacement estimates based on your standard pricing structure.'
      }
    ],
    socialProof: 'Available 24/7',
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
    headline: 'Never Miss Another Job Again',
    subheading: 'Our AI triages plumbing problems, dispatches for emergencies, and books routine appointments—so you can focus on fixing pipes, not juggling phone calls.',
    features: [
      {
        icon: '🚨',
        title: 'Emergency vs. Routine Triage',
        description: 'Answers every call, asks "What\'s the plumbing issue?", "Is there water damage?", "Has the water been shut off?", and immediately routes true emergencies to your on-call tech.'
      },
      {
        icon: '💧',
        title: 'Service Call Booking',
        description: 'Schedules non-emergency appointments, captures property details and access instructions, explains your service call fees, and confirms the booking via text.'
      },
      {
        icon: '📱',
        title: 'After-Hours Dispatch',
        description: 'Handles late-night burst pipes and flooding emergencies by immediately notifying your on-call plumber with the address, problem type, and customer contact info.'
      }
    ],
    socialProof: 'Available 24/7',
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
    headline: 'Never Miss Another Lead Again',
    subheading: 'Our AI answers property questions, captures buyer interest, and books showing appointments—so you can focus on closing deals, not playing phone tag.',
    features: [
      {
        icon: '🏠',
        title: 'Property Inquiry Handling',
        description: 'Answers calls about listings, asks "Which property are you calling about?", "What interests you about it?", provides basic information like price and bedrooms, and qualifies their timeline.'
      },
      {
        icon: '📅',
        title: 'Showing Coordination',
        description: 'Books property showings by checking your calendar, offering available times, confirming the appointment, and sending address and showing instructions to both parties.'
      },
      {
        icon: '🚀',
        title: 'Lead Qualification',
        description: 'Asks about pre-approval status, desired move-in timeline, and must-have features to help you prioritize which leads to follow up with first.'
      }
    ],
    socialProof: 'Available 24/7',
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
    headline: 'Never Miss Another Job Again',
    subheading: 'Our AI assesses electrical problems, dispatches for emergencies, and schedules service calls—so you can safely complete the job at hand.',
    features: [
      {
        icon: '⚡',
        title: 'Safety Emergency Assessment',
        description: 'Answers immediately, asks "Is anything sparking or smoking?", "Do you smell burning?", "Has the power been shut off?", and escalates dangerous situations to your emergency line.'
      },
      {
        icon: '🚨',
        title: 'Service Call Scheduling',
        description: 'Books non-emergency electrical work, captures details about outlets, breakers, or wiring issues, provides estimated service call costs, and confirms appointments.'
      },
      {
        icon: '📋',
        title: 'Code & Permit Questions',
        description: 'Answers common questions about electrical permits, inspection requirements, and building code compliance based on your area\'s regulations.'
      }
    ],
    socialProof: 'Available 24/7',
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
    headline: 'Never Miss Another Quote Again',
    subheading: 'Our AI calls leads in 60 seconds, captures coverage needs, and schedules quote consultations—so you win the speed game while in meetings.',
    features: [
      {
        icon: '🏃',
        title: 'Instant Lead Response',
        description: 'Calls back web inquiries within 60 seconds, asks "What type of insurance are you shopping for?", "What coverage do you currently have?", and captures policy details while they\'re actively comparing quotes.'
      },
      {
        icon: '🎯',
        title: 'Coverage Needs Discussion',
        description: 'Asks about vehicles, property, business needs, current insurance costs, and coverage gaps to build a preliminary profile before your consultation.'
      },
      {
        icon: '📊',
        title: 'Consultation Scheduling',
        description: 'Books quote appointments at convenient times, explains your quote process, sends calendar invitations, and confirms via text message.'
      }
    ],
    socialProof: 'Available 24/7',
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
    headline: 'Never Miss Another Patient Again',
    subheading: 'Our AI handles new patient questions, verifies insurance, and books appointments—so you can focus on patient care, not phone management.',
    features: [
      {
        icon: '🦷',
        title: 'New Patient Intake',
        description: 'Answers calls before office hours, asks "Are you a new patient?", "What brings you in?", "Do you have dental insurance?", and begins the intake process before your staff arrives.'
      },
      {
        icon: '📅',
        title: 'Appointment Scheduling',
        description: 'Books cleanings, emergency visits, and consultations by checking your calendar, offering available times, and sending appointment confirmations to patients.'
      },
      {
        icon: '💳',
        title: 'Dental Emergency Screening',
        description: 'Asks about pain level, swelling, broken teeth, or bleeding to determine if same-day emergency care is needed or if it can wait.'
      }
    ],
    socialProof: 'Available 24/7',
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
    headline: 'Never Miss Another Customer Again',
    subheading: 'Our AI diagnoses car problems, coordinates towing, and schedules repairs with estimates—so you can stay under the hood, not on the phone.',
    features: [
      {
        icon: '🚗',
        title: 'Breakdown Call Handling',
        description: 'Answers immediately, asks "What\'s happening with your vehicle?", "Are you stranded?", "Where are you located?", and arranges towing if needed while booking the repair.'
      },
      {
        icon: '🔧',
        title: 'Service Appointment Booking',
        description: 'Schedules oil changes, inspections, and repairs by checking bay availability, asking about vehicle symptoms, and providing estimated completion times.'
      },
      {
        icon: '📋',
        title: 'Repair Cost Questions',
        description: 'Discusses common repair costs, explains diagnostic fees, provides ballpark estimates for typical jobs, and sets expectations before booking.'
      }
    ],
    socialProof: 'Available 24/7',
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
    headline: 'Never Miss Another Call Again',
    subheading: 'Our AI identifies pest issues, determines urgency, and schedules inspections or treatments—so you can focus on eliminating pests, not answering panicked calls.',
    features: [
      {
        icon: '🐛',
        title: 'Infestation Assessment',
        description: 'Answers calls about pest problems, asks "What kind of pest are you seeing?", "Where in the home?", "How many have you seen?", and determines treatment urgency.'
      },
      {
        icon: '📅',
        title: 'Inspection & Treatment Scheduling',
        description: 'Books inspection appointments, explains your treatment process, provides service cost estimates, and confirms scheduling via text.'
      },
      {
        icon: '🗺️',
        title: 'Pest Identification Help',
        description: 'Discusses what homeowners are seeing to help identify bed bugs, termites, rodents, or other pests and recommend appropriate next steps.'
      }
    ],
    socialProof: 'Available 24/7',
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
    headline: 'Never Miss Another Visit Again',
    subheading: 'Our AI triages pet symptoms, directs emergencies appropriately, and books appointments—so you can focus on treating animals, not managing worried calls.',
    features: [
      {
        icon: '❤️',
        title: 'Compassionate Symptom Assessment',
        description: 'Answers calls gently, asks "What\'s happening with your pet?", "How long has this been going on?", "Is your pet eating and drinking?", and provides caring guidance.'
      },
      {
        icon: '⏰',
        title: 'Emergency vs. Routine Triage',
        description: 'Determines if symptoms require immediate emergency care or can wait for a regular appointment, and directs pet parents to appropriate care based on severity.'
      },
      {
        icon: '📋',
        title: 'Appointment Booking',
        description: 'Schedules wellness visits, vaccinations, and sick pet appointments by checking your calendar, asking about pet history, and confirming via text.'
      }
    ],
    socialProof: 'Available 24/7',
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
    headline: 'Never Miss Another Lead Again',
    subheading: 'Our AI handles tenant calls 24/7, triages maintenance issues, and creates work orders—so you\'re not on-call every night for minor issues.',
    features: [
      {
        icon: '🏠',
        title: 'Emergency vs. Non-Emergency Screening',
        description: 'Answers maintenance calls, asks "What\'s the issue?", "Is anyone in danger?", "Has anything been damaged?", and routes true emergencies to your on-call staff while scheduling routine repairs.'
      },
      {
        icon: '🔧',
        title: 'Work Order Creation',
        description: 'Captures detailed maintenance requests, tenant contact info, unit number, access instructions, and problem descriptions to send your maintenance team.'
      },
      {
        icon: '📱',
        title: 'Tenant Question Handling',
        description: 'Answers common questions about rent payment, lease terms, amenities, parking, and pet policies based on your property rules.'
      }
    ],
    socialProof: 'Available 24/7',
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
    headline: 'Never Miss Another Job Again',
    subheading: 'Our AI captures service needs, provides pricing, and books appointments by address—so you can stay on the mower, not answering spring rush calls.',
    features: [
      {
        icon: '🌱',
        title: 'Service Request Handling',
        description: 'Answers calls about lawn care, asks "What service do you need?", "How big is your lawn?", "When would you like us to come?", and explains your service offerings.'
      },
      {
        icon: '📅',
        title: 'Appointment & Route Scheduling',
        description: 'Books new clients based on geographic efficiency, offers available service days, confirms lawn size and access, and schedules recurring services.'
      },
      {
        icon: '🔄',
        title: 'Pricing & Package Questions',
        description: 'Discusses lawn care packages, one-time services, seasonal pricing, and treatment options based on customer needs and your service menu.'
      }
    ],
    socialProof: 'Available 24/7',
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
    headline: 'Never Miss Another Lead Again',
    subheading: 'Our AI calls leads in 60 seconds, captures loan details, and schedules consultations—so you close more loans while in underwriting meetings.',
    features: [
      {
        icon: '⚡',
        title: 'Instant Lead Callback',
        description: 'Calls web inquiries within 60 seconds, asks "Are you buying or refinancing?", "What\'s your loan amount?", "What rate were you quoted elsewhere?", and captures key borrower details.'
      },
      {
        icon: '📊',
        title: 'Loan Pre-Qualification',
        description: 'Asks about income, credit score, down payment, and employment to provide preliminary qualification feedback before your detailed consultation.'
      },
      {
        icon: '🏃',
        title: 'Consultation Scheduling',
        description: 'Books appointments for full loan applications, explains required documents, sends calendar invites, and confirms via text message.'
      }
    ],
    socialProof: 'Available 24/7',
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
    headline: 'Never Miss Another Project Again',
    subheading: 'Our AI captures project scope, discusses budget/timeline, and schedules estimates—so you can focus on building, not phone screening.',
    features: [
      {
        icon: '🏗️',
        title: 'Project Inquiry Handling',
        description: 'Answers calls about construction projects, asks "What are you looking to build or remodel?", "What\'s your timeline?", "Do you have a budget in mind?", and captures scope details.'
      },
      {
        icon: '📋',
        title: 'Estimate Appointment Booking',
        description: 'Schedules on-site estimates, captures property address and access instructions, explains your estimate process, and confirms appointments.'
      },
      {
        icon: '💰',
        title: 'Budget & Timeline Discussion',
        description: 'Discusses project costs, typical timelines for different job types, required permits, and sets realistic expectations before the estimate visit.'
      }
    ],
    socialProof: 'Available 24/7',
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
    headline: 'Never Miss Another Client Again',
    subheading: 'Our AI manages tax season calls, captures new client inquiries, and schedules appointments—so you can focus on returns, not reception duties.',
    features: [
      {
        icon: '📊',
        title: 'Tax Season Call Management',
        description: 'Handles the overwhelming volume of client calls from January through April, asks "Do you need tax prep, a consultation, or have a question?", and routes appropriately.'
      },
      {
        icon: '📅',
        title: 'Smart Appointment Optimization',
        description: 'Automatically schedules tax prep appointments, quarterly reviews, and consultations based on service type and CPA availability without interrupting your work.'
      },
      {
        icon: '💼',
        title: 'New Client Qualification',
        description: 'Pre-screens potential clients by business complexity, service needs, and engagement value to help you focus on profitable relationships.'
      }
    ],
    socialProof: 'Available 24/7',
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
    headline: 'Never Miss Another Appointment Again',
    subheading: 'Our AI handles billing questions, verifies insurance, and schedules evaluations—so you can focus on patient treatment, not administrative calls.',
    features: [
      {
        icon: '🏥',
        title: 'New Patient Intake',
        description: 'Answers injury calls, asks "What happened?", "Where does it hurt?", "Do you have insurance?", and begins the intake process before the first appointment.'
      },
      {
        icon: '📅',
        title: 'Appointment Scheduling',
        description: 'Books initial evaluations, follow-up sessions, and discharge planning based on insurance coverage and therapist availability without interrupting your treatment time.'
      },
      {
        icon: '📋',
        title: 'Insurance Verification',
        description: 'Collects insurance information, explains coverage and copays, discusses pre-authorization if needed, and sets payment expectations.'
      }
    ],
    socialProof: 'Available 24/7',
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
    subheading: 'Our AI checks availability, books appointments, and sends confirmations—so you can focus on your current client, not your ringing phone.',
    features: [
      {
        icon: '✂️',
        title: '24/7 Appointment Booking',
        description: 'Schedules cuts, colors, and treatments instantly by checking stylist availability and managing your booking calendar in real-time without interrupting your work.'
      },
      {
        icon: '💬',
        title: 'Service Consultation',
        description: 'Discusses hair goals, previous treatments, and allergies to recommend appropriate services and estimate timing and pricing before booking.'
      },
      {
        icon: '📱',
        title: 'Client Communication Hub',
        description: 'Sends appointment confirmations, reminder texts, and follow-up messages to reduce no-shows and encourage rebooking.'
      }
    ],
    socialProof: 'Available 24/7',
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
    headline: 'Never Miss Another Member Again',
    subheading: 'Our AI captures fitness goals, discusses membership options, and books trials/tours—so you can lead that packed class without missing new members.',
    features: [
      {
        icon: '🏋️',
        title: 'Membership Inquiry Handling',
        description: 'Answers questions about memberships, asks "What are your fitness goals?", "What classes interest you?", explains pricing and packages, and schedules facility tours.'
      },
      {
        icon: '📅',
        title: 'Class & Training Booking',
        description: 'Books group classes, personal training sessions, and specialized programs based on member preferences and instructor availability.'
      },
      {
        icon: '💪',
        title: 'Trial Session Scheduling',
        description: 'Offers free trial classes to prospects, captures contact info and availability, sends class schedules and what-to-bring instructions.'
      }
    ],
    socialProof: 'Available 24/7',
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
    headline: 'Never Miss Another Visit Again',
    subheading: 'Our AI triages symptoms, provides wait times, and captures patient information—so your staff focuses on walk-ins, not constant phone interruptions.',
    features: [
      {
        icon: '🏥',
        title: 'Medical Triage Assistant',
        description: 'Assesses symptom urgency, asks "What are your symptoms?", "How long has this been going on?", "Do you have insurance?", and directs patients to appropriate care levels.'
      },
      {
        icon: '🔍',
        title: 'Insurance Verification',
        description: 'Collects insurance information, verifies coverage, explains copays and costs, and pre-registers patients before arrival to streamline check-in.'
      },
      {
        icon: '📋',
        title: 'Wait Time Communication',
        description: 'Provides current wait time estimates, explains what to bring, sends address and parking instructions, and updates patients if delays occur.'
      }
    ],
    socialProof: 'Available 24/7',
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
    headline: 'Never Miss Another Call Again',
    subheading: 'Our AI handles 24/7 emergencies, provides pricing, and dispatches nearest technician—so every stranded customer gets help, even at 2 AM.',
    features: [
      {
        icon: '🔐',
        title: 'Emergency Lockout Response',
        description: 'Handles urgent lockout calls, asks "What are you locked out of?", "Where are you located?", "Do you need emergency service?", and dispatches immediately with all details.'
      },
      {
        icon: '🏠',
        title: 'Service Pricing & Dispatch',
        description: 'Provides upfront locksmith pricing for different services, confirms customer location, dispatches nearest available technician, and sends arrival time estimates.'
      },
      {
        icon: '⏰',
        title: 'Security Consultation Scheduling',
        description: 'Books appointments for lock installations, rekeying, and security assessments by capturing property details and scheduling convenient times.'
      }
    ],
    socialProof: 'Available 24/7',
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
    headline: 'Never Miss Another Client Again',
    subheading: 'Our AI handles calls with empathy, verifies insurance, and schedules sessions—so you can focus on your current session, not missed calls.',
    features: [
      {
        icon: '🧠',
        title: 'Compassionate Intake Support',
        description: 'Answers calls empathetically, asks "How can we help you?", "Have you been in therapy before?", "What brings you in?", and begins the intake process respectfully.'
      },
      {
        icon: '📅',
        title: 'Therapeutic Appointment Matching',
        description: 'Books therapy sessions based on therapist specialties, availability, and client needs while handling insurance verification and copay discussions.'
      },
      {
        icon: '💬',
        title: 'Crisis Resource Directory',
        description: 'Recognizes urgent situations, provides immediate crisis helpline numbers and emergency resources, and escalates to on-call clinicians when appropriate.'
      }
    ],
    socialProof: 'Available 24/7',
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
    headline: 'Never Miss Another Appointment Again',
    subheading: 'Our AI captures breed and service needs, provides pricing, and books appointments—so you can focus on the dog in front of you, not scheduling chaos.',
    features: [
      {
        icon: '🐕',
        title: 'Breed-Specific Booking',
        description: 'Schedules grooming appointments, asks "What breed is your pet?", "What grooming services do you need?", "When would you like to come in?", and provides service time estimates.'
      },
      {
        icon: '✂️',
        title: 'Service Consultation',
        description: 'Discusses grooming needs, coat condition, special requests, health issues that affect grooming, and recommends appropriate services with pricing.'
      },
      {
        icon: '📱',
        title: 'Appointment Reminders',
        description: 'Sends booking confirmations, day-before reminders, and pickup notifications to reduce no-shows and keep your schedule full.'
      }
    ],
    socialProof: 'Available 24/7',
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
    headline: 'Never Miss Another Order Again',
    subheading: 'Our AI provides garment pricing, schedules pickups/deliveries, and handles order status—so you can focus on quality cleaning, not phone interruptions.',
    features: [
      {
        icon: '👔',
        title: 'Garment Care Consultation',
        description: 'Discusses fabric types and cleaning needs, asks "What needs cleaning?", "Are there any stains?", "When do you need it back?", and provides accurate pricing.'
      },
      {
        icon: '🚚',
        title: 'Pickup & Delivery Coordination',
        description: 'Schedules convenient pickup and delivery times, manages route optimization, handles special delivery instructions, and confirms appointments.'
      },
      {
        icon: '⏰',
        title: 'Order Status Communication',
        description: 'Provides real-time updates on cleaning progress, sends ready-for-pickup notifications, and handles customer inquiries about orders.'
      }
    ],
    socialProof: 'Available 24/7',
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
    headline: 'Never Miss Another Rental Again',
    subheading: 'Our AI checks availability, provides pricing/terms, and books rentals with delivery—so you can manage the yard, not juggle inquiry calls.',
    features: [
      {
        icon: '🚜',
        title: 'Equipment Availability Engine',
        description: 'Checks real-time inventory, asks "What equipment do you need?", "When do you need it?", "How long do you need it?", and provides pricing for different rental periods.'
      },
      {
        icon: '📋',
        title: 'Project Consultation',
        description: 'Discusses project requirements, recommends appropriate equipment, calculates total rental costs including delivery, and ensures proper equipment selection.'
      },
      {
        icon: '🚚',
        title: 'Delivery Coordination',
        description: 'Schedules equipment delivery and pickup times, captures job site addresses and access details, manages driver routes, and sends delivery confirmations.'
      }
    ],
    socialProof: 'Available 24/7',
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
    headline: 'Never Miss Another Inquiry Again',
    subheading: 'Our AI checks unit availability, provides pricing, and schedules tours or move-ins—so you capture every lead, even after hours.',
    features: [
      {
        icon: '🏢',
        title: 'Unit Availability & Pricing',
        description: 'Provides real-time unit availability, asks "How much space do you need?", "When do you need to move in?", explains pricing and features for different unit sizes.'
      },
      {
        icon: '📦',
        title: 'Storage Needs Assessment',
        description: 'Assesses customer storage requirements, recommends appropriate unit sizes, explains facility features like climate control and security, and answers access questions.'
      },
      {
        icon: '🔐',
        title: 'Tour & Move-In Scheduling',
        description: 'Books facility tours at convenient times, schedules move-in appointments, explains lease terms and payment options, and sends directions.'
      }
    ],
    socialProof: 'Available 24/7',
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
    pageLoadTimestamp: null,
    pageExitTracked: false,
    pageHiddenTimestamp: null,
    pageTimingListenersAdded: false,
    historyListenersAdded: false,
    
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

    this.resetPageTimingState();
    this.setupPageTimingListeners();
    this.setupHistoryListener();
  },
  
  goToPage(page, tierData = null) {
    const previousPage = this.currentPage;

    if (this.currentVertical && this.pageLoadTimestamp !== null) {
      this.trackPageDuration({
        reason: 'navigation',
        next_page: page,
        previous_page: previousPage
      });
    }
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

    this.resetPageTimingState();
  },

  setupPageTimingListeners() {
    if (this.pageTimingListenersAdded) {
      return;
    }

    const handleExit = (extraData = {}) => {
      this.trackPageDuration(extraData);
    };

    const visibilityHandler = () => {
      if (document.visibilityState === 'hidden') {
        this.pageHiddenTimestamp = Date.now();
        handleExit({ reason: 'tab_hidden' });
      } else if (document.visibilityState === 'visible') {
        if (this.pageHiddenTimestamp) {
          const timeHiddenMs = Date.now() - this.pageHiddenTimestamp;
          const timeHiddenSeconds = Math.max(0, Math.round(timeHiddenMs / 1000));
          this.pageHiddenTimestamp = null;

          if (this.currentVertical && this.pageLoadTimestamp !== null) {
            Analytics.track('page_resume', {
              vertical: this.currentVertical,
              page: this.currentPage,
              time_hidden_seconds: timeHiddenSeconds
            });
          }
        }

        this.resetPageTimingState();
      }
    };

    const beforeUnloadHandler = () => {
      handleExit({ reason: 'before_unload' });
    };

    const pageHideHandler = () => {
      handleExit({ reason: 'page_hide' });
      if (!document.hidden) {
        this.resetPageTimingState();
      }
    };

    document.addEventListener('visibilitychange', visibilityHandler);
    window.addEventListener('beforeunload', beforeUnloadHandler);
    window.addEventListener('pagehide', pageHideHandler);

    this.pageTimingListenersAdded = true;

    this.$watch('currentPage', () => {
      this.resetPageTimingState();
    });

    this._cleanupPageTimingListeners = () => {
      document.removeEventListener('visibilitychange', visibilityHandler);
      window.removeEventListener('beforeunload', beforeUnloadHandler);
      window.removeEventListener('pagehide', pageHideHandler);
      this.pageTimingListenersAdded = false;
    };
  },

  trackPageDuration(extraData = {}) {
    if (!this.currentVertical || this.pageLoadTimestamp === null) {
      return;
    }

    if (this.pageExitTracked) {
      return;
    }

    const timeOnPageMs = Date.now() - this.pageLoadTimestamp;
    const timeOnPageSeconds = Math.max(0, Math.round(timeOnPageMs / 1000));

    this.pageExitTracked = true;

    Analytics.track('page_exit', {
      vertical: this.currentVertical,
      page: this.currentPage,
      time_on_page_seconds: timeOnPageSeconds,
      ...extraData
    });
  },

  resetPageTimingState() {
    this.pageLoadTimestamp = Date.now();
    this.pageExitTracked = false;
    this.pageHiddenTimestamp = null;
  },

  setupHistoryListener() {
    if (this.historyListenersAdded) {
      return;
    }

    window.addEventListener('popstate', () => {
      const urlParams = new URLSearchParams(window.location.search);
      const page = urlParams.get('page');
      const vertical = urlParams.get('vertical');

      if (vertical && verticalData[vertical]) {
        this.currentVertical = vertical;
        window.currentVertical = vertical;
      }

      const validPages = ['landing', 'pricing', 'email-capture', 'analytics'];
      const targetPage = page && validPages.includes(page) ? page : 'landing';

      if (targetPage !== this.currentPage) {
        const previousPage = this.currentPage;
        this.currentPage = targetPage;
        window.currentPage = targetPage;

        if (targetPage === 'analytics') {
          this.checkAnalyticsAccess();
        } else {
          this.showPasswordPrompt = false;
          this.analyticsAccessGranted = false;
        }

        // Track page view for restored page if vertical is known
        if (this.currentVertical) {
          Analytics.track('page_view', {
            page: this.currentPage,
            vertical: this.currentVertical,
            previous_page: previousPage,
            navigation_type: 'history'
          });
        }

        this.resetPageTimingState();
      }
    });

    this.historyListenersAdded = true;
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
  
  // Activity filters
  activityEventFilter: '',
  activityVerticalFilter: '',
  activitySearchFilter: '',
  
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
        const analyticsData = await window.SupabaseAnalytics.getAnalyticsData(this.dateRange);
        console.log('Supabase analytics data:', analyticsData);

        this.events = this.formatEventsForLocalCompatibility(analyticsData.events || []);
        this.formSubmissions = analyticsData.submissions || [];
        this.verticalStats = analyticsData.verticalStats || {};
        this.pricingValidation = analyticsData.pricingValidation || {};
        this.eventsSource = 'supabase';

        console.log('Formatted events:', this.events.length);
        console.log('Form submissions:', this.formSubmissions.length);
      } else {
        console.log('SupabaseAnalytics not available, using localStorage');
        this.events = Analytics.getEvents() || [];
        this.formSubmissions = Analytics.getFormSubmissions() || [];
        this.verticalStats = this.calculateVerticalStats(this.events);
        this.pricingValidation = this.calculatePricingValidation(this.events);
        this.eventsSource = 'local';
      }
      this.finalizeStats();
    } catch (error) {
      console.error('Failed to load analytics data:', error);
      this.events = Analytics.getEvents() || [];
      this.formSubmissions = Analytics.getFormSubmissions() || [];
      this.verticalStats = this.calculateVerticalStats(this.events);
      this.pricingValidation = this.calculatePricingValidation(this.events);
      this.eventsSource = 'local';
      this.finalizeStats();
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
  
  finalizeStats() {
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
    const recalculatedStats = this.calculateVerticalStats(filteredEvents);
    const recalculatedPricingValidation = this.calculatePricingValidation(filteredEvents);

    // Merge Supabase stats (authoritative) with recalculated defaults if needed
    if (this.eventsSource === 'supabase' && this.verticalStats && Object.keys(this.verticalStats).length > 0) {
      this.verticalStats = mergeStats(this.verticalStats, recalculatedStats);
      this.pricingValidation = mergePricingValidation(this.pricingValidation, recalculatedPricingValidation);
    } else {
      this.verticalStats = recalculatedStats;
      this.pricingValidation = recalculatedPricingValidation;
    }
    this.winningVertical = this.getWinningVertical();
    
    // Set selectedVertical to winning vertical if not already set, or if winning vertical changed
    if (!this.selectedVertical || (this.winningVertical && this.selectedVertical.vertical !== this.winningVertical.vertical)) {
      this.selectedVertical = this.winningVertical;
    }
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
        sampleNeeded
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
      .sort(([verticalA, a], [verticalB, b]) => {
        // Primary sort: Expected Revenue (dollar amount)
        const revenueDiff = parseFloat(b.expectedRevenue500) - parseFloat(a.expectedRevenue500);
        if (revenueDiff !== 0) return revenueDiff;
        
        // Tiebreaker 1: Conversion Rate
        const convRateDiff = parseFloat(b.conversionRate) - parseFloat(a.conversionRate);
        if (convRateDiff !== 0) return convRateDiff;
        
        // Tiebreaker 2: Completed (form completions)
        const completedDiff = b.formCompletions - a.formCompletions;
        if (completedDiff !== 0) return completedDiff;
        
        // Tiebreaker 3: To Trial (tier clicks)
        const trialDiff = b.tierClicks - a.tierClicks;
        if (trialDiff !== 0) return trialDiff;
        
        // Tiebreaker 4: To Pricing (pricing clicks)
        const pricingDiff = b.pricingClicks - a.pricingClicks;
        if (pricingDiff !== 0) return pricingDiff;
        
        // Tiebreaker 5: Visitors (page views)
        const visitorsDiff = b.pageViews - a.pageViews;
        if (visitorsDiff !== 0) return visitorsDiff;
        
        // Final tiebreaker: Alphabetical
        return verticalA.localeCompare(verticalB);
      });
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
      this.finalizeStats();
      
    } catch (error) {
      console.error('Error resetting analytics data:', error);
    }
  }
}));

// Start Alpine
Alpine.start();

function mergeStats(serverStats, recalculatedStats) {
  if (!serverStats || Object.keys(serverStats).length === 0) return recalculatedStats;
  if (!recalculatedStats || Object.keys(recalculatedStats).length === 0) return serverStats;

  const merged = { ...serverStats };

  Object.entries(recalculatedStats).forEach(([vertical, stats]) => {
    if (!merged[vertical]) {
      merged[vertical] = stats;
      return;
    }

    const authoritative = merged[vertical];

    merged[vertical] = {
      ...stats,
      pageViews: authoritative.pageViews,
      totalPageViews: authoritative.totalPageViews,
      pricingClicks: authoritative.pricingClicks,
      tierClicks: authoritative.tierClicks,
      formCompletions: authoritative.formCompletions,
      expectedRevenue500: authoritative.expectedRevenue500,
      mrrPer1000: authoritative.mrrPer1000
    };
  });

  return merged;
}

function mergePricingValidation(serverValidation, recalculatedValidation) {
  if (!serverValidation || Object.keys(serverValidation).length === 0) return recalculatedValidation;
  if (!recalculatedValidation || Object.keys(recalculatedValidation).length === 0) return serverValidation;

  const merged = { ...serverValidation };

  Object.entries(recalculatedValidation).forEach(([vertical, validation]) => {
    merged[vertical] = {
      ...(serverValidation[vertical] || {}),
      ...validation
    };
  });

  return merged;
}