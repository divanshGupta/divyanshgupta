"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import useWindowSize from "@/hooks/useWindowSize";
import { ArrowDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();

  useGSAP(() => {
    const videoContainer = videoContainerRef.current;

    if (!videoContainer) return;

    if (width >= 768) {
      const breakpoints = [
        { maxWidth: 1000, translateY: -135, movMultiplier: 450 },
        { maxWidth: 1100, translateY: -130, movMultiplier: 500 },
        { maxWidth: 1200, translateY: -125, movMultiplier: 550 },
        { maxWidth: 1300, translateY: -120, movMultiplier: 600 },
      ];

      const getInitialValues = () => {
        for (const br of breakpoints) {
          if (width <= br.maxWidth) {
            return {
              translateY: br.translateY,
              movementMultiplier: br.movMultiplier,
            };
          }
        }

        return {
          translateY: -113,
          movementMultiplier: 725,
        };
      };

      const initialValues = getInitialValues();

      const animationState = {
        scrollProgress: 0,
        initialTranslateY: initialValues.translateY,
        currentTranslateY: initialValues.translateY,
        movementMultiplier: initialValues.movementMultiplier,
        scale: 0.35,
        targetMouseX: 0,
        currentMouseX: 0,
      };

      gsap.timeline({
        scrollTrigger: {
          trigger: ".intro",
          start: "top bottom",
          end: "top 10%",
          scrub: true,
          onUpdate: (self) => {
            animationState.scrollProgress = self.progress;

            animationState.currentTranslateY = gsap.utils.interpolate(
              animationState.initialTranslateY,
              0,
              animationState.scrollProgress
            );

            animationState.scale = gsap.utils.interpolate(
              0.35,
              1,
              animationState.scrollProgress
            );

            // if (animationState.scrollProgress <= 0.4) {
            //   const firstPartProgress = animationState.scrollProgress / 0.4;
            // }
          },
        },
      });

      document.addEventListener("mousemove", (e) => {
        animationState.targetMouseX = (e.clientX / width - 0.5) * 2;
      });

      const animate = () => {
        if (width < 768) return;

        const {
          scale,
          targetMouseX,
          currentMouseX,
          currentTranslateY,
          movementMultiplier,
        } = animationState;

        const scaleMovementMultiplier = (1 - scale) * movementMultiplier;

        const maxHorizontalMovement =
          scale < 0.95 ? targetMouseX * scaleMovementMultiplier : 0;

        animationState.currentMouseX = gsap.utils.interpolate(
          currentMouseX,
          maxHorizontalMovement,
          0.15
        );

        videoContainer.style.transform = `translateY(${currentTranslateY}%) translateX(${animationState.currentMouseX}px) scale(${scale})`;
        requestAnimationFrame(animate);
      };

      animate();
    }
  }, [width]);

  return (
    <>
      <section className="h-[100svh] relative">
        <div className="flex flex-col uppercase font-semibold absolute bottom-[20vh] left-8 right-8">
          <div className="overflow-hidden w-full">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{
                duration: 1,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="flex justify-between w-full"
            >
              <p className="text-[clamp(12px,1.2vw,20px)] uppercase block">A</p>
              <p className="text-[clamp(12px,1.2vw,20px)] uppercase absolute left-1/2 -translate-x-1/2">
                Seriously
              </p>
              <p className="text-[clamp(12px,1.2vw,20px)] uppercase block">
                Good
              </p>
            </motion.div>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-2">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 1,
                  delay: 0.1,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="w-full pointer-events-none lg:pr-20"
              >
                <Image
                  src="/images/svg/design.svg"
                  alt="Design"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-[13vw] sm:w-auto sm:h-[10vw]"
                />
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 1,
                  delay: 0.1,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="w-full pointer-events-none"
              >
                <Image
                  src="/images/svg/engineer.svg"
                  alt="Engineer"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto sm:w-auto sm:h-[10vw]"
                />
              </motion.div>
            </div>
          </div>
        </div>

        <div className="absolute left-8 bottom-6 flex items-center gap-1">
          <ArrowDown className="w-[clamp(16px,1.3vw,24px)] h-[clamp(16px,1.3vw,24px)] text-neutral-900" />
          <p className="text-[clamp(12px,1.2vw,20px)] font-medium">
            Scroll for
          </p>
        </div>
        <div className="absolute right-8 bottom-6 flex items-center gap-1">
          <p className="text-[clamp(12px,1.2vw,20px)] font-medium">cool sh*t</p>
          <ArrowDown className="w-[clamp(16px,1.3vw,24px)] h-[clamp(16px,1.3vw,24px)] text-neutral-900" />
        </div>
      </section>

      <section className="intro h-[100svh] px-8">
        <div
          ref={videoContainerRef}
          className="hero-video-container-desktop hidden md:flex flex-col gap-2 relative will-change-transform"
        >
          <div className="video-preview relative w-full aspect-video overflow-hidden rounded-3xl">
            <div className="video-wrapper absolute top-0 left-0 w-full h-full overflow-hidden rounded-2xl">
              <video
                src="https://framerusercontent.com/assets/aFG2kQFYK0jA3f70gojhgdLj5Fo.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full rounded-2xl pointer-events-none"
              />
            </div>
          </div>
          {/* <div className="video-title">
            <p className="text-[78px] font-medium">Showreel</p>
            <p className="text-[78px] font-medium">[2024-2025]</p>
          </div> */}
        </div>

        <div className="hero-video-container-mobile md:hidden w-full max-w-[800px] mx-auto">
          <div className="video-preview relative w-full aspect-video overflow-hidden rounded-3xl">
            <div className="video-wrapper absolute top-0 left-0 w-full h-full overflow-hidden rounded-3xl">
              <video
                src="https://player.vimeo.com/progressive_redirect/playback/1025551892/rendition/1080p/file.mp4?loc=external&signature=83693d5c808f75a69753062cdae434887329073bf2e5ca6d321338191e542d61"
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full rounded-3xl pointer-events-none"
              />
            </div>
          </div>
          <div className="video-title">
            <p>Showreel</p>
            <p>2024-2025</p>
          </div>
        </div>
      </section>
    </>
  );
}
