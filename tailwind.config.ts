import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',  // Ekstra küçük ekranlar için
        'sm': '640px',  // Küçük ekranlar
        'md': '768px',  // Orta ekranlar
        'lg': '1024px', // Büyük ekranlar
        'xl': '1280px', // Extra büyük ekranlar
        '2xl': '1536px', // Çok büyük ekranlar
        'custom': '1295px',
      },
      colors: {
        "twitterBlue": "#1D9BF0",
        "twitterGray": "rgb(113, 118, 123)",
        "twitterDarkPastel": "#1E201E",
        "twitterModal": "rgba(91, 112, 131, 0.4)",
        "twitterIConHover": "rgba(62, 65, 68, 0.5)",
        "twitterPostBlue": "rgb(29, 155, 240)",
        "twitterBorder": "rgb(62, 65, 68) ",
      },
      fontFamily: {
        twitterChirp: ['TwitterChirp', 'sans-serif'],
        twitterChirpExtendedHeavy: ['TwitterChirpExtendedHeavy', 'sans-serif'],
      },

      fontWeight: {
        'twitter-heavy': 800,
        'twitter-bold': 700,
        'twitter-medium': 500,
        'twitter-regular': 400,
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
