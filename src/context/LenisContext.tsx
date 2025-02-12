import { ReactLenis } from "lenis/react";

export const LenisContext = ({ children }: { children: React.ReactNode }) => {
  return <ReactLenis root>{children}</ReactLenis>;
};
