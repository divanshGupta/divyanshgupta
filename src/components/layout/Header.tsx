"use client";

import Navbar from "./Navbar";
import LiveTime from "../ui/LiveTime";
import { motion } from "motion/react";

export default function Header() {
  return (
    <header>
      <div className="overflow-hidden fixed top-6 left-8 right-8 hidden lg:grid grid-cols-12 gap-8 z-50">
        <div className="col-span-3">
          <span className="block font-medium text-[clamp(12px,1.2vw,20px)] leading-tight">
            US Based
          </span>
          <span className="block text-neutral-400 font-medium text-[clamp(12px,1.2vw,20px)] leading-tight">
            Working globaly
          </span>
        </div>
        <div className="col-span-3">
          <span className="block font-medium text-[clamp(12px,1.2vw,20px)] leading-tight">
            Building at
          </span>
          <a
            href="https://trackstack.app"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-neutral-400 font-medium text-[clamp(12px,1.2vw,20px)] leading-tight"
          >
            Trackstack
          </a>
        </div>
        <div className="col-span-3">
          <span className="block font-medium text-[clamp(12px,1.2vw,20px)] leading-tight">
            Freelance availability
          </span>
          <span className="block text-neutral-400 font-medium text-[clamp(12px,1.2vw,20px)] leading-tight">
            June 2025
          </span>
        </div>

        <button className="fixed right-6 top-4 px-7 h-14 rounded-full bg-neutral-900 text-neutral-100 font-medium text-[clamp(12px,1.2vw,20px)] cursor-pointer">
          Get in touch
        </button>
      </div>
      {/* <Navbar />
      <LiveTime /> */}
    </header>
  );
}
