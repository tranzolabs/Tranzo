import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock, Fingerprint, HardDrive, Eye, Network, ArrowRight, Check } from 'lucide-react';

const pillars = [
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    description: 'Every key operation is encrypted with military-grade protocols. Data at rest, data in transit — always protected.',
  },
  {
    icon: Fingerprint,
    title: 'Self-Custody Architecture',
    description: 'Your keys never leave your device. No centralized custody, no third-party access, no single point of failure.',
  },
  {
    icon: HardDrive,
    title: 'Offline Key Storage',
    description: 'The Dripper hardware wallet stores keys in a certified secure element, completely isolated from any network.',
  },
  {
    icon: Eye,
    title: 'On-Device Verification',
    description: 'Every transaction is displayed and confirmed on the hardware device screen. What you see is what gets signed.',
  },
  {
    icon: Network,
    title: 'Multi-Layer Protection',
    description: 'PIN protection, biometric auth, passphrase support, and anti-tampering mechanisms — layered security by design.',
  },
];

const comparisons = [
  { feature: 'Private key storage', tranzo: 'On your device / hardware', others: 'Company servers' },
  { feature: 'Key access', tranzo: 'Only you', others: 'Company + you' },
  { feature: 'Transaction signing', tranzo: 'On-device verification', others: 'Server-side' },
  { feature: 'Risk if company shuts down', tranzo: 'Assets are safe', others: 'Assets at risk' },
  { feature: 'Government seizure risk', tranzo: 'Not possible', others: 'Possible via company' },
  { feature: 'Hardware backup', tranzo: 'Dripper + seed phrase', others: 'Not available' },
];

const fadeUp = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export const HardwareWallet = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-28 sm:pt-32 md:pt-48 pb-16 sm:pb-20 md:pb-32 px-4 sm:px-6 max-w-5xl mx-auto">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
          <div className="inline-block px-3 sm:px-4 py-1.5 rounded-full border border-black/10 text-xs sm:text-sm font-semibold text-black mb-6 sm:mb-8">
            Hardware Security
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-[80px] font-extrabold tracking-[-0.04em] md:tracking-[-0.05em] text-black mb-4 sm:mb-6 leading-[1] md:leading-[0.95] max-w-4xl">
            Your funds. <br /><span className="text-[#727272]">Physically secured.</span>
          </h1>
          <p className="text-[#727272] text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-8 sm:mb-10">
            Tranzo's hardware wallet security combines self-custody architecture with offline key storage to give you the strongest protection available in crypto.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="/dripper-wallet"
              className="inline-flex items-center justify-center gap-2 bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base hover:scale-105 active:scale-95 transition-all shadow-xl"
            >
              Explore Dripper
              <ArrowRight size={16} />
            </a>
            <a
              href="/wallet"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base border border-black/10 hover:bg-black/[0.03] hover:scale-105 active:scale-95 transition-all"
            >
              View Software Wallet
            </a>
          </div>
        </motion.div>
      </section>

      {/* Why Hardware Security */}
      <section className="border-y border-black/5 py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="max-w-2xl mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-[-0.04em] text-black mb-3 sm:mb-4 leading-tight">
              Why hardware <span className="text-[#727272]">matters.</span>
            </h2>
            <p className="text-[#727272] text-base sm:text-lg leading-relaxed">
              Software wallets keep keys on internet-connected devices. Hardware wallets take them offline entirely — the most secure way to store crypto.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="bg-[#F5F5F7] border border-black/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
              <h3 className="font-bold text-black text-lg sm:text-xl mb-4 tracking-tight">Software-only wallet</h3>
              <ul className="space-y-3">
                {[
                  'Keys stored on connected device',
                  'Vulnerable to malware & phishing',
                  'Depends on device security',
                  'Convenient but higher risk',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[#727272] text-sm sm:text-base">
                    <span className="w-1.5 h-1.5 rounded-full bg-black/20 mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.15 }} className="bg-black border border-black rounded-2xl sm:rounded-3xl p-6 sm:p-8">
              <h3 className="font-bold text-white text-lg sm:text-xl mb-4 tracking-tight">Tranzo + Dripper hardware</h3>
              <ul className="space-y-3">
                {[
                  'Keys stored in offline secure element',
                  'Air-gapped from all networks',
                  'Physical confirmation for every transaction',
                  'Maximum security with full usability',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-white/70 text-sm sm:text-base">
                    <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center mt-0.5 shrink-0">
                      <Check size={10} className="text-white" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Pillars */}
      <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-10 sm:mb-14 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-[-0.04em] text-black mb-3 sm:mb-4 leading-tight">
              Security <span className="text-[#727272]">pillars.</span>
            </h2>
            <p className="text-[#727272] text-base sm:text-lg max-w-xl leading-relaxed">
              Multiple layers of protection work together to secure your assets against every threat vector.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                {...fadeUp}
                transition={{ delay: idx * 0.05 }}
                className="p-6 sm:p-8 bg-[#F5F5F7] border border-black/5 rounded-2xl sm:rounded-3xl group hover:bg-[#EBEBEB] transition-all"
              >
                <div className="w-11 sm:w-12 h-11 sm:h-12 border border-black/5 rounded-xl bg-white mb-5 sm:mb-6 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <pillar.icon size={20} strokeWidth={2} className="text-black" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-black mb-2 tracking-tight">{pillar.title}</h3>
                <p className="text-[#727272] text-sm sm:text-base leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 border-t border-black/5">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp} className="mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-[-0.04em] text-black mb-3 sm:mb-4 leading-tight">
              Tranzo vs. <span className="text-[#727272]">custodial wallets.</span>
            </h2>
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
            <div className="border border-black/5 rounded-2xl sm:rounded-3xl overflow-hidden">
              <div className="grid grid-cols-3 bg-[#F5F5F7] border-b border-black/5 px-4 sm:px-6 py-3 sm:py-4">
                <div className="text-xs sm:text-sm font-bold text-black">Feature</div>
                <div className="text-xs sm:text-sm font-bold text-black">Tranzo</div>
                <div className="text-xs sm:text-sm font-bold text-[#727272]">Custodial</div>
              </div>
              {comparisons.map((row, idx) => (
                <div key={idx} className="grid grid-cols-3 px-4 sm:px-6 py-3 sm:py-4 border-b border-black/5 last:border-b-0">
                  <div className="text-xs sm:text-sm text-[#727272]">{row.feature}</div>
                  <div className="text-xs sm:text-sm font-semibold text-black">{row.tranzo}</div>
                  <div className="text-xs sm:text-sm text-[#727272]">{row.others}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 border-t border-black/5">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <div className="bg-black rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-14">
              <h3 className="text-white text-xl sm:text-2xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
                Own your security.
              </h3>
              <p className="text-white/60 text-sm sm:text-base mb-6 sm:mb-8 max-w-md mx-auto leading-relaxed">
                Get hardware-level protection for your crypto with the Dripper wallet.
              </p>
              <a
                href="/dripper-wallet"
                className="inline-flex items-center gap-2 bg-white text-black px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-sm sm:text-base hover:scale-105 active:scale-95 transition-all"
              >
                Explore Dripper
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
