import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#57228f",
          purpleDark: "#2a0f45",
          purpleSoft: "#f3ecfb",
          yellow: "#f6c945",
          yellowSoft: "#fff7d8",
          ink: "#111014"
        }
      },
      boxShadow: {
        soft: "0 16px 40px rgba(17, 16, 20, 0.08)",
        lift: "0 24px 70px rgba(87, 34, 143, 0.18)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
