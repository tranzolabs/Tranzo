import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const FinalCTA = () => {
  return (
    <section className="py-24 md:py-64 px-6 bg-white text-center border-black/5 border-b">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-[100px] font-extrabold tracking-[-0.05em] text-black mb-8 md:mb-10 leading-[0.95]"
        >
          Step into the <br className="md:hidden" /><span className="text-[#727272]">future of finance.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="text-[#727272] text-xl md:text-2xl mb-12 md:mb-16 leading-relaxed tracking-tight"
        >
          Complete control over your money. Start using Tranzo.money today.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="mailto:connect@tranzo.money" className="inline-flex items-center justify-center gap-2 px-12 py-6 rounded-full bg-black text-white font-bold text-xl tracking-tight hover:scale-105 active:scale-95 transition-all shadow-xl">
            Get Started
            <ArrowRight size={22} />
          </a>
          <a href="mailto:connect@tranzo.money" className="inline-flex items-center justify-center gap-2 px-12 py-6 rounded-full border border-black/10 text-black font-bold text-xl tracking-tight hover:bg-black/[0.03] hover:scale-105 active:scale-95 transition-all">
            Join Waitlist
          </a>
        </motion.div>
      </div>
    </section>
  );
};
