import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Search, HelpCircle, MessageCircle } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const FAQPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = [
    { id: 'general', label: 'General' },
    { id: 'technical', label: 'Technical & Engineering' },
    { id: 'support', label: 'Support & Maintenance' },
  ];

  const faqs = {
    general: [
      {
        q: "What industries does MKG serve?",
        a: "MKG specializes in mission-critical automation for Automotive, Pharmaceutical, Food & Beverage, and Energy sectors. We have specific expertise in hazardous environments (ATEX) and cleanroom applications."
      },
      {
        q: "Do you offer turnkey solutions?",
        a: "Yes. From the initial feasibility study and electrical design (EPLAN) to mechanical assembly, software programming, and final site commissioning, we manage the entire lifecycle of the project."
      },
      {
        q: "Where are your headquarters located?",
        a: "Our global headquarters and R&D center are located in the Nilufer Organized Industrial Zone in Bursa, Turkiye. We also have satellite support offices in Germany and the UK."
      }
    ],
    technical: [
      {
        q: "Which PLC and SCADA platforms do you support?",
        a: "We are platform-agnostic but maintain certified partnerships with Siemens (TIA Portal), Rockwell Automation (Studio 5000), Beckhoff (TwinCAT 3), and Omron (Sysmac). We select the best hardware for your specific constraints."
      },
      {
        q: "How do you handle cybersecurity in OT networks?",
        a: "We adhere to IEC 62443 standards. Our network architecture creates a DMZ between IT and OT layers, utilizing industrial firewalls, VPN tunnels for remote access, and strict user access control (UAC)."
      },
      {
        q: "What is your Digital Twin methodology?",
        a: "We use Siemens NX MCD and Emulate3D to create a physics-based kinematic model of your machine. This allows us to validate PLC code and cycle times virtually before any physical metal is cut, reducing onsite commissioning time by up to 40%."
      }
    ],
    support: [
      {
        q: "What is your standard SLA for downtime support?",
        a: "For contracted partners, we offer a 2-hour response time guarantee for critical system failures (Severity Level 1). Remote support is available 24/7, and onsite mobilization occurs within 24 hours globally."
      },
      {
        q: "Do you provide training for operators?",
        a: "Absolutely. Every project handover includes comprehensive HMI training for operators and deep-dive maintenance training for your internal engineering team, complete with detailed documentation manuals."
      }
    ]
  };

  // @ts-ignore
  const currentFaqs = faqs[activeTab];

  return (
    <div className="min-h-screen bg-transparent pt-32 px-6 pb-24">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-brand-orange text-xs font-mono mb-6"
          >
            <HelpCircle size={14} /> KNOWLEDGE BASE
          </motion.div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 sm:mb-6">Frequently Asked Questions</h1>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Answers to common inquiries about our engineering processes, technical capabilities, and support structures.
          </p>
        </div>

        {/* Search Bar (Visual Only) */}
        <div className="relative max-w-xl mx-auto mb-12">
          <input
            type="text"
            placeholder="Search keywords (e.g., 'PLC', 'Warranty')..."
            className="w-full bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-xl py-4 pl-12 pr-4 text-white focus:border-brand-orange focus:outline-none transition-colors"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setActiveTab(cat.id); setOpenIndex(0); }}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === cat.id
                  ? 'bg-brand-orange text-black shadow-lg shadow-brand-orange/20'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-600'
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          <AnimatePresence mode='wait'>
            {currentFaqs.map((item: any, index: number) => (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: index * 0.1 }}
                className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${openIndex === index
                    ? 'bg-slate-900 border-brand-orange/50'
                    : 'bg-slate-950/50 border-slate-800 hover:border-slate-700'
                  }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-start gap-4"
                >
                  <span className={`font-bold text-lg transition-colors ${openIndex === index ? 'text-white' : 'text-slate-300'}`}>
                    {item.q}
                  </span>
                  <div className={`mt-1 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-brand-orange' : 'text-slate-500'}`}>
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-slate-800/50 pt-4">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center bg-slate-900 border border-slate-800 p-8 rounded-3xl">
          <MessageCircle className="mx-auto text-brand-orange mb-4" size={32} />
          <h3 className="text-xl font-bold text-white mb-2">Still have questions?</h3>
          <p className="text-slate-400 mb-6">Our technical sales team is ready to assist with specific inquiries.</p>
          <NavLink to="/contact">
            <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-brand-orange transition-colors">
              Contact Support
            </button>
          </NavLink>
        </div>

      </div>
    </div>
  );
};

export default FAQPage;