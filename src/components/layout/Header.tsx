import Navbar from "./Navbar";
import LiveTime from "../ui/LiveTime";

export default function Header() {
  return (
    <header>
      <p className="fixed top-6 left-6 font-medium tracking-tight">
        Design Engineer
      </p>
      <Navbar />
      <LiveTime />
    </header>
  );
}
