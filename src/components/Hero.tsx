import { ArrowRight, Wifi, Lock, Snowflake, Eye, ShoppingBag, Coffee, Fuel, Music } from 'lucide-react';
import { motion } from 'framer-motion';

const transactions = [
  { name: 'Amazon', icon: ShoppingBag, amount: '-$42.50', time: '2m ago', color: '#FF9900' },
  { name: 'Starbucks', icon: Coffee, amount: '-$6.80', time: '1h ago', color: '#00704A' },
  { name: 'Shell Gas', icon: Fuel, amount: '-$55.20', time: '3h ago', color: '#FFD500' },
  { name: 'Spotify', icon: Music, amount: '-$9.99', time: 'Yesterday', color: '#1DB954' },
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
          <div className="w-[280px] sm:w-[310px] md:w-[340px] h-[580px] sm:h-[640px] md:h-[700px] border-[6px] sm:border-[8px] border-[#E4E4E7] rounded-[44px] sm:rounded-[52px] md:rounded-[56px] bg-white overflow-hidden relative shadow-[0_20px_80px_rgba(0,0,0,0.08)] sm:shadow-[0_40px_120px_rgba(0,0,0,0.12)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] sm:w-[110px] md:w-[120px] h-[26px] sm:h-[28px] md:h-[30px] bg-[#F7F7F8] rounded-b-2xl sm:rounded-b-3xl z-20"></div>
            
            <div className="p-4 sm:p-5 md:p-6 pt-10 sm:pt-12 md:pt-14 flex flex-col h-full bg-[#F7F7F8]">
              {/* Status bar */}
              <div className="flex justify-between items-center mb-3 sm:mb-4 px-1">
                <span className="text-black/40 text-[10px] font-semibold">9:41</span>
                <div className="flex gap-1 items-center">
                  <div className="w-3.5 h-2 border border-black/30 rounded-sm relative">
                    <div className="absolute inset-[1.5px] right-[2px] bg-black/70 rounded-[1px]"></div>
                  </div>
                </div>
              </div>

              {/* Header */}
              <div className="flex justify-between items-center mb-4 sm:mb-5">
                <span className="text-black text-sm sm:text-base font-bold tracking-tight">My Card</span>
                <div className="w-7 h-7 rounded-full bg-white border border-black/[0.08] shadow-sm flex items-center justify-center">
                  <Lock size={12} className="text-black/40" />
                </div>
              </div>

              {/* Credit Card */}
              <div className="w-full aspect-[1.7/1] rounded-2xl sm:rounded-[20px] bg-gradient-to-br from-[#1A1A1A] to-[#2D2D2D] p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.15)] mb-4 sm:mb-5">
                <div className="absolute top-0 right-0 w-[55%] h-[55%] bg-gradient-to-bl from-white/[0.07] to-transparent rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-[35%] h-[40%] bg-gradient-to-tr from-white/[0.04] to-transparent rounded-tr-full"></div>
                
                <div className="flex justify-between items-start relative z-10">
                  <div>
                    <div className="text-white/80 text-[10px] sm:text-xs font-bold tracking-tight">Tranzo</div>
                    <div className="text-white/25 text-[8px] sm:text-[9px] font-medium mt-0.5">Platinum</div>
                  </div>
                  <Wifi size={14} className="text-white/25 rotate-90 sm:w-4 sm:h-4" />
                </div>

                <div className="relative z-10">
                  <div className="w-7 sm:w-8 h-5 sm:h-6 rounded bg-gradient-to-br from-amber-300/80 to-amber-500/60 border border-amber-400/30 mb-2.5 sm:mb-3"></div>
                  <div className="text-white/90 font-bold tracking-[0.15em] text-[11px] sm:text-xs mb-2.5 sm:mb-3">5546 •••• •••• ••••</div>
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-white/25 text-[7px] sm:text-[8px] uppercase tracking-wider">Valid Thru</div>
                      <div className="text-white/60 text-[9px] sm:text-[10px] font-semibold">02/28</div>
                    </div>
                    <div className="text-white/40 text-[10px] sm:text-xs font-bold tracking-wider">VISA</div>
                  </div>
                </div>
              </div>

              {/* Card actions */}
              <div className="flex gap-2 mb-4 sm:mb-5">
                {[
                  { icon: Snowflake, label: 'Freeze' },
                  { icon: Eye, label: 'Details' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex-1 flex items-center justify-center gap-1.5 py-2 sm:py-2.5 rounded-xl bg-white border border-black/[0.06] shadow-sm">
                    <Icon size={13} className="text-black/50" />
                    <span className="text-[10px] sm:text-[11px] text-black/60 font-semibold">{label}</span>
                  </div>
                ))}
              </div>

              {/* Spending */}
              <div className="bg-white rounded-xl sm:rounded-2xl border border-black/[0.06] p-3 sm:p-3.5 shadow-sm mb-3 sm:mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-black/35 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider">This Month</span>
                  <span className="text-black text-xs sm:text-sm font-bold">$1,240.80</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-black/[0.04] overflow-hidden">
                  <div className="h-full w-[62%] rounded-full bg-black"></div>
                </div>
                <div className="flex justify-between mt-1.5">
                  <span className="text-black/25 text-[9px] sm:text-[10px]">62% of $2,000 limit</span>
                </div>
              </div>

              {/* Recent transactions */}
              <div className="flex-1 bg-white rounded-xl sm:rounded-2xl border border-black/[0.06] p-3 sm:p-3.5 shadow-sm">
                <div className="flex justify-between items-center mb-2.5 sm:mb-3">
                  <span className="text-black/35 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider">Recent</span>
                  <span className="text-black/20 text-[9px] sm:text-[10px]">See all</span>
                </div>
                <div className="flex flex-col gap-2.5 sm:gap-3">
                  {transactions.map((tx) => (
                    <div key={tx.name} className="flex items-center gap-2.5">
                      <div
                        className="w-7 sm:w-8 h-7 sm:h-8 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: tx.color + '12' }}
                      >
                        <tx.icon size={13} style={{ color: tx.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center">
                          <span className="text-black text-[11px] sm:text-xs font-semibold">{tx.name}</span>
                          <span className="text-black text-[11px] sm:text-xs font-semibold">{tx.amount}</span>
                        </div>
                        <span className="text-black/25 text-[9px] sm:text-[10px]">{tx.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom bar */}
              <div className="mt-3 sm:mt-4 flex justify-center">
                <div className="w-28 sm:w-32 h-1 rounded-full bg-black/10"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
