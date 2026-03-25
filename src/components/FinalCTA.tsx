import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useWaitlist } from '../context/WaitlistContext';

export const FinalCTA = () => {
  const { open } = useWaitlist();
  return (
    <section className="py-20 sm:py-24 md:py-64 px-4 sm:px-6 bg-white text-center border-black/5 border-b">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[2.25rem] sm:text-5xl md:text-[100px] font-extrabold tracking-[-0.04em] md:tracking-[-0.05em] text-black mb-5 sm:mb-8 md:mb-10 leading-[1.05] md:leading-[0.95]"
        >
          Step into the <br className="sm:hidden" /><span className="text-[#727272]">future of finance.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="text-[#727272] text-base sm:text-xl md:text-2xl mb-8 sm:mb-12 md:mb-16 leading-relaxed tracking-tight px-2 sm:px-0"
        >
          Complete control over your money. Start using Tranzo.money today.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-0"
        >
          <a href="mailto:connect@tranzo.money" className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-full bg-black text-white font-bold text-base sm:text-lg md:text-xl tracking-tight hover:scale-105 active:scale-95 transition-all shadow-xl">
            Get Started
            <ArrowRight size={18} className="sm:w-5 sm:h-5 md:w-[22px] md:h-[22px]" />
          </a>
          <button onClick={open} className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-full border border-black/10 text-black font-bold text-base sm:text-lg md:text-xl tracking-tight hover:bg-black/[0.03] hover:scale-105 active:scale-95 transition-all">
            Join Waitlist
          </button>
        </motion.div>
      </div>
    </section>
  );
};
