import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#05070D',
        neon: '#6CF9D8',
        electric: '#5B7CFF',
      },
      boxShadow: {
        glow: '0 0 40px rgba(108, 249, 216, 0.25)',
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at 20% 20%, rgba(91,124,255,.35), transparent 40%), radial-gradient(circle at 80% 0%, rgba(108,249,216,.3), transparent 35%), linear-gradient(160deg, #05070d, #0b1020 55%, #121934)',
      },
    },
  },
  plugins: [],
};

export default config;
