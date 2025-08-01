"use client";

import { motion, useInView } from "motion/react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import Copy from "../layout/Copy";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
// import { useTransitionRouter } from "next-view-transitions";
// import { pageTransition } from "@/constants/pageTransition";
import { usePathname } from "next/navigation";

export default function Work() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -55% 0px",
  });
  const pathname = usePathname();
  // const router = useRouter();

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center py-28 px-4 lg:px-8"
    >
      <h2 className="flex justify-between w-full mb-6 lg:mb-8">
        <Copy>
          <span className="text-[clamp(48px,12vw,200px)] font-bold tracking-tight leading-[0.8] uppercase">
            Work
          </span>
        </Copy>
        <Copy delay={0.2}>
          <span className="text-[clamp(48px,12vw,200px)] font-bold tracking-tight leading-[0.8] uppercase">
            &apos;25
          </span>
        </Copy>
      </h2>

      <ul className="flex flex-col lg:flex-row gap-3 lg:gap-4 w-full mb-8 lg:mb-16">
        <motion.li
          initial={{ y: 24, opacity: 0, scale: 0.98 }}
          animate={isInView ? { y: 0, opacity: 1, scale: 1 } : {}}
          transition={{
            duration: 1.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          key={projects[0].title}
          className="w-full lg:w-1/2"
        >
          <ProjectCard project={projects[0]} index={0} />
        </motion.li>
        <motion.li
          initial={{ y: 24, opacity: 0, scale: 0.98 }}
          animate={isInView ? { y: 0, opacity: 1, scale: 1 } : {}}
          transition={{
            duration: 1.5,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          key={projects[1].title}
          className="w-full lg:w-1/2"
        >
          <ProjectCard project={projects[1]} index={1} />
        </motion.li>
      </ul>

      <Link
        href="/work"
        className="flex items-center gap-1 group"
        onClick={(e) => {
            if (pathname === "/lab") {
              e.preventDefault(); // stop unnecessary reload
              return;
            }
            // let Link handle the routing
          }}
      >
        <span className="text-[clamp(20px,1.5vw,32px)] font-medium">
          See all
        </span>

        <ArrowRight className="w-6 h-6" />
      </Link>
    </section>
  );
}
