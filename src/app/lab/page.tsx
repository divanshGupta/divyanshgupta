"use client";

import { cubicBezier, motion } from "motion/react";
import Image from "next/image";
import { labs } from "@/data/lab";

export default function Lab() {
  const easing = cubicBezier(0.83, 0, 0.17, 1);

  return (
    <div className="pt-40 p-6">
      <div className="overflow-hidden mb-16">
        <motion.h1
          className="text-[clamp(100px,18vw,500px)] font-bold uppercase leading-none typeface-respira-black text-center w-full"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: easing }}
        >
          The Lab
        </motion.h1>
      </div>

      <div className="grid grid-cols-12 gap-2">
        {labs.map((lab, index) => (
          <motion.div
            key={index}
            className="col-span-3 bg-neutral-300 rounded-lg overflow-hidden h-[clamp(200px,20vw,400px)] relative group"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.035 + 0.25,
              ease: easing,
            }}
          >
            {lab.fileType === "video" ? (
              <video
                src={lab.fileUrl}
                muted
                autoPlay
                loop
                className="w-full h-full object-cover object-center group-hover:scal-105 transition-all duration-200"
              />
            ) : (
              <Image
                src={lab.fileUrl}
                alt={lab.title}
                fill
                className="w-full h-full object-cover object-center group-hover:scal-105 transition-all duration-200"
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
