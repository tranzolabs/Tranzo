import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Wallet, CreditCard } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Create account',
    description: 'Instant verification via global KYC networks.',
    icon: UserPlus
  },
  {
    id: '02',
    title: 'Add funds',
    description: 'Connect existing banks or crypto wallets seamlessly.',
    icon: Wallet
  },
  {
    id: '03',
    title: 'Spend anywhere',
    description: 'Issue physical or virtual cards in seconds.',
    icon: CreditCard
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-24 md:py-40 bg-[#0B0B0F] px-6 md:px-12 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 md:mb-32">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Engineered for simplicity
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Three steps to unlock borderless financial infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[28%] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>

          {steps.map((step, idx) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-surface border border-white/10 flex items-center justify-center mb-8 shadow-2xl relative overflow-hidden group-hover:border-brand-blue/50 transition-colors duration-500">
                <div className="absolute inset-0 bg-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <step.icon className="w-8 h-8 text-white relative z-10" />
              </div>
              <div className="text-sm font-bold text-brand-purple mb-3 bg-brand-purple/10 px-3 py-1 rounded-full">{step.id}</div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
