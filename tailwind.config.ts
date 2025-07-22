import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        // Brand Colors - Peachy Tone
        nude: {
          50: "#faf8f6",
          100: "#f7f1ee",
          200: "#f2e8dc",
          300: "#e8d5c4",
          400: "#d4b5a0",
          500: "#c4967a",
          600: "#b8825f",
          700: "#9a6b4f",
          800: "#7d5643",
          900: "#654738",
        },
        blush: {
          50: "#fdf7f6",
          100: "#fbeeed",
          200: "#f6ddd9",
          300: "#efc4bc",
          400: "#e5a195",
          500: "#d97d6e",
          600: "#c85d4c",
          700: "#a8473a",
          800: "#8b3d33",
          900: "#74362f",
        },
        sand: {
          50: "#faf9f7",
          100: "#f5f2ee",
          200: "#ebe4db",
          300: "#ddd1c2",
          400: "#cab8a3",
          500: "#b8a086",
          600: "#a08a6f",
          700: "#86735c",
          800: "#6e5f4e",
          900: "#5a4f42",
        },
        taupe: {
          50: "#f8f6f4",
          100: "#f0ebe6",
          200: "#e0d5cc",
          300: "#cbb8a8",
          400: "#b39684",
          500: "#9f7d68",
          600: "#8a6b56",
          700: "#725748",
          800: "#5e493d",
          900: "#4e3d34",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
}
export default config
