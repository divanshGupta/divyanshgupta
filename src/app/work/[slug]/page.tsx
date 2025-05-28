"use client";

import { motion } from "motion/react";
import { projects } from "@/data/projects";
import { redirect } from "next/navigation";
import { lcddot, saansMono } from "@/fonts";
import { use } from "react";
import Image from "next/image";

type PageParams = {
  slug: string;
};

export default function Project({ params }: { params: Promise<PageParams> }) {
  const unwrappedParams = use(params);
  const project = projects.find(
    (project) => project.slug === unwrappedParams.slug
  );

  if (!project) {
    redirect("/work");
  }

  return (
    <>
      {/* <div className="revealer fixed top-0 left-0 w-screen h-screen origin-[center_top] bg-neutral-900 pointer-events-none z-999"></div> */}

      <div className="pt-40 px-4">
        <div className="overflow-hidden px-4 mb-20">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full text-center text-[clamp(100px,10vw,200px)] font-bold uppercase tracking-tight"
          >
            {project.title}
          </motion.h1>
        </div>

        <div className="grid grid-cols-12 w-full px-4 mb-12">
          <div className="flex flex-col gap-3 col-span-2">
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 2.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`${lcddot.className} text-[11px] uppercase tracking-widest`}
              >
                Year
              </motion.p>
            </div>

            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 2.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-[clamp(48px,6vw,64px)] font-semibold tracking-tight leading-[0.8]"
              >
                {project.year}
              </motion.p>
            </div>
          </div>

          <div className="flex flex-col gap-3 col-span-4">
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 2.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`${lcddot.className} text-[11px] uppercase tracking-widest`}
              >
                Services
              </motion.p>
            </div>

            <ul className="flex gap-1.5 flex-wrap">
              {project.keywords.map((keyword, index) => (
                <motion.li
                  key={keyword}
                  initial={{ y: 24, opacity: 0, scale: 0.9 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{
                    duration: 1,
                    delay: 2.3 + index * 0.025,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`${saansMono.className} text-sm tracking-wide bg-neutral-200 px-2 py-1.5 rounded-md whitespace-nowrap`}
                >
                  {keyword}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="col-span-1"></div>

          <div className="flex flex-col gap-3 col-span-5">
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 2.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`${lcddot.className} text-[11px] uppercase tracking-widest`}
              >
                Summary
              </motion.p>
            </div>

            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 2.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-xl font-medium leading-[1.3]"
              >
                {project.summary}
              </motion.p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 p-4 bg-neutral-200 rounded-2xl">
          {project.media.map((media, index) =>
            index === 2 || index === 6 ? (
              <div className="flex gap-4">
                <div className="w-1/2 h-[900px] rounded-xl overflow-hidden relative">
                  {media.type === "image" ? (
                    <Image
                      src={media.url}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <video src={media.url} autoPlay muted loop playsInline />
                  )}
                </div>
                <motion.div className="w-1/2 h-[900px] rounded-xl overflow-hidden relative">
                  {media.type === "image" ? (
                    <Image
                      src={media.url}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <video src={media.url} autoPlay muted loop playsInline />
                  )}
                </motion.div>
              </div>
            ) : (
              <motion.div
                initial={{ y: 32, opacity: 0, scale: 0.98 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                  duration: 1,
                  delay: 2.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="w-full h-[900px] rounded-xl overflow-hidden relative bg-red-300"
              >
                {media.type === "image" ? (
                  <Image
                    src={media.url}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <video
                    src={media.url}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="object-cover object-center h-full"
                  />
                )}
              </motion.div>
            )
          )}
        </div>
      </div>
    </>
  );
}
