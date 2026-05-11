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
      colors: {
        primary: {
          DEFAULT: '#FCD535',
          active: '#f0b90b',
          disabled: '#3a3a1f',
        },
        canvas: {
          dark: '#0b0e11',
          light: '#ffffff',
        },
        surface: {
          card: '#1e2329',
          elevated: '#2b3139',
          soft: '#fafafa',
        },
        ink: '#181a20',
        body: '#eaecef',
        muted: {
          DEFAULT: '#707a8a',
          strong: '#929aa5',
        },
        trading: {
          up: '#0ecb81',
          down: '#f6465d',
        },
        hairline: {
          light: '#eaecef',
          dark: '#2b3139',
        }
      },
      boxShadow: {
        soft: '0 24px 80px rgba(0, 0, 0, .4)',
      }
    } 
  }, 
  plugins: [] 
};
export default config;
