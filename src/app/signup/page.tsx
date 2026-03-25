"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowLeft, Mail, Phone, Eye, EyeOff } from "lucide-react";

export default function SignupPage() {
  const router = useRouter();
  const [step, setStep] = useState<"method" | "form">("method");
  const [method, setMethod] = useState<"email" | "phone">("email");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col px-6 pt-6 mx-auto max-w-[430px] md:max-w-[500px]">
      {/* Header */}
      <motion.button
        onClick={() => (step === "form" ? setStep("method") : router.back())}
        className="w-10 h-10 rounded-xl bg-surface-light flex items-center justify-center"
        whileTap={{ scale: 0.9 }}
      >
        <ArrowLeft size={20} className="text-foreground" />
      </motion.button>

      {step === "method" ? (
        <motion.div
          className="flex-1 flex flex-col pt-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-3xl font-bold mb-2">Create your account</h1>
          <p className="text-muted mb-10">Choose how you want to sign up</p>

          <div className="space-y-4">
            <motion.button
              onClick={() => {
                setMethod("email");
                setStep("form");
              }}
              className="w-full glass-card p-5 flex items-center gap-4 text-left"
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Mail size={22} className="text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Email</p>
                <p className="text-sm text-muted">Sign up with your email address</p>
              </div>
            </motion.button>

            <motion.button
              onClick={() => {
                setMethod("phone");
                setStep("form");
              }}
              className="w-full glass-card p-5 flex items-center gap-4 text-left"
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Phone size={22} className="text-accent" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Phone</p>
                <p className="text-sm text-muted">Sign up with your phone number</p>
              </div>
            </motion.button>
          </div>
        </motion.div>
      ) : (
        <motion.div
          className="flex-1 flex flex-col pt-12"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-3xl font-bold mb-2">
            {method === "email" ? "Enter your email" : "Enter your number"}
          </h1>
          <p className="text-muted mb-8">We&apos;ll send you a verification code</p>

          <div className="space-y-4">
            <div className="glass-card p-4">
              <label className="text-xs text-muted mb-1 block">
                {method === "email" ? "Email Address" : "Phone Number"}
              </label>
              <input
                type={method === "email" ? "email" : "tel"}
                placeholder={method === "email" ? "you@example.com" : "+91 00000 00000"}
                className="w-full bg-transparent text-foreground text-lg outline-none placeholder:text-muted/50"
              />
            </div>

            <div className="glass-card p-4">
              <label className="text-xs text-muted mb-1 block">Password</label>
              <div className="flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  className="w-full bg-transparent text-foreground text-lg outline-none placeholder:text-muted/50"
                />
                <button onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <EyeOff size={20} className="text-muted" />
                  ) : (
                    <Eye size={20} className="text-muted" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="mt-auto pb-10">
            <motion.button
              onClick={() => router.push("/home")}
              className="w-full py-4 rounded-2xl bg-primary text-background font-bold text-lg"
              whileTap={{ scale: 0.97 }}
            >
              Continue
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
