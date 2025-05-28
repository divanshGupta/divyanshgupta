"use client";

export default function Header() {
  return (
    <header>
      <div className="overflow-hidden fixed top-6 left-8 right-8 hidden lg:grid grid-cols-12 gap-8 z-50">
        <div className="col-span-3">
          <span className="block font-medium text-[clamp(12px,1.2vw,20px)] leading-tight">
            US Based
          </span>
          <span className="block text-neutral-400 font-medium text-[clamp(12px,1.2vw,20px)] leading-tight">
            Working globally
          </span>
        </div>
        <div className="col-span-3">
          <span className="block font-medium text-[clamp(12px,1.2vw,20px)] leading-tight">
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
                <span className="text-[clamp(12px,1.2vw,20px)] text-neutral-400 font-medium mb-1.5">
                  Trackstack
                </span>
                <span className="text-[clamp(12px,1.2vw,20px)] text-neutral-400 font-medium mb-1.5">
                  Trackstack
                </span>
              </div>
            </div>
          </a>
        </div>
        <div className="col-span-3">
          <span className="block font-medium text-[clamp(12px,1.2vw,20px)] leading-tight">
            Freelance availability
          </span>
          <span className="block text-neutral-400 font-medium text-[clamp(12px,1.2vw,20px)] leading-tight">
            June 2025
          </span>
        </div>

        <button className="fixed right-8 top-5 px-7 h-14 rounded-full bg-neutral-900 text-neutral-100 font-medium text-[clamp(12px,1.2vw,20px)] border border-neutral-800 cursor-pointer">
          Get in touch
        </button>
      </div>
    </header>
  );
}
