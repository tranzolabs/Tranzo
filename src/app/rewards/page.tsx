"use client";

import { motion } from "framer-motion";
import {
  Target,
  Users,
  Trophy,
  ArrowDownCircle,
  CreditCard,
  TrendingUp,
  ArrowUpRight,
  Copy,
} from "lucide-react";
import ResponsiveLayout from "@/components/ResponsiveLayout";
import PageTransition from "@/components/PageTransition";

export default function RewardsPage() {
  return (
    <PageTransition>
      <ResponsiveLayout>
        <div className="min-h-screen pb-24 md:pb-8">
          <div className="md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-6 md:px-6">
            {/* Balance */}
            <motion.div
              className="text-center md:text-left pt-12 md:pt-8 pb-6 md:col-span-2 xl:col-span-3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <p className="text-muted text-sm mb-2">TZP Balance</p>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-white text-xs font-bold">T</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-foreground">0</h1>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex justify-center md:justify-start gap-5 px-6 md:px-0 pb-6 md:col-span-2 xl:col-span-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              {[
                { icon: Target, label: "Get TZPs" },
                { icon: Users, label: "Invite\nfriends" },
                { icon: Trophy, label: "Leader-\nboard" },
                { icon: ArrowDownCircle, label: "Redeem", disabled: true },
              ].map((action, i) => (
                <motion.button
                  key={i}
                  className={`flex flex-col items-center gap-2 ${action.disabled ? "opacity-40" : ""}`}
                  whileTap={action.disabled ? {} : { scale: 0.9 }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center">
                    <action.icon size={20} className="text-secondary" />
                  </div>
                  <span className="text-[10px] text-muted text-center whitespace-pre-line leading-tight">
                    {action.label}
                  </span>
                  {action.disabled && (
                    <span className="text-[9px] text-secondary font-medium -mt-1">Soon</span>
                  )}
                </motion.button>
              ))}
            </motion.div>

            {/* Invite Card */}
            <motion.div
              className="mx-6 md:mx-0 mb-6 rounded-2xl p-5 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(124,92,255,0.15), rgba(124,92,255,0.05))",
                border: "1px solid rgba(124,92,255,0.2)",
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-secondary/10 rounded-full blur-[30px]" />
              <div className="flex items-center justify-between relative z-10">
                <div>
                  <p className="text-xs text-secondary uppercase tracking-wider mb-1">Share your invite</p>
                  <div className="flex items-center gap-2">
                    <p className="text-xl font-bold text-foreground tracking-wider">TRNZ7X</p>
                    <motion.button whileTap={{ scale: 0.9 }}>
                      <Copy size={16} className="text-secondary" />
                    </motion.button>
                  </div>
                </div>
                <div className="w-16 h-16 rounded-full border-2 border-secondary/30 flex items-center justify-center">
                  <span className="text-xs text-secondary font-medium text-center leading-tight">
                    Founding<br />Member
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Rewards Breakdown */}
            <div className="px-6 md:px-0">
              <h3 className="font-semibold text-foreground mb-4">Rewards Breakdown</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: CreditCard, label: "CARD", amount: "0", color: "secondary" },
                  { icon: TrendingUp, label: "EARN", amount: "0", color: "secondary" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="rounded-2xl p-4 relative overflow-hidden"
                    style={{
                      background: "linear-gradient(135deg, rgba(124,92,255,0.1), rgba(124,92,255,0.02))",
                      border: "1px solid rgba(124,92,255,0.15)",
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xl bg-secondary/15 flex items-center justify-center">
                        <item.icon size={16} className="text-secondary" />
                      </div>
                      <ArrowUpRight size={14} className="text-muted" />
                    </div>
                    <p className="text-xs text-muted uppercase tracking-wider">{item.label}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-bold text-foreground text-lg">{item.amount}</span>
                      <div className="w-4 h-4 rounded-full bg-secondary flex items-center justify-center">
                        <span className="text-white text-[8px] font-bold">T</span>
                      </div>
                    </div>
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
