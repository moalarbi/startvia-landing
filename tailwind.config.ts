import type { Config } from 'tailwindcss';

const config: Config = { 
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}'], 
  theme: { 
    extend: { 
      fontFamily: {
        sans: ['Thmanyah', 'sans-serif'],
      },
      fontSize: {
        'hero': ['64px', { lineHeight: '1.1', letterSpacing: '-1px', fontWeight: '700' }],
        'display-lg': ['48px', { lineHeight: '1.1', letterSpacing: '-0.5px', fontWeight: '700' }],
        'display-md': ['40px', { lineHeight: '1.15', letterSpacing: '-0.3px', fontWeight: '600' }],
        'display-sm': ['32px', { lineHeight: '1.2', fontWeight: '600' }],
        'title-lg': ['24px', { lineHeight: '1.3', fontWeight: '600' }],
        'title-md': ['20px', { lineHeight: '1.35', fontWeight: '600' }],
        'title-sm': ['16px', { lineHeight: '1.4', fontWeight: '600' }],
        'body-md': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'body-sm': ['13px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        'xxs': '4px',
        'xs': '8px',
        'sm': '12px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        'xxl': '48px',
        'section': '80px',
      },
      borderRadius: {
        'md': '6px',
        'lg': '8px',
        'xl': '12px',
      },
      maxWidth: {
        'content': '1280px',
        'product': '1440px',
      },
      boxShadow: { soft: '0 24px 80px rgba(31, 23, 86, .14)' }, 
      colors: { ink: '#120E45', violet: '#2B1688', lavender: '#EDE9FF' } 
    } 
  }, 
  plugins: [] 
};
export default config;
