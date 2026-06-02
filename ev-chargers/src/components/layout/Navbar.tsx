import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PillNav from "../reactbits/PillNav";
import { StaggeredMenu } from "../reactbits/StaggeredMenu";
import { cn } from "../../lib/cn";

const items = [
  { label: "Inicio", href: "/" },
  { label: "Mapa", href: "/map" },
  { label: "Tarifas", href: "/pricing" },
  { label: "Nosotros", href: "/about" },
  { label: "Contacto", href: "/contact" },
];

const mobileItems = items.map((i) => ({
  label: i.label,
  ariaLabel: i.label,
  link: i.href,
}));

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
    <>
      {/* Desktop nav — pill nav */}
      <header
        className={cn(
          "hidden md:block fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "pt-2" : "pt-6",
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

      {/* Mobile nav — staggered menu */}
      <div className="md:hidden">
        <StaggeredMenu
          items={mobileItems}
          position="right"
          isFixed
          colors={["#0A2317", "#04130C"]}
          menuButtonColor="#04130C"
          openMenuButtonColor="#04130C"
          accentColor="#EAF2E5"
          logoUrl="/favicon.svg"
          displaySocials={false}
          displayItemNumbering
          changeMenuColorOnOpen={false}
          closeOnClickAway
        />
      </div>
    </>
  );
}
