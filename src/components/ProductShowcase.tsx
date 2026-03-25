import React from 'react';
import { motion } from 'framer-motion';

export const ProductShowcase = () => {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-semibold text-white uppercase tracking-[0.2em] bg-white/5 border border-white/10 px-4 py-2 rounded-full inline-block mb-10 backdrop-blur-md">
            The Tranzo Card
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Infinite purchasing power, <br/> crafted in titanium.
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-20 leading-relaxed">
            A premium physical card dynamically linked to your smart routing algorithm. 
            Spend anywhere globally with zero foreign transaction fees.
          </p>
        </motion.div>

        {/* Card Visuals */}
        <div className="relative w-full max-w-3xl mx-auto h-[400px] perspective-1000 flex items-center justify-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-indigo/20 rounded-full blur-[100px] -z-10 animate-pulse-slow"></div>

          <motion.div 
            initial={{ rotateY: -15, rotateX: 15, scale: 0.9, opacity: 0 }}
            whileInView={{ rotateY: 0, rotateX: 0, scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, type: 'spring', bounce: 0.2 }}
            className="w-full max-w-lg aspect-[1.586/1] rounded-2xl bg-gradient-to-tr from-surface via-surface2 to-[#2a2d3e] border border-white/20 shadow-[0_0_80px_rgba(99,102,241,0.3)] relative overflow-hidden flex flex-col justify-between p-8"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Glossy reflection line */}
            <div className="absolute top-0 left-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/[0.05] to-transparent transform -skew-x-[45deg] translate-x-[-100%] animate-[shine_6s_infinite]"></div>

            <div className="flex justify-between items-start w-full relative z-10">
              <span className="text-xl font-bold tracking-widest text-white/90">TRANZO</span>
              <svg className="w-10 h-10 opacity-60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 11V13H20V11H4Z" fill="white"/>
                <path d="M4 6V8H20V6H4Z" fill="white"/>
                <path d="M4 16V18H20V16H4Z" fill="white"/>
              </svg>
            </div>
            
            <div className="flex justify-end relative z-10 w-full">
              <div className="w-14 h-10 bg-gradient-to-r from-brand-blue/30 to-brand-purple/30 rounded border border-white/20"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
