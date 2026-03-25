import { motion } from 'framer-motion';

export const ProductShowcase = () => {
  return (
    <section className="py-32 md:py-48 px-6 border-y border-white/10 bg-[#000000] relative overflow-hidden flex justify-center">
      <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold text-white/50 border-b border-white/20 pb-2 mb-12 inline-block tracking-widest uppercase">
            Hardware Access
          </span>
          <h2 className="text-6xl md:text-[90px] font-extrabold tracking-[-0.05em] text-white mb-8 leading-[0.95]">
            The Tranzo Card. <br/> <span className="text-[#A1A1AA]">Strictly functional.</span>
          </h2>
          <p className="text-[#A1A1AA] text-xl max-w-2xl mx-auto mb-24 leading-relaxed tracking-tight">
            A premium physical interface to your digital treasury. Execute point-of-sale transactions isolated from exchange volatility.
          </p>
        </motion.div>

        {/* Minimal 2D Card layout instead of glowing 3D */}
        <div className="relative w-full max-w-2xl mx-auto aspect-[1.586/1] border border-white/10 rounded-[48px] bg-[#111111] overflow-hidden p-12 text-left flex flex-col justify-between shadow-2xl">
            <div className="flex justify-between items-start">
              <span className="text-xl font-bold tracking-tighter text-white">TRANZO</span>
              <div className="flex gap-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-white/5 border border-white/10"></div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-between items-end">
               <div className="text-lg font-bold tracking-[0.2em] text-[#A1A1AA]">
                 0000 0000 0000 0000
               </div>
               <div className="w-16 h-16 bg-white flex items-center justify-center rounded-2xl">
                 <div className="w-8 h-8 border-[6px] border-black rounded-full"></div>
               </div>
            </div>
        </div>
      </div>
    </section>
  );
};
