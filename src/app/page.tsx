"use client";

import useTransition from "@/hooks/useTransition";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import TechnologiesList from "@/components/sections/TechnologiesList";
import Footer from "@/components/layout/Footer";
import Work from "@/components/sections/Work";

export default function Home() {
  // useTransition();

  return (
    <>
      {/* <div className="revealer fixed top-0 left-0 w-screen h-screen origin-[center_top] bg-neutral-900 pointer-events-none z-999"></div> */}

      <main>
        <div className="h-screen bg-green-200 flex items-center justify-center">hero</div>
        <About />
        <Work />
        <Services />
        <TechnologiesList />
        <Footer />
      </main>
    </>
  );
}
