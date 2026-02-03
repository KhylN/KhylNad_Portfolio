"use client";

import NetworkDots from "@/components/ui/NetworkDots";
import "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className="heroSection">
      <div className="heroDotsMask">
        <NetworkDots />
      </div>
      <div aria-hidden="true" className="heroGlow" />
      <div aria-hidden="true" className="heroArc" />

      <div className="heroContent">
        <h1 className="heroTitle">
          <span className="heroName">KHYL</span>
        </h1>

        <p className="heroLead">
          Hi, I’m Khyl Nad — I build scalable, production-ready web
          applications, with a focus on full-stack development, cloud
          architecture, and performance-heavy systems.
        </p>

        {/* <div className="heroActions">
          <a href="#contact" className="heroPrimaryCta">
            Let’s Connect
          </a>
          <a href="mailto:hello@khylnad.com" className="heroSecondaryCta">
            hello@khylnad.com
          </a>
        </div> */}
      </div>
    </section>
  );
}
