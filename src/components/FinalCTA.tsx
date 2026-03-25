import { motion } from 'framer-motion';

export const FinalCTA = () => {
  return (
    <section className="py-40 md:py-64 px-6 bg-[#000000] text-center border-white/10 border-b">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-7xl md:text-[120px] font-extrabold tracking-[-0.05em] text-white mb-16 leading-[0.95]"
        >
          Unbound <br className="md:hidden" /><span className="text-[#A1A1AA]">potential.</span>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <button className="px-12 py-6 rounded-full bg-white text-black font-bold text-xl tracking-tight hover:scale-105 active:scale-95 transition-all">
            Initialize Engine
          </button>
        </motion.div>
      </div>
    </section>
  );
};
