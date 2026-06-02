import { useId } from "react";

interface CurvedLoopProps {
  marqueeText?: string;
  speed?: number;
  className?: string;
  curveAmount?: number;
}

export default function CurvedLoop({
  marqueeText = "EV CHARGERS • RECARGA RÁPIDA •",
  speed = 2,
  className = "",
  curveAmount = 240,
}: CurvedLoopProps) {
  const id = useId().replace(/:/g, "");
  const text = (marqueeText + " ").repeat(8);

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg viewBox="0 0 1200 300" className="w-full h-auto" preserveAspectRatio="xMidYMid slice">
        <defs>
          <path id={id} d={`M -200 ${150 + curveAmount} Q 600 ${150 - curveAmount} 1400 ${150 + curveAmount}`} />
        </defs>
        <text className="fill-leaf-200 font-display" fontSize="80" letterSpacing="6">
          <textPath href={`#${id}`} startOffset="0%">
            <animate
              attributeName="startOffset"
              from="0%"
              to="-100%"
              dur={`${20 / speed}s`}
              repeatCount="indefinite"
            />
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  );
}
