import { ArrowRight, ArrowUpRight, ArrowDownLeft, ArrowLeftRight, CreditCard, Send, QrCode, TrendingUp, MoreHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';

const assets = [
  { symbol: 'BTC', name: 'Bitcoin', amount: '0.4821', value: '$8,240.50', change: '+3.2%', color: '#F7931A' },
  { symbol: 'ETH', name: 'Ethereum', amount: '2.156', value: '$3,420.00', change: '+1.8%', color: '#627EEA' },
  { symbol: 'SOL', name: 'Solana', amount: '12.5', value: '$789.50', change: '+5.4%', color: '#9945FF' },
];

export const Hero = () => {
  return (
    <section className="relative pt-28 sm:pt-32 md:pt-36 pb-20 md:pb-32 px-4 sm:px-6 overflow-hidden flex flex-col items-center">
      <div className="bg-hero-glow"></div>
      
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="inline-flex gap-1.5 sm:gap-2 items-center px-3 sm:px-4 py-1.5 rounded-full border border-black/5 bg-black/[0.02] text-xs sm:text-sm font-medium text-[#727272] mb-8 md:mb-10"
        >
          <span>Self-Custody</span>
          <span className="w-1 h-1 rounded-full bg-black"></span>
          <span>Crypto Card</span>
          <span className="w-1 h-1 rounded-full bg-black"></span>
          <span>Hardware Wallet</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[2.5rem] sm:text-5xl md:text-[110px] font-extrabold tracking-[-0.04em] md:tracking-[-0.05em] text-black max-w-5xl mx-auto leading-[1] md:leading-[0.95]"
        >
          Own Your Money. <br className="hidden md:block" />
          <span className="text-[#727272]">Spend It Anywhere.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#727272] text-base sm:text-lg md:text-2xl max-w-lg md:max-w-2xl mx-auto mt-6 sm:mt-8 md:mt-10 mb-8 sm:mb-10 md:mb-12 leading-relaxed tracking-tight px-2 sm:px-0"
        >
          Self-custody wallet, crypto card, and hardware security—everything in one seamless ecosystem.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-2 sm:px-0"
        >
          <a href="mailto:connect@tranzo.money" className="bg-black text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-xl">
            Get Started
            <ArrowRight size={18} className="sm:w-5 sm:h-5" />
          </a>
          <a href="mailto:connect@tranzo.money" className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-bold border border-black/10 text-black hover:bg-black/[0.03] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2">
            Join Waitlist
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 sm:mt-20 md:mt-28 w-full max-w-3xl mx-auto relative flex justify-center"
        >
          <div className="w-[280px] sm:w-[310px] md:w-[340px] h-[580px] sm:h-[640px] md:h-[700px] border-[6px] sm:border-[8px] border-[#1A1A1A] rounded-[44px] sm:rounded-[52px] md:rounded-[56px] bg-[#0A0A0A] overflow-hidden relative shadow-[0_20px_80px_rgba(0,0,0,0.25)] sm:shadow-[0_40px_120px_rgba(0,0,0,0.3)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] sm:w-[110px] md:w-[120px] h-[26px] sm:h-[28px] md:h-[30px] bg-[#0A0A0A] rounded-b-2xl sm:rounded-b-3xl z-20"></div>
            
            <div className="p-4 sm:p-5 md:p-6 pt-10 sm:pt-12 md:pt-14 flex flex-col h-full">
              {/* Status bar */}
              <div className="flex justify-between items-center mb-4 sm:mb-5 px-1">
                <span className="text-white/40 text-[10px] font-medium">9:41</span>
                <div className="flex gap-1 items-center">
                  <div className="w-3.5 h-2 border border-white/40 rounded-sm relative">
                    <div className="absolute inset-[1.5px] right-[2px] bg-green-400 rounded-[1px]"></div>
                  </div>
                </div>
              </div>

              {/* Header */}
              <div className="flex justify-between items-center mb-5 sm:mb-6">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/10 flex items-center justify-center">
                  <QrCode size={14} className="text-white/60" />
                </div>
                <span className="text-white/90 text-sm font-semibold tracking-tight">Tranzo</span>
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <MoreHorizontal size={14} className="text-white/60" />
                </div>
              </div>

              {/* Balance */}
              <div className="text-center mb-5 sm:mb-6">
                <div className="text-white/40 text-[11px] sm:text-xs font-medium mb-1.5 uppercase tracking-wider">Total Balance</div>
                <div className="text-white text-[28px] sm:text-[32px] md:text-[36px] font-bold tracking-tighter leading-none">$12,450.00</div>
                <div className="flex items-center justify-center gap-1 mt-1.5">
                  <TrendingUp size={11} className="text-emerald-400" />
                  <span className="text-emerald-400 text-[11px] font-semibold">+2.4%</span>
                  <span className="text-white/30 text-[11px]">today</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="grid grid-cols-4 gap-1.5 sm:gap-2 mb-5 sm:mb-6">
                {[
                  { icon: ArrowUpRight, label: 'Send' },
                  { icon: ArrowDownLeft, label: 'Receive' },
                  { icon: ArrowLeftRight, label: 'Swap' },
                  { icon: CreditCard, label: 'Card' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex flex-col items-center gap-1.5">
                    <div className="w-10 sm:w-11 md:w-12 h-10 sm:h-11 md:h-12 rounded-2xl bg-white/[0.08] border border-white/[0.06] flex items-center justify-center">
                      <Icon size={16} className="text-white/80" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] text-white/40 font-medium">{label}</span>
                  </div>
                ))}
              </div>

              {/* Assets */}
              <div className="flex-1 bg-white/[0.04] border border-white/[0.06] rounded-2xl sm:rounded-3xl p-3 sm:p-4">
                <div className="flex justify-between items-center mb-3 sm:mb-4">
                  <span className="text-white/50 text-[11px] sm:text-xs font-semibold uppercase tracking-wider">Assets</span>
                  <span className="text-white/30 text-[10px] sm:text-[11px]">See all</span>
                </div>
                <div className="flex flex-col gap-2.5 sm:gap-3">
                  {assets.map((asset) => (
                    <div key={asset.symbol} className="flex items-center gap-2.5 sm:gap-3">
                      <div
                        className="w-8 sm:w-9 h-8 sm:h-9 rounded-full flex items-center justify-center shrink-0 text-white font-bold text-[10px] sm:text-[11px]"
                        style={{ backgroundColor: asset.color + '20', border: `1px solid ${asset.color}30` }}
                      >
                        <span style={{ color: asset.color }}>{asset.symbol.charAt(0)}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center">
                          <span className="text-white/90 text-xs sm:text-[13px] font-semibold">{asset.symbol}</span>
                          <span className="text-white/90 text-xs sm:text-[13px] font-semibold">{asset.value}</span>
                        </div>
                        <div className="flex justify-between items-center mt-0.5">
                          <span className="text-white/30 text-[10px] sm:text-[11px]">{asset.amount} {asset.symbol}</span>
                          <span className="text-emerald-400 text-[10px] sm:text-[11px] font-medium">{asset.change}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom nav */}
              <div className="mt-3 sm:mt-4 flex justify-center">
                <div className="w-28 sm:w-32 h-1 rounded-full bg-white/20"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
