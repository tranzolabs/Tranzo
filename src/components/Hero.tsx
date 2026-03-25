import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Activity } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden px-6 md:px-12">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      <div className="glow-bg top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
            <span className="text-xs font-medium text-white/80">Tranzo V2 is now live</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            The financial engine <br className="hidden md:block"/>
            <span className="text-gradient">for the Internet.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-text mb-10 max-w-lg leading-relaxed">
            Unify your borders, optimize routing, and scale your global treasury instantly. Experience banking reimagined.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300 flex items-center justify-center gap-2 text-lg">
              Start building <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 text-lg backdrop-blur-sm">
              Read the docs
            </button>
          </div>
        </motion.div>

        {/* Right Visuals */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative lg:h-[600px] flex items-center justify-center lg:justify-end perspective-1000"
        >
          {/* Main Card */}
          <div className="relative z-20 w-full max-w-md bg-surface border border-white/10 rounded-2xl shadow-2xl p-6 backdrop-blur-xl animate-float" style={{ transformStyle: 'preserve-3d', transform: 'rotateY(-5deg) rotateX(5deg)' }}>
            <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
              <div className="text-white font-medium">Available Balance</div>
              <div className="bg-brand-indigo/20 text-brand-indigo px-3 py-1 rounded-full text-xs font-semibold">USD</div>
            </div>
            
            <div className="mb-8">
              <div className="text-5xl font-bold text-white mb-2">$843,029.00</div>
              <div className="text-sm text-green-400 flex items-center gap-1">
                <span>+ $12,450.00 today</span>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { name: 'Stripe Transfer', amount: '+$5,000.00', date: 'Just now', icon: Activity },
                { name: 'AWS Cloud', amount: '-$1,240.00', date: '2h ago', icon: ShieldCheck },
              ].map((tx, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-surface2 flex items-center justify-center border border-white/10">
                      <tx.icon className="w-5 h-5 text-gray-text" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">{tx.name}</div>
                      <div className="text-xs text-gray-text">{tx.date}</div>
                    </div>
                  </div>
                  <div className={`text-sm font-medium ${tx.amount.startsWith('+') ? 'text-white' : 'text-white'}`}>
                    {tx.amount}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Floating decorative elements */}
          <div className="absolute top-10 right-0 w-32 h-32 bg-brand-blue/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-brand-purple/20 rounded-full blur-3xl animate-pulse-slow"></div>
        </motion.div>
      </div>
    </section>
  );
};
