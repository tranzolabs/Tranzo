import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useWaitlist } from '../context/WaitlistContext';

export const Hero = () => {
  const { open } = useWaitlist();
  return (
    <section className="relative pt-36 sm:pt-44 md:pt-48 pb-20 md:pb-32 px-4 sm:px-6 overflow-hidden flex flex-col items-center">
      <div className="bg-hero-glow"></div>
      
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center mt-4 md:mt-8">
        <motion.div 
          initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="inline-flex gap-1.5 sm:gap-2 items-center px-3 sm:px-4 py-1.5 rounded-full border border-black/5 bg-black/[0.02] text-xs sm:text-sm font-medium text-[#727272] mb-8 md:mb-10"
        >
          <span>Self-Custody</span>
          <span className="w-1 h-1 rounded-full bg-black"></span>
          <span>Crypto Card</span>
          <span className="w-1 h-1 rounded-full bg-black"></span>
          <span>Hardware Wallet</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[2.5rem] sm:text-5xl md:text-[110px] font-extrabold tracking-[-0.04em] md:tracking-[-0.05em] text-black max-w-5xl mx-auto leading-[1] md:leading-[0.95]"
        >
          Own Your Money. <br className="hidden md:block" />
          <span className="text-[#727272]">Spend It Anywhere.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#727272] text-base sm:text-lg md:text-2xl max-w-lg md:max-w-2xl mx-auto mt-6 sm:mt-8 md:mt-10 mb-8 sm:mb-10 md:mb-12 leading-relaxed tracking-tight px-2 sm:px-0"
        >
          Self-custody wallet, crypto card, and hardware security—everything in one seamless ecosystem.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-2 sm:px-0"
        >
          <a href="mailto:connect@tranzo.money" className="bg-black text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-xl">
            Get Started
            <ArrowRight size={18} className="sm:w-5 sm:h-5" />
          </a>
          <button onClick={open} className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-bold border border-black/10 text-black hover:bg-black/[0.03] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2">
            Join Waitlist
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 sm:mt-20 md:mt-28 w-full max-w-3xl mx-auto relative flex justify-center"
        >
          <div className="w-[280px] sm:w-[320px] md:w-[340px] h-[580px] sm:h-[660px] md:h-[700px] border-[6px] sm:border-[8px] border-[#E8E8ED] rounded-[44px] sm:rounded-[52px] md:rounded-[56px] bg-[#FFFFFF] overflow-hidden relative shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:shadow-[0_40px_100px_rgba(0,0,0,0.1)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] sm:w-[110px] md:w-[120px] h-[26px] sm:h-[28px] md:h-[30px] bg-[#E8E8ED] rounded-b-2xl sm:rounded-b-3xl z-20"></div>
            
            <div className="p-4 sm:p-5 md:p-6 pt-12 sm:pt-14 md:pt-16 flex flex-col h-full bg-[#F5F5F7]">
               <div className="flex justify-between items-center mb-5 sm:mb-6 md:mb-8">
                  <div className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 rounded-full bg-black/5"></div>
                  <div className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 rounded-full bg-black/5"></div>
               </div>

               <div className="w-full h-36 sm:h-42 md:h-48 rounded-[24px] sm:rounded-[28px] md:rounded-[32px] bg-gradient-to-br from-black/10 to-black/5 border border-black/5 p-4 sm:p-5 md:p-6 flex flex-col justify-between mb-5 sm:mb-6 md:mb-8 relative overflow-hidden backdrop-blur-md">
                 <div className="absolute -right-10 -top-10 w-32 h-32 bg-black/5 rounded-full blur-2xl"></div>
                 <div className="text-black/40 text-xs sm:text-sm font-medium uppercase tracking-widest">Tranzo Card</div>
                 <div>
                   <div className="text-black font-bold tracking-widest mb-1 text-sm sm:text-base">•••• •••• •••• 5546</div>
                   <div className="text-black/40 text-xs">02/28</div>
                 </div>
               </div>

               <div className="text-[#727272] text-xs sm:text-sm font-medium mb-2 sm:mb-4">Total Balance</div>
               <div className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-black mb-5 sm:mb-6 md:mb-8">$12,450.00</div>

               <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8">
                 {['Send', 'Receive', 'Swap', 'Card'].map((label, i) => (
                   <div key={i} className="flex flex-col items-center gap-1.5 sm:gap-2">
                     <div className="w-10 sm:w-11 md:w-12 h-10 sm:h-11 md:h-12 rounded-full bg-black/5 flex items-center justify-center"></div>
                     <div className="text-[9px] sm:text-[10px] text-black/40 font-medium">{label}</div>
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
