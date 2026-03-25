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

        {/* Premium Dark Metal Card Layout */}
        <div className="relative w-full max-w-xl mx-auto aspect-[1.586/1] border border-white/10 rounded-[32px] overflow-hidden p-10 text-left flex flex-col justify-between shadow-[0_30px_60px_-15px_rgba(255,255,255,0.05)] bg-[#0A0A0A]">
            {/* Metallic Grain / Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#222222] via-[#0A0A0A] to-[#111111] border border-white/5 rounded-[32px]"></div>
            
            {/* Glossy Reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.08] pointer-events-none mix-blend-overlay rounded-[32px]"></div>
            
            <div className="relative z-10 flex justify-between items-start">
              <img src="/logo.png" alt="Tranzo Logo" className="w-10 h-10 object-contain mix-blend-screen opacity-90" />
              
              {/* Simplistic Contactless/NFC icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/40">
                <path d="M5.5 15.5c2-2 4.5-2 6.5 0M8.5 12.5c2.5-2.5 6-2.5 8.5 0M11.5 9.5c3-3 7.5-3 10.5 0" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <div className="relative z-10">
               {/* Realistic EMV Chip */}
               <div className="w-12 h-10 rounded-md bg-gradient-to-br from-[#D4D4D8] to-[#9CA3AF] mb-8 border border-white/20 shadow-inner relative overflow-hidden flex flex-col justify-center gap-1 px-1 opacity-80">
                 <div className="w-full h-px bg-black/20"></div>
                 <div className="w-full h-px bg-black/20"></div>
                 <div className="w-full h-px bg-black/20"></div>
                 <div className="absolute left-1/2 -translate-x-1/2 w-4 h-full border-x border-black/20 bg-transparent"></div>
               </div>
               
               {/* Card Number & Details */}
               <div className="text-xl md:text-2xl font-mono tracking-[0.2em] md:tracking-[0.25em] text-[#E1E1E6] drop-shadow-md mb-4">
                 •••• •••• •••• 5546
               </div>
               
               <div className="flex justify-between items-end text-sm font-mono tracking-widest text-[#A1A1AA] uppercase">
                 <span>Pranav</span>
                 <span>09/28</span>
               </div>
            </div>
        </div>
      </div>
    </section>
  );
};
