"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "motion/react";
import { useRef } from "react";
import Observer from "gsap/Observer";

gsap.registerPlugin(Observer);

// Define the image paths
const imagePaths = [
  "/images/lab/01.png",
  "/images/lab/02.png",
  "/images/lab/03.png",
  "/images/lab/04.png",
  "/images/lab/05.png",
  "/images/lab/06.png",
  "/images/lab/07.png",
  "/images/lab/08.png",
  "/images/lab/09.png",
  "/images/lab/10.png",
  "/images/lab/11.png",
  "/images/lab/12.png",
  "/images/lab/13.png",
  "/images/lab/14.png",
  "/images/lab/15.png",
];

export default function InfiniteGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    const halfX = container.clientWidth / 2;
    const wrapX = gsap.utils.wrap(-halfX, 0);
    const xTo = gsap.quickTo(container, "x", {
      duration: 1.5, // Will change over 1.5s
      ease: "power4", // Non-linear
      modifiers: {
        x: gsap.utils.unitize(wrapX),
      },
    });

    const halfY = container.clientHeight / 2;
    const wrapY = gsap.utils.wrap(-halfY, 0);
    const yTo = gsap.quickTo(container, "y", {
      duration: 1.5, // Will change over 1.5s
      ease: "power4", // Non-linear
      modifiers: {
        y: gsap.utils.unitize(wrapY),
      },
    });

    let incrX = 0,
      incrY = 0;

    // Observer to handle wheel and drag events
    const observer = Observer.create({
      target: window,
      type: "wheel,touch,pointer", // Handles wheel, touch, and drag
      onChangeX: (self) => {
        if (self.event.type === "wheel") incrX -= self.deltaX;
        else incrX += self.deltaX * 2;

        xTo(incrX); // smoothly animate to the new x position
      },
      onChangeY: (self) => {
        if (self.event.type === "wheel")
          incrY -= self.deltaY; // Update incrY based on the vertical movement
        else incrY += self.deltaY * 2;

        yTo(incrY); // Smoothly animate to the new y position
      },
    });

    // Cleanup function
    return () => {
      observer.kill();
    };
  }, []);

  // Function to render a set of media items
  const renderMediaItems = (ariaHidden?: boolean) => (
    <div
      className="grid w-max grid-cols-[repeat(5,1fr)] gap-[10vw] p-[5vw] pointer-events-none"
      aria-hidden={ariaHidden ? "true" : undefined}
    >
      {imagePaths.map((path, index) => (
        <div
          className="w-[50vw] md:w-[18vw] aspect-square select-none will-change-transform rounded-xl overflow-hidden z-0"
          key={`${index}-${ariaHidden ? "hidden" : "visible"}`}
        >
          <motion.img
            src={path || "/placeholder.svg"}
            alt=""
            className="w-full h-full block object-contain z-0"
            initial={
              ariaHidden
                ? undefined
                : {
                    opacity: 0,
                    y: 50,
                    scale: 0.9,
                  }
            }
            animate={
              ariaHidden
                ? undefined
                : {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }
            }
            transition={
              ariaHidden
                ? undefined
                : {
                    duration: 1.5,
                    delay: 1.5 + index * 0.025,
                    ease: [0.16, 1, 0.3, 1],
                  }
            }
          />
        </div>
      ))}
    </div>
  );

  return (
    <section className="h-screen w-full overflow-hidden pointer-events-none">
      <div
        ref={containerRef}
        className="grid grid-cols-[repeat(2,1fr)] w-max will-change-transform"
      >
        {/* Original content */}
        {renderMediaItems()}

        {/* Duplicates for infinite scrolling effect */}
        {renderMediaItems(true)}
        {renderMediaItems(true)}
        {renderMediaItems(true)}
      </div>
    </section>
  );
}
