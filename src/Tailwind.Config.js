/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // all your components
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8",
        primaryHover: "#1E40AF",
        secondary: "#10B981",
        backgroundLight: "#F9FAFB",
        backgroundDark: "#1E293B",
        error: "#EF4444",
        success: "#22C55E",
      },
    },
  },
  plugins: [],
};
