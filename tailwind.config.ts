import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        body: ["Lexand Peta", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
