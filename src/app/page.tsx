"use client";

import Image from "next/image";
import ProjectList from "@/components/feature/ProjectList";
// import SplitType from "split-type";
import { useProjectStore } from "@/lib/zustand/stores/project-store";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function Home() {
  const { currentProject } = useProjectStore();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15vh", "15vh"]);

  return (
    <main className="pt-52 p-6 flex flex-col-reverse lg:flex-col gap-12">
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-8">
        <div className="col-span-3">
          <div className="overflow-hidden mb-1 lg:mb-2">
            <motion.h2
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-[13px] typeface-offbit-dotbold text-neutral-700 tracking-widest uppercase"
            >
              {currentProject.projectType.join(", ")}
            </motion.h2>
          </div>
          <div key={currentProject.title} className="columns-2 gap-4">
            <ul className="space-y-px">
              {currentProject.keywords.map((keyword) => (
                <li key={keyword} className="break-inside-avoid">
                  <div className="overflow-hidden">
                    <motion.p
                      initial={{ y: "100%" }}
                      animate={{ y: "0%" }}
                      transition={{
                        duration: 0.5,
                        delay: 0.1,
                        ease: "easeOut",
                      }}
                      className="font-medium tracking-tight"
                    >
                      {keyword}
                    </motion.p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-span-6">
          <div className="overflow-hidden mb-1 lg:mb-2">
            <motion.h2
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-[13px] typeface-offbit-dotbold text-neutral-700 tracking-widest uppercase"
            >
              Summary
            </motion.h2>
          </div>

          <div>
            {currentProject.summary.map((line, index) => (
              <div key={index} className="overflow-hidden">
                <motion.div
                  className="text-[clamp(16px,1.5vw,24px)] font-medium tracking-tight leading-[1.3]"
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.025 + 0.1,
                    ease: "easeOut",
                  }}
                  key={line}
                >
                  {line}
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-3">
          <div className="overflow-hidden mb-1 lg:mb-2">
            <motion.h2
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-[13px] typeface-offbit-dotbold text-neutral-700 tracking-widest uppercase"
            >
              Year
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.p
              key={currentProject.title}
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
              className="text-[clamp(100px,9.8vw,145px)] font-semibold leading-none tracking-tighter"
            >
              {currentProject.year}
            </motion.p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="overflow-hidden mb-1 lg:mb-2">
          <motion.h2
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
            className="text-[13px] typeface-offbit-dotbold text-neutral-700 tracking-widest uppercase"
          >
            Select Project
          </motion.h2>
        </div>
        <ProjectList />
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.97, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
          className="w-full h-[300px] lg:h-[800px] bg-neutral-900 rounded-lg lg:rounded-xl overflow-hidden relative"
        >
          <motion.div
            className="absolute inset-0 w-full h-[120%] -top-[10%] lg:-top-[20%]"
            style={{ y }}
          >
            <Image
              src={currentProject.backgroundImageUrl}
              alt={currentProject.title}
              fill
              className="object-cover object-center z-0"
            />
          </motion.div>

          <div className="absolute top-0 left-0 h-full w-full bg-neutral-900/10 backdrop-blur-sm z-10"></div>

          <video
            src={currentProject.videoUrl}
            className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[75%] max-w-[1200px] h-auto object-cover z-20 aspect-[auto_16/9] rounded-md lg:rounded-lg"
            autoPlay
            muted
            loop
          />
        </motion.div>
      </div>
    </main>
  );
}
