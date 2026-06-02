/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#04130C",
          900: "#06180F",
          800: "#0A2317",
          700: "#0F3322",
          600: "#16482F",
        },
        leaf: {
          50: "#E8FFF4",
          100: "#C7FBE0",
          200: "#92F4BE",
          300: "#5BEA9A",
          400: "#2BDB7A",
          500: "#0BC563",
          600: "#04A352",
          700: "#057F42",
        },
        volt: {
          300: "#C6FF6B",
          400: "#A7F542",
          500: "#86E11C",
          600: "#65B500",
        },
        bone: {
          50: "#F7FBF5",
          100: "#EAF2E5",
          200: "#D6E5CC",
        },
      },
      fontFamily: {
        display: ['"Fraunces"', "ui-serif", "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "radial-leaf":
          "radial-gradient(ellipse at top, rgba(11,197,99,0.25), transparent 60%)",
        "grid-leaf":
          "linear-gradient(rgba(11,197,99,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(11,197,99,0.08) 1px, transparent 1px)",
        "noise":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.45'/%3E%3C/svg%3E\")",
      },
      animation: {
        "shimmer": "shimmer 2.4s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "spin-slow": "spin 18s linear infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(43,219,122,0.45)" },
          "50%": { boxShadow: "0 0 0 28px rgba(43,219,122,0)" },
        },
      },
      boxShadow: {
        "leaf-glow":
          "0 0 40px -8px rgba(43,219,122,0.55), 0 0 12px -2px rgba(167,245,66,0.35)",
        "leaf-soft": "0 12px 60px -20px rgba(11,197,99,0.45)",
      },
    },
  },
  plugins: [],
};
