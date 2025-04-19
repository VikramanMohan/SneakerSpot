/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          "swiper-dot": "#9CA3AF", // Gray
          "swiper-dot-active": "#FFFFFF", // White
        },
        spacing: {
          "swiper-dot-size": "12px",
          "swiper-dot-active-size": "16px",
        },
      },
    },
    plugins: [],
  };
  