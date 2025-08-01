"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
// import { useTransitionRouter } from "next-view-transitions";
import { useFooter } from "@/contexts/footer-context";
// import { pageTransition } from "@/constants/pageTransition";
import { usePathname } from "next/navigation";



export default function Footer() {
  const { footerRef } = useFooter();
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <footer ref={footerRef} className="bg-neutral-100">
      <div
        ref={containerRef}
        className="px-2 lg:px-4 pt-8 lg:pt-16 pb-8 lg:pb-4 grid grid-cols-12 gap-2 lg:gap-4 relative"
      >
        <motion.h2
          style={{ y }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-[clamp(40px,11vw,200px)] tracking-normal"
        >
          divyanshgupta.dev
        </motion.h2>

        <Link
          href="/work"
          onClick={(e) => {
            if (pathname === "/lab") {
              e.preventDefault(); // stop unnecessary reload
              return;
            }
            // let Link handle the routing
          }}
          className="col-span-12 lg:col-span-8 flex items-end p-4 lg:p-6 bg-neutral-300/50 backdrop-blur-xs h-[200px] lg:h-[350px] rounded-lg lg:rounded-xl text-[clamp(16px,1.4vw,24px)] font-medium leading-tight cursor-pointer hover:backdrop-blur-md transition-all duration-500"
        >
          Work
        </Link>
        <Link
          href="/lab"
          onClick={(e) => {
            if (pathname === "/lab") {
              e.preventDefault(); // stop unnecessary reload
              return;
            }
            // let Link handle the routing
          }}
          className="col-span-12 lg:col-span-4 flex items-end p-4 lg:p-6 bg-neutral-300/50 backdrop-blur-sm h-[200px] lg:h-[350px] rounded-lg lg:rounded-xl text-[clamp(16px,1.4vw,24px)] font-medium leading-tight cursor-pointer hover:backdrop-blur-md transition-all duration-500"
        >
          Lab
        </Link>
        <div className="col-span-12 lg:col-span-4 grid grid-cols-2 lg:grid-rows-2 gap-2 lg:gap-4">
          <a
            href="mailto:jason@itsjay.us"
            className="lg:col-span-12 flex items-end p-4 lg:p-6 bg-neutral-300/50 backdrop-blur-sm h-[120px] lg:h-full rounded-lg lg:rounded-xl text-[clamp(16px,1.4vw,24px)] font-medium leading-tight cursor-pointer hover:backdrop-blur-md transition-all duration-500"
          >
            Contact
          </a>
          <a
            href="https://github.com/divanshGupta"
            target="_blank"
            rel="noopener noreferrer"
            className="lg:col-span-12 flex items-end p-4 lg:p-6 bg-neutral-300/50 backdrop-blur-sm h-[120px] lg:h-full rounded-lg lg:rounded-xl text-[clamp(16px,1.4vw,24px)] font-medium leading-tight cursor-pointer hover:backdrop-blur-md transition-all duration-500"
          >
            Github
          </a>
        </div>
        <a
          href="https://www.instagram.com/divansgupta/"
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-6 lg:col-span-4 flex items-end p-4 lg:p-6 bg-neutral-300/50 backdrop-blur-sm h-[120px] lg:h-[350px] rounded-lg lg:rounded-xl text-[clamp(16px,1.4vw,24px)] font-medium leading-tight cursor-pointer hover:backdrop-blur-md transition-all duration-500"
        >
          Instagram
        </a>
        <a
          href="https://www.linkedin.com/in/divyansh-raj-gupta/"
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-6 lg:col-span-4 flex items-end p-4 lg:p-6 bg-neutral-300/50 backdrop-blur-sm h-[120px] lg:h-[350px] rounded-lg lg:rounded-xl text-[clamp(16px,1.4vw,24px)] font-medium leading-tight cursor-pointer hover:backdrop-blur-md transition-all duration-500"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
