"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import Image from "next/image";
import { projects, Project } from "@/data/projects";
import Link from "next/link";
import { lcddot } from "@/fonts";

export default function Work() {
  return (
    <section className="py-24 px-8">
      <h2 className="text-[clamp(32px,5vw,100px)] font-medium mb-12 uppercase">
        Recent Work
      </h2>

      <ul className="flex flex-col gap-4">
        {projects.slice(0, 3).map((project, index) => (
          <li key={project.title}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <motion.div className="w-full">
      <Link
        href={`/work/${project.slug}`}
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex flex-col gap-6 p-6 pb-8 bg-neutral-200 rounded-2xl cursor-pointer group relative"
      >
        <div className="relative rounded-xl overflow-hidden w-full h-[850px]">
          <div className="absolute inset-0 bg-neutral-900/60 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />
          <video
            ref={(el) => {
              if (el) {
                if (isHovered) {
                  el.play();
                } else {
                  setTimeout(() => {
                    el.pause();
                    el.currentTime = 0;
                  }, 1000);
                }
              }
            }}
            src={project.videoUrl}
            className="absolute top-1/2 -translate-y-1/12 left-1/2 -translate-x-1/2 w-[clamp(300px,75%,1200px)] h-auto rounded-lg object-cover z-20 [clip-path:polygon(30%_50%,70%_50%,70%_50%,30%_50%)] group-hover:[clip-path:polygon(0_100%,100%_100%,100%_0,0_0)] group-hover:-translate-y-6/12 transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)]"
            muted
            loop
            playsInline
          ></video>

          <div ref={containerRef} className="w-full h-full">
            <motion.div
              className="absolute inset-0 w-full h-[120%] -top-[10%] lg:-top-[15%]"
              style={{ y }}
            >
              <Image
                src={project.backgroundImageUrl}
                alt={project.title}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col gap-6 px-8">
          <div className="flex justify-between w-full relative">
            <p className="text-3xl font-semibold">{project.year}</p>
            <p className="absolute left-1/2 -translate-x-1/2 text-3xl font-semibold">
              {project.title}
            </p>
            <p className="text-3xl font-semibold">{project.category}</p>
          </div>

          <div className="flex justify-center items-center h-4 md:h-4.5 overflow-hidden relative w-full">
            <div className="absolute left-0 h-full w-16 bg-linear-to-r from-neutral-200/95 to-neutral-200/0 z-10" />
            <div className="absolute right-0 h-full w-16 bg-linear-to-l from-neutral-200/95 to-neutral-200/0 z-10" />

            <div className="flex overflow-hidden">
              <motion.p
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{ duration: 32, ease: "linear", repeat: Infinity }}
                className={`${lcddot.className} text-[10px] sm:text-sm md:text-base tracking-widest text-neutral-600 uppercase whitespace-nowrap pr-1.5`}
              >
                {project.keywords.map((keyword) => (
                  <span key={keyword}>{keyword}, </span>
                ))}
              </motion.p>
              <motion.p
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{ duration: 32, ease: "linear", repeat: Infinity }}
                className={`${lcddot.className} text-[10px] sm:text-sm md:text-base tracking-widest text-neutral-600 uppercase whitespace-nowrap pr-1.5`}
              >
                {project.keywords.map((keyword) => (
                  <span key={keyword}>{keyword}, </span>
                ))}
              </motion.p>
              <motion.p
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{ duration: 32, ease: "linear", repeat: Infinity }}
                className={`${lcddot.className} text-[10px] sm:text-sm md:text-base tracking-widest text-neutral-600 uppercase whitespace-nowrap pr-1.5 hidden sm:block`}
              >
                {project.keywords.map((keyword) => (
                  <span key={keyword}>{keyword}, </span>
                ))}
              </motion.p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
