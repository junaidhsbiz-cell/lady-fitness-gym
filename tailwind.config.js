/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bgDark: '#0D040A',
          bgMedium: '#160711',
          bgCard: '#1E0917',
          cardHover: '#2A0C21',
          burgundy: '#5E0E31',
          burgundyDeep: '#3D071F',
          accent: '#FF2A55',
          accentHover: '#E01F46',
          warm: '#FF6B18',
          warmGold: '#FFB84C',
          softPink: '#FFAAC0',
          blush: '#FFE3EC',
          gold: '#E5C07B',
          goldLight: '#FFF2CE',
          textLight: '#FFFFFF',
          textBody: '#F5E6EE',
          textMuted: '#B397A5',
          borderSubtle: 'rgba(255, 42, 85, 0.16)',
          borderHover: 'rgba(255, 42, 85, 0.45)',
          borderGold: 'rgba(229, 192, 123, 0.35)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Hind Siliguri', 'sans-serif'],
        display: ['Outfit', 'Hind Siliguri', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        bengali: ['Hind Siliguri', 'sans-serif']
      },
      boxShadow: {
        'glow-accent': '0 0 40px -5px rgba(255, 42, 85, 0.4)',
        'glow-warm': '0 0 35px -5px rgba(255, 107, 24, 0.35)',
        'glow-gold': '0 0 35px -5px rgba(229, 192, 123, 0.3)',
        'glow-plum': '0 0 45px -5px rgba(94, 14, 49, 0.5)',
        'glass': '0 16px 48px 0 rgba(13, 4, 10, 0.65)',
        'card': '0 12px 36px -10px rgba(0, 0, 0, 0.6)',
        'card-hover': '0 20px 50px -12px rgba(255, 42, 85, 0.25)'
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
