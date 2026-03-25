import { motion } from 'framer-motion';

export const ProductShowcase = () => {
  return (
    <section className="py-24 md:py-40 px-6 border-y border-subtle bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold text-[#8F8F99] border-b border-[#8F8F99]/30 pb-1 mb-8 inline-block">
            Hardware Access
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            The Tranzo Card. <br/> Strictly functional.
          </h2>
          <p className="text-[#8F8F99] text-lg max-w-xl mx-auto mb-24 leading-relaxed">
            A premium physical interface to your digital treasury. Execute point-of-sale transactions isolated from exchange volatility.
          </p>
        </motion.div>

        {/* Minimal 2D Card layout instead of glowing 3D */}
        <div className="relative w-full max-w-lg mx-auto aspect-[1.586/1] border border-subtle rounded-xl bg-black shadow-glow overflow-hidden p-8 text-left flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="text-sm font-bold tracking-widest text-[#E1E1E6]">TRANZO</span>
              <div className="flex gap-1.5">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded bg-white/[0.08] border border-subtle"></div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-between items-end">
               <div className="text-xs font-mono text-[#8F8F99] tracking-widest">
                 0000 0000 0000 0000
               </div>
               <div className="w-12 h-12 bg-white flex items-center justify-center rounded-sm">
                 <div className="w-6 h-6 border-4 border-black rounded-full"></div>
               </div>
            </div>
        </div>
      </div>
    </section>
  );
};
