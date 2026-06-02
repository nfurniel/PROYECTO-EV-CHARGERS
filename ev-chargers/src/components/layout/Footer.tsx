import { Link } from "react-router-dom";
import Logo from "./Logo";

const columns = [
  {
    title: "Producto",
    links: [
      { to: "/map", label: "Mapa de cargadores" },
      { to: "/pricing", label: "Tarifas" },
      { to: "/about", label: "Tecnología" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { to: "/about", label: "Sobre nosotros" },
      { to: "/contact", label: "Contacto" },
      { to: "/about", label: "Carreras" },
    ],
  },
  {
    title: "Legal",
    links: [
      { to: "#", label: "Privacidad" },
      { to: "#", label: "Términos" },
      { to: "#", label: "Cookies" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/5 bg-ink-950/40">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-leaf-400/40 to-transparent" />
      <div className="container-x py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo size={36} />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-bone-100/60">
              La red europea de recarga inteligente para vehículos eléctricos.
              Energía 100% renovable, en cualquier viaje, sin esperas.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {["x", "in", "ig", "yt"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-bone-100/70 transition-all hover:border-leaf-400/60 hover:text-leaf-300"
                  aria-label={s}
                >
                  <span className="text-xs font-medium uppercase">{s}</span>
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="text-eyebrow mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-bone-100/70 transition-colors hover:text-leaf-300"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-3">
            <h4 className="text-eyebrow mb-4">Newsletter</h4>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="group relative overflow-hidden rounded-full border border-white/10 bg-white/[0.02] focus-within:border-leaf-400/60"
            >
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full bg-transparent px-4 py-3 pr-28 text-sm text-bone-50 placeholder:text-bone-100/40 focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 rounded-full bg-leaf-400 px-4 text-xs font-semibold text-ink-950 transition-all hover:bg-volt-400"
              >
                Suscribir
              </button>
            </form>
            <p className="mt-3 text-xs text-bone-100/40">
              Noticias y actualizaciones. Sin spam.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-bone-100/40">
            © {new Date().getFullYear()} EV Chargers · Energía con propósito.
          </p>
          <p className="text-xs text-bone-100/40">
            Hecho con energía renovable en Europa
          </p>
        </div>
      </div>
    </footer>
  );
}
