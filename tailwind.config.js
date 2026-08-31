/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-base": "#050914",
        "bg-surface": "#0B111F",
        "bg-surface-alt": "#111827",
        border: "#1E2536",
        "accent-primary": "#3B4FE0",
        "text-primary": "#F5F7FA",
        "text-secondary": "#9AA3B5",
        "badge-bg": "#0F1522",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
};
