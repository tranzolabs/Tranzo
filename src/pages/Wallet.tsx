import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wallet as WalletIcon, Shield, Layers, ArrowLeftRight, Globe, KeyRound, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: KeyRound,
    title: 'Your Keys, Your Crypto',
    description: 'Private keys are generated and stored exclusively on your device. Tranzo never has access to your seed phrase or credentials.',
  },
  {
    icon: Layers,
    title: 'Multi-Chain Support',
    description: 'Manage assets across Ethereum, Solana, Bitcoin, Polygon, Arbitrum, Base, and more — all from a single unified wallet.',
  },
  {
    icon: ArrowLeftRight,
    title: 'Instant Swaps',
    description: 'Swap between tokens and chains with built-in DEX aggregation. Best rates, minimal slippage, zero platform fees.',
  },
  {
    icon: Shield,
    title: 'Military-Grade Encryption',
    description: 'Every transaction and key operation is encrypted end-to-end. Your assets stay protected at rest and in transit.',
  },
  {
    icon: Globe,
    title: 'Available Everywhere',
    description: 'Access your wallet from any device, anywhere in the world. Your assets are always just a tap away.',
  },
  {
    icon: WalletIcon,
    title: 'Unified Dashboard',
    description: 'Track balances, transaction history, and portfolio performance across all chains in one clean interface.',
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export const Wallet = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-28 sm:pt-32 md:pt-48 pb-16 sm:pb-20 md:pb-32 px-4 sm:px-6 max-w-5xl mx-auto">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
          <div className="inline-block px-3 sm:px-4 py-1.5 rounded-full border border-black/10 text-xs sm:text-sm font-semibold text-black mb-6 sm:mb-8">
            Self-Custody Wallet
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-[80px] font-extrabold tracking-[-0.04em] md:tracking-[-0.05em] text-black mb-4 sm:mb-6 leading-[1] md:leading-[0.95] max-w-4xl">
            Your money. <br /><span className="text-[#727272]">Your control.</span>
          </h1>
          <p className="text-[#727272] text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-8 sm:mb-10">
            A non-custodial, multi-chain wallet where you hold the keys. Simple enough for everyday use, powerful enough for serious crypto management.
          </p>
          <a
            href="mailto:connect@tranzo.money"
            className="inline-flex items-center gap-2 bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base hover:scale-105 active:scale-95 transition-all shadow-xl"
          >
            Get Early Access
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="border-y border-black/5 py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {[
            { value: '10+', label: 'Blockchains' },
            { value: '1000+', label: 'Tokens Supported' },
            { value: '<1s', label: 'Transaction Speed' },
            { value: '100%', label: 'Self-Custody' },
          ].map((stat, idx) => (
            <motion.div key={idx} {...fadeUp} transition={{ delay: idx * 0.05 }} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black tracking-tight">{stat.value}</div>
              <div className="text-xs sm:text-sm text-[#727272] mt-1.5 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="mb-10 sm:mb-14 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-[-0.04em] text-black mb-3 sm:mb-4 leading-tight">
              Built for <span className="text-[#727272]">real ownership.</span>
            </h2>
            <p className="text-[#727272] text-base sm:text-lg max-w-xl leading-relaxed">
              Every feature is designed around one principle: you should always have complete control over your funds.
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

      {/* How It Works */}
      <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 border-t border-black/5">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-10 sm:mb-14 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-[-0.04em] text-black mb-3 leading-tight">
              Getting started is <span className="text-[#727272]">effortless.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { step: '01', title: 'Create Your Wallet', desc: 'Set up in under a minute. Your seed phrase is generated locally on your device — only you ever see it.' },
              { step: '02', title: 'Add Your Assets', desc: 'Import existing wallets or receive crypto from any chain. All your holdings in one unified view.' },
              { step: '03', title: 'Send, Swap & Spend', desc: 'Transfer to any address, swap between tokens, or link your Tranzo Card to spend crypto instantly.' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                {...fadeUp}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                <div className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-black/5 mb-3 sm:mb-4 tracking-tighter">{item.step}</div>
                <h3 className="text-lg sm:text-xl font-bold text-black mb-2 tracking-tight">{item.title}</h3>
                <p className="text-[#727272] text-sm sm:text-base leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 border-t border-black/5">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
            <div className="bg-black rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-14">
              <h3 className="text-white text-xl sm:text-2xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
                Take control of your crypto.
              </h3>
              <p className="text-white/60 text-sm sm:text-base mb-6 sm:mb-8 max-w-md mx-auto leading-relaxed">
                Join thousands who trust Tranzo for true self-custody.
              </p>
              <a
                href="mailto:connect@tranzo.money"
                className="inline-flex items-center gap-2 bg-white text-black px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-sm sm:text-base hover:scale-105 active:scale-95 transition-all"
              >
                Get Started
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
