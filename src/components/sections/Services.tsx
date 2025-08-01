"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { useRef } from "react";
import { lcddot } from "@/fonts";
import Image from "next/image";
import Copy from "@/components/layout/Copy";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Service = {
  title: string;
  description: string;
  keywords: string[];
  image: string;
};

const services = [
  {
    title: "Brand Strategy",
    description:
      "Helping others uncover their brand's purpose and uniqueness – and the game plan to deliver it to win their customers' devotion.",
    keywords: [
      "Research & Insights",
      "Brand Strategy",
      "Competitive Study",
      "Voice & Tone",
      "Naming & Copywriting",
      "Workshops",
    ],
    image: "/images/services/brand-strategy.png",
  },
  {
    title: "Digital Design",
    description:
      "Designing engaging digital experiences that combine brand strategy and creativity with UX insights to deliver functionality and ease of use.",
    keywords: [
      "Identity Design",
      "Wireframing",
      "UI",
      "UX",
      "Web Design",
      "Product Design",
    ],
    image: "/images/services/digital-design.png",
  },
  {
    title: "Development",
    description:
      "Building digital products that combine design, technology, and business strategy to deliver seamless user experiences.",
    keywords: [
      "Frontend Development",
      "SEO",
      "Motion",
      "Animation",
      "WebGL",
      "CMS Development",
      "Databases",
    ],
    image: "/images/services/development.png",
  },
];

export default function Services() {
  return (
    <section className="px-2 lg:px-4 py-16 lg:py-24">
      <div className="flex flex-col gap-16 lg:gap-24 bg-neutral-900 px-4 pt-16 lg:pt-24 pb-4 rounded-2xl lg:rounded-[20px]">
        <div className="lg:grid lg:grid-cols-12 gap-24">
          <div className="flex flex-col col-span-12 lg:col-span-10 lg:col-start-3">
            <Copy>
              <h2 className="text-xs lg:text-[clamp(14px,0.8vw,18px)] text-neutral-400 uppercase font-medium tracking-wider mb-2">
                Services
              </h2>
            </Copy>
            <Copy>
              <p className="text-neutral-100 text-[clamp(24px,3.3vw,56px)] font-medium leading-[1.1] lg:leading-[1.05]">
                Evolving with every brief and built for impact, my process spans
                design, development, and brand strategy—aligning vision with
                execution to bring clarity and edge to every project.
              </p>
            </Copy>
          </div>
        </div>

        <div className="flex flex-col bg-neutral-800 rounded-xl lg:rounded-2xl px-4 lg:px-5">
          <ServicesList />
        </div>
      </div>
    </section>
  );
}

function ServicesList() {
  return (
    <ul className="flex flex-col">
      {services.map((service, index) => (
        <ServiceCard key={service.title} service={service} index={index} />
      ))}
    </ul>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const keywordsRef = useRef(null);
  const imageContainerRef = useRef(null);

  const isKeywordsInView = useInView(keywordsRef, {
    once: true,
    margin: "0px 0px -15% 0px",
  });
  const isImageInView = useInView(imageContainerRef, {
    once: true,
    margin: "0px 0px -10% 0px",
  });

  const { scrollYProgress } = useScroll({
    target: imageContainerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-3vh", "3vh"]);

  return (
    <li className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-8 pt-10 last:pb-4 not-last:pb-10 lg:last:pb-10 not-last:border-b not-last:border-neutral-700">
      <Copy>
        <p className="text-xs lg:text-[clamp(14px,0.8vw,18px)] text-neutral-300 uppercase font-medium tracking-wider mb-1 lg:col-span-2">
          0{index + 1}
        </p>
      </Copy>

      <Copy>
        <h3 className="text-[clamp(24px,3.3vw,56px)] text-neutral-100 font-medium lg:col-span-4 mb-6 lg:mb-0 lg:-mt-4">
          {service.title}
        </h3>
      </Copy>

      <div className="flex flex-col gap-4 lg:gap-6 lg:col-span-3 mb-8 lg:mb-0">
        <Copy>
          <p className="text-[clamp(16px,1.2vw,20px)] text-neutral-100 font-medium leading-[1.3]">
            {service.description}
          </p>
        </Copy>

        <ul ref={keywordsRef} className="flex gap-1.5 flex-wrap">
          {service.keywords.map((keyword, index) => (
            <motion.li
              key={keyword}
              initial={{ y: 24, opacity: 0, scale: 0.9 }}
              animate={
                isKeywordsInView
                  ? { y: 0, opacity: 1, scale: 1 }
                  : { y: 24, opacity: 0, scale: 0.9 }
              }
              transition={{
                duration: 1,
                delay: index * 0.025,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`${lcddot.className} text-[10px] text-neutral-100 uppercase tracking-[1.1] bg-neutral-100/10 px-2 3xl:px-3 pt-2 pb-1.5 rounded-md whitespace-nowrap`}
            >
              {keyword}
            </motion.li>
          ))}
        </ul>
      </div>

      <motion.div className="lg:col-span-3">
        <div
          ref={imageContainerRef}
          className="h-[220px] sm:h-[400px] md:h-[450px] lg:h-[clamp(220px,15vw,360px)] rounded-lg overflow-hidden relative"
        >
          <motion.div
            className="absolute inset-0 w-full h-[120%] lg:-top-[10%]"
            style={{ y }}
            initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={
              isImageInView
                ? { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }
                : {}
            }
            transition={{
              duration: 1.6,
              ease: [0.87, 0, 0.13, 1],
            }}
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </li>
  );
}
