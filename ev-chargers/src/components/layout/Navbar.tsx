import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PillNav from "../reactbits/PillNav";
import { cn } from "../../lib/cn";

const items = [
  { label: "Inicio", href: "/" },
  { label: "Mapa", href: "/map" },
  { label: "Tarifas", href: "/pricing" },
  { label: "Nosotros", href: "/about" },
  { label: "Contacto", href: "/contact" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "pt-2" : "pt-4 sm:pt-6",
      )}
    >
      <div className="container-x flex justify-center">
        <PillNav
          logo="/favicon.svg"
          logoAlt="EV Chargers"
          items={items}
          activeHref={pathname}
          baseColor="#EAF2E5"
          pillColor="#06180F"
          pillTextColor="#EAF2E5"
          hoveredPillTextColor="#06180F"
          ease="power3.out"
        />
      </div>
    </header>
  );
}
