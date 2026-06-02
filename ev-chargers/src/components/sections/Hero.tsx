import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Check } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-10 sm:pt-36 sm:pb-14">
      <div className="container-x relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Copy */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="text-eyebrow">Red activa · 18 países</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="h-display text-[3.25rem] sm:text-7xl lg:text-[5.5rem] text-bone-50"
            >
              Recarga al{" "}
              <em className="italic font-normal text-bone-100/70">ritmo</em>{" "}
              del futuro.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-7 max-w-xl text-base sm:text-lg text-bone-100/65 leading-relaxed"
            >
              Una red europea de cargadores ultrarrápidos alimentada 100&nbsp;%
              con energía renovable. Encuentra, reserva y recarga en menos de
              30&nbsp;segundos desde la app.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link to="/map" className="btn-primary text-sm sm:text-base">
                Encontrar un cargador
                <ArrowRight size={16} strokeWidth={2.25} />
              </Link>
              <Link
                to="/pricing"
                className="group inline-flex items-center gap-2 text-sm sm:text-base text-bone-100/75 hover:text-bone-50 transition-colors"
              >
                Ver tarifas
                <span className="inline-block transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Live charging panel */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <LiveChargingCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function LiveChargingCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-xl border border-white/10 bg-ink-900/80 backdrop-blur-xl"
    >
      <div className="flex items-center justify-between border-b border-white/5 px-5 py-3">
        <div className="flex items-center gap-2.5">
          <span className="relative grid h-2 w-2 place-items-center">
            <span className="absolute h-full w-full animate-ping rounded-full bg-bone-50/30" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-bone-50" />
          </span>
          <span className="text-xs text-bone-50 font-medium">Cargando</span>
          <span className="text-xs text-bone-100/40">· CCS Combo 2</span>
        </div>
        <span className="font-mono text-[10px] tracking-wider text-bone-100/45">
          #MAD-014
        </span>
      </div>

      <div className="px-5 py-7">
        <div className="flex items-baseline gap-3">
          <span className="font-display text-7xl sm:text-8xl text-bone-50 leading-none tabular-nums">
            342
          </span>
          <span className="text-bone-100/55 text-lg font-light">kW</span>
        </div>
        <div className="mt-3 flex items-center gap-1.5 text-xs text-bone-100/55">
          <Zap size={12} fill="currentColor" strokeWidth={0} />
          Potencia pico estable · 350&nbsp;kW disponibles
        </div>

        <div className="mt-7">
          <div className="mb-2 flex items-center justify-between text-xs">
            <span className="text-bone-100/55">Carga del vehículo</span>
            <span className="tabular-nums text-bone-50 font-medium">64 %</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "64%" }}
              transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="h-full rounded-full bg-bone-50"
            />
          </div>
        </div>

        <div className="mt-7 grid grid-cols-3 gap-3 text-left">
          <Stat label="kWh entregados" value="38.4" />
          <Stat label="Min. restantes" value="12" />
          <Stat label="Coste actual" value="14,60 €" />
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/5 px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="grid h-5 w-5 place-items-center rounded-full bg-white/[0.06]">
            <Check size={10} strokeWidth={2.5} className="text-bone-50" />
          </span>
          <span className="text-[11px] text-bone-100/65">100 % energía solar</span>
        </div>
        <span className="font-mono text-[10px] text-bone-100/35">v3.2 · live</span>
      </div>
    </motion.div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-display text-2xl text-bone-50 tabular-nums">
        {value}
      </div>
      <div className="mt-1 text-[10px] uppercase tracking-wider text-bone-100/45">
        {label}
      </div>
    </div>
  );
}
