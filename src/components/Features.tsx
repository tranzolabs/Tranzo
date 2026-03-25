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
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto space-y-32">
        {featuresData.map((feature, idx) => (
          <div 
            key={idx} 
            className={`flex flex-col ${feature.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-24 items-center`}
          >
            {/* Text */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              className="flex-1 w-full"
            >
              <div className="text-sm font-semibold text-brand-purple mb-4">{feature.label}</div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                {feature.title}
              </h2>
              <p className="text-[#8F8F99] text-lg leading-relaxed max-w-md">
                {feature.description}
              </p>
            </motion.div>

            {/* Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              className="flex-1 w-full aspect-square md:aspect-[4/3] rounded-2xl border border-subtle bg-surface/50 overflow-hidden relative flex items-center justify-center p-8"
            >
               {/* Extremely stark monochrome visual pattern */}
               <div className="w-full h-full border border-subtle rounded-xl bg-[#0c0c10] flex flex-col justify-end p-6">
                 {idx === 0 && (
                   <div className="space-y-4">
                     <div className="w-full h-12 bg-white/[0.05] rounded-md border border-subtle"></div>
                     <div className="w-3/4 h-12 bg-white/[0.05] rounded-md border border-subtle"></div>
                   </div>
                 )}
                 {idx === 1 && (
                   <div className="w-full h-3/4 border-t border-r border-brand-purple/20 relative">
                     <div className="absolute top-0 right-0 w-3 h-3 bg-brand-purple -mt-1.5 -mr-1.5 rounded-full shadow-glow"></div>
                   </div>
                 )}
                 {idx === 2 && (
                   <div className="grid grid-cols-2 gap-4">
                     <div className="h-24 bg-white/[0.02] rounded-md border border-subtle"></div>
                     <div className="h-24 bg-white/[0.05] border-t-2 border-brand-light rounded-md border border-subtle"></div>
                     <div className="h-24 bg-white/[0.02] rounded-md border border-subtle"></div>
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
