import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import MyGroups from "@/components/sections/MyGroups";
import Updating from "@/components/Updating/updating";
import "./page.module.css";

export default function Home() {
  const downTime = true;
  if (downTime) {
    return (
      <div className="pageRoot">
        <Updating showBackground={false} />
      </div>
    );
  }

  return (
    <div className="pageRoot" id="top">
      <Navbar variant="glass" />
      <Hero />
      <About />
      <MyGroups />
    </div>
  );
}
