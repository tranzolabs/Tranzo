"use client";

import { motion } from "framer-motion";
import { Info, ChevronRight } from "lucide-react";
import ResponsiveLayout from "@/components/ResponsiveLayout";
import PageTransition from "@/components/PageTransition";

const vaults = [
  { asset: "USD", apy: "4.90%", balance: "0", tvl: "$82.6M", color: "#22C55E" },
  { asset: "ETH", apy: "4.00%", balance: "0", tvl: "$15.5M", color: "#627EEA" },
  { asset: "EUR", apy: "2.22%", balance: "0", tvl: "$9.1M", color: "#2563EB" },
  { asset: "BTC", apy: "1.85%", balance: "0", tvl: "$45.2M", color: "#F7931A" },
];

export default function EarnPage() {
  return (
    <PageTransition>
      <ResponsiveLayout>
        <div className="min-h-screen pb-24 md:pb-8">
          {/* Header */}
          <div className="px-6 pt-8 flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Earn</h1>
              <p className="text-sm text-muted mt-0.5 hidden md:block">Yield on your assets</p>
            </div>
            <motion.button
              className="w-10 h-10 rounded-xl bg-surface-light flex items-center justify-center"
              whileTap={{ scale: 0.9 }}
            >
              <Info size={18} className="text-muted" />
            </motion.button>
          </div>

          <div className="md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-6 md:px-6 md:mt-6">
            {/* How it works banner */}
            <motion.div
              className="mx-6 md:mx-0 mt-6 md:mt-0 glass-card p-5 relative overflow-hidden md:col-span-2 xl:col-span-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-[40px]" />
              <h3 className="font-semibold text-foreground mb-1">How does it work?</h3>
              <p className="text-sm text-muted leading-relaxed">
                After you deposit, Tranzo automatically allocates your assets across
                top DeFi protocols like lending, staking, and liquidity pools.
                You just earn yield.
              </p>
            </motion.div>

            {/* Vaults */}
            {vaults.map((vault, i) => (
              <motion.div
                key={vault.asset}
                className="mx-6 md:mx-0 mt-4 md:mt-0 glass-card p-5"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                      style={{ backgroundColor: vault.color + "20", color: vault.color }}
                    >
                      {vault.asset.charAt(0)}
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{vault.asset}</h3>
                  </div>
                  <ChevronRight size={18} className="text-muted" />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-[10px] text-muted uppercase tracking-wider mb-1">Balance</p>
                    <p className="font-semibold text-foreground">{vault.balance}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-muted uppercase tracking-wider mb-1">Max APY</p>
                    <p className="font-semibold text-primary">{vault.apy}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-muted uppercase tracking-wider mb-1">Assets</p>
                    <p className="font-semibold text-foreground">{vault.tvl}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </ResponsiveLayout>
    </PageTransition>
  );
}
