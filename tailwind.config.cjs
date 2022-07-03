module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '320px',
      // => @media (min-width: 390px) { ... }
     
      'sm': '480px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif:['Boska', 'serif']
    },
    colors: {
      white: '#fafbfc',
      black: '#222222',
      gray: '#CBD5E1',
      orange: '#FFC839',
      green: '#4ECB71',
    },
    boxShadow: {
      sm: '0px 2px 4px 0x rgba(11, 10, 55, 0.15)',
      lg: 'Opx 8px 20px 0px rgba(18, 16, 99, 0.06)',
    },
    fontSize: {
      xs: ['0.875rem', { lineheight: '24px', letterSpacing: '-0.03em' }],
      base: ['1rem', { lineheight: '28px', letterSpacing: '-0.03em' }],
      lg: ['1.15rem', { lineheight: '28px', letterSpacing: '-0.03em' }],
      xl: ['1.25rem', { lineheight: '28px', letterSpacing: '-0.03em' }],
      '2xl': ['1.5rem', { lineheight: '36px', letterSpacing: '-0.032em' }],
      '3xl': ['1.9rem', { lineheight: '48px', letterSpacing: '-0.032em' }],
      '4xl': ['2.4rem', { lineheight: '56px', letterSpacing: '-0.032em' }],
      '5xl': ['3rem', { lineheight: '56px', letterSpacing: '-0.034em' }],
      '6xl': ['3.8rem', { lineheight: '72px', letterSpacing: '-0.034em' }],
      '7xl': ['4.7rem', { lineheight: '88px', letterSpacing: '-0.036em' }],
      '8xl': ['8rem', { lineheight: '8;136px', letterSpacing: '-0.036em' }]
    },

    extend: {

    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp')
  ],
}