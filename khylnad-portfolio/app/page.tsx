import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Updating from "@/components/Updating/updating";
import "./page.module.css";

export default function Home() {
  const downTime = false;
  if (downTime) {
    return (
      <div className="pageRoot">
        <Updating showBackground={false} />
      </div>
    );
  }

  return (
    <div className="pageRoot">
      <Navbar variant="glass" />
      <Hero />
      <About />
    </div>
  );
}
