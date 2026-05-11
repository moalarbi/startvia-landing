import type { Config } from 'tailwindcss';

const config: Config = { 
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}'], 
  theme: { 
    extend: { 
      fontFamily: {
        sans: ['Thmanyah', 'sans-serif'],
      },
      fontSize: {
        // Reduced sizes for a more professional/global look
        'hero': ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg': ['36px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'display-md': ['30px', { lineHeight: '1.2', fontWeight: '600' }],
        'display-sm': ['24px', { lineHeight: '1.3', fontWeight: '600' }],
        'title-lg': ['20px', { lineHeight: '1.4', fontWeight: '600' }],
        'title-md': ['18px', { lineHeight: '1.4', fontWeight: '600' }],
        'title-sm': ['16px', { lineHeight: '1.5', fontWeight: '600' }],
        'body-md': ['14px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['13px', { lineHeight: '1.6', fontWeight: '400' }],
        'xs': ['12px', { lineHeight: '1.6', fontWeight: '400' }],
      },
      spacing: {
        'xxs': '4px',
        'xs': '8px',
        'sm': '12px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        'xxl': '48px',
        'section': '100px', // Increased section padding for better breathing
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
      },
      maxWidth: {
        'content': '1100px', // Slightly narrower for better readability
        'product': '1280px',
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
        soft: '0 8px 32px rgba(0, 0, 0, .3)',
        'soft-lg': '0 24px 64px rgba(0, 0, 0, .5)',
      }
    } 
  }, 
  plugins: [] 
};
export default config;
