import { motion } from 'framer-motion';

const steps = [
  { id: '1', title: 'Connect identity', desc: 'Securely link global KYC credentials.' },
  { id: '2', title: 'Fund account', desc: 'Settle fiat via localized rail natively.' },
  { id: '3', title: 'Deploy capital', desc: 'Issue physical or virtual cards.' }
];

export const HowItWorks = () => {
  return (
    <section className="py-24 md:py-32 bg-[#08080b] px-6 border-b border-subtle relative">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-0 border border-subtle bg-surface">
          {steps.map((step, idx) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className={`flex flex-col p-8 md:p-12 border-subtle border-t md:border-t-0 ${idx > 0 && 'md:border-l'}`}
            >
              <div className="text-xs font-mono text-[#8F8F99] border-b border-subtle pb-2 mb-8">
                 0{step.id} — Execution
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{step.title}</h3>
              <p className="text-[#8F8F99] text-sm leading-relaxed max-w-xs">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
