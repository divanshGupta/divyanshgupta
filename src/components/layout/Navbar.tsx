"use client";

import { motion } from "motion/react";

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[450px] bg-neutral-900 rounded-lg">
      <div className="flex w-full justify-between items-center border-b border-neutral-800 px-3 h-8">
        <button className="text-sm font-medium tracking-tight text-neutral-100">
          About
        </button>
        <button className="absolute left-1/2 -translate-x-1/2 text-sm font-medium tracking-tight text-neutral-100">
          Home
        </button>
        <button className="text-sm font-medium tracking-tight text-neutral-100">
          Contact
        </button>
      </div>

      <Slider />
    </nav>
  );
}

function Slider() {
  return (
    <div className="flex justify-center items-center h-8 overflow-hidden relative">
      <div className="absolute left-0 h-full w-16 bg-gradient-to-r from-neutral-900/95 to-neutral-900/0 rounded-bl-lg z-10" />
      <div className="absolute right-0 h-full w-16 bg-gradient-to-l from-neutral-900/95 to-neutral-900/0 rounded-br-lg z-10" />

      <div className="flex overflow-hidden">
        <motion.p
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 24, ease: "linear", repeat: Infinity }}
          className="text-[11px] uppercase font-mono tracking-wider text-neutral-400 whitespace-nowrap pr-1"
        >
          React, Next.js, TypeScript, Tailwind CSS, Prisma, Vercel, GSAP,
          Motion, Contentful, Supabase, Python, Figma,
        </motion.p>
        <motion.p
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 24, ease: "linear", repeat: Infinity }}
          className="text-[11px] uppercase font-mono tracking-wider text-neutral-400 whitespace-nowrap pr-1"
        >
          React, Next.js, TypeScript, Tailwind CSS, Prisma, Vercel, GSAP,
          Motion, Contentful, Supabase, Python, Figma,
        </motion.p>
      </div>
    </div>
  );
}
