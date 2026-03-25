import React from 'react';
import { motion } from 'framer-motion';

export const FinalCTA = () => {
  return (
    <section className="py-32 md:py-48 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-indigo/5 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-10 leading-[1.1]"
        >
          Scale your capital. <br className="hidden md:block"/>
          <span className="text-gray-500">Without limits.</span>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <button className="px-10 py-5 rounded-full bg-white text-black font-semibold text-lg hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-300">
            Open Account
          </button>
        </motion.div>
      </div>
    </section>
  );
};
