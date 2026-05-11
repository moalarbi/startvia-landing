"use client";

import * as React from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Define the props for the component
interface FeatureHighlightCardProps {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
  className?: string;
}

// Animation variants for Framer Motion
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const imageContainerVariants: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
}

/**
 * A responsive and animated card component to highlight a feature.
 * Built with TypeScript, Tailwind CSS, and Framer Motion.
 * It supports shadcn/ui theming for light and dark modes.
 */
export const FeatureHighlightCard = React.forwardRef<
  HTMLDivElement,
  FeatureHighlightCardProps
>(({ imageSrc, imageAlt = "Feature image", title, description, buttonText, onButtonClick, className }, ref) => {
  return (
    <motion.div
      ref={ref}
      className={cn(
        "relative w-full max-w-4xl overflow-hidden rounded-2xl border border-hairline-dark bg-surface-card p-8 text-center shadow-soft-lg",
        className
      )}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Background glow effect */}
      <div className="absolute left-1/2 top-0 -z-10 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      
      {/* Image Section */}
      <motion.div variants={imageContainerVariants} className="mb-8 flex justify-center">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-auto max-h-[300px] w-auto object-contain rounded-lg shadow-2xl"
        />
      </motion.div>

      {/* Title Section */}
      <motion.h2
        variants={itemVariants}
        className="text-display-sm font-bold tracking-tight text-white md:text-display-md"
      >
        {title}
      </motion.h2>

      {/* Description Section */}
      <motion.p
        variants={itemVariants}
        className="mt-4 text-body-md text-muted max-w-2xl mx-auto"
      >
        {description}
      </motion.p>

      {/* Button Section */}
      <motion.div variants={itemVariants} className="mt-8">
        <Button size="lg" className="w-full sm:w-auto font-bold" onClick={onButtonClick}>
          {buttonText}
        </Button>
      </motion.div>
    </motion.div>
  );
});

FeatureHighlightCard.displayName = "FeatureHighlightCard";
