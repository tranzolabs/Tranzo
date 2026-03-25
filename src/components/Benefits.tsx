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
    <section className="py-20 md:py-48 px-6 border-t border-white/10 bg-[#000000]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-[90px] font-extrabold tracking-[-0.05em] text-white mb-16 md:mb-24 max-w-2xl leading-[0.95]">
          Zero compromises. <br/> <span className="text-[#A1A1AA]">Pure velocity.</span>
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <div 
              key={idx}
              className="p-10 md:p-14 bg-[#111111] hover:bg-[#1A1A1A] transition-colors relative border border-white/10 rounded-[36px]"
            >
              <div className="w-14 h-14 border border-white/10 rounded-2xl bg-[#0A0A0A] mb-12 flex items-center justify-center">
                 <div className="w-4 h-4 rounded-full bg-white"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-[-0.03em]">{benefit.title}</h3>
              <p className="text-[#A1A1AA] text-lg leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
