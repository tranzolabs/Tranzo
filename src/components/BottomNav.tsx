"use client";

import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Home, TrendingUp, CreditCard, Sparkles, Map, Settings } from "lucide-react";

const tabs = [
  { icon: Home, label: "Home", path: "/home" },
  { icon: Map, label: "RevMap", path: "/revmap" },
  { icon: TrendingUp, label: "Earn", path: "/earn" },
  { icon: CreditCard, label: "Card", path: "/card" },
  { icon: Sparkles, label: "Rewards", path: "/rewards" },
];

export default function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex fixed left-0 top-0 bottom-0 w-[220px] lg:w-[260px] flex-col z-50">
        <div className="glass border-r border-border h-full flex flex-col">
          {/* Logo */}
          <div className="px-6 pt-8 pb-6">
            <h1 className="text-2xl font-bold gradient-text">tranzo</h1>
            <p className="text-[11px] text-muted mt-1">Spend. Earn. Trade. Bank.</p>
          </div>

          {/* Nav Items */}
          <nav className="flex-1 px-3 space-y-1">
            {tabs.map((tab) => {
              const isActive = pathname === tab.path;
              return (
                <motion.button
                  key={tab.path}
                  onClick={() => router.push(tab.path)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors relative ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted hover:text-foreground hover:bg-surface-light"
                  }`}
                  whileTap={{ scale: 0.97 }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="sidebarActive"
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-full"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  <tab.icon
                    size={20}
                    strokeWidth={isActive ? 2.5 : 1.5}
                  />
                  <span className={`text-sm ${isActive ? "font-semibold" : "font-medium"}`}>
                    {tab.label}
                  </span>
                </motion.button>
              );
            })}
          </nav>

          {/* Settings at bottom */}
          <div className="px-3 pb-6">
            <motion.button
              onClick={() => router.push("/settings")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors ${
                pathname === "/settings"
                  ? "bg-primary/10 text-primary"
                  : "text-muted hover:text-foreground hover:bg-surface-light"
              }`}
              whileTap={{ scale: 0.97 }}
            >
              <Settings size={20} strokeWidth={pathname === "/settings" ? 2.5 : 1.5} />
              <span className={`text-sm ${pathname === "/settings" ? "font-semibold" : "font-medium"}`}>
                Settings
              </span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <div className="glass border-t border-border">
          <div className="flex items-center justify-around py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
            {tabs.map((tab) => {
              const isActive = pathname === tab.path;
              return (
                <motion.button
                  key={tab.path}
                  onClick={() => router.push(tab.path)}
                  className="flex flex-col items-center gap-1 px-3 py-1 relative"
                  whileTap={{ scale: 0.9 }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -top-2 w-8 h-0.5 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  <tab.icon
                    size={20}
                    className={isActive ? "text-primary" : "text-muted"}
                    strokeWidth={isActive ? 2.5 : 1.5}
                  />
                  <span
                    className={`text-[10px] font-medium ${
                      isActive ? "text-primary" : "text-muted"
                    }`}
                  >
                    {tab.label}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
