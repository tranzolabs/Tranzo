import { motion } from 'framer-motion';

export const ProductShowcase = () => {
  return (
    <section className="py-24 md:py-48 px-6 border-y border-black/5 bg-white relative overflow-hidden flex justify-center">
      <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs md:text-sm font-semibold text-black/40 border-b border-black/10 pb-2 mb-8 md:mb-12 inline-block tracking-widest uppercase">
            Hardware Access
          </span>
          <h2 className="text-4xl md:text-[90px] font-extrabold tracking-[-0.05em] text-black mb-8 leading-[0.95]">
            The Tranzo Card. <br/> <span className="text-[#727272]">Strictly functional.</span>
          </h2>
          <p className="text-[#727272] text-lg md:text-xl max-w-2xl mx-auto mb-16 md:mb-24 leading-relaxed tracking-tight">
            A premium physical interface to your digital treasury. Execute point-of-sale transactions isolated from exchange volatility.
          </p>
        </motion.div>

        {/* Ultra-Minimal Premium Card Layout - Light Mode Glass */}
        <div className="relative w-full max-w-xl mx-auto aspect-[1.586/1] border border-black/10 rounded-[28px] overflow-hidden p-8 text-left flex flex-col justify-between shadow-[0_40px_100px_rgba(0,0,0,0.05)] bg-[#FFFFFF] group transition-all duration-700 hover:border-black/20">
            {/* Extremely Subtle Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-black/[0.02] blur-3xl rounded-full"></div>
            
            <div className="relative z-10 flex justify-between items-start">
              <span className="text-xl font-bold tracking-[0.15em] text-black uppercase">Tranzo</span>
              
              <div className="flex gap-1.5 opacity-40">
                <div className="w-8 h-8 rounded-full border border-black/30"></div>
                <div className="w-8 h-8 rounded-full border border-black/30 -ml-4 backdrop-blur-md bg-black/5"></div>
              </div>
            </div>
            
            <div className="relative z-10 mt-auto">
               {/* Card Number & Details */}
               <div className="text-xl md:text-3xl font-mono tracking-[0.2em] md:tracking-[0.25em] text-black/80 mb-8">
                 •••• •••• •••• 5546
               </div>
               
               <div className="flex justify-between items-end text-xs md:text-sm font-mono tracking-widest text-[#727272] uppercase">
                 <span className="font-semibold text-black tracking-[0.2em]">TRANZO</span>
                 <span>09/28</span>
               </div>
            </div>
        </div>
      </div>
    </section>
  );
};
