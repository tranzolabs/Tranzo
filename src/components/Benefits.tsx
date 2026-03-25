import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe, Cpu, LineChart, Server } from 'lucide-react';

const benefits = [
  { icon: Shield, title: 'Secure by design', desc: 'Enterprise-grade encryption everywhere.' },
  { icon: Zap, title: 'Fast transactions', desc: 'Settlements in milliseconds.' },
  { icon: Globe, title: 'Global access', desc: 'Operating in 150+ countries natively.' },
  { icon: Cpu, title: 'Easy integration', desc: 'Rest API to deploy in under an hour.' },
  { icon: LineChart, title: 'No hidden fees', desc: 'Transparent pricing. Zero surprises.' },
  { icon: Server, title: 'Scalable infrastructure', desc: 'Built for high-volume enterprises.' }
];

export const Benefits = () => {
  return (
    <section className="py-24 md:py-40 bg-surface/10 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-16 md:mb-24 text-center">
          Uncompromising performance
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-surface2/30 border border-white/10 hover:bg-surface2/50 hover:border-white/20 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-surface border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-5 h-5 text-brand-blue" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-400">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
