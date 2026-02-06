"use client";

import "./MyGroups.module.css";

const groups = [
  {
    name: "MecSimCalc",
    title: "Mechanical Simulation Toolkit",
    imageSrc: "/WorldMap.png",
    imageAlt: "MecSimCalc preview",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tags: ["Simulation tooling", "Validation workflows", "Performance tuning"],
    tools: ["Python", "Django", "NumPy", "React"],
    variant: "primary",
  },
  {
    name: "PipelineReliability",
    title: "Reliability & Risk Systems",
    imageSrc: "/KhylNadIcon.png",
    imageAlt: "PipelineReliability preview",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tags: ["Risk modeling", "Operational insights", "Data integrity"],
    tools: ["TypeScript", "React", "Postgres", "Sentry"],
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
            >
              <div className="groupCardMedia">
                <img
                  src={group.imageSrc}
                  alt={group.imageAlt}
                  className="groupCardImage"
                  loading="lazy"
                />
              </div>

              <div className="groupCardHeader">
                <p className="groupCardLabel">{group.name}</p>
                <h3 className="groupCardTitle">{group.title}</h3>
              </div>

              <p className="groupCardBody">{group.description}</p>

              <ul className="groupCardTags">
                {group.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>

              <div className="groupCardTools">
                {group.tools.map((tool) => (
                  <span key={tool} className="groupToolChip">
                    <span className="groupToolDot" aria-hidden="true" />
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
