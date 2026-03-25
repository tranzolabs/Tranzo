import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { HardDrive, Wifi, WifiOff, ShieldCheck, Cpu, RefreshCw, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: WifiOff,
    title: 'True Air-Gap Security',
    description: 'Your private keys are generated and stored entirely offline. They never touch the internet, eliminating remote attack vectors.',
  },
  {
    icon: Cpu,
    title: 'Secure Element Chip',
    description: 'Dedicated secure element hardware stores keys in tamper-proof storage, protecting against physical extraction attacks.',
  },
  {
    icon: ShieldCheck,
    title: 'Transaction Verification',
    description: 'Review and confirm every transaction on the Dripper\'s built-in display before signing. What you see is what you sign.',
  },
  {
    icon: Wifi,
    title: 'Seamless Sync',
    description: 'Connects to the Tranzo app via Bluetooth or USB-C. Sign transactions securely without exposing your keys.',
  },
  {
    icon: RefreshCw,
    title: 'Auto Firmware Updates',
    description: 'Receive verified firmware updates through the Tranzo app. Always running the latest security patches.',
  },
  {
    icon: HardDrive,
    title: 'Multi-Account Support',
    description: 'Manage multiple wallets and accounts from a single Dripper device. One device for all your crypto.',
  },
];

const specs = [
  { label: 'Connectivity', value: 'Bluetooth 5.2 + USB-C' },
  { label: 'Secure Element', value: 'CC EAL6+ Certified' },
  { label: 'Display', value: 'OLED Touchscreen' },
  { label: 'Battery', value: 'Up to 30 days standby' },
  { label: 'Chains', value: '10+ Blockchains' },
  { label: 'Build', value: 'Aerospace-grade aluminum' },
];

const fadeUp = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export const DripperWallet = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-28 sm:pt-32 md:pt-48 pb-16 sm:pb-20 md:pb-32 px-4 sm:px-6 max-w-5xl mx-auto">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
          <div className="inline-block px-3 sm:px-4 py-1.5 rounded-full border border-black/10 text-xs sm:text-sm font-semibold text-black mb-6 sm:mb-8">
            Dripper Wallet
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-[80px] font-extrabold tracking-[-0.04em] md:tracking-[-0.05em] text-black mb-4 sm:mb-6 leading-[1] md:leading-[0.95] max-w-4xl">
            Cold storage, <br /><span className="text-[#727272]">warm experience.</span>
          </h1>
          <p className="text-[#727272] text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-8 sm:mb-10">
            The Dripper is Tranzo's dedicated hardware wallet — built for maximum security with seamless integration into your Tranzo ecosystem.
          </p>
          <a
            href="mailto:connect@tranzo.money"
            className="inline-flex items-center gap-2 bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base hover:scale-105 active:scale-95 transition-all shadow-xl"
          >
            Pre-Order Dripper
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </section>

      {/* Device Preview */}
      <section className="border-y border-black/5 py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <motion.div {...fadeUp} className="flex-1 flex justify-center">
            <div className="w-48 sm:w-56 md:w-64 h-72 sm:h-80 md:h-96 rounded-3xl sm:rounded-[32px] bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border border-white/10 p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              <div className="relative z-10">
                <div className="w-full h-20 sm:h-24 md:h-28 rounded-xl bg-white/10 border border-white/5 mb-3 flex items-center justify-center">
                  <span className="text-white/30 text-[10px] sm:text-xs font-mono uppercase tracking-widest">OLED Display</span>
                </div>
                <div className="text-white/40 text-[10px] sm:text-xs font-medium uppercase tracking-widest text-center">Dripper</div>
              </div>
              <div className="relative z-10 flex justify-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white/10 flex items-center justify-center">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white/20" />
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black mb-4 leading-tight">
              Security you can <span className="text-[#727272]">hold.</span>
            </h2>
            <p className="text-[#727272] text-sm sm:text-base leading-relaxed mb-6">
              The Dripper stores your private keys on a certified secure element chip, completely isolated from the internet. Every transaction requires physical confirmation on the device.
            </p>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {specs.map((spec, idx) => (
                <div key={idx} className="py-2.5 border-b border-black/5">
                  <div className="text-xs text-[#727272] font-medium mb-0.5">{spec.label}</div>
                  <div className="text-sm font-bold text-black">{spec.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-10 sm:mb-14 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-[-0.04em] text-black mb-3 sm:mb-4 leading-tight">
              Hardware-level <span className="text-[#727272]">protection.</span>
            </h2>
            <p className="text-[#727272] text-base sm:text-lg max-w-xl leading-relaxed">
              Every detail of the Dripper is engineered to keep your assets safe from digital and physical threats.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                {...fadeUp}
                transition={{ delay: idx * 0.05 }}
                className="p-6 sm:p-8 bg-[#F5F5F7] border border-black/5 rounded-2xl sm:rounded-3xl group hover:bg-[#EBEBEB] transition-all"
              >
                <div className="w-11 sm:w-12 h-11 sm:h-12 border border-black/5 rounded-xl bg-white mb-5 sm:mb-6 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <feature.icon size={20} strokeWidth={2} className="text-black" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-black mb-2 tracking-tight">{feature.title}</h3>
                <p className="text-[#727272] text-sm sm:text-base leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 border-t border-black/5">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <div className="bg-black rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-14">
              <h3 className="text-white text-xl sm:text-2xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
                Secure your assets offline.
              </h3>
              <p className="text-white/60 text-sm sm:text-base mb-6 sm:mb-8 max-w-md mx-auto leading-relaxed">
                Pre-order the Dripper and get hardware-grade security for your crypto.
              </p>
              <a
                href="mailto:connect@tranzo.money"
                className="inline-flex items-center gap-2 bg-white text-black px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-sm sm:text-base hover:scale-105 active:scale-95 transition-all"
              >
                Pre-Order Now
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
