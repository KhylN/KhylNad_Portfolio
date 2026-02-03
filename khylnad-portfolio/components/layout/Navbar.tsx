"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import "./Navbar.module.css";

type NavbarVariant = "minimal" | "bold" | "glass";

const links = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#groups", label: "My Groups" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({
  variant = "minimal",
}: {
  variant?: NavbarVariant;
}) {
  const variantClass =
    variant === "bold"
      ? "navbarVariantBold"
      : variant === "glass"
        ? "navbarVariantGlass"
        : "navbarVariantMinimal";

  const linksWrapRef = useRef<HTMLDivElement | null>(null);
  const linkRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pillStyle, setPillStyle] = useState({ width: 0, left: 0 });

  const sectionIds = useMemo(
    () => links.map((link) => link.href.replace("#", "")),
    [],
  );

  useEffect(() => {
    const updatePill = () => {
      const el = linkRefs.current[activeIndex];
      const wrap = linksWrapRef.current;
      if (!el || !wrap) return;
      const linkRect = el.getBoundingClientRect();
      const wrapRect = wrap.getBoundingClientRect();
      setPillStyle({
        width: linkRect.width,
        left: linkRect.left - wrapRect.left,
      });
    };

    updatePill();

    const resizeObserver = new ResizeObserver(updatePill);
    if (linksWrapRef.current) resizeObserver.observe(linksWrapRef.current);
    linkRefs.current.forEach((el) => el && resizeObserver.observe(el));

    window.addEventListener("resize", updatePill);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updatePill);
    };
  }, [activeIndex]);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (!visible.length) return;
        const id = visible[0].target.id;
        const index = sectionIds.indexOf(id);
        if (index >= 0) setActiveIndex(index);
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.25, 0.5, 0.75] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <div className="navbarContainer">
      <nav className={`navbarBar ${variantClass}`}>
        <Link href="#home" aria-label="Go to homepage" className="navbarBrand">
          <Image
            src="/KhylNadIcon.png"
            alt="Khyl Nad logo"
            width={56}
            height={30}
            className="navbarBrandIcon"
            priority
          />
        </Link>

        <div className="navbarLinks" ref={linksWrapRef}>
          <span
            className="navbarPill"
            style={{
              width: pillStyle.width,
              transform: `translate(${pillStyle.left}px, -50%)`,
            }}
            aria-hidden="true"
          />
          {links.map((link, index) => (
            <a key={link.href} href={link.href} className="navbarLink">
              <span
                ref={(el) => {
                  linkRefs.current[index] = el;
                }}
                className="navbarLinkInner"
                onClick={() => setActiveIndex(index)}
              >
                {link.label}
              </span>
            </a>
          ))}
        </div>

        <a href="/KhylNadCV.pdf" download className="navbarCta">
          Download CV
        </a>
      </nav>
    </div>
  );
}
