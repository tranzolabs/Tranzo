import { motion } from 'framer-motion';

export const HowItWorks = () => {
  return (
    <section className="py-16 sm:py-24 md:py-48 bg-white px-4 sm:px-6 border-b border-black/5 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <div className="inline-block px-3 sm:px-4 py-1.5 rounded-full border border-black/10 text-xs sm:text-sm font-semibold text-black mb-6 sm:mb-8">
            About Tranzo
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[80px] font-extrabold tracking-[-0.04em] md:tracking-[-0.05em] text-black mb-6 sm:mb-8 leading-[1] md:leading-[0.95]">
            One platform. <br /> <span className="text-[#727272]">Complete control.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="mt-8 sm:mt-12 md:mt-16 grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-24 items-start"
        >
          <p className="text-[#727272] text-lg sm:text-xl md:text-2xl leading-relaxed max-w-xl">
            Tranzo.money is a unified financial platform that bridges crypto and traditional payments. Store, manage, and spend digital assets with full control—without relying on centralized custody.
          </p>
          <div className="grid grid-cols-3 gap-4 sm:gap-8">
            {[
              { value: '150+', label: 'Countries' },
              { value: '40+', label: 'Currencies' },
              { value: '<50ms', label: 'Settlement' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black tracking-tight">{stat.value}</div>
                <div className="text-xs sm:text-sm text-[#727272] mt-1 sm:mt-2 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
