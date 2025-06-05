"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import { useFooter } from "@/contexts/footer-context";

export default function Footer() {
  const { footerRef } = useFooter();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <footer ref={footerRef}>
      <div
        ref={containerRef}
        className="px-2 lg:px-4 pt-8 lg:pt-16 pb-8 lg:pb-4 grid grid-cols-12 gap-4 relative"
      >
        <motion.h2
          style={{ y }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-[clamp(100px,14vw,250px)] tracking-tight"
        >
          itsjay.us
        </motion.h2>

        <Link
          href="/work"
          className="col-span-8 flex items-end p-6 bg-neutral-300/50 backdrop-blur-sm h-[350px] rounded-2xl text-[clamp(16px,1.4vw,24px)] font-medium leading-tight hover:backdrop-blur-md transition-all duration-500"
        >
          Work
        </Link>
        <Link
          href="/lab"
          className="col-span-4 flex items-end p-6 bg-neutral-300/50 backdrop-blur-sm h-[350px] rounded-2xl text-[clamp(16px,1.4vw,24px)] font-medium leading-tight hover:backdrop-blur-md transition-all duration-500"
        >
          Lab
        </Link>
        <div className="col-span-4 grid grid-rows-2 gap-4">
          <a
            href="mailto:jason@itsjay.us"
            className="flex items-end p-6 bg-neutral-300/50 backdrop-blur-sm rounded-2xl text-[clamp(16px,1.4vw,24px)] font-medium leading-tight hover:backdrop-blur-md transition-all duration-500"
          >
            Contact
          </a>
          <a
            href="https://github.com/jasonzubiate"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-end p-6 bg-neutral-300/50 backdrop-blur-sm rounded-2xl text-[clamp(16px,1.4vw,24px)] font-medium leading-tight hover:backdrop-blur-md transition-all duration-500"
          >
            Github
          </a>
        </div>
        <a
          href="https://www.instagram.com/itsjay.us/"
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-4 flex items-end p-6 bg-neutral-300/50 backdrop-blur-sm h-[350px] rounded-2xl text-[clamp(16px,1.4vw,24px)] font-medium leading-tight hover:backdrop-blur-md transition-all duration-500"
        >
          Instagram
        </a>
        <a
          href="https://www.linkedin.com/in/jasonzubiate/"
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-4 flex items-end p-6 bg-neutral-300/50 backdrop-blur-sm h-[350px] rounded-2xl text-[clamp(16px,1.4vw,24px)] font-medium leading-tight hover:backdrop-blur-md transition-all duration-500"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
