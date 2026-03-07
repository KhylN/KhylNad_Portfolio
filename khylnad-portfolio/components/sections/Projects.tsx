"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import StackIcon, { type IconName } from "tech-stack-icons";
import "./Projects.module.css";

type Project = {
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
  imageAlt: string;
  url: string;
};

const toolIcons: Partial<Record<string, IconName>> = {
  "Next.js": "nextjs2",
  React: "react",
  TypeScript: "typescript",
  "Material UI": "materialui",
  "Tailwind CSS": "tailwindcss",
  CSS: "css3",
  Django: "django",
  Python: "python",
  SCSS: "sass",
  PostgreSQL: "postgresql",
  Heroku: "heroku",
  NumPy: "numpy",
  Pandas: "pandas",
  Java: "java",
  Android: "android",
  Firebase: "firebase",
  Firestore: "firebase",
  "Firebase Storage": "firebase",
  "Firebase Analytics": "firebase",
  "Google Maps": "google",
  "C++": "c++",
};

const firstRow: Project[] = [
  {
    title: "KhylNad Portfolio",
    description:
      "A modern personal portfolio built to showcase my work, experience, and technical projects through a polished, responsive interface. It focuses on strong presentation, reusable UI, and clear project storytelling with tech-stack highlights throughout.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Material UI",
      "Tailwind CSS",
      "CSS",
    ],
    imageSrc: "/MecSimCalcPreview.png",
    imageAlt: "KhylNad Portfolio preview",
    url: "https://github.com/KhylN/KhylNad_Portfolio",
  },
  {
    title: "AzureDSN",
    description:
      "A distributed social networking platform built as a full-stack team project, with a React frontend and Django REST backend. It supports core social features, API documentation, and deployment for federated interaction across connected groups.",
    tags: [
      "React",
      "TypeScript",
      "Django",
      "Django REST Framework",
      "Python",
      "SCSS",
      "PostgreSQL",
      "Heroku",
    ],
    imageSrc: "/MecSimCalcPreview.png",
    imageAlt: "AzureDSN preview",
    url: "https://github.com/cmput404-azure/AzureDSN",
  },
  {
    title: "NeuRomance",
    description:
      "A hackathon proof of concept for a dating platform that explores biosignal synchronization as a way to predict romantic compatibility. It combines a modern web interface with backend data processing to turn brainwave-based matching into an interactive product concept.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Django",
      "Python",
      "Material UI",
      "Axios",
      "NumPy",
      "Pandas",
      "SciPy",
      "Muse JS",
    ],
    imageSrc: "/PipelineReliabilityPreview.png",
    imageAlt: "NeuRomance preview",
    url: "https://github.com/KhylN/NeuRomance_NatHacks2024",
  },
  {
    title: "NoStack",
    description:
      "An Android mobile application developed as a CMPUT 301 team project, built around native app architecture and real mobile workflows. The project integrates cloud services, mapping, QR functionality, and polished loading/navigation patterns for a more complete product experience.",
    tags: [
      "Java",
      "Android",
      "Firebase",
      "Firestore",
      "Firebase Storage",
      "Firebase Analytics",
      "Google Maps",
      "OSMDroid",
      "ZXing",
      "OkHttp",
      "Gradle",
    ],
    imageSrc: "/MecSimCalcPreview.png",
    imageAlt: "NoStack preview",
    url: "https://github.com/CMPUT301W24T27/NoStack",
  },
];

const secondRow: Project[] = [
  {
    title: "CMPUT350 StarCraft II Bot",
    description:
      "A StarCraft II bot built in C++ that automates gameplay decisions using the SC2 API. It was developed as part of CMPUT 350 and focuses on game-state management, strategy logic, and bot behavior against built-in AI or ladder-based opponents.",
    tags: ["C++", "CMake", "StarCraft II API", "SC2 Ladder Server"],
    imageSrc: "/MecSimCalcPreview.png",
    imageAlt: "CMPUT350 StarCraft II Bot preview",
    url: "https://github.com/KhylN/CMPUT350-project",
  },
];

const projects: Project[] = [...firstRow, ...secondRow];

function ProjectItem({
  project,
  index,
  isOpen,
  onToggle,
}: {
  project: Project;
  index: number;
  isOpen: boolean;
  onToggle: (index: number) => void;
}) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const panelWrapRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const wrap = panelWrapRef.current;
    const panel = panelRef.current;
    if (!wrap || !panel) return;

    const updateHeight = () => {
      wrap.style.setProperty("--panel-height", `${panel.scrollHeight}px`);
    };

    updateHeight();

    if (typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(updateHeight);
    observer.observe(panel);
    return () => observer.disconnect();
  }, [project]);

  return (
    <div className="projectItem" data-open={isOpen ? "true" : "false"}>
      <div className="projectSummary">
        <a
          className="projectSummaryTitle"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.title}
          <OpenInNewIcon className="projectExternalLinkIcon" />
        </a>
        <button
          type="button"
          className="projectToggleButton"
          aria-expanded={isOpen}
          aria-label={`${isOpen ? "Collapse" : "Expand"} ${project.title}`}
          onClick={(event) => {
            event.preventDefault();
            onToggle(index);
          }}
        >
          <span className="projectSummaryIcon" aria-hidden="true">
            +
          </span>
        </button>
      </div>
      <div
        ref={panelWrapRef}
        className="projectPanelWrap"
        data-open={isOpen ? "true" : "false"}
      >
        <div ref={panelRef} className="projectPanel" aria-hidden={!isOpen}>
          <div className="projectPanelMedia">
            <img
              src={project.imageSrc}
              alt={project.imageAlt}
              className="projectPanelImage"
              loading="lazy"
            />
          </div>
          <div className="projectPanelContent">
            <p className="projectBody">{project.description}</p>
            <ul className="projectTags">
              {project.tags.map((tag) => {
                const iconClass = toolIcons[tag] ?? null;
                return (
                  <li key={tag} className="projectTagChip">
                    {iconClass && (
                      <StackIcon
                        name={iconClass}
                        variant="light"
                        className="projectTagIcon"
                      />
                    )}
                    {tag}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  // const collapseAll = () => {
  //   setOpenIndex(null);
  // };

  return (
    <section id="projects" className="projectsSection">
      <div className="projectsContent">
        <div className="projectsHeader">
          <p className="projectsEyebrow">Projects</p>
          <h2 className="projectsTitle">Selected work.</h2>
        </div>

        {/* <div className="projectsActions">
          <button
            type="button"
            className="projectsCollapseBtn"
            onClick={collapseAll}
          >
            Collapse all
          </button>
        </div> */}

        <div className="projectsAccordion">
          {projects.map((project, index) => (
            <ProjectItem
              key={project.title}
              project={project}
              index={index}
              isOpen={openIndex === index}
              onToggle={toggleItem}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
