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

        {/* Ultra-Minimal Premium Card Layout */}
        <div className="relative w-full max-w-xl mx-auto aspect-[1.586/1] border border-white/20 rounded-[28px] overflow-hidden p-8 text-left flex flex-col justify-between shadow-[0_0_80px_rgba(255,255,255,0.05)] bg-[#0A0A0A] group transition-all duration-700 hover:border-white/40">
            {/* Extremely Subtle Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl rounded-full"></div>
            
            <div className="relative z-10 flex justify-between items-start">
              <span className="text-xl font-bold tracking-[0.15em] text-white uppercase">Tranzo</span>
              
              <div className="flex gap-1.5 opacity-60">
                <div className="w-8 h-8 rounded-full border border-white/30"></div>
                <div className="w-8 h-8 rounded-full border border-white/30 -ml-4 backdrop-blur-md bg-white/10"></div>
              </div>
            </div>
            
            <div className="relative z-10 mt-auto">
               {/* Card Number & Details */}
               <div className="text-xl md:text-3xl font-mono tracking-[0.2em] md:tracking-[0.25em] text-white/90 drop-shadow-md mb-8">
                 •••• •••• •••• 5546
               </div>
               
               <div className="flex justify-between items-end text-xs md:text-sm font-mono tracking-widest text-[#A1A1AA] uppercase">
                 <span className="font-semibold text-white tracking-[0.2em]">TRANZO</span>
                 <span>09/28</span>
               </div>
            </div>
        </div>
      </div>
    </section>
  );
};
