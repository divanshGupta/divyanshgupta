export type Project = {
  title: string;
  projectType: string[];
  keywords: string[];
  summary: string[];
  year: number;
  backgroundImageUrl: string;
  videoUrl: string;
  link: string;
};

export const projects: Project[] = [
  {
    title: "Jazmin Wong",
    projectType: ["Web Design", "Development"],
    keywords: [
      "Next.js",
      "Tailwind CSS",
      "GSAP",
      "Motion",
      "Matter.js",
      "Lenis",
      "Vercel",
    ],
    summary: [
      "Designed and developed a personal website for Jazmin ",
      "Wong, a creative content strategist. The project emphasized ",
      "a bold, engaging layout with playful micro-interactions to  ",
      "reflect her dynamic approach to content creation.",
    ],
    year: 2025,
    backgroundImageUrl:
      "https://images.unsplash.com/photo-1719917998992-e69c56a4d866?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    videoUrl: "/videos/jazminwong-preview-compressed.mp4",
    link: "https://www.jazzicreates.tv",
  },
  {
    title: "Trackstack",
    projectType: ["Web Design", "Development"],
    keywords: [
      "React",
      "Tailwind CSS",
      "Prisma",
      "Various APIs",
      "Web Design",
      "Responsive Design",
      "Art Direction",
      "Brand Design",
      "Strategy",
    ],
    summary: [
      "Redesigned the website for a UK-based software company ",
      "supporting 10,000+ high-performance DJs and labels. The ",
      "goal was to communicate their mission of streamlining career ",
      "growth. I currently work on their product team as a developer.",
    ],
    year: 2025,
    backgroundImageUrl:
      "https://images.unsplash.com/photo-1512734099960-65a682cbfe2b?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    videoUrl: "/videos/trackstack-preview-compressed.mp4",
    link: "https://www.trackstack.app",
  },
  {
    title: "Kick & Bass",
    projectType: ["Web Design", "Development"],
    keywords: [
      "Next.js",
      "Tailwind CSS",
      "GSAP",
      "Motion",
      "Lenis",
      "Contentful",
      "Vercel",
      "Shopify API",
      "Web Design",
      "Responsive Design",
      "Art Direction",
    ],
    summary: [
      "Designed & developed the primary website for an artist-run ",
      "tech house coaching and mentoring community. The focus   ",
      "was on creating a visually striking and intuitive user  ",
      "experience to optimize visitor-to-paid-member conversion.",
    ],
    year: 2024,
    backgroundImageUrl:
      "https://images.unsplash.com/photo-1738827125457-288529e341cc?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    videoUrl: "/videos/kickbass-preview-compressed.mp4",
    link: "https://www.kick-bass.com",
  },
  // {
  //   title: "Inbox",
  //   projectType: ["Development"],
  //   details: [
  //     "Next.js",
  //     "Tailwind CSS",
  //     "GSAP",
  //     "Lenis",
  //     "Vercel",
  //     "Supabase",
  //     "Contentful",
  //     "Various APIs",
  //   ],
  //   summary: [
  //     "Collaborated with Trackstack co-founders to develop ",
  //     "a streamlined platform for DJs and producers to submit demos ",
  //     "to EDM labels, ensuring a transparent submission experience. ",
  //     "The platform now serves over 10,000 users.",
  //   ],
  //   year: 2024,
  //   fileType: "image",
  //   fileUrl: "/images/inbox-cover.png",
  //   link: "https://www.trackstack.app/inbox",
  // },
  // {
  //   title: "Linkstack",
  //   projectType: ["Web Design", "Development"],
  //   details: [
  //     "Next.js",
  //     "Tailwind CSS",
  //     "GSAP",
  //     "Lenis",
  //     "Vercel",
  //     "Supabase",
  //     "Contentful",
  //     "Various APIs",
  //   ],
  //   summary: [
  //     "Designed and developed a free link-in-bio platform tailored for ",
  //     "DJs. As part of the Trackdetails ecosystem, the platform ",
  //     "seamlessly integrates with their product suite, including demo ",
  //     "submissions to the Inbox platform.",
  //   ],
  //   year: 2024,
  //   fileType: "video",
  //   fileUrl:
  //     "https://framerusercontent.com/assets/xczsI9Xq2X6OvsvU8NVUiUJUXuA.mp4",
  //   link: "https://www.kick-bass.com",
  // },
  {
    title: "Westend",
    projectType: ["Web Design", "Development"],
    keywords: [
      "Next.js",
      "Tailwind CSS",
      "GSAP",
      "Lenis",
      "Contentful",
      "Vercel",
      "Web Design",
      "Responsive Design",
    ],
    summary: [
      "Designed and developed the official website for professional DJ ",
      "and producer Westend, focusing on showcasing his latest ",
      "releases, past performances, and upcoming tour dates.",
    ],
    year: 2024,
    backgroundImageUrl:
      "https://images.unsplash.com/photo-1741683386377-f59badc91174?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    videoUrl: "/videos/westend-preview-compressed.mp4",
    link: "https://www.itsthewestend.com",
  },
  {
    title: "Presave",
    projectType: ["Web Design"],
    keywords: ["Web Design", "UX Design", "Responsive Design", "Art Direction"],
    summary: [
      "Designed an intuitive interface for an automated artist song ",
      "release platform (formerly SongShare.com), serving thousands ",
      "of artists. This 4-week project focused on seamless UX and ",
      "efficient developer handoff.",
    ],
    year: 2024,
    backgroundImageUrl:
      "https://images.unsplash.com/photo-1735486228450-ef263cc0d6e4?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    videoUrl: "/videos/presave-preview-compressed.mp4",
    link: "https://www.presave.com",
  },
  {
    title: "DELIVRD",
    projectType: ["Web Design", "Development"],
    keywords: [
      "Next.js",
      "Tailwind CSS",
      "GSAP",
      "Lenis",
      "Supabase",
      "Vercel",
      "Web Design",
      "Responsive Design",
    ],
    summary: [
      "Developed a website that helps aspiring EDM producers easily ",
      "find and submit demos to popular labels. Designed with a clean, ",
      "minimal aesthetic and subtle micro-animations for an engaging ",
      "user experience. I continue to maintain and improve the site.",
    ],
    year: 2023,
    backgroundImageUrl:
      "https://images.unsplash.com/photo-1741587467707-97e1fc8eff1e?q=80&w=2615&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    videoUrl: "/videos/delivrd-preview-compressed.mp4",
    link: "https://www.delivrd.live",
  },
];
