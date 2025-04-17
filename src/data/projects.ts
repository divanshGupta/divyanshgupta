export type Project = {
  title: string;
  projectType: string[];
  details: string[];
  summary: string[];
  year: number;
  fileType: "video" | "image";
  fileUrl: string;
  link: string;
};

export const projects: Project[] = [
  {
    title: "Jazmin Wong",
    projectType: ["Web Design", "Development"],
    details: [
      "Next.js",
      "Tailwind CSS",
      "GSAP",
      "Motion.dev",
      "Lenis",
      "Vercel",
    ],
    summary: [
      "Designed and developed a personal website for Jazmin Wong, a ",
      "creative content strategist specializing in digital storytelling. ",
      "The project emphasized a bold, engaging layout with playful ",
      "micro-interactions to reflect her dynamic approach to ",
      "content creation.",
    ],
    year: 2025,
    fileType: "video",
    fileUrl: "/videos/jazminwong-cover.mov",
    link: "https://www.jazzicreates.tv",
  },
  {
    title: "Presave.com",
    projectType: ["Web Design"],
    details: [
      "Web Design",
      "UX Design",
      "Responsive Design",
      "Art Direction",
      "Strategy",
      "Brand Design",
    ],
    summary: [
      "Designed an intuitive interface for an automated artist song ",
      "release platform (formerly SongShare.com), serving thousands ",
      "of artists. This 4-week project focused on seamless UX and ",
      "efficient developer handoff.",
    ],
    year: 2025,
    fileType: "image",
    fileUrl: "/images/presave-cover.png",
    link: "https://www.presave.com",
  },
  {
    title: "Trackstack.app",
    projectType: ["Web Design"],
    details: [
      "Web Design",
      "Responsive Design",
      "Art Direction",
      "Brand Design",
      "Strategy",
    ],
    summary: [
      "Redesigned the website for a software company that ",
      "develops tools to help high-performance DJs and labels ",
      "streamline career growth. Currently, I contribute as a  ",
      "developer on the product team.",
    ],
    year: 2025,
    fileType: "image",
    fileUrl: "/images/trackstack-cover.png",
    link: "https://www.kick-bass.com",
  },
  {
    title: "Inbox",
    projectType: ["Development"],
    details: [
      "Next.js",
      "Tailwind CSS",
      "GSAP",
      "Lenis",
      "Vercel",
      "Supabase",
      "Contentful",
      "Various APIs",
    ],
    summary: [
      "Collaborated with Trackstack co-founders to develop ",
      "a streamlined platform for DJs and producers to submit demos ",
      "to EDM labels, ensuring a transparent submission experience. ",
      "The platform now serves over 10,000 users.",
    ],
    year: 2024,
    fileType: "image",
    fileUrl: "/images/inbox-cover.png",
    link: "https://www.trackstack.app/inbox",
  },
  {
    title: "Linkstack",
    projectType: ["Web Design", "Development"],
    details: [
      "Next.js",
      "Tailwind CSS",
      "GSAP",
      "Lenis",
      "Vercel",
      "Supabase",
      "Contentful",
      "Various APIs",
    ],
    summary: [
      "Designed and developed a free link-in-bio platform tailored for ",
      "DJs. As part of the Trackdetails ecosystem, the platform ",
      "seamlessly integrates with their product suite, including demo ",
      "submissions to the Inbox platform.",
    ],
    year: 2024,
    fileType: "video",
    fileUrl:
      "https://framerusercontent.com/assets/xczsI9Xq2X6OvsvU8NVUiUJUXuA.mp4",
    link: "https://www.kick-bass.com",
  },
  {
    title: "Kick & Bass",
    projectType: ["Web Design", "Development"],
    details: [
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
      "Designed & developed the primary website for an artist-run tech ",
      "house coaching and mentoring community. The focus was on ",
      "creating a visually striking and intuitive user experience to ",
      "optimize visitor-to-paid-member conversion.",
    ],
    year: 2024,
    fileType: "video",
    fileUrl:
      "https://framerusercontent.com/assets/xczsI9Xq2X6OvsvU8NVUiUJUXuA.mp4",
    link: "https://www.kick-bass.com",
  },
  {
    title: "Westend",
    projectType: ["Web Design", "Development"],
    details: [
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
    fileType: "video",
    fileUrl:
      "https://framerusercontent.com/assets/xczsI9Xq2X6OvsvU8NVUiUJUXuA.mp4",
    link: "https://www.itsthewestend.com",
  },
  {
    title: "Delivrd",
    projectType: ["Web Design", "Development"],
    details: [
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
    fileType: "video",
    fileUrl:
      "https://framerusercontent.com/assets/xczsI9Xq2X6OvsvU8NVUiUJUXuA.mp4",
    link: "https://www.delivrd.live",
  },
];
