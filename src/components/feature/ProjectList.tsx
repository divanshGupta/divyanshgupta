"use client";

import { useProjectStore } from "@/lib/zustand/stores/project-store";
import { projects } from "@/data/projects";
import { motion } from "motion/react";

export default function ProjectList() {
  const { currentProject, setCurrentProject } = useProjectStore();

  return (
    <ul className="flex gap-3 mb-8">
      {projects.map((project, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, scale: 0.85, y: "50%" }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
        >
          <button
            onClick={() => setCurrentProject(projects[index])}
            className={`flex py-2 px-3 rounded hover:border-neutral-800 transition-colors duration-300 border group ${
              currentProject.title === project.title
                ? "border-neutral-800"
                : "border-neutral-400"
            }`}
          >
            <span
              className={`text-xs typeface-lcd tracking-wider uppercase group-hover:text-neutral-800 transition-colors duration-300 ${
                currentProject.title === project.title
                  ? "text-neutral-800"
                  : "text-neutral-400"
              }`}
            >
              {project.title}
            </span>
          </button>
        </motion.li>
      ))}
    </ul>
  );
}
