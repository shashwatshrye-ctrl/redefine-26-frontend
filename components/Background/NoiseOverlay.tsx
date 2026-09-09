export default function NoiseOverlay() {
  return (
    <div
      className="
      pointer-events-none
      absolute
      inset-0
      z-20
      opacity-[0.04]
      mix-blend-overlay"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 20%,white 1px,transparent 1px)",
        backgroundSize: "6px 6px",
      }}
    />
  );
}
