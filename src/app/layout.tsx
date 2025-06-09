import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import Header from "../components/layout/Header";
import { ReactLenis } from "lenis/react";
import CTAButton from "@/components/ui/CTAButton";
import { saans } from "@/fonts";
import { FooterProvider } from "@/contexts/footer-context";
import DocumentTitleChanger from "@/components/layout/DocumentTitleChanger";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jason Zubiate | Design Engineer",
  description:
    "Software design engineer with expertise in Next.js, React, TypeScript, and Animation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <ReactLenis root>
          <FooterProvider>
            <body
              className={`${saans.className} antialiased bg-neutral-900 text-neutral-900 overscroll-none`}
            >
              <DocumentTitleChanger />
              <Header />
              <CTAButton />
              {children}
            </body>
          </FooterProvider>
        </ReactLenis>
      </html>
    </ViewTransitions>
  );
}
