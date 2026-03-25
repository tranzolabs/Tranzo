import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative pt-48 pb-32 px-6 overflow-hidden flex flex-col items-center">
      <div className="bg-hero-glow"></div>
      
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center mt-8">
        <motion.div 
          initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="inline-flex gap-2 items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-sm font-medium text-[#A1A1AA] mb-10"
        >
          <span>Tranzo v2.0</span>
          <span className="w-1 h-1 rounded-full bg-white"></span>
          <span>The new standard</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="text-7xl md:text-[110px] font-extrabold tracking-[-0.05em] text-white max-w-5xl mx-auto leading-[0.95]"
        >
          Move Money, <br className="hidden md:block" />
          <span className="text-[#A1A1AA]">Without Limits.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#A1A1AA] text-xl md:text-2xl max-w-2xl mx-auto mt-10 mb-12 leading-relaxed tracking-tight"
        >
          Spend easily via secured credit card using crypto while having full control of your funds. Zero compromises.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a href="mailto:connect@tranzo.money" className="bg-white text-black px-8 py-4 rounded-full text-lg font-bold hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2">
            Get Started
          </a>
        </motion.div>

        {/* Minimal Premium Phone Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-28 w-full max-w-3xl mx-auto relative flex justify-center"
        >
          {/* Phone Frame */}
          <div className="w-[340px] h-[700px] border-[8px] border-[#222] rounded-[56px] bg-[#0A0A0A] overflow-hidden relative shadow-[0_0_80px_rgba(255,255,255,0.05)]">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-[#222] rounded-b-3xl z-20"></div>
            
            {/* Inner App Interface */}
            <div className="p-6 pt-16 flex flex-col h-full bg-[#111]">
               <div className="flex justify-between items-center mb-8">
                  <div className="w-10 h-10 rounded-full bg-white/10"></div>
                  <div className="w-10 h-10 rounded-full bg-white/10"></div>
               </div>

               {/* Card Component inside phone */}
               <div className="w-full h-48 rounded-[32px] bg-gradient-to-br from-white/20 to-white/5 border border-white/10 p-6 flex flex-col justify-between mb-8 relative overflow-hidden backdrop-blur-md">
                 <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                 <div className="text-white/60 text-sm font-medium">Virtual Card</div>
                 <div>
                   <div className="text-white font-bold tracking-widest mb-1">•••• •••• •••• 5546</div>
                   <div className="text-white/60 text-xs">02/28</div>
                 </div>
               </div>

               <div className="text-[#A1A1AA] text-sm font-medium mb-4">Spending Balance</div>
               <div className="text-5xl font-bold tracking-tighter text-white mb-8">$12,450.00</div>

               {/* Action Buttons */}
               <div className="grid grid-cols-4 gap-4 mb-8">
                 {[...Array(4)].map((_, i) => (
                   <div key={i} className="flex flex-col items-center gap-2">
                     <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center"></div>
                     <div className="h-2 w-8 bg-white/10 rounded-full"></div>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
