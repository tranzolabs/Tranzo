import { motion } from 'framer-motion';

const steps = [
  { id: '1', title: 'Connect identity', desc: 'Securely link global KYC credentials.' },
  { id: '2', title: 'Fund account', desc: 'Settle fiat via localized rail natively.' },
  { id: '3', title: 'Deploy capital', desc: 'Issue physical or virtual cards.' }
];

export const HowItWorks = () => {
  return (
    <section className="py-24 md:py-48 bg-white px-6 border-b border-black/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-0 border border-black/5 bg-[#F5F5F7] rounded-[32px] md:rounded-[48px] overflow-hidden shadow-sm">
          {steps.map((step, idx) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className={`flex flex-col p-8 md:p-16 border-black/5 border-t md:border-t-0 ${idx > 0 ? 'md:border-l' : ''} bg-white transition-colors hover:bg-[#F9F9FB]`}
            >
              <div className="text-xs md:text-sm font-semibold text-black/30 border-b border-black/5 pb-4 mb-10 md:mb-16 uppercase tracking-widest">
                 Step 0{step.id} — Execution
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-4 tracking-[-0.04em]">{step.title}</h3>
              <p className="text-[#727272] text-base md:text-lg leading-relaxed max-w-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
