"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function TechnologiesLit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const highlight = highlightRef.current;

    if (!container || !highlight) return;

    const firstItem = container.querySelector(".grid-item:first-child");

    const moveToElement = (element: HTMLElement) => {
      if (element) {
        const rect = element.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        highlight.style.transform = `translate(${
          rect.left - containerRect.left
        }px, ${rect.top - containerRect.top}px)`;
        highlight.style.width = `${rect.width}px`;
        highlight.style.height = `${rect.height}px`;

        // Remove invert class from all images
        container.querySelectorAll("img").forEach((img) => {
          img.classList.remove("invert");
        });

        // Add invert class to the image in the current grid item
        const currentImage = element.querySelector("img");
        if (currentImage) {
          currentImage.classList.add("invert");
        }
      }
    };

    const moveHighlight = (e: MouseEvent) => {
      const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);

      if (hoveredElement && hoveredElement.classList.contains("grid-item")) {
        moveToElement(hoveredElement as HTMLElement);
      } else if (
        hoveredElement &&
        hoveredElement?.parentElement &&
        hoveredElement.parentElement.classList.contains("grid-item")
      ) {
        moveToElement(hoveredElement.parentElement);
      }
    };

    moveToElement(firstItem as HTMLElement);

    container.addEventListener("mousemove", moveHighlight);

    return () => {
      container.removeEventListener("mousemove", moveHighlight);
    };
  }, []);

  return (
    <section className="pb-24 px-8">
      <LetterScroll />

      <h4 className="font-semibold uppercase mb-8">Professional at</h4>
      <div ref={containerRef} className="relative">
        <div className="grid grid-rows-2 h-120">
          <div className="grid grid-cols-3 border-b border-neutral-300">
            <a
              href="https://reactjs.org"
              target="_blank"
              className="grid-item flex items-center justify-center border-r border-neutral-300 group cursor-pointer"
            >
              <Image
                src="/images/svg/react-logo.svg"
                alt="React"
                width={90}
                height={90}
                className="z-10 transition-all duration-300"
              />
            </a>
            <a
              href="https://nextjs.org"
              target="_blank"
              className="grid-item flex items-center justify-center border-r border-neutral-300 group cursor-pointer"
            >
              <Image
                src="/images/svg/nextjs-logotype-light-background.svg"
                alt="Next.js"
                width={150}
                height={150}
                className="z-10 transition-all duration-300"
              />
            </a>
            <a
              href="https://www.typescriptlang.org"
              target="_blank"
              className="grid-item flex items-center justify-center group cursor-pointer"
            >
              <Image
                src="/images/svg/typescript-logo.svg"
                alt="TypeScript"
                width={70}
                height={70}
                className="z-10 transition-all duration-300"
              />
            </a>
          </div>

          <div className="grid grid-cols-7">
            <a
              href="https://gsap.com/"
              target="_blank"
              className="grid-item flex items-center justify-center border-r border-neutral-300 group cursor-pointer"
            >
              <Image
                src="/images/svg/gsap-black.svg"
                alt="GSAP"
                width={80}
                height={80}
                className="z-10 transition-all duration-300"
              />
            </a>
            <a
              href="https://motion.dev/"
              target="_blank"
              className="grid-item flex items-center justify-center border-r border-neutral-300 group cursor-pointer"
            >
              <Image
                src="/images/svg/motion.svg"
                alt="Motion"
                width={80}
                height={80}
                className="z-10 transition-all duration-300"
              />
            </a>
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              className="grid-item flex items-center justify-center border-r border-neutral-300 group cursor-pointer"
            >
              <Image
                src="/images/svg/tailwindcss-logo.svg"
                alt="TailwindCSS"
                width={70}
                height={70}
                className="z-10 transition-all duration-300"
              />
            </a>
            <a
              href="https://www.contentful.com/"
              target="_blank"
              className="grid-item flex items-center justify-center border-r border-neutral-300 group cursor-pointer"
            >
              <Image
                src="/images/svg/contentful-logo.svg"
                alt="Contentful"
                width={50}
                height={50}
                className="z-10 transition-all duration-300"
              />
            </a>
            <a
              href="https://supabase.com/"
              target="_blank"
              className="grid-item flex items-center justify-center border-r border-neutral-300 group cursor-pointer"
            >
              <Image
                src="/images/svg/supabase-logo.svg"
                alt="Supabase"
                width={50}
                height={50}
                className="z-10 transition-all duration-300"
              />
            </a>
            <a
              href="https://vercel.com/"
              target="_blank"
              className="grid-item flex items-center justify-center border-r border-neutral-300 group"
            >
              <Image
                src="/images/svg/vercel-logotype-light.svg"
                alt="Vercel"
                width={90}
                height={90}
                className="z-10 transition-all duration-300"
              />
            </a>
            <a
              href="https://www.figma.com/"
              target="_blank"
              className="grid-item flex items-center justify-center group"
            >
              <Image
                src="/images/svg/figma-logo.svg"
                alt="Figma"
                width={60}
                height={60}
                className="z-10 transition-all duration-300"
              />
            </a>
          </div>
        </div>

        <div
          ref={highlightRef}
          className="highlight hidden sm:block absolute top-0 left-0 bg-neutral-900 pointer-events-none transition-all duration-300"
        ></div>
      </div>
    </section>
  );
}

function LetterScroll() {
  const containerRef = useRef<HTMLUListElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.to(".letter", {
      yPercent: 100,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "33.33% bottom",
        end: "100% 80%",
        scrub: 1,
      },
      stagger: {
        each: 0.05,
        from: "random",
      },
    });
  }, []);

  return (
    <ul
      ref={containerRef}
      className="letter-scroll flex flex-col justify-center items-center h-screen py-24"
    >
      <li className="text-[clamp(100px,16vw,250px)] font-medium tracking-tight leading-[0.85] overflow-hidden flex">
        <span className="letter relative inline-block">
          <span>M</span>
          <span className="absolute bottom-full left-0">M</span>
        </span>
        <span className="letter relative inline-block">
          <span>o</span>
          <span className="absolute bottom-full left-0">o</span>
        </span>
        <span className="letter relative inline-block">
          <span>d</span>
          <span className="absolute bottom-full left-0">d</span>
        </span>
        <span className="letter relative inline-block">
          <span>e</span>
          <span className="absolute bottom-full left-0">e</span>
        </span>
        <span className="letter relative inline-block">
          <span>r</span>
          <span className="absolute bottom-full left-0">r</span>
        </span>
        <span className="letter relative inline-block">
          <span>n</span>
          <span className="absolute bottom-full left-0">n</span>
        </span>
      </li>
      <li className="text-[clamp(100px,16vw,250px)] font-medium tracking-tight leading-[0.85] overflow-hidden flex">
        <span className="letter relative inline-block">
          <span>t</span>
          <span className="absolute bottom-full left-0">t</span>
        </span>
        <span className="letter relative inline-block">
          <span>e</span>
          <span className="absolute bottom-full left-0">e</span>
        </span>
        <span className="letter relative inline-block">
          <span>c</span>
          <span className="absolute bottom-full left-0">c</span>
        </span>
        <span className="letter relative inline-block mr-16">
          <span>h</span>
          <span className="absolute bottom-full left-0">h</span>
        </span>

        <span className="letter relative inline-block">
          <span>s</span>
          <span className="absolute bottom-full left-0">s</span>
        </span>
        <span className="letter relative inline-block">
          <span>t</span>
          <span className="absolute bottom-full left-0">t</span>
        </span>
        <span className="letter relative inline-block">
          <span>a</span>
          <span className="absolute bottom-full left-0">a</span>
        </span>
        <span className="letter relative inline-block">
          <span>c</span>
          <span className="absolute bottom-full left-0">c</span>
        </span>
        <span className="letter relative inline-block">
          <span>k</span>
          <span className="absolute bottom-full left-0">k</span>
        </span>
      </li>
    </ul>
  );
}
