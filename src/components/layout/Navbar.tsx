"use client";

import { motion } from "motion/react";
import { useState, useRef } from "react";
import { cubicBezier } from "motion";
import useOnClickOutside from "@/hooks/useOnClickOutside";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef<HTMLElement>(null!);
  const easing = cubicBezier(0.83, 0, 0.17, 1);

  useOnClickOutside(navbarRef, () => setIsOpen(false));

  return (
    <nav
      ref={navbarRef}
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[450px] bg-neutral-900 rounded-lg"
    >
      <div className="flex w-full justify-between items-center border-b border-neutral-800 px-3 h-8">
        <button
          onClick={() => setIsOpen(true)}
          className="text-sm font-medium tracking-tight text-neutral-100"
        >
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

      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.4, ease: easing }}
        className="overflow-hidden"
      >
        <div className="flex flex-col gap-2 px-3 pt-8 pb-4">
          <h3 className="text-xs font-medium font-mono uppercase tracking-wider text-neutral-400">
            About
          </h3>
          <p className="text-sm text-neutral-100">
            I'm a full-stack developer based in Los Angeles, CA, currently
            working at Trackstack. I consider myself a design engineer because
            of my meticulous eye for detail and passion for crafting beautiful
            user experiences. But don&apos;t get me wrong—I&apos;m also
            well-versed in building complex, high-performance, and scalable web
            applications.
          </p>
        </div>
      </motion.div>
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
