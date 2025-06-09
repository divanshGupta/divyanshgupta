import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import Header from "../components/layout/Header";
import { ReactLenis } from "lenis/react";
import { Analytics } from "@vercel/analytics/next";
import CTAButton from "@/components/ui/CTAButton";
import { saans } from "@/fonts";
import { FooterProvider } from "@/contexts/footer-context";
import DocumentTitleChanger from "@/components/layout/DocumentTitleChanger";
import { metadata } from "./metadata";

export { metadata };

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
              <Analytics />
            </body>
          </FooterProvider>
        </ReactLenis>
      </html>
    </ViewTransitions>
  );
}
