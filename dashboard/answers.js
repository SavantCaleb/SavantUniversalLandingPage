import React, { useState } from 'react';
import { 
  Plus, Save, Trash2, Edit2, ChevronDown, ChevronUp, X, 
  DollarSign, Clock, GripVertical, Copy, 
  Settings, FileText, HelpCircle, ArrowRight, Check,
  Zap, Sparkles, ChevronRight
} from 'lucide-react';

const ServiceConfigurationSimplified = () => {
  const [selectedVertical, setSelectedVertical] = useState('HVAC');
  const [selectedService, setSelectedService] = useState('AC Repair');
  const [aiDescription, setAiDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [questions, setQuestions] = useState([
    {
      id: 'hvac_001',
      question: 'What type of system do you have?',
      type: 'select_one',
      options: ['Central AC', 'Window Unit', 'Split System', 'Heat Pump', 'Not Sure'],
      required: true,
      affects_pricing: true,
      affects_scheduling: false,
      pricing_rules: [
        {
          condition: 'Central AC',
          effect: '+30% (larger system)',
          value: { type: 'multiply', amount: 1.3 }
        }
      ],
      scheduling_rules: [],
      follow_up_questions: [
        {
          condition: 'Central AC',
          question: 'What brand is your central AC system?',
          type: 'select_one',
          options: ['Carrier', 'Trane', 'Goodman', 'Rheem', 'Other'],
          affects_pricing: true,
          pricing_rules: [
            {
              condition: 'Trane',
              effect: '+15% (premium parts)',
              value: { type: 'add_percent', amount: 15 }
            }
          ]
        }
      ],
      ai_context: 'Listen for system details. If unsure, help identify by location (indoor/outdoor units).',
      order: 1
    },
    {
      id: 'hvac_002',
      question: 'Is this an emergency?',
      type: 'yes_no',
      required: true,
      affects_pricing: true,
      affects_scheduling: true,
      pricing_rules: [
        {
          condition: 'yes',
          effect: '+$75 emergency fee',
          value: { type: 'add_fee', amount: 75 }
        }
      ],
      scheduling_rules: [
        {
          condition: 'yes',
          effect: 'Next available slot, senior tech only',
          value: { type: 'priority', level: 'urgent' }
        }
      ],
      follow_up_questions: [],
      ai_context: 'Express empathy if yes. Listen for urgency indicators (temperature, health concerns).',
      order: 2
    }
  ]);
  const [expandedQuestions, setExpandedQuestions] = useState({});
  const [editingQuestion, setEditingQuestion] = useState(null);
  const [editingFollowUp, setEditingFollowUp] = useState(null);
  const [showFollowUpModal, setShowFollowUpModal] = useState(false);

  const verticals = [
    'HVAC', 'Plumbing', 'Electrical', 'Law', 'Dental', 'Auto Repair',
    'Pest Control', 'Veterinary', 'Property Management', 'Lawn Care',
    'Locksmith', 'Mental Health', 'Pet Grooming', 'Dry Cleaning',
    'Equipment Rental', 'Storage', 'IT Services', 'Insurance',
    'Real Estate', 'Accounting', 'Physical Therapy', 'Hair Salon',
    'Fitness', 'Urgent Care', 'Mortgage'
  ];

  const services = {
    'HVAC': ['AC Repair', 'Heating Repair', 'Maintenance', 'Installation', 'Emergency Service'],
    'Plumbing': ['Leak Repair', 'Drain Cleaning', 'Installation', 'Emergency Service', 'Water Heater'],
    'Law': ['Personal Injury', 'Divorce', 'Criminal Defense', 'Estate Planning', 'Business Law'],
    'Dental': ['Cleaning', 'Filling', 'Crown', 'Root Canal', 'Emergency', 'Cosmetic'],
    'Auto Repair': ['Oil Change', 'Brakes', 'Engine Repair', 'Inspection', 'Tires']
  };

  const questionTypes = [
    { value: 'text_input', label: 'Text Input', icon: '📝' },
    { value: 'number_input', label: 'Number', icon: '🔢' },
    { value: 'select_one', label: 'Single Choice', icon: '⭕' },
    { value: 'select_multiple', label: 'Multiple Choice', icon: '☑️' },
    { value: 'yes_no', label: 'Yes/No', icon: '✅' },
    { value: 'date_picker', label: 'Date', icon: '📅' },
    { value: 'time_picker', label: 'Time', icon: '⏰' }
  ];

  const handleAiGenerate = () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      // AI would parse the description and generate questions
      // For demo, we'll just show a success state
      setIsGenerating(false);
      setAiDescription('');
      // Questions would be populated based on AI parsing
    }, 2000);
  };

  const handleAddQuestion = () => {
    const newQuestion = {
      id: `${selectedVertical.toLowerCase()}_${Date.now()}`,
      question: '',
      type: 'text_input',
      options: [],
      required: true, // All questions are required by default
      affects_pricing: false,
      affects_scheduling: false,
      pricing_rules: [],
      scheduling_rules: [],
      follow_up_questions: [],
      ai_context: '',
      order: questions.length + 1
    };
    setQuestions([...questions, newQuestion]);
    setEditingQuestion(newQuestion.id);
    setExpandedQuestions({ ...expandedQuestions, [newQuestion.id]: true });
  };

  const handleUpdateQuestion = (questionId, updates) => {
    setQuestions(questions.map(q => 
      q.id === questionId ? { ...q, ...updates } : q
    ));
  };

  const handleDeleteQuestion = (questionId) => {
    setQuestions(questions.filter(q => q.id !== questionId));
  };

  const handleDuplicateQuestion = (question) => {
    const newQuestion = {
      ...question,
      id: `${selectedVertical.toLowerCase()}_${Date.now()}`,
      question: `${question.question} (Copy)`,
      order: questions.length + 1
    };
    setQuestions([...questions, newQuestion]);
  };

  const toggleQuestionExpanded = (questionId) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  // Question Card Component
  const QuestionCard = ({ question, index }) => {
    const isEditing = editingQuestion === question.id;
    const isExpanded = expandedQuestions[question.id];

    return (
      <div className="bg-white/95 backdrop-blur-xl rounded-[24px] border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300">
        {/* Question Header */}
        <div className="p-6 flex items-center justify-between border-b border-black/[0.06]">
          <div className="flex items-center space-x-4 flex-1">
            <button className="cursor-move text-black/40 hover:text-black/60 transition-colors">
              <GripVertical className="h-5 w-5" />
            </button>
            <span className="text-[14px] font-semibold text-black/50 bg-gray-50 px-3 py-1.5 rounded-full tracking-wide">Q{index + 1}</span>
            
            {isEditing ? (
              <input
                type="text"
                value={question.question}
                onChange={(e) => handleUpdateQuestion(question.id, { question: e.target.value })}
                className="flex-1 px-4 py-3 bg-gray-50 border-0 rounded-[12px] text-[16px] focus:outline-none focus:ring-0 focus:bg-white focus:shadow-[0_0_0_1px_rgba(59,130,246,0.5)] transition-all duration-200 placeholder-black/40"
                placeholder="Enter your question..."
                autoFocus
              />
            ) : (
              <div className="flex-1">
                <p className="text-[17px] font-semibold text-black/90 tracking-[-0.015em]">{question.question || 'Untitled Question'}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-[14px] text-black/60 font-medium">{questionTypes.find(t => t.value === question.type)?.label}</span>
                  {question.affects_pricing && (
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[12px] font-semibold bg-yellow-100 text-yellow-700">
                      <DollarSign className="h-3 w-3 mr-1" />
                      Pricing
                    </span>
                  )}
                  {question.affects_scheduling && (
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[12px] font-semibold bg-blue-100 text-blue-700">
                      <Clock className="h-3 w-3 mr-1" />
                      Schedule
                    </span>
                  )}
                  {question.follow_up_questions?.length > 0 && (
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[12px] font-semibold bg-purple-100 text-purple-700">
                      {question.follow_up_questions.length} follow-ups
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-2">
            {!isEditing && (
              <button
                onClick={() => setEditingQuestion(question.id)}
                className="p-2.5 text-black/40 hover:text-blue-600 hover:bg-blue-50 rounded-[12px] transition-all duration-200"
              >
                <Edit2 className="h-4 w-4" />
              </button>
            )}
            {isEditing && (
              <button
                onClick={() => setEditingQuestion(null)}
                className="p-2.5 text-green-600 hover:text-green-700 hover:bg-green-50 rounded-[12px] transition-all duration-200"
              >
                <Check className="h-4 w-4" />
              </button>
            )}
            <button
              onClick={() => handleDuplicateQuestion(question)}
              className="p-2.5 text-black/40 hover:text-black/60 hover:bg-gray-50 rounded-[12px] transition-all duration-200"
            >
              <Copy className="h-4 w-4" />
            </button>
            <button
              onClick={() => toggleQuestionExpanded(question.id)}
              className="p-2.5 text-black/40 hover:text-black/60 hover:bg-gray-50 rounded-[12px] transition-all duration-200"
            >
              {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
            <button
              onClick={() => handleDeleteQuestion(question.id)}
              className="p-2.5 text-black/40 hover:text-red-600 hover:bg-red-50 rounded-[12px] transition-all duration-200"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Expanded Question Details */}
        {isExpanded && (
          <div className="p-6 space-y-6">
            {/* Question Type */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-[15px] font-semibold text-black/80 mb-3 tracking-[-0.01em]">Question Type</label>
                <select
                  value={question.type}
                  onChange={(e) => handleUpdateQuestion(question.id, { type: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border-0 rounded-[12px] text-[16px] focus:outline-none focus:ring-0 focus:bg-white focus:shadow-[0_0_0_1px_rgba(59,130,246,0.5)] transition-all duration-200"
                >
                  {questionTypes.map(type => (
                    <option key={type.value} value={type.value}>
                      {type.icon} {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[15px] font-semibold text-black/80 mb-3 tracking-[-0.01em]">Business Impact</label>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={question.affects_pricing}
                      onChange={(e) => handleUpdateQuestion(question.id, { affects_pricing: e.target.checked })}
                      className="mr-3 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-[15px] font-medium text-black/80">Affects Pricing</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={question.affects_scheduling}
                      onChange={(e) => handleUpdateQuestion(question.id, { affects_scheduling: e.target.checked })}
                      className="mr-3 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-[15px] font-medium text-black/80">Affects Scheduling</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Options for select types */}
            {(question.type === 'select_one' || question.type === 'select_multiple') && (
              <div>
                <label className="block text-[15px] font-semibold text-black/80 mb-3 tracking-[-0.01em]">Options</label>
                <div className="space-y-3">
                  {(question.options || []).map((option, optIndex) => (
                    <div key={optIndex} className="flex items-center space-x-3">
                      <input
                        type="text"
                        value={option}
                        onChange={(e) => {
                          const newOptions = [...(question.options || [])];
                          newOptions[optIndex] = e.target.value;
                          handleUpdateQuestion(question.id, { options: newOptions });
                        }}
                        className="flex-1 px-4 py-3 bg-gray-50 border-0 rounded-[12px] text-[16px] focus:outline-none focus:ring-0 focus:bg-white focus:shadow-[0_0_0_1px_rgba(59,130,246,0.5)] transition-all duration-200"
                      />
                      <button
                        onClick={() => {
                          const newOptions = question.options.filter((_, i) => i !== optIndex);
                          handleUpdateQuestion(question.id, { options: newOptions });
                        }}
                        className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-[8px] transition-all duration-200"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={() => {
                      const newOptions = [...(question.options || []), ''];
                      handleUpdateQuestion(question.id, { options: newOptions });
                    }}
                    className="text-[15px] text-blue-600 hover:text-blue-700 flex items-center font-medium transition-colors"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Option
                  </button>
                </div>
              </div>
            )}

            {/* Pricing Rules - Only show if affects_pricing is true */}
            {question.affects_pricing && (
              <div>
                <label className="block text-[15px] font-semibold text-black/80 mb-3 tracking-[-0.01em]">
                  <DollarSign className="inline h-4 w-4 mr-2" />
                  Pricing Rules
                </label>
                <div className="bg-yellow-50 rounded-[16px] p-4 border border-yellow-200">
                  <div className="space-y-3">
                    {(question.pricing_rules || []).map((rule, ruleIndex) => (
                      <div key={ruleIndex} className="flex items-center justify-between bg-white rounded-[12px] p-3">
                        <div className="flex items-center space-x-3 text-[14px]">
                          <span className="text-black/60 font-medium">IF</span>
                          <span className="font-semibold text-black/90">{rule.condition}</span>
                          <span className="text-black/60 font-medium">THEN</span>
                          <span className="text-yellow-700 font-semibold">{rule.effect}</span>
                        </div>
                        <button
                          onClick={() => {
                            const newRules = question.pricing_rules.filter((_, i) => i !== ruleIndex);
                            handleUpdateQuestion(question.id, { pricing_rules: newRules });
                          }}
                          className="p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-[8px] transition-all duration-200"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={() => {
                        const newRules = [...(question.pricing_rules || []), {
                          condition: '',
                          effect: '',
                          value: { type: 'multiply', amount: 1 }
                        }];
                        handleUpdateQuestion(question.id, { pricing_rules: newRules });
                      }}
                      className="text-[14px] text-yellow-700 hover:text-yellow-800 flex items-center font-medium transition-colors"
                    >
                      <Plus className="h-3 w-3 mr-2" />
                      Add Pricing Rule
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Scheduling Rules - Only show if affects_scheduling is true */}
            {question.affects_scheduling && (
              <div>
                <label className="block text-[15px] font-semibold text-black/80 mb-3 tracking-[-0.01em]">
                  <Clock className="inline h-4 w-4 mr-2" />
                  Scheduling Rules
                </label>
                <div className="bg-blue-50 rounded-[16px] p-4 border border-blue-200">
                  <div className="space-y-3">
                    {(question.scheduling_rules || []).map((rule, ruleIndex) => (
                      <div key={ruleIndex} className="flex items-center justify-between bg-white rounded-[12px] p-3">
                        <div className="flex items-center space-x-3 text-[14px]">
                          <span className="text-black/60 font-medium">IF</span>
                          <span className="font-semibold text-black/90">{rule.condition}</span>
                          <span className="text-black/60 font-medium">THEN</span>
                          <span className="text-blue-700 font-semibold">{rule.effect}</span>
                        </div>
                        <button
                          onClick={() => {
                            const newRules = question.scheduling_rules.filter((_, i) => i !== ruleIndex);
                            handleUpdateQuestion(question.id, { scheduling_rules: newRules });
                          }}
                          className="p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-[8px] transition-all duration-200"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={() => {
                        const newRules = [...(question.scheduling_rules || []), {
                          condition: '',
                          effect: '',
                          value: { type: 'priority', level: 'normal' }
                        }];
                        handleUpdateQuestion(question.id, { scheduling_rules: newRules });
                      }}
                      className="text-[14px] text-blue-700 hover:text-blue-800 flex items-center font-medium transition-colors"
                    >
                      <Plus className="h-3 w-3 mr-2" />
                      Add Scheduling Rule
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Follow-up Questions */}
            {(question.type === 'select_one' || question.type === 'yes_no') && (
              <div>
                <label className="block text-[15px] font-semibold text-black/80 mb-3 tracking-[-0.01em]">Follow-up Questions</label>
                <div className="space-y-3">
                  {(question.follow_up_questions || []).map((rule, ruleIndex) => (
                    <div key={ruleIndex} className="flex items-center space-x-3 bg-gray-50 p-4 rounded-[12px]">
                      <span className="text-[14px] text-black/60 font-medium">IF</span>
                      <input
                        type="text"
                        value={rule.condition}
                        onChange={(e) => {
                          const newRules = [...(question.follow_up_questions || [])];
                          newRules[ruleIndex] = { ...rule, condition: e.target.value };
                          handleUpdateQuestion(question.id, { follow_up_questions: newRules });
                        }}
                        className="px-3 py-2 bg-white border-0 rounded-[8px] text-[14px] focus:outline-none focus:ring-0 focus:shadow-[0_0_0_1px_rgba(59,130,246,0.5)] transition-all duration-200"
                        placeholder="Answer value..."
                      />
                      <span className="text-[14px] text-black/60 font-medium">THEN ASK</span>
                      <input
                        type="text"
                        value={rule.question}
                        onChange={(e) => {
                          const newRules = [...(question.follow_up_questions || [])];
                          newRules[ruleIndex] = { ...rule, question: e.target.value };
                          handleUpdateQuestion(question.id, { follow_up_questions: newRules });
                        }}
                        className="flex-1 px-3 py-2 bg-white border-0 rounded-[8px] text-[14px] focus:outline-none focus:ring-0 focus:shadow-[0_0_0_1px_rgba(59,130,246,0.5)] transition-all duration-200"
                        placeholder="Follow-up question..."
                      />
                      <button
                        onClick={() => {
                          const newRules = question.follow_up_questions.filter((_, i) => i !== ruleIndex);
                          handleUpdateQuestion(question.id, { follow_up_questions: newRules });
                        }}
                        className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-[8px] transition-all duration-200"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={() => {
                      const newRules = [...(question.follow_up_questions || []), { condition: '', question: '' }];
                      handleUpdateQuestion(question.id, { follow_up_questions: newRules });
                    }}
                    className="text-[15px] text-blue-600 hover:text-blue-700 flex items-center font-medium transition-colors"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Follow-up Rule
                  </button>
                </div>
              </div>
            )}

            {/* AI Context Helper */}
            <div>
              <label className="block text-[15px] font-semibold text-black/80 mb-3 tracking-[-0.01em]">
                AI Context
                <span className="ml-2 text-[13px] text-black/50 font-normal">(Help the AI understand this question)</span>
              </label>
              <textarea
                value={question.ai_context || ''}
                onChange={(e) => handleUpdateQuestion(question.id, { ai_context: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 border-0 rounded-[12px] text-[16px] focus:outline-none focus:ring-0 focus:bg-white focus:shadow-[0_0_0_1px_rgba(59,130,246,0.5)] transition-all duration-200 placeholder-black/40"
                rows="3"
                placeholder="e.g., Use this to determine technician skill requirements, listen for urgency indicators..."
              />
            </div>
          </div>
        )}

        {/* Show follow-up questions preview when collapsed */}
        {!isExpanded && question.follow_up_questions?.length > 0 && (
          <div className="px-6 pb-4">
            {question.follow_up_questions.map((fu, idx) => (
              <div key={idx} className="text-[13px] text-black/50 mt-2 ml-8 font-medium">
                <ChevronRight className="inline h-3 w-3 mr-1" />
                IF "{fu.condition}" → {fu.question}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white/95 backdrop-blur-xl border-b border-white/20 shadow-sm">
        <div className="px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-[32px] font-semibold text-black/90 tracking-[-0.022em]">Service Configuration</h1>
              <p className="text-[16px] text-black/60 mt-1 tracking-[-0.01em]">Configure qualifying questions for your services</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-6 py-3 bg-white border border-black/20 text-black rounded-[12px] hover:bg-gray-50 transition-all duration-200 flex items-center font-medium">
                <FileText className="h-4 w-4 mr-2" />
                Import Template
              </button>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-[12px] hover:bg-blue-700 transition-all duration-200 flex items-center font-semibold shadow-sm">
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 bg-white/95 backdrop-blur-xl border-r border-white/20 h-[calc(100vh-97px)] overflow-y-auto">
          <div className="p-6">
            <label className="block text-[15px] font-semibold text-black/80 mb-3 tracking-[-0.01em]">Business Type</label>
            <select
              value={selectedVertical}
              onChange={(e) => setSelectedVertical(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border-0 rounded-[12px] text-[16px] focus:outline-none focus:ring-0 focus:bg-white focus:shadow-[0_0_0_1px_rgba(59,130,246,0.5)] transition-all duration-200"
            >
              {verticals.map(vertical => (
                <option key={vertical} value={vertical}>{vertical}</option>
              ))}
            </select>
          </div>

          <div className="border-t border-black/[0.06]">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <label className="text-[15px] font-semibold text-black/80 tracking-[-0.01em]">Services</label>
                <button className="text-blue-600 hover:text-blue-700 p-1.5 hover:bg-blue-50 rounded-[8px] transition-all duration-200">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <div className="space-y-2">
                {(services[selectedVertical] || []).map(service => (
                  <button
                    key={service}
                    onClick={() => setSelectedService(service)}
                    className={`w-full text-left px-4 py-3 rounded-[12px] transition-all duration-200 font-medium text-[15px] ${
                      selectedService === service
                        ? 'bg-blue-50 text-blue-700 shadow-sm'
                        : 'hover:bg-gray-50 text-black/80'
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="border-t border-black/[0.06] p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[15px]">
                <span className="text-black/60 font-medium">Total Questions</span>
                <span className="font-semibold text-black/90">{questions.length}</span>
              </div>
              <div className="flex items-center justify-between text-[15px]">
                <span className="text-black/60 font-medium">Price Affecting</span>
                <span className="font-semibold text-black/90">{questions.filter(q => q.affects_pricing).length}</span>
              </div>
              <div className="flex items-center justify-between text-[15px]">
                <span className="text-black/60 font-medium">Schedule Affecting</span>
                <span className="font-semibold text-black/90">{questions.filter(q => q.affects_scheduling).length}</span>
              </div>
            </div>
          </div>

          {/* Help Section */}
          <div className="border-t border-black/[0.06] p-6">
            <button className="w-full text-left px-4 py-3 rounded-[12px] bg-blue-50 text-blue-700 hover:bg-blue-100 transition-all duration-200 font-medium">
              <HelpCircle className="h-4 w-4 inline mr-2" />
              View Best Practices
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-8">
          <div className="max-w-5xl mx-auto">
            {/* Service Header */}
            <div className="mb-8">
              <div className="bg-white/95 backdrop-blur-xl rounded-[24px] shadow-2xl p-8 border border-white/20">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-[24px] font-semibold text-black/90 tracking-[-0.015em]">
                      {selectedVertical} - {selectedService}
                    </h2>
                    <p className="text-[16px] text-black/60 mt-1 tracking-[-0.01em]">
                      Build your customer qualification flow
                    </p>
                  </div>
                  <button
                    onClick={handleAddQuestion}
                    className="px-6 py-3 bg-blue-600 text-white rounded-[12px] hover:bg-blue-700 transition-all duration-200 flex items-center font-semibold shadow-sm"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Question
                  </button>
                </div>

                {/* Preview Flow */}
                <div className="bg-gray-50 rounded-[16px] p-6">
                  <div className="flex items-center text-[15px] text-black/60">
                    <span className="font-semibold">Flow Preview:</span>
                    <div className="flex items-center ml-4 space-x-3">
                      <span className="font-medium">Customer Info</span>
                      <ArrowRight className="h-3 w-3" />
                      <span className="font-semibold text-black/90">Your Questions ({questions.length})</span>
                      <ArrowRight className="h-3 w-3" />
                      <span className="font-medium">Scheduling</span>
                      <ArrowRight className="h-3 w-3" />
                      <span className="font-medium">Confirmation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Questions List */}
            <div className="space-y-6">
              {questions.length === 0 ? (
                <div className="bg-white/95 backdrop-blur-xl rounded-[24px] shadow-2xl p-16 text-center border border-white/20">
                  <Settings className="h-16 w-16 text-black/40 mx-auto mb-6" />
                  <h3 className="text-[22px] font-semibold text-black/90 mb-3 tracking-[-0.015em]">No Questions Yet</h3>
                  <p className="text-black/60 mb-8 text-[16px] tracking-[-0.01em]">
                    Add qualifying questions to gather important information from customers
                  </p>
                  <button
                    onClick={handleAddQuestion}
                    className="px-6 py-3 bg-blue-600 text-white rounded-[12px] hover:bg-blue-700 transition-all duration-200 inline-flex items-center font-semibold shadow-sm"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Your First Question
                  </button>
                </div>
              ) : (
                questions.map((question, index) => (
                  <QuestionCard key={question.id} question={question} index={index} />
                ))
              )}
            </div>

            {/* Tips Section */}
            {questions.length > 0 && (
              <div className="mt-12 bg-blue-50 rounded-[20px] p-8 border border-blue-200">
                <div className="flex items-start">
                  <HelpCircle className="h-6 w-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    <h4 className="text-[16px] font-semibold text-blue-900 mb-3 tracking-[-0.01em]">Pro Tips</h4>
                    <ul className="text-[15px] text-blue-800 space-y-2 leading-relaxed">
                      <li>• All questions are required by default - only add what's necessary</li>
                      <li>• Pricing rules show up only when "Affects Pricing" is checked</li>
                      <li>• Scheduling rules show up only when "Affects Scheduling" is checked</li>
                      <li>• Follow-up questions can have their own pricing and scheduling impacts</li>
                      <li>• AI Context helps the voice agent understand how to handle each question</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Sidebar - Question Templates */}
        <div className="w-96 bg-white/95 backdrop-blur-xl border-l border-white/20 h-[calc(100vh-97px)] overflow-y-auto p-6">
          {/* AI Flow Builder */}
          <div className="mb-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-[20px] border border-purple-200 p-6">
            <div className="flex items-center mb-4">
              <Sparkles className="h-5 w-5 text-purple-600 mr-3" />
              <h3 className="font-semibold text-black/90 text-[16px] tracking-[-0.01em]">AI Flow Builder</h3>
            </div>
            
            <p className="text-[14px] text-black/60 mb-4 leading-relaxed">
              Describe your service in plain English
            </p>
            
            <textarea
              value={aiDescription}
              onChange={(e) => setAiDescription(e.target.value)}
              className="w-full p-4 bg-white border-0 rounded-[12px] text-[15px] h-28 focus:outline-none focus:ring-0 focus:shadow-[0_0_0_1px_rgba(147,51,234,0.5)] transition-all duration-200 placeholder-black/40"
              placeholder="Example: I need to know if it's an emergency (costs $75 extra), what type of system..."
            />
            
            <button
              onClick={handleAiGenerate}
              disabled={!aiDescription || isGenerating}
              className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-[12px] hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 flex items-center justify-center text-[15px] font-semibold transition-all duration-200 shadow-sm"
            >
              {isGenerating ? (
                <>Processing...</>
              ) : (
                <>
                  <Zap className="h-4 w-4 mr-2" />
                  Build My Flow
                </>
              )}
            </button>
          </div>

          <div className="border-t border-black/[0.06] pt-6 mb-6">
            <h3 className="font-semibold text-black/90 mb-4 text-[16px] tracking-[-0.01em]">Quick Add Templates</h3>
          </div>
          
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-[16px] p-4 cursor-pointer hover:bg-gray-100 transition-all duration-200">
              <div className="font-semibold text-[15px] text-black/90 mb-2">Emergency Status</div>
              <div className="text-[14px] text-black/60 mb-3">"Is this an emergency?"</div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] bg-white border font-medium">Yes/No</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] bg-yellow-100 text-yellow-700 font-medium">Pricing</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] bg-blue-100 text-blue-700 font-medium">Scheduling</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-[16px] p-4 cursor-pointer hover:bg-gray-100 transition-all duration-200">
              <div className="font-semibold text-[15px] text-black/90 mb-2">System Type</div>
              <div className="text-[14px] text-black/60 mb-3">"What type of system?"</div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] bg-white border font-medium">Single Choice</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] bg-yellow-100 text-yellow-700 font-medium">Pricing</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-[16px] p-4 cursor-pointer hover:bg-gray-100 transition-all duration-200">
              <div className="font-semibold text-[15px] text-black/90 mb-2">Property Type</div>
              <div className="text-[14px] text-black/60 mb-3">"What type of property?"</div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] bg-white border font-medium">Single Choice</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] bg-yellow-100 text-yellow-700 font-medium">Pricing</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-[16px] p-4 cursor-pointer hover:bg-gray-100 transition-all duration-200">
              <div className="font-semibold text-[15px] text-black/90 mb-2">Issue Description</div>
              <div className="text-[14px] text-black/60 mb-3">"Describe the issue"</div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] bg-white border font-medium">Text Input</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-black/[0.06]">
            <h4 className="font-semibold text-black/90 mb-4 text-[15px] tracking-[-0.01em]">Import from Industry</h4>
            <select className="w-full px-4 py-3 bg-gray-50 border-0 rounded-[12px] text-[15px] focus:outline-none focus:ring-0 focus:bg-white focus:shadow-[0_0_0_1px_rgba(59,130,246,0.5)] transition-all duration-200">
              <option>Select template...</option>
              <option>HVAC Standard</option>
              <option>Legal Intake</option>
              <option>Medical Screening</option>
              <option>Auto Service</option>
              <option>Home Service</option>
            </select>
            <button className="mt-3 w-full px-4 py-3 bg-gray-100 text-black rounded-[12px] hover:bg-gray-200 text-[15px] font-medium transition-all duration-200">
              Load Template
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceConfigurationSimplified;