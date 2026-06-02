import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GlitterWarp from "../react-bits/glitter-warp";
import { scrollToTop } from "../../hooks/useSmoothScroll";

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
    scrollToTop(true);
  }, [pathname]);

  return (
    <div className="relative isolate min-h-screen overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-70">
        <GlitterWarp
          color="#D6E5CC"
          density={22}
          brightness={0.9}
          starSize={0.08}
          focalDepth={0.05}
          speed={0.45}
          turbulence={0.12}
        />
      </div>
      <Navbar />
      <main className="relative">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
