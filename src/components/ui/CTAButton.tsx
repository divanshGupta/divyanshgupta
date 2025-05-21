"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

export default function CTAButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5, ease: [0.25, 1, 0.5, 1] }}
      className="flex items-center justify-between rounded-[20px] bg-neutral-900 border border-neutral-800 py-2 pl-2 pr-8 fixed left-1/2 -translate-x-1/2 bottom-8 z-999 w-[750px]"
    >
      <div className="flex items-center gap-5">
        <div className="h-[80px] w-[80px] rounded-xl overflow-hidden relative">
          <Image
            src="https://media1.popsugar-assets.com/files/thumbor/ety_2aPyhRZLDSz00sb7g_PbEYs=/1142x644/top/filters:format_auto():quality(85):extract_cover()/2017/09/12/009/n/38761221/56408472f441404b_iphonex_animoji_chicken.gif"
            alt="CTA Button"
            fill
            className="object-cover object-center"
          />
        </div>

        <div className="flex flex-col gap-2 w-[500px] relative">
          <p className="text-xl font-bold text-neutral-100">Jason Zubiate</p>
          <Slider />
        </div>
      </div>

      <Menu className="w-7 h-7 text-neutral-100" />
    </motion.div>
  );
}

function Slider() {
  return (
    <div className="flex justify-center items-center h-4.5 overflow-hidden relative w-full">
      <div className="absolute left-0 h-full w-10 bg-linear-to-r from-neutral-900/95 to-neutral-900/0 z-10" />
      <div className="absolute right-0 h-full w-10 bg-linear-to-l from-neutral-900/95 to-neutral-900/0 z-10" />

      <div className="flex overflow-hidden">
        <motion.p
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 32, ease: "linear", repeat: Infinity }}
          className="text-sm typeface-offbit-dotbold tracking-widest text-white uppercase whitespace-nowrap pr-1.5 leading-none"
        >
          Creative Design Engineer, Awwwards Stalker, Product Builder, Next.js
          Enthusiast,
        </motion.p>
        <motion.p
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 32, ease: "linear", repeat: Infinity }}
          className="text-sm typeface-offbit-dotbold tracking-widest text-white uppercase whitespace-nowrap pr-1.5 leading-none"
        >
          Creative Design Engineer, Awwwards Stalker, Product Builder, Next.js
          Enthusiast,
        </motion.p>
      </div>
    </div>
  );
}
