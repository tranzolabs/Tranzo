"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  TrendingUp,
  CreditCard,
  Users,
  Layers,
  ArrowUpRight,
  ArrowDownRight,
  ChevronRight,
  Calendar,
  Target,
  Zap,
  PiggyBank,
  Wallet,
  BarChart3,
  CircleDollarSign,
} from "lucide-react";
import ResponsiveLayout from "@/components/ResponsiveLayout";
import PageTransition from "@/components/PageTransition";

type Period = "week" | "month" | "year";

interface RevenueStream {
  name: string;
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  amount: number;
  percentage: number;
  color: string;
  trend: number;
}

interface PeriodInfo {
  total: number;
  change: number;
  streams: RevenueStream[];
}

const periodData: Record<Period, PeriodInfo> = {
  week: {
    total: 12.84,
    change: 8.2,
    streams: [
      { name: "Earn Yield", icon: TrendingUp, amount: 6.42, percentage: 50, color: "#00E5A0", trend: 12 },
      { name: "Card Cashback", icon: CreditCard, amount: 3.21, percentage: 25, color: "#7C5CFF", trend: 5 },
      { name: "Referrals", icon: Users, amount: 2.14, percentage: 17, color: "#00D4FF", trend: -3 },
      { name: "Staking", icon: Layers, amount: 1.07, percentage: 8, color: "#FFB347", trend: 15 },
    ],
  },
  month: {
    total: 49.02,
    change: 12.5,
    streams: [
      { name: "Earn Yield", icon: TrendingUp, amount: 24.51, percentage: 50, color: "#00E5A0", trend: 12 },
      { name: "Card Cashback", icon: CreditCard, amount: 12.25, percentage: 25, color: "#7C5CFF", trend: 8 },
      { name: "Referrals", icon: Users, amount: 7.35, percentage: 15, color: "#00D4FF", trend: -2 },
      { name: "Staking", icon: Layers, amount: 4.91, percentage: 10, color: "#FFB347", trend: 20 },
    ],
  },
  year: {
    total: 588.24,
    change: 34.7,
    streams: [
      { name: "Earn Yield", icon: TrendingUp, amount: 294.12, percentage: 50, color: "#00E5A0", trend: 34 },
      { name: "Card Cashback", icon: CreditCard, amount: 147.06, percentage: 25, color: "#7C5CFF", trend: 18 },
      { name: "Referrals", icon: Users, amount: 88.24, percentage: 15, color: "#00D4FF", trend: 12 },
      { name: "Staking", icon: Layers, amount: 58.82, percentage: 10, color: "#FFB347", trend: 45 },
    ],
  },
};

const milestones = [
  { label: "First $10", reached: true, amount: 10 },
  { label: "First $50", reached: false, amount: 50 },
  { label: "First $100", reached: false, amount: 100 },
  { label: "First $500", reached: false, amount: 500 },
];

const recentRevenue = [
  { source: "USD Vault Yield", amount: 4.12, time: "Today, 2:00 PM", icon: PiggyBank, color: "#00E5A0" },
  { source: "Amazon Cashback", amount: 1.80, time: "Today, 11:30 AM", icon: CreditCard, color: "#7C5CFF" },
  { source: "Referral Bonus", amount: 5.00, time: "Yesterday", icon: Users, color: "#00D4FF" },
  { source: "ETH Staking", amount: 0.85, time: "Yesterday", icon: Layers, color: "#FFB347" },
  { source: "Netflix Cashback", amount: 0.30, time: "Mar 17", icon: CreditCard, color: "#7C5CFF" },
];

// Mini bar chart data (last 7 days)
const weeklyBars = [
  { day: "Mon", value: 65 },
  { day: "Tue", value: 40 },
  { day: "Wed", value: 85 },
  { day: "Thu", value: 55 },
  { day: "Fri", value: 90 },
  { day: "Sat", value: 30 },
  { day: "Sun", value: 72 },
];

export default function RevMapPage() {
  const [period, setPeriod] = useState<Period>("month");
  const data = periodData[period];

  return (
    <PageTransition>
      <ResponsiveLayout>
        <div className="min-h-screen pb-24 md:pb-8">
          {/* Header */}
          <div className="px-6 pt-8 pb-2 flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">RevMap</h1>
              <p className="text-sm text-muted mt-0.5">Your revenue overview</p>
            </div>
            <motion.button
              className="w-10 h-10 rounded-xl bg-surface-light flex items-center justify-center"
              whileTap={{ scale: 0.9 }}
            >
              <Calendar size={18} className="text-muted" />
            </motion.button>
          </div>

          {/* Period Selector */}
          <div className="px-6 pt-4">
            <div className="flex gap-2 p-1 bg-surface/60 rounded-xl w-fit">
              {(["week", "month", "year"] as Period[]).map((p) => (
                <motion.button
                  key={p}
                  onClick={() => setPeriod(p)}
                  className={`px-5 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                    period === p
                      ? "bg-primary text-background"
                      : "text-muted hover:text-foreground"
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  {p}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Main Content - Desktop Grid */}
          <div className="md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-6 md:px-6 md:pt-6">

            {/* Total Revenue Card */}
            <motion.div
              className="mx-6 md:mx-0 mt-6 md:mt-0 relative overflow-hidden rounded-3xl p-6"
              style={{
                background: "linear-gradient(145deg, rgba(0,229,160,0.08) 0%, rgba(0,212,255,0.04) 50%, rgba(124,92,255,0.06) 100%)",
                border: "1px solid rgba(0,229,160,0.15)",
              }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-[60px]" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
                    <CircleDollarSign size={16} className="text-primary" />
                  </div>
                  <span className="text-sm text-muted">Total Revenue</span>
                </div>
                <div className="flex items-end gap-3">
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                    $<span className="gradient-text">{Math.floor(data.total)}</span>
                    <span className="text-xl text-muted">.{(data.total % 1).toFixed(2).slice(2)}</span>
                  </h2>
                  <div className="flex items-center gap-1 mb-2 px-2.5 py-1 rounded-full bg-primary/10">
                    <ArrowUpRight size={14} className="text-primary" />
                    <span className="text-xs font-semibold text-primary">+{data.change}%</span>
                  </div>
                </div>
                <p className="text-xs text-muted mt-2">
                  vs previous {period}
                </p>
              </div>
            </motion.div>

            {/* Mini Bar Chart */}
            <motion.div
              className="mx-6 md:mx-0 mt-4 md:mt-0 glass-card p-5"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <BarChart3 size={16} className="text-accent" />
                  <span className="text-sm font-semibold text-foreground">Daily Revenue</span>
                </div>
                <span className="text-xs text-muted">Last 7 days</span>
              </div>
              <div className="flex items-end justify-between gap-2 h-28">
                {weeklyBars.map((bar, i) => (
                  <div key={bar.day} className="flex-1 flex flex-col items-center gap-2">
                    <motion.div
                      className="w-full rounded-t-lg relative overflow-hidden"
                      style={{
                        background: `linear-gradient(180deg, ${bar.value > 70 ? '#00E5A0' : bar.value > 50 ? '#00D4FF' : '#7C5CFF'}40, ${bar.value > 70 ? '#00E5A0' : bar.value > 50 ? '#00D4FF' : '#7C5CFF'}15)`,
                        border: `1px solid ${bar.value > 70 ? '#00E5A0' : bar.value > 50 ? '#00D4FF' : '#7C5CFF'}30`,
                      }}
                      initial={{ height: 0 }}
                      animate={{ height: `${bar.value}%` }}
                      transition={{ delay: 0.3 + i * 0.05, duration: 0.6, ease: "easeOut" }}
                    />
                    <span className="text-[10px] text-muted">{bar.day}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Revenue Streams - Donut Visualization */}
            <motion.div
              className="mx-6 md:mx-0 mt-4 md:mt-0 glass-card p-5 xl:row-span-2"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-semibold text-foreground">Revenue Streams</h3>
                <Wallet size={16} className="text-muted" />
              </div>

              {/* Visual Donut Ring */}
              <div className="flex justify-center mb-6">
                <div className="relative w-40 h-40 md:w-48 md:h-48">
                  <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    {(() => {
                      let offset = 0;
                      return data.streams.map((stream, i) => {
                        const circumference = 2 * Math.PI * 40;
                        const strokeDash = (stream.percentage / 100) * circumference;
                        const gap = 2;
                        const currentOffset = offset;
                        offset += stream.percentage;
                        return (
                          <motion.circle
                            key={stream.name}
                            cx="50"
                            cy="50"
                            r="40"
                            fill="none"
                            stroke={stream.color}
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeDasharray={`${strokeDash - gap} ${circumference - strokeDash + gap}`}
                            strokeDashoffset={-(currentOffset / 100) * circumference}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 + i * 0.1 }}
                          />
                        );
                      });
                    })()}
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl md:text-3xl font-bold text-foreground">
                      ${data.total.toFixed(0)}
                    </span>
                    <span className="text-[10px] text-muted uppercase tracking-wider">total</span>
                  </div>
                </div>
              </div>

              {/* Stream Details */}
              <div className="space-y-3">
                {data.streams.map((stream, i) => (
                  <motion.div
                    key={stream.name}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-surface-light/50 transition-colors cursor-pointer group"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.08 }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: stream.color + "15" }}
                    >
                      <stream.icon size={16} style={{ color: stream.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">{stream.name}</span>
                        <span className="text-sm font-semibold text-foreground">${stream.amount.toFixed(2)}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1.5">
                        <div className="flex-1 h-1.5 bg-surface rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ backgroundColor: stream.color }}
                            initial={{ width: 0 }}
                            animate={{ width: `${stream.percentage}%` }}
                            transition={{ delay: 0.6 + i * 0.1, duration: 0.8 }}
                          />
                        </div>
                        <span className="text-[10px] text-muted shrink-0">{stream.percentage}%</span>
                        <div className={`flex items-center gap-0.5 shrink-0 ${stream.trend >= 0 ? 'text-primary' : 'text-danger'}`}>
                          {stream.trend >= 0 ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
                          <span className="text-[10px] font-medium">{Math.abs(stream.trend)}%</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Stats Row */}
            <div className="grid grid-cols-2 gap-3 mx-6 md:mx-0 mt-4 md:mt-0 md:col-span-2 xl:col-span-2">
              {[
                { label: "Avg. Daily", value: `$${(data.total / (period === "week" ? 7 : period === "month" ? 30 : 365)).toFixed(2)}`, icon: Zap, color: "#00E5A0", subtext: "revenue" },
                { label: "Best Stream", value: "Earn", icon: TrendingUp, color: "#00D4FF", subtext: "50% of total" },
                { label: "Active Vaults", value: "4", icon: PiggyBank, color: "#7C5CFF", subtext: "all earning" },
                { label: "Rev Growth", value: `+${data.change}%`, icon: Target, color: "#FFB347", subtext: `vs last ${period}` },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="glass-card p-4 relative overflow-hidden group hover:border-primary/20 transition-colors cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full blur-[30px]" style={{ backgroundColor: stat.color + "08" }} />
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: stat.color + "15" }}>
                      <stat.icon size={14} style={{ color: stat.color }} />
                    </div>
                    <ChevronRight size={14} className="text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-xs text-muted">{stat.label}</p>
                  <p className="text-lg font-bold text-foreground mt-0.5">{stat.value}</p>
                  <p className="text-[10px] text-muted mt-0.5">{stat.subtext}</p>
                </motion.div>
              ))}
            </div>

            {/* Milestones */}
            <motion.div
              className="mx-6 md:mx-0 mt-4 md:mt-0 glass-card p-5 md:col-span-2 xl:col-span-3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground">Revenue Milestones</h3>
                <Target size={16} className="text-warning" />
              </div>
              <div className="flex items-center gap-2 md:gap-4">
                {milestones.map((m, i) => {
                  const totalEarned = periodData.year.total;
                  const progress = Math.min((totalEarned / m.amount) * 100, 100);
                  const isReached = totalEarned >= m.amount;
                  return (
                    <motion.div
                      key={m.label}
                      className="flex-1 text-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      <div className="relative w-12 h-12 md:w-14 md:h-14 mx-auto mb-2">
                        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                          <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(26,40,53,0.5)" strokeWidth="6" />
                          <motion.circle
                            cx="50"
                            cy="50"
                            r="42"
                            fill="none"
                            stroke={isReached ? "#00E5A0" : "#7C5CFF"}
                            strokeWidth="6"
                            strokeLinecap="round"
                            strokeDasharray={`${(progress / 100) * 264} 264`}
                            initial={{ strokeDasharray: "0 264" }}
                            animate={{ strokeDasharray: `${(progress / 100) * 264} 264` }}
                            transition={{ delay: 0.6 + i * 0.1, duration: 1 }}
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          {isReached ? (
                            <span className="text-primary text-lg">&#10003;</span>
                          ) : (
                            <span className="text-[10px] text-muted font-medium">{Math.round(progress)}%</span>
                          )}
                        </div>
                      </div>
                      <p className={`text-[11px] font-medium ${isReached ? "text-primary" : "text-foreground"}`}>
                        {m.label}
                      </p>
                      <p className="text-[10px] text-muted">${m.amount}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Recent Revenue Activity */}
            <motion.div
              className="mx-6 md:mx-0 mt-4 md:mt-0 md:col-span-2 xl:col-span-3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground">Recent Revenue</h3>
                <button className="text-sm text-primary font-medium">See all</button>
              </div>
              <div className="space-y-3">
                {recentRevenue.map((item, i) => (
                  <motion.div
                    key={i}
                    className="glass-card p-4 flex items-center gap-3 hover:border-primary/10 transition-colors cursor-pointer"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.55 + i * 0.06 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: item.color + "15" }}
                    >
                      <item.icon size={18} style={{ color: item.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground text-sm truncate">{item.source}</p>
                      <p className="text-xs text-muted">{item.time}</p>
                    </div>
                    <span className="font-semibold text-sm text-primary shrink-0">
                      +${item.amount.toFixed(2)}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </ResponsiveLayout>
    </PageTransition>
  );
}
