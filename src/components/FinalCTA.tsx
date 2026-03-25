import { motion } from 'framer-motion';

export const FinalCTA = () => {
  return (
    <section className="py-32 md:py-48 px-6 bg-[#08080b] text-center border-subtle border-b">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8"
        >
          Unbound <span className="text-[#8F8F99]">potential.</span>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <button className="px-8 py-3 rounded-md bg-white text-black font-semibold text-sm tracking-wide hover:bg-gray-200 transition-colors">
            Initialize Engine
          </button>
        </motion.div>
      </div>
    </section>
  );
};
