import localFont from "next/font/local";

export const saans = localFont({
  src: [
    {
      path: "./Saans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Saans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Saans-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-saans",
});
