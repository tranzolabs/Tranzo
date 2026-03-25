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
    <section className="py-20 md:py-40 px-6 bg-white">
      <div className="max-w-7xl mx-auto space-y-24 md:space-y-40">
        {featuresData.map((feature, idx) => (
          <div 
            key={idx} 
            className={`flex flex-col ${feature.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-32 items-center`}
          >
            {/* Text */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              className="flex-1 w-full"
            >
              <div className="inline-block px-4 py-1.5 rounded-full border border-black/10 text-sm font-semibold text-black mb-6 md:mb-8">{feature.label}</div>
              <h2 className="text-4xl md:text-7xl font-extrabold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
                {feature.title}
              </h2>
              <p className="text-[#727272] text-lg md:text-xl leading-relaxed max-w-lg">
                {feature.description}
              </p>
            </motion.div>

            {/* Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              className="flex-1 w-full aspect-square md:aspect-[4/3] rounded-[48px] border border-black/5 bg-[#F5F5F7] overflow-hidden relative flex items-center justify-center p-12 shadow-subtle"
            >
               {/* Stark monochrome visual pattern */}
               <div className="w-full h-full border border-black/5 rounded-[32px] bg-[#FFFFFF] flex flex-col p-8 relative overflow-hidden shadow-sm">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-black/[0.02] blur-3xl rounded-full"></div>
                 {idx === 0 && (
                   <div className="space-y-4 mt-auto">
                     <div className="w-full h-16 bg-black/[0.02] rounded-2xl border border-black/5 flex items-center px-6">
                       <div className="w-8 h-8 rounded-full bg-black/5"></div>
                       <div className="ml-4 h-4 w-32 bg-black/10 rounded"></div>
                     </div>
                     <div className="w-3/4 h-16 bg-black/[0.02] rounded-2xl border border-black/5 flex items-center px-6">
                       <div className="w-8 h-8 rounded-full bg-black/5"></div>
                     </div>
                   </div>
                 )}
                 {idx === 1 && (
                   <div className="w-full h-3/4 border-t-2 border-r-2 border-black/10 relative mt-auto rounded-tr-[40px]">
                     <div className="absolute top-0 right-0 w-4 h-4 bg-black -mt-2 -mr-2 rounded-full shadow-lg"></div>
                   </div>
                 )}
                 {idx === 2 && (
                   <div className="grid grid-cols-2 gap-4 mt-auto">
                     <div className="h-32 bg-black/[0.02] rounded-3xl border border-black/5"></div>
                     <div className="h-32 bg-black/[0.05] rounded-3xl border border-black/10 relative overflow-hidden">
                       <div className="absolute bottom-0 w-full h-1/2 bg-black/5"></div>
                     </div>
                     <div className="h-32 bg-black/[0.02] rounded-3xl border border-black/5"></div>
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
