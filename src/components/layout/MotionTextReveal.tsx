"use client";

import { motion } from "motion/react";
import { ElementType } from "react";

export default function MotionTextReveal({
  children,
  duration = 1.5,
  delay = 0,
  ease = [0.16, 1, 0.3, 1],
  as: Component = "div",
}: {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  ease?: number[];
  as?: ElementType;
}) {
  return (
    <Component className="overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: duration, delay: delay, ease: ease }}
      >
        {children}
      </motion.div>
    </Component>
  );
}
