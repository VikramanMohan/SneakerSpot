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
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.6s ease-out forwards',
        fadeInUpSlow: 'fadeInUp 1s ease-out forwards',
        fadeInUpSlower: 'fadeInUp 1.4s ease-out forwards',
      },
    },
  },
  plugins: [],
};
