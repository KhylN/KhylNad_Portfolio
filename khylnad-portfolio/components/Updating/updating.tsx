"use client";

import GlassCard from "@/components/ui/GlassCard";
import NetworkDots from "@/components/ui/NetworkDots";
import "./Updating.module.css";

type UpdatingProps = {
  showBackground?: boolean;
};

export default function Updating({ showBackground = true }: UpdatingProps) {
  return (
    <main
      className={`updatingPage ${
        showBackground ? "updatingWithBackground" : "updatingNoBackground"
      }`}
    >
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <NetworkDots />
      </div>
      <GlassCard className="updatingCard">
        <p className="updatingEyebrow">Portfolio</p>
        <h1 className="updatingName">Khyl Nad</h1>
        <p className="updatingRole">Full-Stack Developer</p>
        <p className="updatingStatus">
          Under Construction
          <span className="updatingLoadingDots" aria-hidden="true">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </p>
      </GlassCard>
    </main>
  );
}
