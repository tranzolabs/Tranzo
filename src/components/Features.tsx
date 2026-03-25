import { motion } from 'framer-motion';

const featuresData = [
  {
    label: 'Global Onboarding',
    title: 'Accounts inside seconds.',
    description: 'Bypass traditional banking delays. Spin up fully compliant virtual accounts across 150 countries instantaneously via our REST API.',
    reverse: false
  },
  {
    label: 'Smart Routing',
    title: 'Capital that flows.',
    description: 'Proprietary cross-border routing engine dynamically optimizes liquidity networks to settle transactions faster than SWIFT.',
    reverse: true
  },
  {
    label: 'Treasury Management',
    title: 'Multi-currency scale.',
    description: 'Hold, convert, and disburse 40+ currencies from a single unified balance, entirely isolated from FX volatility.',
    reverse: false
  }
];

export const Features = () => {
  return (
    <section className="py-24 md:py-40 px-6">
      <div className="max-w-7xl mx-auto space-y-40">
        {featuresData.map((feature, idx) => (
          <div 
            key={idx} 
            className={`flex flex-col ${feature.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 md:gap-32 items-center`}
          >
            {/* Text */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              className="flex-1 w-full"
            >
              <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 text-sm font-semibold text-white mb-8">{feature.label}</div>
              <h2 className="text-5xl md:text-7xl font-extrabold tracking-[-0.04em] text-white mb-6 leading-[1.05]">
                {feature.title}
              </h2>
              <p className="text-[#A1A1AA] text-xl leading-relaxed max-w-lg">
                {feature.description}
              </p>
            </motion.div>

            {/* Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              className="flex-1 w-full aspect-square md:aspect-[4/3] rounded-[48px] border border-white/10 bg-[#111111] overflow-hidden relative flex items-center justify-center p-12 shadow-2xl"
            >
               {/* Stark monochrome visual pattern */}
               <div className="w-full h-full border border-white/10 rounded-[32px] bg-[#0A0A0A] flex flex-col p-8 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl rounded-full mix-blend-screen"></div>
                 {idx === 0 && (
                   <div className="space-y-4 mt-auto">
                     <div className="w-full h-16 bg-white/[0.03] rounded-2xl border border-white/10 flex items-center px-6">
                       <div className="w-8 h-8 rounded-full bg-white/10"></div>
                       <div className="ml-4 h-4 w-32 bg-white/20 rounded"></div>
                     </div>
                     <div className="w-3/4 h-16 bg-white/[0.03] rounded-2xl border border-white/10 flex items-center px-6">
                       <div className="w-8 h-8 rounded-full bg-white/10"></div>
                     </div>
                   </div>
                 )}
                 {idx === 1 && (
                   <div className="w-full h-3/4 border-t-2 border-r-2 border-white/20 relative mt-auto rounded-tr-[40px]">
                     <div className="absolute top-0 right-0 w-4 h-4 bg-white -mt-2 -mr-2 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.8)]"></div>
                   </div>
                 )}
                 {idx === 2 && (
                   <div className="grid grid-cols-2 gap-4 mt-auto">
                     <div className="h-32 bg-white/[0.03] rounded-3xl border border-white/10"></div>
                     <div className="h-32 bg-white/[0.08] rounded-3xl border border-white/20 relative overflow-hidden">
                       <div className="absolute bottom-0 w-full h-1/2 bg-white/10"></div>
                     </div>
                     <div className="h-32 bg-white/[0.03] rounded-3xl border border-white/10"></div>
                   </div>
                 )}
               </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};
