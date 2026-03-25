"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const words = ["Spend.", "Earn.", "Trade.", "Bank."];

export default function Onboarding() {
  const router = useRouter();
  const [activeWord, setActiveWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden mx-auto max-w-[430px] md:max-w-none">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-primary/5 blur-[100px]" />

      {/* Desktop: side-by-side layout */}
      <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-center md:gap-16 md:px-12 lg:px-24">
        {/* Left side - Logo + Card */}
        <div className="md:flex-1 md:max-w-lg">
          {/* Logo */}
          <motion.div
            className="pt-16 md:pt-0 px-8 md:px-0"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">tranzo</h1>
          </motion.div>

          {/* Card Preview */}
          <motion.div
            className="flex flex-col items-center md:items-start justify-center px-8 md:px-0 py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.div
              className="w-72 md:w-80 h-44 md:h-48 rounded-2xl relative overflow-hidden mb-10"
              style={{
                background: "linear-gradient(135deg, #0F1722 0%, #1A2835 50%, #0F1722 100%)",
                border: "1px solid rgba(0, 229, 160, 0.15)",
              }}
              initial={{ rotateY: -15, rotateX: 5 }}
              animate={{ rotateY: 0, rotateX: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="absolute -right-4 -bottom-4 text-[100px] font-black text-white/[0.03] leading-none select-none">
                TZ
              </div>
              <div className="p-6 h-full flex flex-col justify-between relative z-10">
                <div className="flex justify-between items-start">
                  <span className="text-lg font-bold gradient-text">tranzo</span>
                  <span className="text-white/80 font-bold text-sm tracking-wider">VISA</span>
                </div>
                <div>
                  <div className="w-10 h-7 rounded bg-gradient-to-br from-yellow-400/30 to-yellow-600/20 border border-yellow-500/20 mb-3" />
                  <div className="flex gap-3">
                    <span className="text-white/20 text-xs tracking-[3px]">••••</span>
                    <span className="text-white/20 text-xs tracking-[3px]">••••</span>
                    <span className="text-white/20 text-xs tracking-[3px]">••••</span>
                    <span className="text-white/40 text-xs tracking-[3px]">4589</span>
                  </div>
                </div>
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Right side - Words + CTAs */}
        <div className="md:flex-1 md:max-w-md flex flex-col">
          {/* Animated Words */}
          <div className="text-center md:text-left space-y-2 mb-10 md:mb-12">
            {words.map((word, i) => (
              <motion.h2
                key={word}
                className="text-5xl md:text-6xl font-black"
                animate={{
                  color: activeWord === i ? "#ffffff" : "rgba(255,255,255,0.12)",
                  scale: activeWord === i ? 1 : 0.95,
                }}
                transition={{ duration: 0.5 }}
              >
                {word}
              </motion.h2>
            ))}
          </div>

          {/* CTAs */}
          <motion.div
            className="px-6 md:px-0 pb-10 space-y-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.button
              onClick={() => router.push("/signup")}
              className="w-full py-4 rounded-2xl bg-primary text-background font-bold text-lg pulse-glow"
              whileTap={{ scale: 0.97 }}
            >
              Get started
            </motion.button>
            <motion.button
              onClick={() => router.push("/home")}
              className="w-full py-4 rounded-2xl bg-surface-light text-foreground font-semibold text-base border border-border"
              whileTap={{ scale: 0.97 }}
            >
              Already have a Tranzo account?
            </motion.button>
            <p className="text-center md:text-left text-muted text-xs">
              By continuing, you agree to our{" "}
              <span className="underline cursor-pointer">terms of service</span>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
