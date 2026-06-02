import { Link } from "react-router-dom";

interface LogoProps {
  size?: number;
  withText?: boolean;
}

export default function Logo({ size = 32, withText = true }: LogoProps) {
  return (
    <Link to="/" className="group inline-flex items-center gap-2">
      <span
        className="relative grid place-items-center rounded-md bg-white/[0.04] border border-white/10 transition-colors duration-200 group-hover:border-white/20"
        style={{ width: size, height: size }}
      >
        <svg viewBox="0 0 32 32" width={size * 0.6} height={size * 0.6} aria-hidden>
          <path
            d="M17 4 L8 18 H14 L13 28 L24 13 H17 Z"
            fill="#EAF2E5"
          />
        </svg>
      </span>
      {withText && (
        <span className="font-display tracking-tight text-bone-50">
          EV<span className="italic font-normal text-bone-100/70">Chargers</span>
        </span>
      )}
    </Link>
  );
}
