/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        "372": "372px",
        "720": "720px",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "white-opacity-07": "rgba(255, 255, 255, 0.7)",
        "red-header": "var(--red-header)",
        "red-footer": "#740000",
        "red-switch": "#bd0000",
        "white-opacity-02": "rgba(255, 255, 255, 0.2)",
        "dark-red-card": "#140A09",
        red: "rgba(255, 0, 0)",
        "button-red": "#BE0000",
        "border-footer": "rgba(217, 217, 217, 0.10)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        // "accordion-down": {
        //   from: { height: 0 },
        //   to: { height: "var(--radix-accordion-content-height)" },
        // },
        // "accordion-up": {
        //   from: { height: "var(--radix-accordion-content-height)" },
        //   to: { height: 0 },
        // },
      },
      animation: {
        // "accordion-down": "accordion-down 0.2s ease-out",
        // "accordion-up": "accordion-up 0.2s ease-out",
      },
      // @ts-ignore
      screens: {
        "360": "360px",
        "720": "720px",
        "480": "480px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
