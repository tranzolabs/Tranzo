import { motion } from 'framer-motion';
import { Lock, Fingerprint, HardDrive } from 'lucide-react';

export const ProductShowcase = () => {
  return (
    <section className="py-16 sm:py-24 md:py-48 px-4 sm:px-6 border-y border-black/5 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16 md:mb-24"
        >
          <span className="text-xs sm:text-sm font-semibold text-black/40 border-b border-black/10 pb-2 mb-6 sm:mb-8 md:mb-12 inline-block tracking-widest uppercase">
            Security First
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[90px] font-extrabold tracking-[-0.04em] md:tracking-[-0.05em] text-black mb-5 sm:mb-8 leading-[1] md:leading-[0.95]">
            Your funds. <br /> <span className="text-[#727272]">Your control.</span>
          </h2>
          <p className="text-[#727272] text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed tracking-tight px-2 sm:px-0">
            Tranzo.money is built on self-custody principles with strong encryption and hardware-level protection. You always own your assets.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {[
            {
              icon: Lock,
              title: 'End-to-End Encryption',
              desc: 'Every transaction and key operation is encrypted with military-grade protocols.',
            },
            {
              icon: Fingerprint,
              title: 'Self-Custody Architecture',
              desc: 'Your keys never leave your device. No custodial risk, no third-party access.',
            },
            {
              icon: HardDrive,
              title: 'Hardware-Level Protection',
              desc: 'Dripper hardware wallet keeps your assets offline and physically secured.',
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 sm:p-8 md:p-12 bg-[#F5F5F7] border border-black/5 rounded-2xl sm:rounded-3xl md:rounded-[32px] text-center group hover:bg-[#EBEBEB] transition-all"
            >
              <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 border border-black/5 rounded-xl sm:rounded-2xl bg-white mx-auto mb-5 sm:mb-6 md:mb-8 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <item.icon size={22} strokeWidth={1.5} className="text-black sm:w-[24px] sm:h-[24px] md:w-[26px] md:h-[26px]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3 tracking-tight">{item.title}</h3>
              <p className="text-[#727272] text-sm sm:text-base leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
