import type { Config } from 'tailwindcss';
const config: Config = { 
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}'], 
  theme: { 
    extend: { 
      fontFamily: {
        sans: ['Thmanyah', 'sans-serif'],
      },
      boxShadow: { soft: '0 24px 80px rgba(31, 23, 86, .14)' }, 
      colors: { ink: '#120E45', violet: '#2B1688', lavender: '#EDE9FF' } 
    } 
  }, 
  plugins: [] 
};
export default config;
