"use client";

import Navbar from "./Navbar";
import LiveTime from "../ui/LiveTime";
import { motion } from "motion/react";

export default function Header() {
  return (
    <header>
      <div className="overflow-hidden fixed top-6 left-6 hidden lg:block">
        <motion.p
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className=" font-medium tracking-tight"
        >
          Design Engineer
        </motion.p>
      </div>
      <Navbar />
      <LiveTime />
    </header>
  );
}
