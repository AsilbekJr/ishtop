/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563eb", // blue-600
          dark: "#1e40af", // blue-800
          light: "#60a5fa", // blue-400
        },
        secondary: {
          DEFAULT: "#f97316", // orange-500
          dark: "#c2410c", // orange-700
          light: "#fdba74", // orange-300
        },
        background: {
          light: "#f9fafb", // gray-50
          dark: "#111827", // gray-900
        },
        textcolor: {
          primary: "#1f2937", // gray-800
          secondary: "#4b5563", // gray-600
        },
      },
      borderRadius: {
        xl2: "1.5rem", // qo‘shimcha radius utility
      },
      boxShadow: {
        md2: "0 4px 12px rgba(0,0,0,0.08)", // qo‘shimcha shadow
      },
    },
  },
  plugins: [],
};
