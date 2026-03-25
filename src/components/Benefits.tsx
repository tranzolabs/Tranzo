import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const reasons = [
  'Full ownership of funds',
  'Seamless crypto spending',
  'Simple yet powerful interface',
  'Integrated hardware security',
  'Built for the next generation of finance',
];

export const Benefits = () => {
  return (
    <section className="py-20 md:py-48 px-6 border-t border-black/5 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-black/10 text-sm font-semibold text-black mb-6 md:mb-8">
            Why Tranzo
          </div>
          <h2 className="text-4xl md:text-[80px] font-extrabold tracking-[-0.05em] text-black mb-6 leading-[0.95]">
            Finance, <br /> <span className="text-[#727272]">redefined.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="flex-1 w-full"
        >
          <div className="space-y-0">
            {reasons.map((reason, idx) => (
              <div
                key={idx}
                className="flex items-center gap-6 py-7 border-b border-black/5 group"
              >
                <div className="w-10 h-10 rounded-full border border-black/10 bg-black/[0.02] flex items-center justify-center flex-shrink-0 group-hover:bg-black group-hover:border-black transition-all">
                  <Check size={16} className="text-black/40 group-hover:text-white transition-colors" />
                </div>
                <span className="text-xl md:text-2xl font-medium text-black tracking-tight">{reason}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
