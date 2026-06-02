import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedContentProps {
  children: ReactNode;
  distance?: number;
  direction?: "vertical" | "horizontal";
  reverse?: boolean;
  duration?: number;
  delay?: number;
  ease?: string | number[];
  threshold?: number;
  scale?: number;
  className?: string;
}

export default function AnimatedContent({
  children,
  distance = 80,
  direction = "vertical",
  reverse = false,
  duration = 0.9,
  delay = 0,
  ease = [0.22, 1, 0.36, 1],
  threshold = 0.05,
  scale = 1,
  className = "",
}: AnimatedContentProps) {
  const axis = direction === "vertical" ? "y" : "x";
  const initial = {
    opacity: 0,
    [axis]: reverse ? -distance : distance,
    scale,
  };
  const animate = { opacity: 1, [axis]: 0, scale: 1 };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: threshold }}
      transition={{ duration, ease: ease as any, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
