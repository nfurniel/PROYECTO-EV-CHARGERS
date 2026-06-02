interface ShinyTextProps {
  text: string;
  speed?: number;
  className?: string;
}

export default function ShinyText({ text, speed = 5, className = "" }: ShinyTextProps) {
  return (
    <span
      className={`relative inline-block ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(255,255,255,0.4) 0%, rgba(167,245,66,1) 45%, rgba(255,255,255,0.4) 60%, rgba(255,255,255,0.4) 100%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        animation: `shineLoop ${speed}s linear infinite`,
      }}
    >
      <style>{`
        @keyframes shineLoop {
          0% { background-position: 100% 0; }
          100% { background-position: -100% 0; }
        }
      `}</style>
      {text}
    </span>
  );
}
