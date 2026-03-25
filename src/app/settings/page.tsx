"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  AtSign,
  UserCheck,
  CloudUpload,
  Eye,
  Globe,
  Shield,
  ChevronRight,
  LogOut,
} from "lucide-react";
import PageTransition from "@/components/PageTransition";

const generalItems = [
  { icon: AtSign, label: "Account Handle", badge: "AVAILABLE", badgeColor: "bg-primary" },
  { icon: UserCheck, label: "Verification", badge: null, badgeColor: "" },
  { icon: CloudUpload, label: "Account Backup", badge: "SETUP", badgeColor: "bg-danger" },
  { icon: Eye, label: "Account Privacy", badge: null, badgeColor: "" },
  { icon: Globe, label: "Language", badge: null, badgeColor: "" },
];

const securityItems = [
  { icon: Shield, label: "Password & 2FA" },
];

export default function SettingsPage() {
  const router = useRouter();

  return (
    <PageTransition>
      <div className="min-h-screen pb-10 mx-auto max-w-[430px] md:max-w-[600px]">
        {/* Header */}
        <div className="px-6 pt-6 flex items-center gap-4">
          <motion.button
            onClick={() => router.back()}
            className="w-10 h-10 rounded-xl bg-surface-light flex items-center justify-center"
            whileTap={{ scale: 0.9 }}
          >
            <ArrowLeft size={20} className="text-foreground" />
          </motion.button>
          <h1 className="text-lg font-bold">Settings</h1>
        </div>

        {/* Profile Card */}
        <motion.div
          className="mx-6 mt-6 glass-card p-6 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 mx-auto mb-3 flex items-center justify-center">
            <span className="text-2xl">P</span>
          </div>
          <p className="font-bold text-foreground">@pranav</p>
          <div className="inline-flex items-center gap-1.5 mt-2 px-3 py-1 rounded-full bg-primary/10">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-xs text-primary font-medium">VERIFIED</span>
          </div>

          <motion.button
            className="w-full mt-4 py-3 rounded-xl bg-surface-light border border-border text-foreground font-medium text-sm flex items-center justify-center gap-2"
            whileTap={{ scale: 0.97 }}
          >
            <CloudUpload size={16} />
            Receive
          </motion.button>
        </motion.div>

        {/* General */}
        <div className="px-6 mt-8">
          <h3 className="text-sm font-semibold text-muted mb-3">General</h3>
          <div className="glass-card divide-y divide-border overflow-hidden">
            {generalItems.map((item, i) => (
              <motion.button
                key={i}
                className="w-full px-4 py-4 flex items-center gap-3"
                whileTap={{ backgroundColor: "rgba(255,255,255,0.02)" }}
              >
                <item.icon size={18} className="text-muted" />
                <span className="flex-1 text-left text-foreground text-sm font-medium">
                  {item.label}
                </span>
                {item.badge && (
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.badgeColor}/15 ${item.badgeColor === "bg-primary" ? "text-primary" : "text-danger"}`}>
                    {item.badge}
                  </span>
                )}
                <ChevronRight size={16} className="text-muted" />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Security */}
        <div className="px-6 mt-6">
          <h3 className="text-sm font-semibold text-muted mb-3">Security</h3>
          <div className="glass-card divide-y divide-border overflow-hidden">
            {securityItems.map((item, i) => (
              <motion.button
                key={i}
                className="w-full px-4 py-4 flex items-center gap-3"
                whileTap={{ backgroundColor: "rgba(255,255,255,0.02)" }}
              >
                <item.icon size={18} className="text-muted" />
                <span className="flex-1 text-left text-foreground text-sm font-medium">
                  {item.label}
                </span>
                <ChevronRight size={16} className="text-muted" />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Logout */}
        <div className="px-6 mt-8">
          <motion.button
            className="w-full py-4 rounded-2xl bg-danger/10 border border-danger/20 text-danger font-semibold text-sm flex items-center justify-center gap-2"
            whileTap={{ scale: 0.97 }}
            onClick={() => router.push("/")}
          >
            <LogOut size={16} />
            Sign out
          </motion.button>
        </div>
      </div>
    </PageTransition>
  );
}
