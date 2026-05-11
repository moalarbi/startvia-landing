"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AuroraHeroProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Injects the CSS keyframes for the aurora animation.
 */
const AuroraAnimation = () => (
  <style>
    {`
      @keyframes aurora-1 {
        0% { transform: translate(0%, 0%) scale(1); }
        25% { transform: translate(10%, -10%) scale(1.1); }
        50% { transform: translate(-10%, 10%) scale(0.9); }
        75% { transform: translate(5%, -5%) scale(1.05); }
        100% { transform: translate(0%, 0%) scale(1); }
      }
      @keyframes aurora-2 {
        0% { transform: translate(0%, 0%) scale(1); }
        25% { transform: translate(-10%, 10%) scale(1.05); }
        50% { transform: translate(10%, -10%) scale(0.95); }
        75% { transform: translate(-5%, 5%) scale(1.1); }
        100% { transform: translate(0%, 0%) scale(1); }
      }
    `}
  </style>
);

export const AuroraHero = ({ children, className }: AuroraHeroProps) => {
  return (
    <div className="relative w-full overflow-hidden bg-canvas-dark">
      <AuroraAnimation />
      <div
        className={cn(
          "relative flex min-h-screen w-full flex-col items-center justify-center antialiased",
          className
        )}
      >
        {/* The Aurora Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Main Aurora Blob 1 (Binance Yellow / Primary) */}
          <div className="absolute -top-1/4 left-1/4 h-[500px] w-[500px] animate-[aurora-1_25s_ease-in-out_infinite] rounded-full bg-primary/10 opacity-30 blur-[100px] filter" />
          {/* Main Aurora Blob 2 (Trading Up / Greenish) */}
          <div className="absolute -bottom-1/4 right-1/4 h-[500px] w-[500px] animate-[aurora-2_30s_ease-in-out_infinite] rounded-full bg-trading-up/5 opacity-20 blur-[100px] filter" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full">{children}</div>
      </div>
    </div>
  );
};
