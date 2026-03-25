import { motion } from 'framer-motion';

const benefits = [
  { title: 'Secure Enclave', desc: 'Hardware-backed encryption everywhere. SOC2 Type II.' },
  { title: 'Millisecond execution', desc: 'Optimizations driving absolute lowest latency.' },
  { title: 'Global availability', desc: 'Deployed across 15 edge locations natively.' },
  { title: 'API first', desc: 'Symmetric REST parity. Webhooks delivered <50ms.' },
  { title: 'Volume pricing', desc: 'Transparent costs scaling linearly with your usage.' },
  { title: 'Dedicated Treasury', desc: 'Enterprise isolated infrastructure deployments.' }
];

export const Benefits = () => {
  return (
    <section className="py-24 md:py-32 px-6 border-t border-subtle">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-16 max-w-lg">
          Zero compromises. <br/> Pure velocity.
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-subtle">
          {benefits.map((benefit, idx) => (
            <div 
              key={idx}
              className="p-8 md:p-12 bg-surface hover:bg-surface2 transition-colors relative"
            >
              <div className="w-10 h-10 border border-subtle rounded-md bg-[#0c0c10] mb-8 flex items-center justify-center">
                 <div className="w-2 h-2 rounded-full bg-[#E1E1E6]"></div>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-[#8F8F99] text-sm leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
