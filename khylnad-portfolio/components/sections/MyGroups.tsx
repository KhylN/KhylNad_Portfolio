"use client";

import type { CSSProperties } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faOpenai } from "@fortawesome/free-brands-svg-icons";
import StackIcon, { type IconName } from "tech-stack-icons";
import "./MyGroups.module.css";

const toolIcons: Partial<Record<string, IconName>> = {
  React: "react",
  "Next.js": "nextjs2",
  TypeScript: "typescript",
  Python: "python",
  Django: "django",
  Postgres: "postgresql",
  Redis: "redis",
  GraphQL: "graphql",
  Docker: "docker",
  AWS: "aws",
  NumPy: "numpy",
  Figma: "figma",
  LangChain: "langchain",
  Claude: "claude",
};

const groups = [
  {
    name: "MecSimCalc",
    title: "MecSimCalc",
    index: "01",
    type: "Python Web Platform",
    imageSrc: "/MecSimCalcPreview.png",
    imageAlt: "MecSimCalc preview",
    accent: "#f08a24",
    accentStrong: "#c76314",
    description: `A cloud-based platform that turns Python engineering models into interactive web applications. It enables engineers, students, and researchers to deploy simulations and calculation tools without managing frontend infrastructure, while handling computation, validation, and scalability behind the scenes.`,
    tags: [
      "Simulation tooling",
      "Validation workflows",
      "Scalable computation",
    ],
    tools: [
      "React",
      "TypeScript",
      "Python",
      "Javascript",
      "Django",
      "Figma",
      "LangChain",
      "ChatGPT",
      "Claude",
    ],
    variant: "primary",
  },
  {
    name: "PipelineReliability",
    title: "Pipeline Reliability",
    index: "02",
    type: "Pipeline Engineering Tool",
    imageSrc: "/PipelineReliabilityPreview.png",
    imageAlt: "PipelineReliability preview",
    accent: "#19c276",
    accentStrong: "#0d8d54",
    description: `An engineering analysis platform for evaluating pipeline integrity, risk, and performance across critical infrastructure. It enables engineers and researchers to apply probabilistic modeling and defect assessment without manual workflows, translating complex engineering methods into reliable, decision-ready software.`,
    tags: ["Risk modeling", "Integrity assessment", "Decision support"],
    tools: [
      "AWS",
      "React",
      "Next.js",
      "TypeScript",
      "Python",
      "Javascript",
      "Django",
      "Postgres",
      "GraphQL",
      "Redis",
      "Docker",
    ],
    variant: "secondary",
  },
];

export default function MyGroups() {
  return (
    <section id="groups" className="groupsSection">
      <div className="groupsContent">
        <div className="groupsHeader">
          <p className="groupsEyebrow">My Groups</p>
          <h2 className="groupsTitle">Teams I’ve contributed to.</h2>
        </div>

        <div className="groupsGrid">
          {groups.map((group) => (
            <article
              key={group.name}
              className={`groupCard groupCard${group.variant === "primary" ? "Primary" : "Secondary"}`}
              style={
                {
                  "--card-accent": group.accent,
                  "--card-accent-strong": group.accentStrong,
                } as CSSProperties
              }
            >
              <div className="groupCardTop">
                <div className="groupCardMeta">
                  <span className="groupCardIndex">{group.index}</span>
                  <span className="groupCardType">{group.type}</span>
                </div>
                <h3 className="groupCardTitle">{group.title}</h3>
              </div>

              <div className="groupCardFeature">
                <div className="groupCardFeatureMedia">
                  <img
                    src={group.imageSrc}
                    alt={group.imageAlt}
                    className="groupCardImage"
                    loading="lazy"
                  />
                </div>
                <p className="groupCardFeatureText">{group.description}</p>
              </div>

              <ul className="groupCardTags">
                {group.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>

              <div className="groupCardTools">
                {group.tools.map((tool) => {
                  const iconClass = toolIcons[tool] ?? null;
                  const isJavascript = tool === "Javascript";
                  const isChatGPT = tool === "ChatGPT";
                  return (
                    <span key={tool} className="groupToolChip">
                      {isJavascript && (
                        <FontAwesomeIcon
                          icon={faJs}
                          className="groupToolIcon"
                          style={{ color: "#f7df1e" }}
                        />
                      )}
                      {isChatGPT && (
                        <FontAwesomeIcon
                          icon={faOpenai}
                          className="groupToolIcon"
                        />
                      )}
                      {!isJavascript && !isChatGPT && iconClass && (
                        <StackIcon
                          name={iconClass}
                          variant={tool === "AWS" ? "dark" : "light"}
                          className="groupToolIcon"
                        />
                      )}
                      {tool}
                    </span>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
