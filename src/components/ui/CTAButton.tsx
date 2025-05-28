"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { lcddot } from "@/fonts";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import useTransition from "@/hooks/useTransition";

const navItems = [
  {
    title: "Home",
    href: "/",
    imageUrl: "/images/pages/lab.png",
  },
  {
    title: "Work",
    href: "/work",
    imageUrl: "/images/pages/work.png",
  },
  {
    title: "Lab",
    href: "/lab",
    imageUrl: "/images/pages/lab.png",
  },
];

export default function CTAButton() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(isOpen, ref as React.RefObject<HTMLElement>, () =>
    setIsOpen(false)
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5, ease: [0.25, 1, 0.5, 1] }}
      className="py-2 pl-2 pr-8 rounded-2xl md:rounded-[20px] bg-neutral-900 border border-neutral-800 fixed left-4 md:left-1/2 right-4 md:right-auto md:-translate-x-1/2 bottom-6 md:bottom-8 w-full md:w-[750px] z-50  overflow-hidden"
    >
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
          ease: [0.25, 1, 0.5, 1],
        }}
        className="overflow-hidden"
      >
        <nav className="flex flex-col gap-4 mb-4">
          {navItems.map((item, index) => {
            return (
              <NavItem
                key={item.title}
                {...item}
                index={index}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
            );
          })}
        </nav>

        <div className="pb-4">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: isOpen ? "100%" : "0%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className=" h-px rounded bg-neutral-800"
          ></motion.div>
        </div>
      </motion.div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 md:gap-5">
          <div className="h-[60px] w-[60px] md:h-[80px] md:w-[80px] rounded-lg md:rounded-xl overflow-hidden relative">
            <Image
              src="/images/other/me.png"
              alt="CTA Button"
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="flex flex-col gap-1.5 md:gap-2 w-[500px] relative">
            <p className="text-lg md:text-xl font-bold text-neutral-100">
              Jason Zubiate
            </p>
            <Slider />
          </div>
        </div>

        {isOpen ? (
          <X
            onClick={() => setIsOpen((prev) => !prev)}
            className="w-7 h-7 text-neutral-100 hover:text-neutral-400 transition-all duration-300 cursor-pointer"
          />
        ) : (
          <Menu
            onClick={() => setIsOpen((prev) => !prev)}
            className="w-7 h-7 text-neutral-100 hover:text-neutral-400 transition-all duration-300 cursor-pointer"
          />
        )}
      </div>
    </motion.div>
  );
}

function Slider() {
  return (
    <div className="flex justify-center items-center h-4 md:h-4.5 overflow-hidden relative w-full">
      <div className="absolute left-0 h-full w-10 bg-linear-to-r from-neutral-900/95 to-neutral-900/0 z-10" />
      <div className="absolute right-0 h-full w-10 bg-linear-to-l from-neutral-900/95 to-neutral-900/0 z-10" />

      <div className="flex overflow-hidden">
        <motion.p
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 32, ease: "linear", repeat: Infinity }}
          className={`${lcddot.className} text-[10px] md:text-xs tracking-widest text-neutral-300 uppercase whitespace-nowrap pr-1.5`}
        >
          Creative Design Engineer, Awwwards Stalker, Product Builder, Next.js
          Enthusiast,
        </motion.p>
        <motion.p
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 32, ease: "linear", repeat: Infinity }}
          className={`${lcddot.className} text-[10px] md:text-xs tracking-widest text-neutral-300 uppercase whitespace-nowrap pr-1.5`}
        >
          Creative Design Engineer, Awwwards Stalker, Product Builder, Next.js
          Enthusiast,
        </motion.p>
      </div>
    </div>
  );
}

function NavItem({
  title,
  href,
  imageUrl,
  index,
  isOpen,
  setIsOpen,
}: {
  title: string;
  href: string;
  imageUrl: string;
  index: number;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const router = useTransitionRouter();
  const pathname = usePathname();

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

    setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };

  return (
    <Link
      href={href}
      onClick={handleNavigation(href)}
      className="flex items-center gap-5 group cursor-pointer"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 24 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          scale: isOpen ? 1 : 0.9,
          y: isOpen ? 0 : 24,
        }}
        transition={{
          duration: 0.5,
          delay: 0.4 + -index * 0.075,
          ease: [0.25, 1, 0.5, 1],
        }}
        className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-lg md:rounded-xl overflow-hidden relative"
      >
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover object-center scale-110 group-hover:scale-100 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
        />
      </motion.div>
      <div className="overflow-hidden h-8">
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: isOpen ? "0%" : "100%" }}
          transition={{
            duration: 0.5,
            delay: 0.2 + -index * 0.075,
            ease: [0.25, 1, 0.5, 1],
          }}
          className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-1/2"
        >
          <span className="text-lg md:text-xl font-bold text-neutral-100 mb-1.5">
            {title}
          </span>
          <span className="text-lg md:text-xl font-bold text-neutral-100 mb-1.5">
            {title}
          </span>
        </motion.div>
      </div>
    </Link>
  );
}
