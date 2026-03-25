import { motion } from 'framer-motion';
import { Lock, Fingerprint, HardDrive } from 'lucide-react';

export const ProductShowcase = () => {
  return (
    <section className="py-24 md:py-48 px-6 border-y border-black/5 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-xs md:text-sm font-semibold text-black/40 border-b border-black/10 pb-2 mb-8 md:mb-12 inline-block tracking-widest uppercase">
            Security First
          </span>
          <h2 className="text-4xl md:text-[90px] font-extrabold tracking-[-0.05em] text-black mb-8 leading-[0.95]">
            Your funds. <br /> <span className="text-[#727272]">Your control.</span>
          </h2>
          <p className="text-[#727272] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed tracking-tight">
            Tranzo.money is built on self-custody principles with strong encryption and hardware-level protection. You always own your assets.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
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
              className="p-8 md:p-12 bg-[#F5F5F7] border border-black/5 rounded-[32px] text-center group hover:bg-[#EBEBEB] transition-all"
            >
              <div className="w-16 h-16 border border-black/5 rounded-2xl bg-white mx-auto mb-8 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <item.icon size={26} strokeWidth={1.5} className="text-black" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3 tracking-tight">{item.title}</h3>
              <p className="text-[#727272] text-base leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
