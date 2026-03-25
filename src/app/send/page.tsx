"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowLeft, Scan, User, X } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const recentContacts = [
  { name: "Arjun", handle: "@arjun", color: "#00E5A0" },
  { name: "Priya", handle: "@priya_w3", color: "#7C5CFF" },
  { name: "Rohit", handle: "@rohit0x", color: "#00D4FF" },
  { name: "Sneha", handle: "@sneha", color: "#F7931A" },
];

export default function SendPage() {
  const router = useRouter();
  const [amount, setAmount] = useState("");
  const [step, setStep] = useState<"contact" | "amount">("contact");
  const [selected, setSelected] = useState("");

  const handleNumberPress = (n: string) => {
    if (n === "." && amount.includes(".")) return;
    if (amount.includes(".") && amount.split(".")[1]?.length >= 2) return;
    setAmount((prev) => prev + n);
  };

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col mx-auto max-w-[430px] md:max-w-[600px]">
        {/* Header */}
        <div className="px-6 pt-6 flex items-center gap-4">
          <motion.button
            onClick={() => (step === "amount" ? setStep("contact") : router.back())}
            className="w-10 h-10 rounded-xl bg-surface-light flex items-center justify-center"
            whileTap={{ scale: 0.9 }}
          >
            <ArrowLeft size={20} className="text-foreground" />
          </motion.button>
          <h1 className="text-lg font-bold">Send</h1>
        </div>

        {step === "contact" ? (
          <motion.div
            className="flex-1 px-6 pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {/* Search */}
            <div className="glass-card p-4 flex items-center gap-3 mb-6">
              <User size={18} className="text-muted" />
              <input
                type="text"
                placeholder="Enter handle or address"
                className="flex-1 bg-transparent text-foreground outline-none placeholder:text-muted/50"
              />
              <Scan size={18} className="text-primary" />
            </div>

            {/* Recent */}
            <h3 className="text-sm text-muted mb-3">Recent</h3>
            <div className="space-y-2">
              {recentContacts.map((contact, i) => (
                <motion.button
                  key={i}
                  className="w-full glass-card p-4 flex items-center gap-3"
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setSelected(contact.name);
                    setStep("amount");
                  }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ backgroundColor: contact.color + "25", color: contact.color }}
                  >
                    {contact.name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-foreground text-sm">{contact.name}</p>
                    <p className="text-xs text-muted">{contact.handle}</p>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="flex-1 flex flex-col"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {/* Recipient */}
            <div className="text-center pt-6 pb-4">
              <p className="text-muted text-sm">Sending to</p>
              <p className="text-primary font-semibold">{selected}</p>
            </div>

            {/* Amount */}
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl font-bold text-foreground">
                  ${amount || "0"}
                </span>
              </div>
            </div>

            {/* Numpad */}
            <div className="px-8 pb-6">
              <div className="grid grid-cols-3 gap-3 mb-4">
                {["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "del"].map(
                  (key) => (
                    <motion.button
                      key={key}
                      className="h-14 rounded-xl bg-surface-light flex items-center justify-center text-xl font-semibold text-foreground"
                      whileTap={{ scale: 0.9, backgroundColor: "rgba(0,229,160,0.1)" }}
                      onClick={() => {
                        if (key === "del") setAmount((p) => p.slice(0, -1));
                        else handleNumberPress(key);
                      }}
                    >
                      {key === "del" ? <X size={20} /> : key}
                    </motion.button>
                  )
                )}
              </div>
              <motion.button
                className="w-full py-4 rounded-2xl bg-primary text-background font-bold text-lg"
                whileTap={{ scale: 0.97 }}
                onClick={() => router.push("/home")}
              >
                Send ${amount || "0"}
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </PageTransition>
  );
}
