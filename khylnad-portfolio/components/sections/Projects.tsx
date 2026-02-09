"use client";

import { useLayoutEffect, useMemo, useRef, useState } from "react";
import "./Projects.module.css";

const firstRow = [
  {
    title: "Project One",
    description:
      "Short one-liner about what this project does and why it matters.",
    tags: ["Web App", "Dashboard", "API"],
    imageSrc: "/MecSimCalcPreview.png",
    imageAlt: "Project One preview",
  },
  {
    title: "Project Two",
    description:
      "Short one-liner about the problem solved or the outcome delivered.",
    tags: ["Automation", "Data", "Performance"],
    imageSrc: "/PipelineReliabilityPreview.png",
    imageAlt: "Project Two preview",
  },
  {
    title: "Project Three",
    description:
      "Short one-liner about the stack and the value it provides.",
    tags: ["Full-stack", "Cloud", "UX"],
    imageSrc: "/MecSimCalcPreview.png",
    imageAlt: "Project Three preview",
  },
];

const secondRow = [
  {
    title: "Project Four",
    description:
      "Short one-liner about the system, platform, or product you built.",
    tags: ["Reliability", "Analytics", "Scale"],
    imageSrc: "/PipelineReliabilityPreview.png",
    imageAlt: "Project Four preview",
  },
  {
    title: "Project Five",
    description:
      "Short one-liner about the impact, users, or workflow improvement.",
    tags: ["Tools", "Speed", "Quality"],
    imageSrc: "/MecSimCalcPreview.png",
    imageAlt: "Project Five preview",
  },
];

export default function Projects() {
  const projects = useMemo(() => [...firstRow, ...secondRow], []);
  const [openItems, setOpenItems] = useState<Set<number>>(
    () => new Set([0])
  );

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const collapseAll = () => {
    setOpenItems(new Set());
  };

  const ProjectItem = ({
    project,
    index,
    isOpen,
  }: {
    project: (typeof projects)[number];
    index: number;
    isOpen: boolean;
  }) => {
    const panelRef = useRef<HTMLDivElement | null>(null);
    const [maxHeight, setMaxHeight] = useState(0);

    const syncHeight = () => {
      if (!panelRef.current) return;
      setMaxHeight(panelRef.current.scrollHeight);
    };

    useLayoutEffect(() => {
      syncHeight();
    }, [project]);

    return (
      <details key={project.title} className="projectItem" open={isOpen}>
        <summary
          className="projectSummary"
          onClick={(event) => {
            event.preventDefault();
          }}
        >
          <span className="projectSummaryTitle">{project.title}</span>
          <button
            type="button"
            className="projectToggleButton"
            aria-expanded={isOpen}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              toggleItem(index);
            }}
          >
            <span className="projectSummaryIcon" aria-hidden="true">
              +
            </span>
          </button>
        </summary>
        <div
          className="projectPanelWrap"
          style={{ maxHeight: isOpen ? `${maxHeight}px` : "0px" }}
        >
          <div ref={panelRef} className="projectPanel">
            <div className="projectPanelMedia">
              <img
                src={project.imageSrc}
                alt={project.imageAlt}
                className="projectPanelImage"
                loading="lazy"
                onLoad={syncHeight}
              />
            </div>
            <div className="projectPanelContent">
              <p className="projectBody">{project.description}</p>
              <ul className="projectTags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </details>
    );
  };

  return (
    <section id="projects" className="projectsSection">
      <div className="projectsContent">
        <div className="projectsHeader">
          <p className="projectsEyebrow">Projects</p>
          <h2 className="projectsTitle">Selected work.</h2>
        </div>

        <div className="projectsActions">
          <button
            type="button"
            className="projectsCollapseBtn"
            onClick={collapseAll}
          >
            Collapse all
          </button>
        </div>

        <div className="projectsAccordion">
          {projects.map((project, index) => (
            <ProjectItem
              key={project.title}
              project={project}
              index={index}
              isOpen={openItems.has(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
