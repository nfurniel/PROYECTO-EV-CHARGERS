import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SpotlightCard from "../components/reactbits/SpotlightCard";
import GradientText from "../components/reactbits/GradientText";
import AnimatedContent from "../components/reactbits/AnimatedContent";
import { cn } from "../lib/cn";

type Cycle = "monthly" | "yearly";

const tiers = [
  {
    id: "free",
    name: "Spark",
    tagline: "Para quien empieza con la eléctrica",
    monthly: 0,
    yearly: 0,
    cta: "Empezar gratis",
    href: "/contact",
    highlight: false,
    perks: [
      "Acceso a toda la red europea",
      "Tarifa estándar: 0,39 €/kWh",
      "Reserva de cargador básica",
      "Soporte vía email",
    ],
  },
  {
    id: "plus",
    name: "Flow",
    tagline: "El plan favorito de los conductores diarios",
    monthly: 9.9,
    yearly: 99,
    cta: "Empezar prueba",
    href: "/contact",
    highlight: true,
    perks: [
      "Tarifa reducida: 0,32 €/kWh",
      "Reserva prioritaria 30 min antes",
      "Carga ultrarrápida sin recargo",
      "Roaming en 18 países",
      "Soporte 24/7 con respuesta en menos de 90 s",
    ],
  },
  {
    id: "pro",
    name: "Surge",
    tagline: "Para flotas y profesionales",
    monthly: 24.9,
    yearly: 249,
    cta: "Hablar con ventas",
    href: "/contact",
    highlight: false,
    perks: [
      "Tarifa pro: 0,28 €/kWh",
      "Hasta 10 vehículos",
      "Facturación consolidada por empresa",
      "API y panel de gestión",
      "Account manager dedicado",
    ],
  },
];

const faq = [
  {
    q: "¿Hay permanencia?",
    a: "Ninguna. Puedes cambiar o cancelar tu plan en cualquier momento desde la app. El plan Spark es gratis para siempre.",
  },
  {
    q: "¿Qué incluye la tarifa por kWh?",
    a: "Energía 100% renovable certificada en origen, mantenimiento de la red, y todos los costes asociados. Sin recargos sorpresa al desconectar.",
  },
  {
    q: "¿Puedo usar el plan en otros países?",
    a: "Sí. Una sola cuenta da acceso a más de 320.000 cargadores en 18 países europeos, con la misma tarifa y experiencia.",
  },
  {
    q: "¿Cómo funciona la reserva prioritaria?",
    a: "Los usuarios de Flow y Surge pueden reservar un cargador hasta 30 minutos antes de llegar. Garantizamos plaza o te compensamos los kWh.",
  },
];

export default function Pricing() {
  const [cycle, setCycle] = useState<Cycle>("monthly");
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <>
      <section className="relative pt-32 pb-16 sm:pt-40">
        <div className="absolute inset-0 -z-10 opacity-25 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(167,245,66,0.3),transparent)]" />
        <div className="container-x text-center">
          <div className="mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-leaf-300/80">
            <span className="h-px w-8 bg-leaf-400/50" />
            Tarifas
          </div>
          <h1 className="h-display text-5xl sm:text-6xl lg:text-7xl text-bone-50 max-w-3xl mx-auto">
            Precios <GradientText>honestos</GradientText>,<br className="hidden sm:block" /> sin letra pequeña.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-bone-100/65 max-w-xl mx-auto">
            Solo pagas por la energía que consumes. Elige el plan que mejor se
            adapte a tus kilómetros.
          </p>

          {/* Cycle toggle */}
          <div className="mt-10 inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1">
            {(["monthly", "yearly"] as const).map((c) => (
              <button
                key={c}
                onClick={() => setCycle(c)}
                className={cn(
                  "relative rounded-full px-5 py-2 text-sm transition-colors",
                  cycle === c ? "text-ink-950" : "text-bone-100/70",
                )}
              >
                {cycle === c && (
                  <motion.span
                    layoutId="cycle-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-leaf-400"
                    transition={{ type: "spring", stiffness: 300, damping: 28 }}
                  />
                )}
                {c === "monthly" ? "Mensual" : "Anual"}
                {c === "yearly" && (
                  <span className={cn("ml-2 rounded-full px-2 py-0.5 text-[10px] font-semibold", cycle === "yearly" ? "bg-ink-950 text-leaf-300" : "bg-leaf-400/15 text-leaf-300")}>
                    −17%
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="relative pb-28">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {tiers.map((t, i) => {
              const price = cycle === "monthly" ? t.monthly : t.yearly / 12;
              return (
                <AnimatedContent key={t.id} delay={i * 0.08} distance={30}>
                  <SpotlightCard
                    className={cn(
                      "h-full p-8 relative",
                      t.highlight && "border-leaf-400/40 bg-gradient-to-b from-leaf-400/[0.06] to-transparent",
                    )}
                    spotlightColor={t.highlight ? "rgba(167,245,66,0.28)" : "rgba(167,245,66,0.14)"}
                  >
                    <div className="flex h-full flex-col">
                      <div className="flex items-start justify-between gap-3 min-h-[2.75rem]">
                        <div className="min-w-0">
                          <div className="font-display text-2xl text-bone-50">{t.name}</div>
                          <p className="mt-1 text-sm text-bone-100/55 min-h-[2.5rem]">{t.tagline}</p>
                        </div>
                        <span
                          className={cn(
                            "shrink-0 rounded-full border px-3 py-1 text-[10px] font-medium uppercase tracking-wider",
                            t.highlight
                              ? "border-leaf-400/40 bg-leaf-400/15 text-leaf-200"
                              : "invisible",
                          )}
                          aria-hidden={!t.highlight}
                        >
                          Popular
                        </span>
                      </div>

                      <div className="mt-7 flex items-baseline gap-1.5">
                        <span className="font-display text-5xl text-bone-50">
                          {price === 0 ? "0€" : `${price.toFixed(price % 1 === 0 ? 0 : 1)}€`}
                        </span>
                        <span className="text-sm text-bone-100/55">/ mes</span>
                      </div>
                      <p className="mt-1 text-xs text-leaf-300/80 min-h-[1rem]">
                        {cycle === "yearly" && t.yearly > 0
                          ? `Facturado ${t.yearly}€ / año`
                          : ""}
                      </p>

                      <Link
                        to={t.href}
                        className={cn(
                          "mt-6 flex w-full justify-center",
                          t.highlight ? "btn-primary" : "btn-ghost",
                        )}
                      >
                        {t.cta}
                      </Link>

                      <ul className="mt-8 space-y-3">
                        {t.perks.map((p) => (
                          <li key={p} className="flex items-start gap-3 text-sm text-bone-100/75">
                            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-leaf-400/15 text-leaf-300">
                              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <path d="m5 12 5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </SpotlightCard>
                </AnimatedContent>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative pb-28">
        <div className="container-x max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-eyebrow">Preguntas</span>
            <h2 className="h-display text-3xl sm:text-4xl text-bone-50 mt-3">Resolvemos las dudas más comunes</h2>
          </div>

          <ul className="space-y-3">
            {faq.map((f, i) => (
              <li
                key={f.q}
                className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"
              >
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-medium text-bone-50">{f.q}</span>
                  <span
                    className={cn(
                      "grid h-7 w-7 shrink-0 place-items-center rounded-full border border-leaf-400/30 text-leaf-300 transition-transform duration-300",
                      openIdx === i && "rotate-45",
                    )}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {openIdx === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-sm text-bone-100/65 leading-relaxed">
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
