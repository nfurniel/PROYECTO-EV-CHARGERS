import GradientText from "../components/reactbits/GradientText";
import SplitText from "../components/reactbits/SplitText";
import AnimatedContent from "../components/reactbits/AnimatedContent";
import SpotlightCard from "../components/reactbits/SpotlightCard";
import ScrollReveal from "../components/reactbits/ScrollReveal";
import CountUp from "../components/reactbits/CountUp";

const values = [
  {
    title: "Energía con propósito",
    desc: "Cada kWh que servimos viene de fuentes renovables certificadas. Auditamos la trazabilidad cada trimestre.",
  },
  {
    title: "Ingeniería honesta",
    desc: "Diseñamos hardware y software en casa. Si rompemos algo, lo arreglamos. Si lo prometemos, lo entregamos.",
  },
  {
    title: "Acceso para todos",
    desc: "La movilidad eléctrica solo funciona si es asequible. Nuestras tarifas son las mismas en cualquier país de la red.",
  },
  {
    title: "Velocidad útil",
    desc: "No optimizamos para el podio: optimizamos para la vida real. Cargar tu coche debe encajar en una pausa de café.",
  },
];

const team = [
  { name: "Elena Marín", role: "CEO & Cofundadora", initials: "EM" },
  { name: "Luca Conti", role: "CTO & Cofundador", initials: "LC" },
  { name: "Hannah Vogel", role: "Head of Operations", initials: "HV" },
  { name: "Diego Ríos", role: "Head of Design", initials: "DR" },
  { name: "Marta Oliveira", role: "Head of Sustainability", initials: "MO" },
  { name: "Tomás Lindqvist", role: "Head of Engineering", initials: "TL" },
];

const milestones = [
  { year: "2021", title: "Cero a uno", desc: "Fundamos EV Chargers en Valencia con 12 cargadores piloto." },
  { year: "2022", title: "Iberia", desc: "Primera red ibérica con 1.200 puntos en España y Portugal." },
  { year: "2023", title: "Europa central", desc: "Expansión a Francia, Alemania, Italia y Países Bajos." },
  { year: "2024", title: "320k+ cargadores", desc: "Acuerdo de roaming paneuropeo con 14 operadores adicionales." },
  { year: "2025", title: "100% renovable", desc: "Toda la energía suministrada certificada de origen renovable." },
];

export default function About() {
  return (
    <>
      <section className="relative isolate pt-32 pb-20 sm:pt-44 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(43,219,122,0.18),transparent_70%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,transparent,#04130C_75%)]" />

        <div className="container-x max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-leaf-300/80">
            <span className="h-px w-8 bg-leaf-400/50" />
            Sobre nosotros
          </div>
          <h1 className="h-display text-5xl sm:text-6xl lg:text-7xl text-bone-50">
            <SplitText
              text="Acelerando el fin"
              tag="span"
              className="block"
              delay={28}
              from={{ opacity: 0, y: 50, rotateX: -30 }}
            />
            <span className="block">
              <GradientText>de los combustibles fósiles.</GradientText>
            </span>
          </h1>
          <p className="mt-7 text-base sm:text-lg text-bone-100/70 leading-relaxed max-w-2xl mx-auto">
            Somos un equipo de 84 personas en 6 países construyendo la red de
            recarga europea que el planeta necesita. Una estación, un kilómetro,
            un viaje a la vez.
          </p>
        </div>
      </section>

      {/* Big numbers */}
      <section className="relative py-20 border-y border-leaf-400/10 bg-ink-900/40">
        <div className="container-x">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { v: 84, s: "", l: "Personas en el equipo" },
              { v: 6, s: "", l: "Países con oficina" },
              { v: 2.4, s: "M+", l: "Sesiones / año", float: true },
              { v: 12000, s: " tCO₂e", l: "Evitadas en 2025" },
            ].map((n, i) => (
              <AnimatedContent key={n.l} delay={i * 0.08}>
                <div className="text-center lg:text-left">
                  <div className="font-display text-5xl text-bone-50">
                    {n.float ? (
                      <span>{n.v}<span className="text-leaf-300">{n.s}</span></span>
                    ) : (
                      <CountUp to={n.v} duration={2.2} suffix={n.s} className="text-gradient-leaf" />
                    )}
                  </div>
                  <p className="mt-2 text-sm text-bone-100/60">{n.l}</p>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="relative py-28">
        <div className="container-x max-w-4xl">
          <span className="text-eyebrow block mb-6">Nuestra misión</span>
          <ScrollReveal baseOpacity={0.12} blurStrength={4} textClassName="text-bone-50">
            Creemos que la transición energética no se gana con manifiestos. Se gana con infraestructura. Por eso fabricamos los cargadores más fiables del continente, los conectamos a una red de energía 100% limpia y los abrimos a todos los conductores eléctricos de Europa.
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="relative pb-28">
        <div className="container-x">
          <div className="mb-14 max-w-2xl">
            <span className="text-eyebrow">Valores</span>
            <h2 className="h-display text-4xl sm:text-5xl text-bone-50 mt-3">
              Lo que hacemos, y cómo lo hacemos.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <AnimatedContent key={v.title} delay={i * 0.08} distance={40}>
                <SpotlightCard className="h-full p-8">
                  <div className="font-display text-2xl text-leaf-300">0{i + 1}</div>
                  <h3 className="mt-3 font-display text-xl text-bone-50">{v.title}</h3>
                  <p className="mt-2 text-sm text-bone-100/65 leading-relaxed">{v.desc}</p>
                </SpotlightCard>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative pb-28">
        <div className="container-x">
          <div className="mb-14 max-w-2xl">
            <span className="text-eyebrow">Recorrido</span>
            <h2 className="h-display text-4xl sm:text-5xl text-bone-50 mt-3">De 12 cargadores a 320.000</h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-leaf-400/50 via-leaf-400/20 to-transparent sm:left-1/2 sm:-translate-x-1/2" />
            <ul className="space-y-12">
              {milestones.map((m, i) => (
                <li key={m.year} className="relative pl-12 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-12">
                  <span className="absolute left-2 top-1 grid h-5 w-5 place-items-center rounded-full bg-leaf-400 ring-4 ring-ink-950 sm:left-1/2 sm:-translate-x-1/2" />
                  <AnimatedContent delay={i * 0.05} distance={30}>
                    <div className={i % 2 === 0 ? "sm:text-right sm:pr-10" : "sm:col-start-2 sm:pl-10"}>
                      <div className="font-display text-3xl text-leaf-300">{m.year}</div>
                      <h3 className="mt-1 font-display text-xl text-bone-50">{m.title}</h3>
                      <p className="mt-1 text-sm text-bone-100/65">{m.desc}</p>
                    </div>
                  </AnimatedContent>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative pb-32">
        <div className="container-x">
          <div className="mb-14 max-w-2xl">
            <span className="text-eyebrow">Equipo</span>
            <h2 className="h-display text-4xl sm:text-5xl text-bone-50 mt-3">El liderazgo</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {team.map((p, i) => (
              <AnimatedContent key={p.name} delay={i * 0.05}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-center transition-all hover:border-leaf-400/40 hover:bg-leaf-400/[0.04]">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-leaf-400 to-leaf-700 font-display text-lg text-ink-950">
                    {p.initials}
                  </div>
                  <div className="mt-4 text-sm font-medium text-bone-50">{p.name}</div>
                  <div className="text-xs text-bone-100/55 mt-0.5">{p.role}</div>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
