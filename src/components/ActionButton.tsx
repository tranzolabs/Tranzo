"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ActionButtonProps {
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
}

export default function ActionButton({
  icon: Icon,
  label,
  onClick,
  variant = "ghost",
}: ActionButtonProps) {
  const bg =
    variant === "primary"
      ? "bg-primary text-background"
      : variant === "secondary"
      ? "bg-secondary text-white"
      : "bg-surface-light text-foreground";

  return (
    <motion.button
      onClick={onClick}
      className="flex flex-col items-center gap-2"
      whileTap={{ scale: 0.92 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${bg}`}>
        <Icon size={22} />
      </div>
      <span className="text-xs text-muted font-medium">{label}</span>
    </motion.button>
  );
}
