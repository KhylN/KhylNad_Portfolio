"use client";

import "./About.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function About() {
  return (
    <section id="about" className="aboutSection">
      <div className="aboutContent">
        <div className="aboutGrid">
          <div className="aboutText">
            <p className="aboutEyebrow">About</p>
            <h2 className="aboutTitle">
              I’m Khyl Nad, a
              <span className="aboutAccent"> Full Stack Developer</span>
            </h2>
            <p className="aboutParagraph">
              I’m driven by meaningful work and enjoy working with talented
              people, bringing ideas from concept to delivery, and creating work
              that has real value for others.
            </p>
            <p className="aboutParagraph">
              I enjoy breaking down complex problems and making thoughtful
              technical decisions. Whether I’m shaping an interface or designing
              backend systems, I focus on clarity, reliability, and the small
              details that make a product stand out.
            </p>

            <div className="aboutSocials">
              <a
                href="https://www.linkedin.com/in/khyl-nad/"
                target="_blank"
                rel="noopener"
                className="aboutSocialLink"
              >
                <LinkedInIcon className="aboutSocialIcon" />
              </a>
              <a
                href="https://github.com/KhylN"
                target="_blank"
                rel="noopener noreferrer"
                className="aboutSocialLink"
              >
                <GitHubIcon className="aboutSocialIcon" />
              </a>
            </div>
          </div>

          <div className="aboutRight">
            <div className="aboutLocationCard">
              <span className="aboutLocationPulse" aria-hidden="true" />
              <p className="aboutLocationLabel">Location</p>
              <h3 className="aboutLocationTitle">Alberta, Canada</h3>
              <p className="aboutLocationMeta">53.5461° N, 113.4938° W</p>
              <p className="aboutLocationTime">GMT-7 · Mountain Time</p>
            </div>

            <div className="aboutEducationCard">
              <p className="aboutLocationLabel">Education</p>
              <h3 className="aboutLocationTitle">BSc in Computer Science</h3>
              <p className="aboutLocationMeta">Minor in Mathematics</p>
              <p className="aboutLocationTime">University of Alberta</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
