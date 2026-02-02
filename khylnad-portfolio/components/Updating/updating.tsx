import NetworkDots from "@/components/ui/NetworkDots";

export default function Updating() {
  return (
    <main
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        display: "grid",
        placeItems: "center",
        padding: "5rem 1.5rem",
        background:
          "radial-gradient(circle at 20% 20%, rgba(90,140,255,0.15), transparent 45%), radial-gradient(circle at 80% 10%, rgba(120,200,255,0.12), transparent 50%)",
      }}
    >
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <NetworkDots />
      </div>
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          padding: "2.5rem 3rem",
          borderRadius: "28px",
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0.004))",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow:
            "0 20px 70px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.18)",
          backdropFilter: "blur(10px) saturate(120%)",
          WebkitBackdropFilter: "blur(10px) saturate(120%)",
        }}
      >
        <p
          style={{
            fontSize: "0.85rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            opacity: 0.7,
          }}
        >
          Portfolio
        </p>
        <h1
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", marginTop: "0.8rem" }}
        >
          Khyl Nad
        </h1>
        <p style={{ fontSize: "clamp(1.1rem, 2vw, 1.6rem)", opacity: 0.8 }}>
          Full-Stack Developer
        </p>
        <p style={{ marginTop: "1.5rem", opacity: 0.7 }}>
          Under Construction
          <span className="loading-dots" aria-hidden="true">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </p>
        <style>{`
          .loading-dots span {
            display: inline-block;
            animation: dotPulse 1.2s infinite ease-in-out;
          }
          .loading-dots span:nth-child(2) {
            animation-delay: 0.2s;
          }
          .loading-dots span:nth-child(3) {
            animation-delay: 0.4s;
          }
          @keyframes dotPulse {
            0%, 80%, 100% { opacity: 0.2; transform: translateY(0); }
            40% { opacity: 0.9; transform: translateY(-2px); }
          }
        `}</style>
      </div>
    </main>
  );
}
