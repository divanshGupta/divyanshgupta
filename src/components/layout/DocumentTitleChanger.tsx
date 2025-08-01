"use client";

import useDocumentTitle from "@/hooks/useDocumentTitle";

export default function DocumentTitleChanger() {
  useDocumentTitle({
    defaultTitle: "Divyansh | Fullstack Developer",
    onBlurTitle: "Namaste!!",
  });

  // This component doesn't render anything
  return null;
}
