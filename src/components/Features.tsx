import { motion } from 'framer-motion';
import { Wallet, CreditCard, Shield, ArrowLeftRight, LayoutDashboard } from 'lucide-react';

const featuresData = [
  {
    icon: Wallet,
    label: 'Self-Custody Wallet',
    description: 'A non-custodial, multi-chain wallet where you control your keys and assets. Simple interface with powerful functionality for managing, sending, and tracking crypto.',
  },
  {
    icon: CreditCard,
    label: 'Crypto Card (Virtual + Physical)',
    description: 'Spend crypto instantly with automatic conversion to fiat at checkout. Full control with real-time tracking, spending limits, and card management.',
  },
  {
    icon: Shield,
    label: 'Dripper Hardware Wallet',
    description: 'Secure your assets offline with a dedicated hardware wallet. Built for maximum protection and seamless integration with your Tranzo account.',
  },
  {
    icon: ArrowLeftRight,
    label: 'Fiat ↔ Crypto On/Off Ramp',
    description: 'Easily move between fiat and crypto with fast, reliable transactions.',
  },
  {
    icon: LayoutDashboard,
    label: 'Unified Dashboard',
    description: 'One place to manage balances, cards, transactions, and activity with clean, intuitive analytics.',
  },
];

export const Features = () => {
  return (
    <section className="py-20 md:py-40 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-black/10 text-sm font-semibold text-black mb-6 md:mb-8">
            Core Features
          </div>
          <h2 className="text-4xl md:text-[80px] font-extrabold tracking-[-0.05em] text-black mb-6 leading-[0.95] max-w-3xl">
            Everything you need. <br /> <span className="text-[#727272]">Nothing you don't.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresData.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ delay: idx * 0.05 }}
              className={`p-10 md:p-14 bg-[#F5F5F7] hover:bg-[#EBEBEB] transition-all relative border border-black/5 rounded-[36px] group ${idx >= 3 ? 'lg:col-span-1' : ''} ${idx === 3 ? 'md:col-span-1' : ''}`}
            >
              <div className="w-14 h-14 border border-black/5 rounded-2xl bg-white mb-10 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <feature.icon size={22} strokeWidth={2} className="text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 tracking-[-0.03em]">{feature.label}</h3>
              <p className="text-[#727272] text-lg leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
