import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Divyansh Gupta | Frontend Developer",
  description: "Divyansh Gupta | Software developer based in Mangalore.",

  // Basic SEO
  keywords: [
    "Sofware design engieer",
    "Senior software design engineer",
    "Software engineer",
    "Frontend engineer",
    "Software architect",
    "Software engineer",
    "Software developer",
    "Design engineer",
    "Frontend Developer",
    "Fullstack developer",
    "MERN stack developer",
    "React developer",
    "Next.js developer",
    "JavaScript developer",
    "TypeScript developer",
    "Node.js developer",
    "Express.js developer",
    "Software engineer in Mangalore",
  ],
  authors: [{ name: "Divyansh Gupta", url: "https://divyanshgupta.vercel.app" }],
  creator: "Divyansh Gupta",
  publisher: "Divyansh Gupta",

  // Open Graph
  openGraph: {
    title: "Divyansh Gupta - Frontend Developer",
    description:
      "Divyansh Gupta | Software developer based in Mangalore.",
    url: "https://divyanshgupta.vercel.app",
    siteName: "divyanshgupta.vercel.app",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Divyansh Gupta - Frontend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Divyansh Gupta - Frontend Developer",
    description:
      "Divyansh Gupta | Software developer based in Mangalore.",
    creator: "@hey_divyansh",
    images: [
      {
        url: "/src/app/opengraph-image.png",
        width: 1200,
        height: 675,
        alt: "Divyansh Gupta - Frontend Developer",
      },
    ],
  },

  // Canonical URL
  alternates: {
    canonical: "https://divyanshgupta.vercel.app",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  // Verification
  // verification: {
  //   google: "google-site-verification-code-123456",
  //   yandex: "yandex-verification-code-123456",
  //   yahoo: "yahoo-verification-code-123456",
  //   other: {
  //     me: ["https://www.linkedin.com/in/divyansh-raj-gupta/"],
  //   },
  // },

  // App links
  appleWebApp: {
    title: "Divyansh Gupta Portfolio",
    statusBarStyle: "default",
  },

  // Icons
  icons: {
    icon: "/images/favicon/favicon.ico",
    shortcut: "/images/favicon/favicon-16x16.png",
    apple: "/images/favicon/apple-touch-icon.png",
  },

  // Other
  category: "Portfolio",
  colorScheme: "light dark",
  themeColor: "#FBC1D5",
};
