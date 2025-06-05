"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import Image from "next/image";
import { projects, Project } from "@/data/projects";
import Link from "next/link";
import { lcddot } from "@/fonts";

export default function Work() {
  return (
    <section className="py-28 px-8">
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-[clamp(40px,12vw,200px)] font-semibold tracking-tight leading-[0.8] uppercase">
          Work
        </h2>

        <p className="text-[clamp(12px,1.3vw,20px)] font-medium w-3/12 leading-[1.4]">
          From designs and identities to entire websites and products.
        </p>
      </div>

      <ul className="flex flex-col lg:flex-row gap-4">
        <motion.li
          key={projects[0].title}
          className="w-full lg:w-1/2 h-[clamp(500px,40vw,1000px)]"
        >
          <ProjectCard project={projects[0]} />
        </motion.li>
        <motion.li
          key={projects[2].title}
          className="w-full lg:w-1/2 h-[clamp(500px,40vw,1000px)]"
        >
          <ProjectCard project={projects[2]} />
        </motion.li>
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
    <Link
      href={`/work/${project.slug}`}
      className="flex flex-col gap-6 px-4 pt-4 pb-5 2xl:pb-7 w-full h-full rounded-2xl bg-neutral-200 cursor-pointer group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative rounded-xl overflow-hidden w-full h-full">
        <div className="absolute inset-0 bg-neutral-900/40 backdrop-blur-md z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />

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
          className="absolute top-1/2 -translate-y-1/12 left-1/2 -translate-x-1/2 w-[clamp(300px,65%,600px)] h-auto rounded-lg object-cover z-20 [clip-path:polygon(30%_50%,70%_50%,70%_50%,30%_50%)] group-hover:[clip-path:polygon(0_100%,100%_100%,100%_0,0_0)] group-hover:-translate-y-6/12 transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)]"
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
              className="object-cover scale-105 group-hover:scale-100 transition-transform duration-500 ease-in-out"
            />
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col gap-3 2xl:gap-4 px-4">
        <div className="flex justify-between w-full relative">
          <p className="text-[clamp(16px,1.2vw,28px)] font-medium">{project.year}</p>
          <p className="absolute left-1/2 -translate-x-1/2 text-[clamp(16px,1.2vw,28px)] font-medium">
            {project.title}
          </p>
          <p className="text-[clamp(16px,1.2vw,28px)] font-medium">
            {project.category}
          </p>
        </div>

        <div className="flex justify-center items-center h-4 md:h-4.5 2xl:h-5 overflow-hidden relative w-full">
          <div className="absolute left-0 h-full w-10 bg-linear-to-r from-neutral-200/95 to-neutral-200/0 z-10" />
          <div className="absolute right-0 h-full w-10 bg-linear-to-l from-neutral-200/95 to-neutral-200/0 z-10" />

          <div className="flex overflow-hidden">
            <motion.p
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 32, ease: "linear", repeat: Infinity }}
              className={`${lcddot.className} text-[clamp(10px,0.8vw,18px)] tracking-widest text-neutral-600 uppercase whitespace-nowrap pr-1.5`}
            >
              {project.keywords.map((keyword) => (
                <span key={keyword}>{keyword}, </span>
              ))}
            </motion.p>
            <motion.p
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 32, ease: "linear", repeat: Infinity }}
              className={`${lcddot.className} text-[clamp(10px,0.8vw,18px)] tracking-widest text-neutral-600 uppercase whitespace-nowrap pr-1.5`}
            >
              {project.keywords.map((keyword) => (
                <span key={keyword}>{keyword}, </span>
              ))}
            </motion.p>
          </div>
        </div>
      </div>
    </Link>
  );
}
