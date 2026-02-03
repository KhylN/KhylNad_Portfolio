"use client";

import "./About.module.css";

export default function About() {
  return (
    <section id="about" className="aboutSection">
      <div className="aboutContent">
        <p className="aboutEyebrow">About</p>
        <h2 className="aboutTitle">
          I’m Khyl Nad, a
          <span className="aboutAccent"> full stack developer</span>
        </h2>
        <p className="aboutParagraph">
          I care about building software that feels well thought out, from the
          way it looks to the way it performs behind the scenes.
        </p>
        <p className="aboutParagraph">
          I like working across the stack and making decisions that simplify
          complex problems. Whether I’m shaping an interface or designing
          backend systems, I focus on clarity, reliability, and the small
          details that improve how a product feels to use.
        </p>
        <p className="aboutParagraph">
          I’m motivated by meaningful work and strong collaboration. I enjoy
          owning problems end to end, working closely with designers and
          stakeholders, and shipping features that make a real impact for users
          and teams.
        </p>
      </div>
    </section>
  );
}
