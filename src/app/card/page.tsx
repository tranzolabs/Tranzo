"use client";

import { motion } from "framer-motion";
import { Eye, Snowflake, Settings2, ArrowUpRight } from "lucide-react";
import ResponsiveLayout from "@/components/ResponsiveLayout";
import PageTransition from "@/components/PageTransition";

const cardTransactions = [
  { name: "Amazon", amount: -89.99, category: "Shopping", time: "Today" },
  { name: "Starbucks", amount: -5.75, category: "Food", time: "Today" },
  { name: "Spotify", amount: -9.99, category: "Entertainment", time: "Yesterday" },
  { name: "Swiggy", amount: -12.30, category: "Food", time: "Mar 15" },
];

export default function CardPage() {
  return (
    <PageTransition>
      <ResponsiveLayout>
        <div className="min-h-screen pb-24 md:pb-8">
          <div className="md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-6 md:px-6 md:pt-8">
            {/* Card */}
            <div className="px-6 md:px-0 pt-8 md:pt-0">
              <motion.div
                className="w-full aspect-[1.6/1] rounded-3xl relative overflow-hidden"
                style={{
                  background: "linear-gradient(145deg, #0F1722 0%, #162030 40%, #0D1520 100%)",
                  border: "1px solid rgba(0, 229, 160, 0.1)",
                }}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <div className="absolute -right-6 -bottom-6 text-[140px] font-black text-white/[0.02] leading-none select-none">
                  TZ
                </div>
                <div className="p-7 h-full flex flex-col justify-between relative z-10">
                  <div className="flex justify-between items-start">
                    <span className="text-xl font-bold gradient-text">tranzo</span>
                    <span className="text-white/80 font-bold tracking-wider">VISA</span>
                  </div>
                  <div>
                    <div className="w-12 h-8 rounded-md bg-gradient-to-br from-yellow-400/30 to-yellow-600/20 border border-yellow-500/20 mb-4" />
                    <div className="flex gap-4 mb-2">
                      <span className="text-white/25 text-sm tracking-[4px]">••••</span>
                      <span className="text-white/25 text-sm tracking-[4px]">••••</span>
                      <span className="text-white/25 text-sm tracking-[4px]">••••</span>
                      <span className="text-white/50 text-sm tracking-[4px]">4589</span>
                    </div>
                    <p className="text-white/30 text-xs">PRANAV</p>
                  </div>
                </div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -skew-x-12"
                  animate={{ x: ["-200%", "200%"] }}
                  transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
                />
              </motion.div>
            </div>

            {/* Card Actions + Spending */}
            <div className="md:flex md:flex-col md:justify-center">
              <motion.div
                className="flex justify-center gap-10 py-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {[
                  { icon: Eye, label: "Show\ndetails" },
                  { icon: Snowflake, label: "Lock" },
                  { icon: Settings2, label: "Change\nlimit" },
                ].map((action, i) => (
                  <motion.button
                    key={i}
                    className="flex flex-col items-center gap-2"
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className="w-14 h-14 rounded-2xl bg-surface-light border border-border flex items-center justify-center">
                      <action.icon size={20} className="text-muted" />
                    </div>
                    <span className="text-[11px] text-muted text-center whitespace-pre-line leading-tight">
                      {action.label}
                    </span>
                  </motion.button>
                ))}
              </motion.div>

              {/* Spending Summary */}
              <motion.div
                className="mx-6 md:mx-0 mb-6 glass-card p-5"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm text-muted">This month&apos;s spending</p>
                  <p className="font-bold text-foreground">$118.03</p>
                </div>
                <div className="w-full h-2 bg-surface rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "24%" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-xs text-muted">$118 spent</span>
                  <span className="text-xs text-muted">$500 limit</span>
                </div>
              </motion.div>
            </div>

            {/* Card Transactions */}
            <div className="px-6 md:px-0 xl:col-span-1 md:col-span-2">
              <h3 className="font-semibold text-foreground mb-4">Recent transactions</h3>
              <div className="space-y-3 md:grid md:grid-cols-2 md:gap-3 md:space-y-0 xl:grid-cols-1">
                {cardTransactions.map((tx, i) => (
                  <motion.div
                    key={i}
                    className="glass-card p-4 flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.08 }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-surface-light flex items-center justify-center">
                      <ArrowUpRight size={16} className="text-danger" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground text-sm">{tx.name}</p>
                      <p className="text-xs text-muted">{tx.category} · {tx.time}</p>
                    </div>
                    <span className="font-semibold text-sm text-foreground">
                      -${Math.abs(tx.amount).toFixed(2)}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ResponsiveLayout>
    </PageTransition>
  );
}
