"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import useTransition from "@/hooks/useTransition";
import { Project, projects } from "@/data/projects";
import { lcddot } from "@/fonts";
import Link from "next/link";
import { useState } from "react";
import { useRef } from "react";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";
import Footer from "@/components/layout/Footer";

export default function Work() {
  useTransition();

  return (
    <>
      <div className="revealer fixed top-0 left-0 w-screen h-screen origin-[center_top] bg-neutral-900 pointer-events-none z-999"></div>

      <div className="px-8 pt-[200px] pb-6">
        <div className="overflow-hidden mb-6">
          <motion.p
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(12px,1.2vw,20px)] font-medium"
          >
            [2022-2025]
          </motion.p>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(12px,10vw,200px)] font-bold uppercase leading-[0.8] tracking-tight"
          >
            Selected Work
          </motion.h1>
        </div>
      </div>

      <ProjectList />

      <Footer />
    </>
  );
}

function ProjectList() {
  return (
    <div className="px-4 py-6 mb-24">
      <div className="w-full bg-neutral-300 rounded-[20px] p-4">
        <div className="grid grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useTransitionRouter();
  const pathname = usePathname();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  function triggerPageTransition() {
    document.documentElement.animate(
      [
        {
          clipPath: "polygon(25% 75%, 75% 75%, 75% 75%, 25% 75%)",
        },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0 0%)",
        },
      ],
      {
        duration: 2000,
        easing: "cubic-bezier(0.76, 0, 0.24, 1)",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }

  const handleNavigation = (path: string) => (e: React.MouseEvent) => {
    if (path === pathname) {
      e.preventDefault();
      return;
    }

    router.push(path, {
      onTransitionReady: triggerPageTransition,
    });
  };

  return (
    <motion.div
      initial={{ y: 24, opacity: 0, scale: 0.98 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{
        duration: 1.5,
        delay: 2 + index * 0.075,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Link
        href={`/work/${project.slug}`}
        className="flex flex-col gap-6 px-4 pt-4 pb-5 rounded-2xl bg-neutral-200 cursor-pointer group relative"
        onClick={handleNavigation(`/work/${project.slug}`)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative rounded-xl overflow-hidden w-full h-[500px]">
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

        <div className="flex flex-col gap-3 px-4">
          <div className="flex justify-between w-full relative">
            <p className="text-xl font-medium">{project.year}</p>
            <p className="absolute left-1/2 -translate-x-1/2 text-xl font-medium">
              {project.title}
            </p>
            <p className="text-xl font-medium">{project.category}</p>
          </div>

          <div className="flex justify-center items-center h-4 md:h-4.5 overflow-hidden relative w-full">
            <div className="absolute left-0 h-full w-10 bg-linear-to-r from-neutral-200/95 to-neutral-200/0 z-10" />
            <div className="absolute right-0 h-full w-10 bg-linear-to-l from-neutral-200/95 to-neutral-200/0 z-10" />

            <div className="flex overflow-hidden">
              <motion.p
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{ duration: 32, ease: "linear", repeat: Infinity }}
                className={`${lcddot.className} text-[10px] md:text-xs tracking-widest text-neutral-600 uppercase whitespace-nowrap pr-1.5`}
              >
                {project.keywords.map((keyword) => (
                  <span key={keyword}>{keyword}, </span>
                ))}
              </motion.p>
              <motion.p
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{ duration: 32, ease: "linear", repeat: Infinity }}
                className={`${lcddot.className} text-[10px] md:text-xs tracking-widest text-neutral-600 uppercase whitespace-nowrap pr-1.5`}
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
