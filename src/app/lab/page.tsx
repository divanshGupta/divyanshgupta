"use client";

import { motion } from "motion/react";
import InfiniteGrid from "@/components/layout/InfiniteGrid";
import useTransition from "@/hooks/useTransition";

export default function Lab() {
  useTransition();

  return (
    <>
      <div className="revealer fixed top-0 left-0 w-screen h-screen origin-[center_top] bg-neutral-900 pointer-events-none z-999"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.75, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(100px,14vw,500px)] font-bold uppercase leading-none typeface-respira-black text-center w-full whitespace-nowrap select-none will-change-transform"
          >
            The Lab
          </motion.h1>
        </div>
      </div>
      {/* <InfiniteGrid /> */}
    </>
  );
}
