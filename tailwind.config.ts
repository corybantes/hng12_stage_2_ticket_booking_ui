import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "ticket-pattern": "url('/images/ticket.svg')",
      },
      fontFamily: {
        jeju: ["var(--font-jeju)"],
        roadRage: ["var(--font-road-rage)"],
        roboto: ["var(--font-roboto)"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        layout: {
          bg: "hsl(var(--layout-bg))",
          grd: "hsl(var(--secondary-button-bg))",
        },
        tcr: {
          bg: "hsl(var(--tcr-card-bg))",
          bd: "hsl(var(--tcr-card-bd))",
          grd: "hsl(var(--secondary-button-bg))",
        },
        progress: {
          bg: "hsl(var(--empty-image-bg))",
          pr: "hsl(var(--secondary-button-bg))",
        },
        inputField: {
          bd: "hsl(var(--tcr-card-bd))",
        },
        text: {
          main: "hsl(var(--main-text))",
          sec: "hsl(var(--secondary-text))",
          ter: "hsl(var(--tertiary-text))",
          sub: "hsl(var(--sub-text))",
        },
        form: {
          bg: "hsl(var(--form-bg))",
          bd: "hsl(var(--form-bd))",
          card: "hsl(var(--form-card-bg))",
          card_bd: "hsl(var(--empty-image-bg))",
        },
        ticket: {
          bg: "hsl(var(--ticket-bg))",
          bd: "hsl(var(--secondary-button-bg))",
          sub_bg: "hsl(var(--sub-ticket-bg))",
          sub_bd: "hsl(var(--sub-ticket-bd))",
        },
        ticketType: {
          bg: "hsl(var(--ticket-type-bg))",
          bd: "hsl(var(--tcr-card-bd))",
          selected: "hsl(var(--ticket-type-selected))",
          hover: "hsl(var(--ticket-type-hover))",
        },
        image: {
          upload: "hsl(var(--upload-image-bg))",
          upload_bd: "hsl(var(--upload-image-bd))",
          bg: "hsl(var(--image-bg))",
          empty: "hsl(var(--empty-image-bg))",
          empty_bd: "hsl(var(--secondary-button-bg))",
        },
        header: {
          bg: "hsl(var(--main-header-bg))",
          bd: "hsl(var(--main-header-bd))",
          text: "hsl(var(--text-header))",
        },
        logo: {
          DEFAULT: "hsl(var(--logo-bg))",
          border: "hsl(var(--logo-bg-bd))",
        },
        button: {
          main: "hsl(var(--main-button-bg))",
          main_bd: "hsl(var(--main-button-bd))",
          main_text: "hsl(var(--text-button))",
          secondary: "hsl(var(--secondary-button-bg))",
          secondary_bd: "hsl(var(--secondary-button-bd))",
          secondary_text: "hsl(var(--secondary-button-bd))",
          tertiary_bd: "hsl(var(--secondary-button-bg))",
          tertiary_text: "hsl(var(--secondary-button-bg))",
        },
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
