import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import GradientText from "../components/reactbits/GradientText";
import Magnet from "../components/reactbits/Magnet";
import Aurora from "../components/reactbits/Aurora";

export default function NotFound() {
  return (
    <section className="relative isolate min-h-[100svh] grid place-items-center overflow-hidden pt-24 pb-16">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
        <Aurora
          colorStops={["#A7F542", "#0BC563", "#5BEA9A"]}
          amplitude={1.0}
          blend={0.6}
          speed={0.6}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,transparent,#04130C_70%)]" />

      <div className="container-x max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="chip mb-6">Error 404</span>
          <h1 className="h-display text-7xl sm:text-9xl text-bone-50">
            <GradientText>404</GradientText>
          </h1>
          <h2 className="mt-6 font-display text-3xl sm:text-4xl text-bone-50">
            Esta ruta no está cargada.
          </h2>
          <p className="mt-4 text-base text-bone-100/65 max-w-md mx-auto">
            La página que buscas no existe o ha sido movida. Tranquilo, te
            redirigimos a un sitio con energía.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Magnet strength={0.25}>
              <Link to="/" className="btn-primary">
                Volver al inicio
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            </Magnet>
            <Link to="/map" className="btn-ghost">
              Ver el mapa
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
