/** @type {import('tailwindcss').Config} */
import path from 'path';

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blueprime: "#0f82ff",
        bginputs: "rgba(255, 255, 255, 0.1)",
        neutralnajaf: "rgba(255, 255, 255, 1)",
        halfblueprime:"rgba(33, 150, 243, 0.2)"
      },
      keyframes: {
        slideUp: {
          '0%': {
            transform: 'translateY(100%) scale(0.95)',
            opacity: '0',
          },
          '60%': {
            transform: 'translateY(-8%) scale(1.01)',
            opacity: '0.8',
          },
          '100%': {
            transform: 'translateY(0) scale(1)',
            opacity: '1',
          },
        },
        slideUpSmooth: {
          '0%': {
            transform: 'translateY(100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
      animation: {
        slideUp: 'slideUp 0.45s ease-out',
        slideUpSmooth: 'slideUpSmooth 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
