/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── Fundo ─────────────────────────────────── */
        background:  "#07070e",   // obsidian quase-preto
        foreground:  "#eeeaf6",   // branco levemente quente

        slate: {
          850: "#13111f",
          950: "#07070e",
        },

        /* ── Primário: indigo profundo ──────────────── */
        primary: {
          DEFAULT:    "#6366f1",   // indigo
          light:      "#818cf8",
          dark:       "#4f46e5",
          foreground: "#ffffff",
        },

        /* ── Acento: prata/slate ─────────────────────── */
        gold: {
          DEFAULT: "#e2e8f0",
          light:   "#f1f5f9",
          dark:    "#cbd5e1",
        },

        /* ── Acento secundário: ciano frio ───────────── */
        teal: {
          DEFAULT: "#22d3ee",
          light:   "#67e8f9",
          dark:    "#0891b2",
        },

        /* ── Superfícies ────────────────────────────── */
        "background-light": "#eef2ff",
        "background-dark":  "#07091a",
        "surface-dark":     "#0d0f1e",
        "surface-card":     "#0a0c1a",
        "surface-hover":    "#111428",

        /* ── Bordas ─────────────────────────────────── */
        "border-dark":   "#1e2048",
        "border-subtle": "rgba(255,255,255,0.055)",
        "border-gold":   "rgba(226,232,240,0.2)",
      },

      fontFamily: {
        sans:    ["Inter", "sans-serif"],
        display: ["Manrope", "sans-serif"],
      },

      fontSize: {
        "2xs": ["0.65rem", { lineHeight: "1rem" }],
      },

      animation: {
        "float":         "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out infinite 3s",
        "pulse-slow":    "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        "blob":          "blob 7s infinite",
        "pulse-ring":    "pulse-ring 2s cubic-bezier(0.215,0.61,0.355,1) infinite",
        "shimmer":       "shimmer 2.5s linear infinite",
        "glow-pulse":    "glow-pulse 3s ease-in-out infinite",
        "slide-up":      "slide-up 0.4s ease-out",
        "fade-in":       "fade-in 0.5s ease-out",
      },

      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%":     { transform: "translateY(-10px)" },
        },
        blob: {
          "0%":   { transform: "translate(0px,0px) scale(1)" },
          "33%":  { transform: "translate(30px,-50px) scale(1.1)" },
          "66%":  { transform: "translate(-20px,20px) scale(0.9)" },
          "100%": { transform: "translate(0px,0px) scale(1)" },
        },
        "pulse-ring": {
          "0%":   { transform: "scale(0.95)", opacity: "1" },
          "100%": { transform: "scale(1.5)",  opacity: "0" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition:  "200% center" },
        },
        "glow-pulse": {
          "0%,100%": { opacity: "0.45" },
          "50%":     { opacity: "1"    },
        },
        "slide-up": {
          "0%":   { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)"    },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },

      backgroundImage: {
        "gradient-radial":  "radial-gradient(var(--tw-gradient-stops))",
        "gradient-shimmer": "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)",
        "gradient-primary": "linear-gradient(135deg, #6366f1 0%, #818cf8 100%)",
        "gradient-gold":    "linear-gradient(135deg, #e2e8f0 0%, #f1f5f9 100%)",
        "gradient-hero":    "linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)",
      },

      boxShadow: {
        /* Neon por cor */
        "neon-primary": "0 0 22px -4px rgba(99,102,241,0.6), 0 0 44px -10px rgba(99,102,241,0.3)",
        "neon-gold":    "0 0 22px -4px rgba(226,232,240,0.4), 0 0 44px -10px rgba(226,232,240,0.2)",
        "neon-teal":    "0 0 22px -4px rgba(34,211,238,0.6), 0 0 44px -10px rgba(34,211,238,0.3)",
        "neon-violet":  "0 0 22px -4px rgba(99,102,241,0.6), 0 0 44px -10px rgba(99,102,241,0.3)",
        "neon-cyan":    "0 0 22px -4px rgba(34,211,238,0.6), 0 0 44px -10px rgba(34,211,238,0.3)",
        "neon-green":   "0 0 22px -4px rgba(34,197,94,0.6),  0 0 44px -10px rgba(34,197,94,0.3)",
        /* Glow genérico */
        "glow-sm":      "0 0 14px -3px rgba(99,102,241,0.5)",
        "glow-md":      "0 0 30px -6px rgba(99,102,241,0.5)",
        /* Cards */
        "card":         "0 4px 36px rgba(0,0,0,0.55), 0 1px 0 rgba(255,255,255,0.035) inset",
        "card-hover":   "0 8px 52px rgba(0,0,0,0.65), 0 1px 0 rgba(255,255,255,0.06) inset",
      },

      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
