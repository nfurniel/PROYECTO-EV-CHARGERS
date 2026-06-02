import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Plug2,
  Leaf,
  Timer,
  BadgeEuro,
  MapPin,
  LifeBuoy,
  ArrowRight,
} from "lucide-react";
import Hero from "../components/sections/Hero";
import AnimatedContent from "../components/reactbits/AnimatedContent";
import CountUp from "../components/reactbits/CountUp";
import SimpleGraph from "../components/react-bits/simple-graph";

const features = [
  {
    title: "Ultrarrápidos",
    desc: "Hasta 350 kW de potencia. Carga del 10 % al 80 % en menos de 18 minutos.",
    icon: Plug2,
  },
  {
    title: "100 % renovable",
    desc: "Toda la red está alimentada con energía solar y eólica certificada en origen.",
    icon: Leaf,
  },
  {
    title: "Reserva en segundos",
    desc: "Asegura tu cargador desde la app y desbloquéalo con un solo toque al llegar.",
    icon: Timer,
  },
  {
    title: "Sin sorpresas",
    desc: "Tarifa transparente por kWh. Sin cuotas mensuales, sin costes ocultos.",
    icon: BadgeEuro,
  },
  {
    title: "Roaming europeo",
    desc: "Una sola cuenta para acceder a más de 320 000 cargadores en 18 países.",
    icon: MapPin,
  },
  {
    title: "Soporte 24/7",
    desc: "Equipo humano disponible siempre. Tiempo medio de respuesta inferior a 90 segundos.",
    icon: LifeBuoy,
  },
];

const stats = [
  { value: 320, suffix: "k+", label: "Cargadores en la red" },
  { value: 18, suffix: "", label: "Países europeos" },
  { value: 99, suffix: " %", label: "Energía renovable" },
  { value: 25, suffix: " s", label: "Reserva media" },
];

const energyData = [
  { value: 12, label: "Ene" },
  { value: 14, label: "Feb" },
  { value: 18, label: "Mar" },
  { value: 23, label: "Abr" },
  { value: 29, label: "May" },
  { value: 36, label: "Jun" },
  { value: 44, label: "Jul" },
  { value: 51, label: "Ago" },
  { value: 58, label: "Sep" },
  { value: 68, label: "Oct" },
  { value: 79, label: "Nov" },
  { value: 92, label: "Dic" },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Stats band — sober numerals, no gradient */}
      <section className="relative border-t border-white/5">
        <div className="container-x py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {stats.map((s, i) => (
              <AnimatedContent key={s.label} delay={i * 0.06} distance={16}>
                <div>
                  <div className="font-display text-4xl sm:text-5xl text-bone-50 tabular-nums leading-none">
                    <CountUp to={s.value} duration={2} suffix={s.suffix} />
                  </div>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-bone-100/50">
                    {s.label}
                  </p>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      {/* Features — clean editorial cards */}
      <section className="relative py-24 sm:py-32 border-t border-white/5">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14 items-end">
            <div className="lg:col-span-7">
              <p className="text-eyebrow mb-5">Tecnología</p>
              <h2 className="h-display text-4xl sm:text-5xl lg:text-[3.75rem] text-bone-50">
                Diseñado al{" "}
                <em className="italic font-normal text-bone-100/70">detalle</em>.
                Cada parte del sistema.
              </h2>
            </div>
            <p className="lg:col-span-5 text-base text-bone-100/65 leading-relaxed">
              Hardware propio. Software propio. Energía verificable. Cada
              componente está pensado para que recargar tu coche sea lo más
              simple del día — no un evento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-lg overflow-hidden">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <AnimatedContent key={f.title} delay={i * 0.04} distance={20}>
                  <div className="h-full bg-ink-950/80 p-8 transition-colors duration-300 hover:bg-ink-900/80">
                    <Icon
                      size={22}
                      strokeWidth={1.5}
                      className="text-bone-100/85 mb-6"
                    />
                    <h3 className="font-display text-2xl text-bone-50 leading-tight">
                      {f.title}
                    </h3>
                    <p className="mt-3 text-[14px] text-bone-100/60 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </AnimatedContent>
              );
            })}
          </div>
        </div>
      </section>

      {/* Manifesto — serif quote */}
      <section className="relative py-28 border-t border-white/5">
        <div className="container-x max-w-3xl">
          <p className="text-eyebrow mb-6">Nuestra promesa</p>
          <motion.blockquote
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15] text-bone-50"
          >
            Cargar un coche eléctrico debería ser tan simple como conectar un
            teléfono.{" "}
            <em className="italic font-normal text-bone-100/65">
              Sin colas, sin apps confusas, sin sorpresas en la factura.
            </em>{" "}
            Solo energía limpia, exactamente cuando la necesitas.
          </motion.blockquote>
        </div>
      </section>

      {/* Energy delivered — responsive graph */}
      <section className="relative py-24 border-t border-white/5">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-10 items-end">
            <div className="lg:col-span-7">
              <p className="text-eyebrow mb-5">Energía entregada</p>
              <h2 className="h-display text-3xl sm:text-4xl lg:text-5xl text-bone-50">
                GWh limpios{" "}
                <em className="italic font-normal text-bone-100/65">
                  a la red,
                </em>{" "}
                mes a mes.
              </h2>
            </div>
            <p className="lg:col-span-5 text-sm sm:text-base text-bone-100/60 leading-relaxed">
              Cada kWh que entregamos se compensa en origen con generación
              renovable certificada.
            </p>
          </div>

          <AnimatedContent delay={0.1} distance={16}>
            <div className="rounded-lg border border-white/10 bg-ink-950/60 p-4 sm:p-6 overflow-hidden">
              <div className="w-full">
                <SimpleGraph
                  data={energyData}
                  lineColor="#EAF2E5"
                  dotColor="#EAF2E5"
                  height={280}
                  width="100%"
                  curved
                  showDots={false}
                  graphLineThickness={1.5}
                  showGrid
                  gridStyle="dashed"
                  gridLines="horizontal"
                  gridLineThickness={1}
                  animationDuration={2}
                  animateOnScroll
                  animateOnce
                />
              </div>
              <div className="mt-3 flex justify-between text-[10px] uppercase tracking-[0.2em] text-bone-100/40 px-1">
                {energyData.map((d) => (
                  <span key={d.label} className="hidden sm:inline">
                    {d.label}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 border-t border-white/5">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-lg border border-white/10 bg-ink-950/60 p-10 sm:p-14"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8">
                <h3 className="h-display text-3xl sm:text-4xl lg:text-5xl text-bone-50">
                  Tu próximo viaje,{" "}
                  <em className="italic font-normal text-bone-100/65">
                    sin ansiedad de carga.
                  </em>
                </h3>
                <p className="mt-5 text-base text-bone-100/60 max-w-xl">
                  Crea tu cuenta gratis y empieza a cargar en menos de
                  60&nbsp;segundos. Sin permanencia, sin tarjetas extra.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-wrap items-center gap-3 lg:justify-end">
                <Link to="/map" className="btn-primary">
                  Encontrar un cargador
                  <ArrowRight size={16} strokeWidth={2.25} />
                </Link>
                <Link to="/pricing" className="btn-ghost">
                  Ver tarifas
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
