import Navbar from "./Navbar";

export default function Header() {
  return (
    <header>
      <p className="fixed top-6 left-6 font-medium tracking-tight">
        Design Engineer
      </p>
      <Navbar />
      <p className="fixed top-6 right-6 font-medium tracking-tight">
        Los Angeles, CA 9:33 AM
      </p>
    </header>
  );
}
