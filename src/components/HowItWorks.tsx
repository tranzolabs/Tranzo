import { motion } from 'framer-motion';

const steps = [
  { id: '1', title: 'Connect identity', desc: 'Securely link global KYC credentials.' },
  { id: '2', title: 'Fund account', desc: 'Settle fiat via localized rail natively.' },
  { id: '3', title: 'Deploy capital', desc: 'Issue physical or virtual cards.' }
];

export const HowItWorks = () => {
  return (
    <section className="py-32 md:py-48 bg-[#000000] px-6 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-0 border border-white/10 bg-[#111111] rounded-[48px] overflow-hidden">
          {steps.map((step, idx) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className={`flex flex-col p-12 md:p-16 border-white/10 border-t md:border-t-0 ${idx > 0 ? 'md:border-l' : ''} bg-[#0A0A0A]`}
            >
              <div className="text-sm font-semibold text-white/50 border-b border-white/10 pb-4 mb-16 uppercase tracking-widest">
                 Step 0{step.id} — Execution
              </div>
              <h3 className="text-4xl font-bold text-white mb-4 tracking-[-0.04em]">{step.title}</h3>
              <p className="text-[#A1A1AA] text-lg leading-relaxed max-w-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
