"use client";

export default function Header() {
  return (
    <header>
      <div className="overflow-hidden fixed left-4 lg:left-8 right-4 lg:right-8 top-4.5 lg:top-6 grid grid-cols-12 gap-4 lg:gap-8 z-50">
        <div className="col-span-12 lg:col-span-3">
          <span className="block font-medium text-[clamp(16px,1.2vw,20px)]">
            US Based
          </span>
          <span className="block text-neutral-400 font-medium text-[clamp(16px,1.2vw,20px)]">
            Working globally
          </span>
        </div>
        <div className="hidden lg:block col-span-3">
          <span className="block font-medium text-[clamp(16px,1.2vw,20px)]">
            Building at
          </span>
          <a
            href="https://trackstack.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="overflow-hidden h-6">
              <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-1/2">
                <span className="text-[clamp(16px,1.2vw,20px)] text-neutral-400 font-medium mb-1.5">
                  Trackstack
                </span>
                <span className="text-[clamp(16px,1.2vw,20px)] text-neutral-400 font-medium mb-1.5">
                  Trackstack
                </span>
              </div>
            </div>
          </a>
        </div>
        <div className="hidden lg:block col-span-3">
          <span className="block font-medium text-[clamp(16px,1.2vw,20px)]">
            Freelance availability
          </span>
          <span className="block text-neutral-400 font-medium text-[clamp(16px,1.2vw,20px)]">
            June 2025
          </span>
        </div>

        <button className="fixed right-4 lg:right-8 top-4 lg:top-5 px-5 py-3.5 rounded-full bg-neutral-900 text-neutral-100 font-semibold text-[clamp(16px,1.2vw,20px)] border border-neutral-800 cursor-pointer">
          Get in touch
        </button>
      </div>
    </header>
  );
}
