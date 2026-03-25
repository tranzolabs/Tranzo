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
    <section className="py-16 sm:py-20 md:py-48 px-4 sm:px-6 border-t border-black/5 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-32 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex-1 w-full md:w-auto"
        >
          <div className="inline-block px-3 sm:px-4 py-1.5 rounded-full border border-black/10 text-xs sm:text-sm font-semibold text-black mb-5 sm:mb-6 md:mb-8">
            Why Tranzo
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[80px] font-extrabold tracking-[-0.04em] md:tracking-[-0.05em] text-black mb-4 sm:mb-6 leading-[1] md:leading-[0.95]">
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
                className="flex items-center gap-4 sm:gap-6 py-5 sm:py-6 md:py-7 border-b border-black/5 group"
              >
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full border border-black/10 bg-black/[0.02] flex items-center justify-center flex-shrink-0 group-hover:bg-black group-hover:border-black transition-all">
                  <Check size={14} className="text-black/40 group-hover:text-white transition-colors sm:w-4 sm:h-4" />
                </div>
                <span className="text-base sm:text-xl md:text-2xl font-medium text-black tracking-tight">{reason}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
