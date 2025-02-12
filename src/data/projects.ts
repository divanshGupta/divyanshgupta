export type Project = {
  title: string;
  stack: string[];
  summary: string[];
  year: number;
  video: string;
  link: string;
};

export const projects: Project[] = [
  {
    title: "Presave",
    stack: ["Figma"],
    summary: [
      "Designed & developed the primary website for an artist-run tech ",
      "house coaching and mentoring community. The focus was on ",
      "creating a visually striking and intuitive user experience to ",
      "optimize visitor-to-paid-member conversion.",
    ],
    year: 2025,
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    link: "https://www.kick-bass.com",
  },
  {
    title: "Trackstack",
    stack: ["Figma", "Webflow"],
    summary: [
      "Redesigned the landing page for a software company that ",
      "develops tools to help high-performance DJs and labels ",
      "streamline career growth. Currently, I contribute as a full-stack ",
      "developer on the product team.",
    ],
    year: 2025,
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    link: "https://www.kick-bass.com",
  },
  {
    title: "Linkstack",
    stack: [
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
      "DJs. As part of the Trackstack ecosystem, the platform ",
      "seamlessly integrates with their product suite, including demo ",
      "submissions to the Inbox platform.",
    ],
    year: 2024,
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    link: "https://www.kick-bass.com",
  },
  {
    title: "Kick & Bass",
    stack: [
      "Next.js",
      "Tailwind CSS",
      "GSAP",
      "Motion",
      "Lenis",
      "Contentful",
      "Vercel",
      "Shopify API",
    ],
    summary: [
      "Designed & developed the primary website for an artist-run tech ",
      "house coaching and mentoring community. The focus was on ",
      "creating a visually striking and intuitive user experience to ",
      "optimize visitor-to-paid-member conversion.",
    ],
    year: 2024,
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    link: "https://www.kick-bass.com",
  },
  {
    title: "Westend",
    stack: ["Next.js", "Tailwind CSS", "GSAP", "Lenis", "Contentful", "Vercel"],
    summary: [
      "Designed and developed the official website for professional DJ ",
      "and producer Westend, focusing on showcasing his latest ",
      "releases, past performances, and upcoming tour dates.",
    ],
    year: 2024,
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    link: "https://www.itsthewestend.com",
  },
  {
    title: "Delivrd",
    stack: ["Next.js", "Tailwind CSS", "GSAP", "Lenis", "Supabase", "Vercel"],
    summary: [
      "Developed a website that helps aspiring EDM producers easily ",
      "find and submit demos to popular labels. Designed with a clean, ",
      "minimal aesthetic and subtle micro-animations for an engaging ",
      "user experience. I continue to maintain and improve the site.",
    ],
    year: 2023,
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    link: "https://www.delivrd.live",
  },
];
