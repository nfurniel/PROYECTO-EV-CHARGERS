import { useEffect, useRef, useMemo, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
}

export default function ScrollReveal({
  children,
  enableBlur = true,
  baseOpacity = 0.12,
  baseRotation = 2,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split(/(\s+)/).map((word, i) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="inline-block word" key={i}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const triggers: ScrollTrigger[] = [];

    const t1 = gsap.fromTo(
      el,
      { transformOrigin: "0% 50%", rotate: baseRotation },
      {
        ease: "none",
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        },
      },
    );
    if (t1.scrollTrigger) triggers.push(t1.scrollTrigger);

    const words = el.querySelectorAll<HTMLElement>(".word");
    const t2 = gsap.fromTo(
      words,
      { opacity: baseOpacity, filter: enableBlur ? `blur(${blurStrength}px)` : "none" },
      {
        ease: "none",
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.05,
        scrollTrigger: {
          trigger: el,
          start: "top bottom-=15%",
          end: "bottom bottom-=10%",
          scrub: true,
        },
      },
    );
    if (t2.scrollTrigger) triggers.push(t2.scrollTrigger);

    return () => triggers.forEach((t) => t.kill());
  }, [enableBlur, baseRotation, baseOpacity, blurStrength]);

  return (
    <div ref={containerRef} className={`my-5 ${containerClassName}`}>
      <p className={`text-[clamp(1.4rem,3.2vw,2.6rem)] leading-[1.45] font-semibold ${textClassName}`}>
        {splitText}
      </p>
    </div>
  );
}
