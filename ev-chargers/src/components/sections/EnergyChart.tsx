import { motion } from "framer-motion";
import { useMemo } from "react";

interface DataPoint {
  value: number;
  label: string;
}

interface EnergyChartProps {
  data: DataPoint[];
}

const VIEW_W = 1200;
const VIEW_H = 320;

export default function EnergyChart({ data }: EnergyChartProps) {
  const { pathD, fillD, gridLines } = useMemo(() => {
    if (!data.length) return { pathD: "", fillD: "", gridLines: [] };

    const max = Math.max(...data.map((d) => d.value));
    const min = 0;
    const range = max - min || 1;

    const points = data.map((d, i) => {
      const x = data.length > 1 ? (i / (data.length - 1)) * VIEW_W : VIEW_W / 2;
      const y = VIEW_H - ((d.value - min) / range) * VIEW_H * 0.92 - VIEW_H * 0.04;
      return { x, y };
    });

    let path = `M ${points[0].x},${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const cpX = (prev.x + curr.x) / 2;
      path += ` C ${cpX},${prev.y} ${cpX},${curr.y} ${curr.x},${curr.y}`;
    }

    const fill =
      `M ${points[0].x},${VIEW_H} L ${points[0].x},${points[0].y}` +
      points
        .slice(1)
        .map((curr, i) => {
          const prev = points[i];
          const cpX = (prev.x + curr.x) / 2;
          return ` C ${cpX},${prev.y} ${cpX},${curr.y} ${curr.x},${curr.y}`;
        })
        .join("") +
      ` L ${points[points.length - 1].x},${VIEW_H} Z`;

    const grid = [0.25, 0.5, 0.75].map((p) => p * VIEW_H);

    return { pathD: path, fillD: fill, gridLines: grid };
  }, [data]);

  return (
    <div className="w-full">
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        preserveAspectRatio="none"
        className="w-full h-[180px] sm:h-[240px] lg:h-[280px] block"
        style={{ overflow: "visible" }}
        aria-hidden
      >
        <defs>
          <linearGradient id="energy-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#EAF2E5" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#EAF2E5" stopOpacity="0" />
          </linearGradient>
        </defs>

        {gridLines.map((y) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2={VIEW_W}
            y2={y}
            stroke="rgba(255,255,255,0.06)"
            strokeWidth={1}
            strokeDasharray="4 8"
            vectorEffect="non-scaling-stroke"
          />
        ))}

        <motion.path
          d={fillD}
          fill="url(#energy-fill)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
        />
        <motion.path
          d={pathD}
          fill="none"
          stroke="#EAF2E5"
          strokeWidth={2}
          strokeLinejoin="round"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>

      <div className="mt-4 grid grid-cols-12 text-[10px] uppercase tracking-[0.18em] text-bone-100/40">
        {data.map((d, i) => (
          <span
            key={d.label}
            className={`text-center ${
              i % 2 === 0 ? "" : "hidden sm:block"
            }`}
          >
            {d.label}
          </span>
        ))}
      </div>
    </div>
  );
}
