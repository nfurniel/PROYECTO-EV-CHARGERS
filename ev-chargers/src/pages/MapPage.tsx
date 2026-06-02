import { useMemo, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet";
import L from "leaflet";
import { motion } from "framer-motion";
import { cn } from "../lib/cn";

type Charger = {
  id: string;
  name: string;
  city: string;
  country: string;
  position: [number, number];
  power: number;
  available: number;
  total: number;
  pricePerKwh: number;
};

const chargers: Charger[] = [
  { id: "mad-01", name: "EV Hub Madrid Centro", city: "Madrid", country: "ES", position: [40.4168, -3.7038], power: 350, available: 4, total: 6, pricePerKwh: 0.38 },
  { id: "bcn-01", name: "EV Hub Barcelona Diagonal", city: "Barcelona", country: "ES", position: [41.3979, 2.1495], power: 250, available: 2, total: 4, pricePerKwh: 0.39 },
  { id: "val-01", name: "EV Hub València Puerto", city: "València", country: "ES", position: [39.4699, -0.3763], power: 150, available: 1, total: 3, pricePerKwh: 0.36 },
  { id: "par-01", name: "EV Hub Paris La Défense", city: "Paris", country: "FR", position: [48.8924, 2.2376], power: 350, available: 5, total: 8, pricePerKwh: 0.46 },
  { id: "lyo-01", name: "EV Hub Lyon Part-Dieu", city: "Lyon", country: "FR", position: [45.7600, 4.8590], power: 250, available: 3, total: 5, pricePerKwh: 0.44 },
  { id: "ber-01", name: "EV Hub Berlin Mitte", city: "Berlin", country: "DE", position: [52.5200, 13.4050], power: 350, available: 6, total: 8, pricePerKwh: 0.49 },
  { id: "muc-01", name: "EV Hub München Süd", city: "München", country: "DE", position: [48.1351, 11.5820], power: 250, available: 2, total: 4, pricePerKwh: 0.48 },
  { id: "ams-01", name: "EV Hub Amsterdam Zuid", city: "Amsterdam", country: "NL", position: [52.3376, 4.8852], power: 350, available: 4, total: 6, pricePerKwh: 0.42 },
  { id: "rom-01", name: "EV Hub Roma EUR", city: "Roma", country: "IT", position: [41.8326, 12.4708], power: 250, available: 3, total: 5, pricePerKwh: 0.45 },
  { id: "mil-01", name: "EV Hub Milano Porta Nuova", city: "Milano", country: "IT", position: [45.4838, 9.1916], power: 350, available: 5, total: 6, pricePerKwh: 0.47 },
  { id: "lis-01", name: "EV Hub Lisboa Parque", city: "Lisboa", country: "PT", position: [38.7359, -9.1380], power: 150, available: 1, total: 2, pricePerKwh: 0.34 },
  { id: "vie-01", name: "EV Hub Wien Hauptbahnhof", city: "Wien", country: "AT", position: [48.1857, 16.3753], power: 250, available: 2, total: 4, pricePerKwh: 0.43 },
  { id: "bru-01", name: "EV Hub Brussels Midi", city: "Brussels", country: "BE", position: [50.8358, 4.3353], power: 250, available: 3, total: 4, pricePerKwh: 0.44 },
  { id: "war-01", name: "EV Hub Warszawa Centrum", city: "Warszawa", country: "PL", position: [52.2297, 21.0122], power: 150, available: 2, total: 3, pricePerKwh: 0.32 },
  { id: "sto-01", name: "EV Hub Stockholm Central", city: "Stockholm", country: "SE", position: [59.3300, 18.0625], power: 250, available: 4, total: 5, pricePerKwh: 0.41 },
  { id: "cph-01", name: "EV Hub København H", city: "København", country: "DK", position: [55.6730, 12.5640], power: 250, available: 3, total: 4, pricePerKwh: 0.40 },
  { id: "dub-01", name: "EV Hub Dublin Docklands", city: "Dublin", country: "IE", position: [53.3471, -6.2362], power: 150, available: 1, total: 2, pricePerKwh: 0.39 },
];

function createIcon(power: number, available: number) {
  const color = available === 0 ? "#ef4444" : power >= 350 ? "#A7F542" : power >= 250 ? "#2BDB7A" : "#5BEA9A";
  const html = `
    <div style="position:relative;display:grid;place-items:center;">
      <div style="position:absolute;inset:0;border-radius:9999px;background:${color};opacity:0.25;filter:blur(8px);"></div>
      <div style="
        position:relative;width:36px;height:36px;border-radius:9999px;
        background:${color};color:#04130C;display:grid;place-items:center;
        font-family:'Space Grotesk',system-ui,sans-serif;font-weight:700;
        font-size:11px;box-shadow:0 6px 18px -4px ${color}aa;border:2px solid #04130C;">
        ${power}
      </div>
    </div>`;
  return L.divIcon({ html, className: "ev-marker", iconSize: [36, 36], iconAnchor: [18, 18] });
}

const filters = [
  { id: "all" as const, label: "Todos" },
  { id: "ultra" as const, label: "Ultrarrápidos · 350 kW" },
  { id: "fast" as const, label: "Rápidos · 250 kW" },
  { id: "available" as const, label: "Disponibles ahora" },
];

type FilterId = (typeof filters)[number]["id"];

export default function MapPage() {
  const [filter, setFilter] = useState<FilterId>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return chargers.filter((c) => {
      if (filter === "ultra" && c.power < 350) return false;
      if (filter === "fast" && c.power !== 250) return false;
      if (filter === "available" && c.available === 0) return false;
      if (query.trim()) {
        const q = query.toLowerCase();
        if (!c.city.toLowerCase().includes(q) && !c.country.toLowerCase().includes(q) && !c.name.toLowerCase().includes(q)) {
          return false;
        }
      }
      return true;
    });
  }, [filter, query]);

  return (
    <section className="relative pt-28 pb-20">
      <div className="container-x">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-8">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-leaf-300/80">
              <span className="h-px w-8 bg-leaf-400/50" />
              Red europea
            </div>
            <h1 className="h-display text-4xl sm:text-5xl text-bone-50">Mapa de cargadores</h1>
            <p className="mt-2 text-bone-100/65 max-w-xl">
              {filtered.length} estaciones disponibles en este momento. Filtra por potencia o busca por ciudad.
            </p>
          </div>
          <div className="relative w-full sm:w-80">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 text-bone-100/40"
              width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" strokeLinecap="round" />
            </svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Madrid, Berlin, FR..."
              className="w-full rounded-full border border-white/10 bg-white/[0.03] py-3 pl-11 pr-4 text-sm text-bone-50 placeholder:text-bone-100/40 focus:border-leaf-400/60 focus:outline-none"
            />
          </div>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={cn(
                "rounded-full border px-4 py-2 text-xs sm:text-sm transition-all",
                filter === f.id
                  ? "border-leaf-400/60 bg-leaf-400/15 text-leaf-200"
                  : "border-white/10 bg-white/[0.02] text-bone-100/70 hover:border-leaf-400/30 hover:text-bone-50",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-5"
        >
          <div className="lg:col-span-8 rounded-3xl overflow-hidden border border-leaf-400/15 shadow-leaf-soft h-[560px] lg:h-[640px]">
            <MapContainer
              center={[48.5, 9]}
              zoom={4}
              scrollWheelZoom
              zoomControl={false}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
                url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png"
              />
              <TileLayer
                url="https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}{r}.png"
                opacity={0.6}
              />
              <ZoomControl position="bottomright" />
              {filtered.map((c) => (
                <Marker key={c.id} position={c.position} icon={createIcon(c.power, c.available)}>
                  <Popup>
                    <div style={{ minWidth: 200 }}>
                      <div style={{ fontFamily: "Space Grotesk, system-ui", fontWeight: 600, fontSize: 14, color: "#EAF2E5" }}>
                        {c.name}
                      </div>
                      <div style={{ fontSize: 11, color: "#92F4BE", marginTop: 2 }}>{c.city} · {c.country}</div>
                      <div style={{ display: "flex", gap: 6, marginTop: 8, flexWrap: "wrap" }}>
                        <span style={{ background: "rgba(43,219,122,0.18)", border: "1px solid rgba(43,219,122,0.4)", borderRadius: 999, padding: "2px 8px", fontSize: 10, color: "#92F4BE" }}>
                          {c.power} kW
                        </span>
                        <span style={{ background: "rgba(255,255,255,0.06)", borderRadius: 999, padding: "2px 8px", fontSize: 10, color: "#D6E5CC" }}>
                          {c.available}/{c.total} libres
                        </span>
                        <span style={{ background: "rgba(167,245,66,0.18)", borderRadius: 999, padding: "2px 8px", fontSize: 10, color: "#C6FF6B" }}>
                          €{c.pricePerKwh.toFixed(2)}/kWh
                        </span>
                      </div>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>

          <div
            data-lenis-prevent
            className="lg:col-span-4 max-h-[560px] lg:max-h-[640px] overflow-y-auto pr-2 [overscroll-behavior:contain]"
          >
            <ul className="space-y-3 pb-2">
              {filtered.map((c) => (
                <li
                  key={c.id}
                  className="group rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-all hover:border-leaf-400/40 hover:bg-leaf-400/[0.04]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="font-display text-base text-bone-50 truncate">{c.name}</div>
                      <div className="text-xs text-bone-100/60 mt-0.5">{c.city} · {c.country}</div>
                    </div>
                    <span
                      className={cn(
                        "shrink-0 rounded-full px-2.5 py-1 text-[10px] font-medium",
                        c.available > 0
                          ? "bg-leaf-400/15 text-leaf-200 border border-leaf-400/30"
                          : "bg-red-500/15 text-red-300 border border-red-500/30",
                      )}
                    >
                      {c.available > 0 ? `${c.available} libres` : "Ocupado"}
                    </span>
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-xs text-bone-100/60">
                    <span className="inline-flex items-center gap-1 text-leaf-300">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 L4 14 H11 L10 22 L20 10 H13 Z" /></svg>
                      {c.power} kW
                    </span>
                    <span>·</span>
                    <span>€{c.pricePerKwh.toFixed(2)}/kWh</span>
                  </div>
                </li>
              ))}
              {filtered.length === 0 && (
                <li className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center text-sm text-bone-100/60">
                  Ningún cargador coincide con esos filtros.
                </li>
              )}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
