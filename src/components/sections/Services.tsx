"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { saansMono } from "@/fonts";
import Image from "next/image";

type Service = {
  title: string;
  description: string;
  tags: string[];
  image: string;
};

const services = [
  {
    title: "Brand Strategy",
    description:
      "Helping others uncover their brand’s purpose and uniqueness – and the game plan to deliver it to win their customers’ devotion.",
    tags: [
      "Research & Insights",
      "Naming & Copywriting",
      "Competitive Study",
      "Brand Strategy",
      "Voice & Tone",
      "Workshops",
    ],
    image:
      "https://images.unsplash.com/photo-1741781650657-ce002002a996?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Digital Design",
    description:
      "Designing engaging digital experiences that combine brand strategy and creativity with UX insights to deliver functionality and ease of use.",
    tags: [
      "Identity Design",
      "UI",
      "UX",
      "Wireframing",
      "Web Design",
      "Product Design",
    ],
    image:
      "https://images.unsplash.com/photo-1741781650657-ce002002a996?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Development",
    description:
      "Building digital products that combine design, technology, and business strategy to deliver seamless user experiences.",
    tags: [
      "Frontend Development",
      "Backend Development",
      "SEO",
      "Animation",
      "Databases",
      "CMS Development",
    ],
    image:
      "https://images.unsplash.com/photo-1741781650657-ce002002a996?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Services() {
  return (
    <section className="bg-neutral-900 px-16 my-24 pt-28 pb-20 rounded-[40px]">
      <h2 className="text-neutral-100 text-[clamp(32px,5vw,100px)] font-medium mb-12 uppercase">
        Services
      </h2>

      <ul className="flex flex-col">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </ul>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-6vh", "6vh"]);

  return (
    <li className="flex justify-between items-center py-16 border-t border-neutral-700">
      <div className="flex flex-col w-5/12">
        <h3 className="text-neutral-100 text-[clamp(24px,3vw,64px)] font-medium uppercase mb-2">
          {service.title}
        </h3>
        <p className="text-neutral-400 text-[clamp(12px,1.2vw,20px)] leading-[1.6] mb-8">
          {service.description}
        </p>

        <ul className="flex gap-2 flex-wrap">
          {service.tags.map((tag) => (
            <li
              key={tag}
              className={`${saansMono.className} text-sm tracking-wide bg-neutral-800 text-neutral-200 px-2 py-1.5 rounded-md whitespace-nowrap`}
            >
              <span>{tag}</span>
            </li>
          ))}
        </ul>
      </div>

      <div
        ref={containerRef}
        className="w-1/3 h-[350px] rounded-xl overflow-hidden relative"
      >
        <motion.div
          className="absolute inset-0 w-full h-[120%] lg:-top-[15%]"
          style={{ y }}
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </li>
  );
}
