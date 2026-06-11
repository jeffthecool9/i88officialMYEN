/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink:     '#060C18',
        surface: '#0C1628',
        lift:    '#132035',
        brand:   '#0EA5E9',
        ice:     '#E6F2F7',
      },
      fontFamily: {
        display:  ['"Bebas Neue"', 'cursive'],
        body:     ['"Outfit"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'marquee':    'marquee 34s linear infinite',
        'beam-left':  'beamLeft 8s ease-in-out infinite',
        'beam-right': 'beamRight 8s ease-in-out infinite 2s',
        'slide-up':   'slideUp 0.5s cubic-bezier(0.16,1,0.3,1) forwards',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        beamLeft: {
          '0%, 100%': { opacity: '0.08', transform: 'rotate(-14deg) scaleY(1)' },
          '50%':      { opacity: '0.22', transform: 'rotate(-8deg) scaleY(1.04)' },
        },
        beamRight: {
          '0%, 100%': { opacity: '0.06', transform: 'rotate(14deg) scaleY(1)' },
          '50%':      { opacity: '0.18', transform: 'rotate(8deg) scaleY(1.04)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
}
