import "./globals.css";
import Header from "../components/layout/Header";
import { ReactLenis } from "lenis/react";
import CTAButton from "@/components/ui/CTAButton";
import { ViewTransitions } from "next-view-transitions";
import { saans } from "@/fonts";
import DocumentTitleChanger from "@/components/layout/DocumentTitleChanger";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <ReactLenis root>
          <body
            className={`${saans.className} antialiased bg-neutral-100 text-neutral-900 overscroll-none`}
          >
            <DocumentTitleChanger />
            <Header />
            <CTAButton />
            {children}
          </body>
        </ReactLenis>
      </html>
    </ViewTransitions>
  );
}
