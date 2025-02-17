"use client";

import { cubicBezier, motion } from "motion/react";

export default function Lab() {
  const easing = cubicBezier(0.83, 0, 0.17, 1);

  return (
    <div className="pt-40 p-6">
      <div className="overflow-hidden mb-16">
        <motion.h1
          className="text-[clamp(100px,18vw,500px)] font-bold uppercase leading-none typeface-respira-black text-center w-full"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: easing }}
        >
          The Lab
        </motion.h1>
      </div>

      <div className="grid grid-cols-12 gap-2">
        {Array.from({ length: 12 }).map((_, index) => (
          <motion.div
            key={index}
            className="col-span-3 bg-neutral-300 rounded-lg h-[clamp(200px,20vw,400px)]"
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.025 + 0.1,
              ease: easing,
            }}
          ></motion.div>
        ))}
      </div>
    </div>
  );
}
