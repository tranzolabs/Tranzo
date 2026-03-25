import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Zap, Globe, ShieldCheck, BarChart3, Smartphone, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Instant Conversion',
    description: 'Crypto is automatically converted to fiat at the point of sale. Spend your holdings anywhere cards are accepted.',
  },
  {
    icon: Globe,
    title: 'Works Worldwide',
    description: 'Accepted at millions of merchants in 150+ countries. Online and in-store, wherever Visa or Mastercard is accepted.',
  },
  {
    icon: ShieldCheck,
    title: 'Spending Controls',
    description: 'Set daily and monthly limits, freeze your card instantly, and get real-time alerts for every transaction.',
  },
  {
    icon: CreditCard,
    title: 'Virtual + Physical',
    description: 'Get a virtual card instantly for online purchases. Order a sleek physical card for in-person and ATM use.',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Tracking',
    description: 'Every transaction tracked in real-time. See spending breakdowns by category, merchant, and currency.',
  },
  {
    icon: Smartphone,
    title: 'Apple & Google Pay',
    description: 'Add your Tranzo Card to your mobile wallet for fast, contactless payments from your phone or watch.',
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export const CryptoCard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-28 sm:pt-32 md:pt-48 pb-16 sm:pb-20 md:pb-32 px-4 sm:px-6 max-w-5xl mx-auto">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
          <div className="inline-block px-3 sm:px-4 py-1.5 rounded-full border border-black/10 text-xs sm:text-sm font-semibold text-black mb-6 sm:mb-8">
            Crypto Card
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-[80px] font-extrabold tracking-[-0.04em] md:tracking-[-0.05em] text-black mb-4 sm:mb-6 leading-[1] md:leading-[0.95] max-w-4xl">
            Spend crypto <br /><span className="text-[#727272]">like cash.</span>
          </h1>
          <p className="text-[#727272] text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-8 sm:mb-10">
            Virtual and physical cards that let you spend your crypto holdings at any merchant, anywhere in the world. Automatic conversion, zero hassle.
          </p>
          <a
            href="mailto:connect@tranzo.money"
            className="inline-flex items-center gap-2 bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base hover:scale-105 active:scale-95 transition-all shadow-xl"
          >
            Get Your Card
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </section>

      {/* Card Preview */}
      <section className="border-y border-black/5 py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <motion.div {...fadeUp} className="flex-1">
            <div className="w-full max-w-sm mx-auto md:mx-0 aspect-[1.586/1] rounded-2xl sm:rounded-3xl bg-gradient-to-br from-black/10 to-black/5 border border-black/10 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -right-12 -top-12 w-40 h-40 bg-black/5 rounded-full blur-3xl" />
              <div className="text-black/40 text-xs sm:text-sm font-medium uppercase tracking-widest">Tranzo Card</div>
              <div>
                <div className="text-black font-bold tracking-widest mb-1 text-sm sm:text-base">&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; 5546</div>
                <div className="flex justify-between items-end">
                  <div className="text-black/40 text-xs">02/28</div>
                  <div className="text-black/40 text-xs font-medium uppercase tracking-wider">Visa</div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black mb-4 leading-tight">
              One card for <span className="text-[#727272]">all your crypto.</span>
            </h2>
            <p className="text-[#727272] text-sm sm:text-base leading-relaxed mb-6">
              Choose which asset to spend from — ETH, USDC, BTC, or any supported token. Tranzo handles the conversion at the best available rate at checkout.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '150+', label: 'Countries' },
                { value: '0%', label: 'Platform Fees' },
                { value: 'Instant', label: 'Virtual Card' },
                { value: 'Real-Time', label: 'Notifications' },
              ].map((stat, idx) => (
                <div key={idx}>
                  <div className="text-lg sm:text-xl font-extrabold text-black tracking-tight">{stat.value}</div>
                  <div className="text-xs text-[#727272] font-medium">{stat.label}</div>
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
              Designed for <span className="text-[#727272]">everyday spending.</span>
            </h2>
            <p className="text-[#727272] text-base sm:text-lg max-w-xl leading-relaxed">
              All the card features you expect, powered by the crypto you own.
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
              From crypto to checkout <span className="text-[#727272]">in seconds.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { step: '01', title: 'Pick Your Asset', desc: 'Select which cryptocurrency you want to spend from — Bitcoin, Ethereum, stablecoins, or any supported token.' },
              { step: '02', title: 'Tap & Pay', desc: 'Use your virtual or physical card anywhere. Tranzo auto-converts your crypto to the local fiat currency at the best rate.' },
              { step: '03', title: 'Track Everything', desc: 'Get instant notifications and detailed spending analytics. Full visibility into every transaction.' },
            ].map((item, idx) => (
              <motion.div key={idx} {...fadeUp} transition={{ delay: idx * 0.1 }}>
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
          <motion.div {...fadeUp}>
            <div className="bg-black rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-14">
              <h3 className="text-white text-xl sm:text-2xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
                Start spending crypto today.
              </h3>
              <p className="text-white/60 text-sm sm:text-base mb-6 sm:mb-8 max-w-md mx-auto leading-relaxed">
                Get your Tranzo Card and bridge the gap between crypto and everyday spending.
              </p>
              <a
                href="mailto:connect@tranzo.money"
                className="inline-flex items-center gap-2 bg-white text-black px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-sm sm:text-base hover:scale-105 active:scale-95 transition-all"
              >
                Get Your Card
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
