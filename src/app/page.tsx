"use client";

import ProjectList from "@/components/feature/ProjectList";
import { useProjectStore } from "@/lib/zustand/stores/project-store";
import { motion } from "motion/react";

export default function Home() {
  const { currentProject } = useProjectStore();

  return (
    <main className="pt-52 p-6">
      <div className="grid grid-cols-12 gap-8 mb-12">
        <div className="col-span-3">
          <div className="overflow-hidden mb-2">
            <motion.h2
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="text-[13px] typeface-offbit-dotbold text-neutral-700 tracking-widest uppercase"
            >
              Built With
            </motion.h2>
          </div>
          <div key={currentProject.title} className="columns-2 gap-4">
            <ul className="space-y-px">
              {currentProject.stack.map((tech) => (
                <li key={tech} className="break-inside-avoid">
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
                      {tech}
                    </motion.p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-span-6">
          <div className="overflow-hidden mb-2">
            <motion.h2
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="text-[13px] typeface-offbit-dotbold text-neutral-700 tracking-widest uppercase"
            >
              Summary
            </motion.h2>
          </div>
          <div>
            {currentProject.summary.map((line, index) => (
              <div key={index} className="overflow-hidden">
                <motion.div
                  className="text-xl font-medium tracking-tight"
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
          <div className="overflow-hidden mb-2">
            <motion.h2
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
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
              className="text-[145px] font-semibold leading-none tracking-tighter"
            >
              {currentProject.year}
            </motion.p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="overflow-hidden mb-2">
          <motion.h2
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.25, delay: 0.2, ease: "easeOut" }}
            className="text-[13px] typeface-offbit-dotbold text-neutral-700 tracking-widest uppercase"
          >
            Select Project
          </motion.h2>
        </div>
        <ProjectList />
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4, ease: "easeOut" }}
          className="w-full h-[700px] p-3 bg-neutral-900 rounded-xl relative overflow-hidden"
        >
          <video
            src={currentProject.video}
            className="w-full h-full bg-neutral-800 rounded-lg object-cover object-center"
            autoPlay
            muted
            loop
          />
        </motion.div>
      </div>
    </main>
  );
}
