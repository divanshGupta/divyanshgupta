"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { wrapWordsInSpan } from "@/utils/string";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const paragraph = paragraphRef.current;

    if (!paragraph) return;

    wrapWordsInSpan(paragraph);

    const words = paragraph.querySelectorAll("span");

    words.forEach((word) => {
      word.classList.add("word" + Math.floor(Math.random() * 4));
    });

    document.querySelectorAll("#about .word1").forEach((el) => {
      gsap.to(el, {
        x: "-0.8em",
        ease: "none",
        scrollTrigger: {
          trigger: el, // We listen to the word's position
          // Start when the word's top reaches 80% of the viewport height
          start: "top 80%",
          // End when the word's bottom reaches 60% of the viewport height
          end: "bottom 60%",
          scrub: 0.2, // Syncs with the scroll and takes 0.2s to update
        },
      });
    });

    document.querySelectorAll("#about .word2").forEach((el) => {
      gsap.to(el, {
        x: "1.6em", // Same value as in CSS
        ease: "none",
        scrollTrigger: {
          trigger: el, // We listen to the word's position
          start: "top 80%",
          end: "bottom 60%",
          scrub: 0.2,
        },
      });
    });

    document.querySelectorAll("#about .word3").forEach((el) => {
      gsap.to(el, {
        x: "-2.4em", // Same value as in CSS
        ease: "none",
        scrollTrigger: {
          trigger: el, // We listen to the word's position
          start: "top 80%",
          end: "bottom 60%",
          scrub: 0.2,
        },
      });
    });
  }, []);

  return (
    <section id="about" className="flex justify-between py-24 px-8">
      <p
        ref={paragraphRef}
        className="text-[clamp(16px,3.5vw,96px)] font-semibold w-[50vw] uppercase tracking-tight leading-none"
      >
        Passionate about merging design and engineering, I craft smooth,
        interactive experiences with purpose. With a focus on motion,
        performance, and detail, I help bring digital products to life for
        forward-thinking brands around the world.
      </p>

      <div className="relative h-screen">
        <div className="sticky top-[calc(100vh-20vw-164px)] w-[33vw] h-[20vw] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1742564386354-adb1a9dd4654?q=80&w=3260&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About"
            fill
            className="object-cover aspect-video"
          />
        </div>
      </div>
    </section>
  );
}
