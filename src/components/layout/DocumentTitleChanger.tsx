"use client";

import useDocumentTitle from "@/hooks/useDocumentTitle";

export default function DocumentTitleChanger() {
  useDocumentTitle({
    defaultTitle: "Jason Zubiate | Creative Design Engineer",
    onBlurTitle: "Hey!!!!",
  });

  // This component doesn't render anything
  return null;
}
