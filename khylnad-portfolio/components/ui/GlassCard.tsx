import type { CSSProperties, ReactNode } from "react";
import "./GlassCard.module.css";

type GlassCardProps = {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
};

export default function GlassCard({ children, style, className }: GlassCardProps) {
  return (
    <div className={`glassCard ${className ?? ""}`} style={style}>
      {children}
    </div>
  );
}
