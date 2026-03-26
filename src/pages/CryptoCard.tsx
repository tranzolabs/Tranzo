import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Zap, Globe, ShieldCheck, BarChart3, Smartphone, ArrowRight, Wifi, Check } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Instant Conversion',
    description: 'Crypto converts to fiat at the point of sale. Spend your holdings anywhere cards are accepted.',
  },
  {
    icon: Globe,
    title: 'Works Worldwide',
    description: 'Accepted at millions of merchants in 150+ countries, online and in-store.',
  },
  {
    icon: ShieldCheck,
    title: 'Spending Controls',
    description: 'Set daily limits, freeze instantly, and get real-time alerts for every transaction.',
  },
  {
    icon: CreditCard,
    title: 'Virtual + Physical',
    description: 'Get a virtual card instantly for online use. Order a sleek physical card for in-person and ATM.',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Tracking',
    description: 'Every transaction tracked live. See breakdowns by category, merchant, and currency.',
  },
  {
    icon: Smartphone,
    title: 'Apple & Google Pay',
    description: 'Add your Tranzo Card to your mobile wallet for fast contactless payments.',
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export const CryptoCard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-28 sm:pt-32 md:pt-44 pb-16 sm:pb-20 md:pb-28 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="flex-1 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F5F7] text-xs sm:text-sm font-semibold text-black/70 mb-6 sm:mb-8">
              <CreditCard size={14} />
              Crypto Card
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-[64px] font-extrabold tracking-[-0.04em] text-black mb-5 sm:mb-6 leading-[1.05]">
              Spend crypto<br /><span className="text-[#999]">like cash.</span>
            </h1>
            <p className="text-[#727272] text-base sm:text-lg md:text-xl max-w-lg leading-relaxed mb-8 sm:mb-10">
              Virtual and physical cards that convert your crypto at the point of sale. Accepted worldwide, zero platform fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:connect@tranzo.money"
                className="inline-flex items-center justify-center gap-2 bg-black text-white px-7 py-3.5 rounded-full font-bold text-sm sm:text-base hover:scale-105 active:scale-95 transition-all shadow-lg"
              >
                Get Your Card
                <ArrowRight size={16} />
              </a>
              <a
                href="mailto:connect@tranzo.money"
                className="inline-flex items-center justify-center gap-2 border border-black/10 text-black px-7 py-3.5 rounded-full font-bold text-sm sm:text-base hover:bg-black/[0.03] hover:scale-105 active:scale-95 transition-all"
              >
                Join Waitlist
              </a>
            </div>
          </motion.div>

          {/* Card Visual */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex-1 w-full max-w-md lg:max-w-lg flex justify-center"
          >
            <div className="relative w-full aspect-[4/3] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-black/[0.02] to-transparent rounded-[40px]"></div>
              {/* Main card */}
              <div className="relative w-[85%] aspect-[1.586/1] rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] p-5 sm:p-7 md:p-8 flex flex-col justify-between shadow-[0_30px_80px_rgba(0,0,0,0.2)] border border-white/[0.08] overflow-hidden">
                <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-gradient-to-bl from-white/[0.06] to-transparent rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-gradient-to-tr from-white/[0.03] to-transparent rounded-tr-full"></div>

                <div className="flex justify-between items-start relative z-10">
                  <div>
                    <div className="text-white/90 text-sm sm:text-base font-bold tracking-tight">Tranzo</div>
                    <div className="text-white/30 text-[10px] sm:text-xs font-medium mt-0.5">Platinum</div>
                  </div>
                  <Wifi size={20} className="text-white/30 rotate-90 sm:w-6 sm:h-6" />
                </div>

                <div className="relative z-10">
                  <div className="flex gap-1 mb-3 sm:mb-4">
                    <div className="w-8 sm:w-10 h-6 sm:h-7 rounded bg-gradient-to-br from-amber-300/80 to-amber-500/60 border border-amber-400/30"></div>
                  </div>
                  <div className="text-white font-bold tracking-[0.2em] mb-3 sm:mb-4 text-sm sm:text-base md:text-lg">
                    5546 •••• •••• ••••
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-white/30 text-[9px] sm:text-[10px] uppercase tracking-wider mb-0.5">Valid Thru</div>
                      <div className="text-white/70 text-xs sm:text-sm font-semibold">02/28</div>
                    </div>
                    <div className="text-right">
                      <div className="text-white/50 text-sm sm:text-base font-bold tracking-wider">VISA</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-black/[0.06] bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { value: '150+', label: 'Countries Supported' },
              { value: '0%', label: 'Platform Fees' },
              { value: '<1s', label: 'Card Issuance' },
              { value: '24/7', label: 'Real-Time Alerts' },
            ].map((stat, idx) => (
              <motion.div key={idx} {...fadeUp} transition={{ delay: idx * 0.05 }} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black tracking-tight">{stat.value}</div>
                <div className="text-xs sm:text-sm text-[#999] font-medium mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* One Card Section */}
      <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="max-w-2xl mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-[-0.04em] text-black mb-4 leading-tight">
              One card for <span className="text-[#999]">all your crypto.</span>
            </h2>
            <p className="text-[#727272] text-base sm:text-lg leading-relaxed">
              Choose which asset to spend from — ETH, USDC, BTC, or any supported token. Tranzo handles the conversion at the best available rate.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                {...fadeUp}
                transition={{ delay: idx * 0.05 }}
                className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-black/[0.06] bg-white hover:border-black/[0.12] hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300 group"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#F5F5F7] border border-black/[0.06] flex items-center justify-center mb-5 group-hover:bg-black group-hover:border-black transition-all duration-300">
                  <feature.icon size={20} strokeWidth={2} className="text-black/70 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-black mb-2 tracking-tight">{feature.title}</h3>
                <p className="text-[#999] text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 bg-[#FAFAFA] border-y border-black/[0.06]">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="mb-12 sm:mb-16 md:mb-20 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-[-0.04em] text-black mb-3 leading-tight">
              From crypto to checkout <span className="text-[#999]">in seconds.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {[
              { step: '01', title: 'Pick Your Asset', desc: 'Select which cryptocurrency you want to spend from — Bitcoin, Ethereum, stablecoins, or any supported token.' },
              { step: '02', title: 'Tap & Pay', desc: 'Use your virtual or physical card anywhere. Tranzo auto-converts your crypto to the local fiat currency at the best rate.' },
              { step: '03', title: 'Track Everything', desc: 'Get instant notifications and detailed spending analytics. Full visibility into every transaction.' },
            ].map((item, idx) => (
              <motion.div key={idx} {...fadeUp} transition={{ delay: idx * 0.1 }} className="relative">
                <div className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-black/[0.04] mb-2 tracking-tighter leading-none">{item.step}</div>
                <h3 className="text-lg sm:text-xl font-bold text-black mb-2 tracking-tight">{item.title}</h3>
                <p className="text-[#999] text-sm sm:text-base leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits checklist */}
      <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          <motion.div {...fadeUp} className="flex-1 max-w-xl">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-[-0.04em] text-black mb-4 leading-tight">
              Built for <span className="text-[#999]">real use.</span>
            </h2>
            <p className="text-[#727272] text-base sm:text-lg leading-relaxed">
              Not another gimmick. Tranzo Card is designed for people who actually want to spend their crypto.
            </p>
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="flex-1">
            <div className="flex flex-col gap-4">
              {[
                'No monthly fees or hidden charges',
                'Automatic best-rate conversion at checkout',
                'Instant virtual card — ready in under a second',
                'Freeze and unfreeze from the app anytime',
                'Works with Apple Pay and Google Pay',
                'ATM withdrawals in 150+ countries',
                'Real-time push notifications for every spend',
                'Set custom spending limits per day or month',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} strokeWidth={3} className="text-white" />
                  </div>
                  <span className="text-sm sm:text-base text-black/80 leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp}>
            <div className="bg-black rounded-3xl sm:rounded-[32px] p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-gradient-to-bl from-white/[0.04] to-transparent rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-[30%] h-[50%] bg-gradient-to-tr from-white/[0.02] to-transparent rounded-tr-full"></div>
              <div className="relative z-10">
                <h3 className="text-white text-xl sm:text-2xl md:text-4xl font-extrabold tracking-tight mb-3 sm:mb-4">
                  Start spending crypto today.
                </h3>
                <p className="text-white/50 text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed">
                  Get your Tranzo Card and bridge the gap between crypto and everyday spending.
                </p>
                <a
                  href="mailto:connect@tranzo.money"
                  className="inline-flex items-center gap-2 bg-white text-black px-7 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-sm sm:text-base hover:scale-105 active:scale-95 transition-all"
                >
                  Get Your Card
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
