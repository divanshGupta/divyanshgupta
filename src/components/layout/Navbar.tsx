"use client";

import { motion } from "motion/react";
import { useState, useRef } from "react";
import { cubicBezier } from "motion";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<"about" | "contact" | null>(
    null
  );
  const pathname = usePathname();
  const navbarRef = useRef<HTMLElement>(null!);
  const easing = cubicBezier(0.83, 0, 0.17, 1);

  useOnClickOutside(navbarRef, () => setActiveMenu(null));

  return (
    <nav
      ref={navbarRef}
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[470px] bg-neutral-900 rounded-lg z-[999]"
    >
      <div className="flex w-full justify-between items-center border-b border-neutral-800 px-3 h-8">
        <button
          onClick={() => setActiveMenu(activeMenu === "about" ? null : "about")}
          className="text-sm font-medium tracking-tight text-neutral-100 hover:text-neutral-400 transition-colors"
        >
          About
        </button>
        <Link
          href={pathname === "/" ? "/lab" : "/"}
          onClick={() => setActiveMenu(null)}
          className="absolute left-1/2 -translate-x-1/2 text-sm font-medium tracking-tight text-neutral-100 hover:text-neutral-400 transition-colors"
        >
          {pathname === "/" ? "Lab" : "Home"}
        </Link>
        <button
          onClick={() =>
            setActiveMenu(activeMenu === "contact" ? null : "contact")
          }
          className="text-sm font-medium tracking-tight text-neutral-100 hover:text-neutral-400 transition-colors"
        >
          Contact
        </button>
      </div>

      <Slider />

      <motion.div
        initial={{ height: 0 }}
        animate={{ height: activeMenu === "about" ? "auto" : 0 }}
        transition={{ duration: 0.4, ease: easing }}
        className="overflow-hidden"
      >
        <div className="flex flex-col gap-2 px-3 py-4">
          <h3 className="text-[13px] typeface-offbit-dotbold text-white tracking-widest uppercase">
            Bio
          </h3>
          <p className="text-sm text-neutral-100 font-medium">
            I'm a full-stack developer based in Los Angeles, CA, currently
            working at{" "}
            <a
              href="https://trackstack.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-400 transition-colors"
            >
              Trackstack
            </a>
            . I consider myself a design engineer because of my meticulous eye
            for detail and passion for crafting beautiful user experiences. But
            don&apos;t get it twisted — I&apos;m also well-versed in building
            complex, high-performance, and scalable web applications.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ height: 0 }}
        animate={{ height: activeMenu === "contact" ? "auto" : 0 }}
        transition={{ duration: 0.4, ease: easing }}
        className="overflow-hidden"
      >
        <div className="flex flex-col gap-2 px-3 py-4">
          <h3 className="text-[13px] typeface-offbit-dotbold text-white tracking-widest uppercase">
            Get in touch
          </h3>
          <div>
            <a
              href="mailto:jzubiate.dev@gmail.com"
              className="text-sm text-neutral-100 font-medium hover:text-neutral-400 transition-colors"
            >
              Mail
            </a>
            <span className="text-neutral-100"> • </span>
            <a
              href="https://instagram.com/itsjay.us"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-100 font-medium hover:text-neutral-400 transition-colors"
            >
              Instagram
            </a>
            <span className="text-neutral-100"> • </span>
            <a
              href="https://github.com/jasonzubiate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-100 font-medium hover:text-neutral-400 transition-colors"
            >
              GitHub
            </a>
            <span className="text-neutral-100"> • </span>
            <a
              href="https://linkedin.com/in/jasonzubiate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-100 font-medium hover:text-neutral-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
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
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          className="text-xs typeface-offbit-dotbold tracking-widest text-white uppercase whitespace-nowrap pr-1.5"
        >
          React, Next.js, TypeScript, Tailwind CSS, Prisma, Vercel, GSAP,
          Motion, Contentful, Supabase, Python, Figma,
        </motion.p>
        <motion.p
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          className="text-xs typeface-offbit-dotbold tracking-widest text-white uppercase whitespace-nowrap pr-1.5"
        >
          React, Next.js, TypeScript, Tailwind CSS, Prisma, Vercel, GSAP,
          Motion, Contentful, Supabase, Python, Figma,
        </motion.p>
      </div>
    </div>
  );
}
