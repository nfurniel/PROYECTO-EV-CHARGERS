import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import GradientText from "../components/reactbits/GradientText";
import AnimatedContent from "../components/reactbits/AnimatedContent";
import Magnet from "../components/reactbits/Magnet";
import { cn } from "../lib/cn";

const channels = [
  {
    title: "Conductores",
    desc: "Dudas sobre tu cuenta, carga o app.",
    contact: "hola@evchargers.eu",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
  {
    title: "Empresas y flotas",
    desc: "Acuerdos B2B y soluciones a medida.",
    contact: "ventas@evchargers.eu",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 21V10l9-6 9 6v11" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),
  },
  {
    title: "Prensa",
    desc: "Materiales de marca y entrevistas.",
    contact: "press@evchargers.eu",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16v16H4z" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </svg>
    ),
  },
];

const offices = [
  { city: "València", country: "España", address: "Av. del Puerto 132", tag: "HQ" },
  { city: "Berlin", country: "Deutschland", address: "Friedrichstraße 68", tag: "DACH" },
  { city: "Paris", country: "France", address: "Rue La Boétie 41", tag: "FR" },
];

const subjects = ["Soporte", "Comercial", "Prensa", "Otro"] as const;
type Subject = (typeof subjects)[number];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [subject, setSubject] = useState<Subject>("Soporte");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <>
      <section className="relative pt-32 pb-12 sm:pt-40">
        <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(167,245,66,0.3),transparent)]" />
        <div className="container-x max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-leaf-300/80">
            <span className="h-px w-8 bg-leaf-400/50" />
            Contacto
          </div>
          <h1 className="h-display text-5xl sm:text-6xl text-bone-50">
            Hablemos de cómo <GradientText>recargas mejor</GradientText>.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-bone-100/65 max-w-xl mx-auto">
            Respuesta humana en menos de 24 horas laborables. Soporte 24/7 disponible para usuarios Flow y Surge.
          </p>
        </div>
      </section>

      <section className="relative pb-28">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Form */}
            <div className="lg:col-span-7">
              <AnimatedContent>
                <div className="relative rounded-3xl border border-leaf-400/15 bg-ink-900/60 p-8 sm:p-10">
                  <form onSubmit={onSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label="Nombre" name="name" placeholder="Lucía García" required />
                      <Field label="Email" name="email" type="email" placeholder="lucia@email.com" required />
                    </div>
                    <Field label="Empresa (opcional)" name="company" placeholder="MovilidadCo" />

                    <div>
                      <label className="block text-xs uppercase tracking-[0.2em] text-bone-100/55 mb-3">
                        Motivo
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {subjects.map((s) => (
                          <button
                            key={s}
                            type="button"
                            onClick={() => setSubject(s)}
                            className={cn(
                              "rounded-full border px-4 py-2 text-xs sm:text-sm transition-all",
                              subject === s
                                ? "border-leaf-400/60 bg-leaf-400/15 text-leaf-200"
                                : "border-white/10 bg-white/[0.02] text-bone-100/70 hover:border-leaf-400/30 hover:text-bone-50",
                            )}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-[0.2em] text-bone-100/55 mb-2">
                        Mensaje
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        required
                        placeholder="Cuéntanos en qué podemos ayudarte..."
                        className="w-full rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-bone-50 placeholder:text-bone-100/40 focus:border-leaf-400/60 focus:outline-none resize-none"
                      />
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                      <p className="text-xs text-bone-100/40 max-w-xs">
                        Al enviar aceptas nuestra política de privacidad. No compartimos tus datos.
                      </p>
                      <Magnet strength={0.25}>
                        <button type="submit" className="btn-primary">
                          Enviar mensaje
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M13 5l7 7-7 7" />
                          </svg>
                        </button>
                      </Magnet>
                    </div>
                  </form>

                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute inset-x-6 -bottom-3 rounded-2xl glass-leaf px-4 py-3 text-sm text-leaf-100 shadow-leaf-soft"
                    >
                      ✓ Mensaje enviado. Te respondemos en breve.
                    </motion.div>
                  )}
                </div>
              </AnimatedContent>
            </div>

            {/* Side: channels + offices */}
            <div className="lg:col-span-5 space-y-5">
              {channels.map((c, i) => (
                <AnimatedContent key={c.title} delay={i * 0.06}>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all hover:border-leaf-400/40">
                    <div className="flex items-start gap-4">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-leaf-400/15 text-leaf-300 ring-1 ring-leaf-400/30">
                        {c.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="font-medium text-bone-50">{c.title}</div>
                        <p className="mt-0.5 text-xs text-bone-100/55">{c.desc}</p>
                        <a
                          href={`mailto:${c.contact}`}
                          className="mt-2 inline-block text-sm text-leaf-300 hover:text-leaf-200 transition-colors"
                        >
                          {c.contact}
                        </a>
                      </div>
                    </div>
                  </div>
                </AnimatedContent>
              ))}

              <AnimatedContent delay={0.2}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                  <div className="text-eyebrow mb-4">Oficinas</div>
                  <ul className="space-y-4">
                    {offices.map((o) => (
                      <li key={o.city} className="flex items-start justify-between gap-3">
                        <div>
                          <div className="font-medium text-bone-50">
                            {o.city}, <span className="text-bone-100/60">{o.country}</span>
                          </div>
                          <div className="text-xs text-bone-100/50 mt-0.5">{o.address}</div>
                        </div>
                        <span className="shrink-0 rounded-full bg-leaf-400/15 px-2.5 py-1 text-[10px] font-medium text-leaf-200 border border-leaf-400/30">
                          {o.tag}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}

function Field({ label, name, type = "text", placeholder, required }: FieldProps) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] text-bone-100/55 mb-2">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-bone-50 placeholder:text-bone-100/40 focus:border-leaf-400/60 focus:outline-none"
      />
    </div>
  );
}
