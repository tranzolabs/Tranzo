import React from 'react';
import { motion } from 'framer-motion';

const featuresData = [
  {
    label: 'Global Onboarding',
    title: 'Instant cross-border accounts.',
    description: 'Deploy compliant virtual accounts in 150+ countries in under three seconds.',
    visual: 'globe',
    reverse: false
  },
  {
    label: 'Smart Routing',
    title: 'Optimized capital flow.',
    description: 'Proprietary network dynamically routes transactions to minimize costs and latency.',
    visual: 'network',
    reverse: true
  },
  {
    label: 'Treasury Management',
    title: 'Multi-currency at scale.',
    description: 'Hold, convert, and disburse 40+ currencies from a single unified dashboard.',
    visual: 'cards',
    reverse: false
  },
  {
    label: 'Infrastructure',
    title: 'Secure by design.',
    description: 'Built on cryptographic primitives with SOC2 Type II compliance out of the box.',
    visual: 'shield',
    reverse: true
  }
];

export const Features = () => {
  return (
    <section className="py-32 md:py-48 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto space-y-40 md:space-y-64">
        {featuresData.map((feature, idx) => (
          <div 
            key={idx} 
            className={`flex flex-col ${feature.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}
          >
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="flex-1 space-y-6"
            >
              <span className="text-xs font-semibold text-brand-purple uppercase tracking-widest bg-brand-purple/10 px-3 py-1.5 rounded-full inline-block">
                {feature.label}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15]">
                {feature.title}
              </h2>
              <p className="text-lg text-gray-400 max-w-md leading-relaxed">
                {feature.description}
              </p>
            </motion.div>

            {/* Visual Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex-1 w-full"
            >
              <div className="relative aspect-square md:aspect-[4/3] rounded-3xl border border-white/10 bg-surface2/50 backdrop-blur-3xl overflow-hidden group flex items-center justify-center">
                {/* Abstract Visual Placeholder based on type */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none"></div>
                
                {feature.visual === 'globe' && (
                  <div className="w-48 h-48 rounded-full border border-brand-blue/30 bg-brand-blue/5 flex items-center justify-center animate-pulse-slow">
                    <div className="w-32 h-32 rounded-full border border-brand-indigo/40 bg-brand-indigo/10 animate-pulse"></div>
                  </div>
                )}
                
                {feature.visual === 'network' && (
                  <div className="grid grid-cols-3 gap-4 w-64">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className={`h-2 rounded-full bg-brand-purple/40 ${i % 2 === 0 ? 'w-full' : 'w-1/2'} transition-all duration-1000 transform hover:scale-110`}></div>
                    ))}
                  </div>
                )}
                
                {feature.visual === 'cards' && (
                  <div className="relative w-64 h-40">
                    <div className="absolute inset-0 bg-surface border border-white/20 rounded-xl shadow-2xl rotate-[-5deg] transform transition-transform group-hover:rotate-[-10deg]"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-brand-purple/20 backdrop-blur-xl border border-white/30 rounded-xl shadow-2xl rotate-[5deg] transform transition-transform group-hover:rotate-[10deg] p-4 flex flex-col justify-between">
                      <div className="w-8 h-8 rounded-full bg-white/20"></div>
                      <div className="w-24 h-4 rounded bg-white/20"></div>
                    </div>
                  </div>
                )}
                
                {feature.visual === 'shield' && (
                  <div className="w-32 h-40 rounded-t-full rounded-b-xl border-4 border-white/10 flex items-center justify-center bg-surface relative overflow-hidden group-hover:border-brand-indigo/50 transition-colors duration-500">
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-indigo/10 to-transparent"></div>
                    <div className="w-12 h-12 rounded-full bg-brand-indigo/20 blur-xl"></div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};
