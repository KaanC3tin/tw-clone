import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "twitterBlue": "#1D9BF0",
        "twitterGray": "rgb(113, 118, 123)",
        "twitterDarkPastel": "#1E201E",
        "twitterModal": "rgba(91, 112, 131, 0.4)",
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
