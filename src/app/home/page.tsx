"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  Download,
  Send,
  ArrowLeftRight,
  TrendingUp,
  Search,
  Gift,
  ArrowUpRight,
  ArrowDownLeft,
  Map,
} from "lucide-react";
import ResponsiveLayout from "@/components/ResponsiveLayout";
import ActionButton from "@/components/ActionButton";
import PageTransition from "@/components/PageTransition";

const transactions = [
  { name: "Netflix", amount: -14.99, type: "spend", time: "Today, 2:30 PM" },
  { name: "Deposit", amount: 500.0, type: "receive", time: "Yesterday" },
  { name: "Uber Eats", amount: -23.5, type: "spend", time: "Mar 15" },
  { name: "Yield Earned", amount: 4.12, type: "earn", time: "Mar 14" },
];

export default function HomePage() {
  const router = useRouter();

  return (
    <PageTransition>
      <ResponsiveLayout>
        <div className="min-h-screen pb-24 md:pb-8">
          {/* Header */}
          <div className="px-6 pt-8 pb-2 flex items-center justify-between">
            <div className="hidden md:block">
              <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
              <p className="text-sm text-muted">Welcome back, Pranav</p>
            </div>
            <div className="md:hidden" />
            <div className="flex items-center gap-3">
              <motion.button
                className="w-10 h-10 rounded-xl bg-surface-light flex items-center justify-center"
                whileTap={{ scale: 0.9 }}
              >
                <Search size={18} className="text-muted" />
              </motion.button>
              <motion.button
                className="w-10 h-10 rounded-xl bg-surface-light flex items-center justify-center relative"
                whileTap={{ scale: 0.9 }}
                onClick={() => router.push("/rewards")}
              >
                <Gift size={18} className="text-muted" />
                <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-danger rounded-full border-2 border-background" />
              </motion.button>
            </div>
          </div>

          {/* Desktop Grid Layout */}
          <div className="md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-6 md:px-6">
            {/* Balance - spans full on mobile, first col on desktop */}
            <motion.div
              className="text-center md:text-left pt-4 pb-6 px-6 md:px-0 md:col-span-2 xl:col-span-3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-muted text-sm mb-1">Total Balance</p>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
                $<span className="gradient-text">1,234</span>
                <span className="text-2xl text-muted">.56</span>
              </h1>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex justify-center md:justify-start gap-8 pb-8 px-6 md:px-0 md:col-span-2 xl:col-span-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <ActionButton icon={Download} label="Add money" />
              <ActionButton icon={Send} label="Send" onClick={() => router.push("/send")} />
              <ActionButton icon={ArrowLeftRight} label="Convert" />
              <ActionButton icon={Map} label="RevMap" onClick={() => router.push("/revmap")} />
            </motion.div>

            {/* Earn CTA Card */}
            <motion.div
              className="mx-6 md:mx-0 mb-6 glass-card p-5 relative overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push("/earn")}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[60px]" />
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <TrendingUp size={22} className="text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">
                    Earn{" "}
                    <span className="text-primary">$49.02</span> a year
                  </p>
                  <p className="text-sm text-muted">on every $1,000 you have</p>
                </div>
                <ArrowUpRight size={18} className="text-primary" />
              </div>
              <div className="mt-3 pt-3 border-t border-border">
                <motion.button
                  className="w-full py-3 rounded-xl bg-primary text-background font-semibold text-sm"
                  whileTap={{ scale: 0.97 }}
                >
                  Make your first deposit
                </motion.button>
              </div>
            </motion.div>

            {/* Transactions */}
            <div className="px-6 md:px-0 md:col-span-1 xl:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground">Recent transactions</h3>
                <button className="text-sm text-primary">See all</button>
              </div>
              <div className="space-y-3">
                {transactions.map((tx, i) => (
                  <motion.div
                    key={i}
                    className="glass-card p-4 flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.08 }}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        tx.amount > 0
                          ? "bg-primary/10"
                          : "bg-surface-light"
                      }`}
                    >
                      {tx.amount > 0 ? (
                        <ArrowDownLeft size={18} className="text-primary" />
                      ) : (
                        <ArrowUpRight size={18} className="text-danger" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground text-sm">{tx.name}</p>
                      <p className="text-xs text-muted">{tx.time}</p>
                    </div>
                    <span
                      className={`font-semibold text-sm ${
                        tx.amount > 0 ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {tx.amount > 0 ? "+" : ""}${Math.abs(tx.amount).toFixed(2)}
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
