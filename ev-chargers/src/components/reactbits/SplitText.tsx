import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: "chars" | "words";
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  textAlign?: React.CSSProperties["textAlign"];
  trigger?: boolean;
}

export default function SplitText({
  text,
  className = "",
  delay = 30,
  duration = 0.9,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40, rotateX: -25 },
  to = { opacity: 1, y: 0, rotateX: 0 },
  tag: Tag = "h1",
  textAlign = "left",
  trigger = true,
}: SplitTextProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    const units =
      splitType === "chars"
        ? text.split("").map((c) => (c === " " ? " " : c))
        : text.split(" ");

    while (el.firstChild) el.removeChild(el.firstChild);
    units.forEach((u) => {
      const span = document.createElement("span");
      span.className = "inline-block will-change-transform";
      span.style.display = "inline-block";
      if (splitType !== "chars") span.style.marginRight = "0.25em";
      span.textContent = u;
      el.appendChild(span);
    });

    const targets = el.querySelectorAll("span");
    const tween = gsap.fromTo(targets, from, {
      ...to,
      duration,
      ease,
      stagger: delay / 1000,
      scrollTrigger: trigger
        ? { trigger: el, start: "top 85%", once: true }
        : undefined,
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [text, delay, duration, ease, splitType, JSON.stringify(from), JSON.stringify(to), trigger]);

  return (
    <Tag
      ref={ref as React.RefObject<HTMLHeadingElement>}
      className={className}
      style={{ textAlign, perspective: 800 }}
    >
      {text}
    </Tag>
  );
}
