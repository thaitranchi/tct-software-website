/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#1E293B", // Dark blue
          secondary: "#64748B", // Light gray
          accent: "#F97316", // Orange
        },
      },
    },
    plugins: [],
  };
  