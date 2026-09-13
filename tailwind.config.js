/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        alex: ['"Alex Brush"', 'cursive'],
        sans: ['"Outfit"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        champagne: {
          50: '#FDFBF7',
          100: '#FAF5ED',
          200: '#F4E8D4',
          300: '#EDDAB9',
          400: '#E2C38F',
          500: '#D4AA64',
          600: '#B88B42',
          700: '#8F662C',
          800: '#69471D',
          900: '#462E12',
        },
        velvet: {
          900: '#0B0914',
          850: '#120F24',
          800: '#1A1633',
          700: '#2A244D',
          600: '#3D356D',
        },
        roseGold: {
          100: '#FFF0F2',
          200: '#FCE0E5',
          300: '#F8B6C3',
          400: '#EE889F',
          500: '#DF5E7E',
          600: '#B83B5E',
        },
        emeraldGlow: {
          900: '#061C14',
          800: '#0B3325',
          700: '#124D39',
          600: '#1C6F53',
          500: '#2B9E78',
        }
      },
      boxShadow: {
        'glow-gold': '0 0 25px rgba(212, 170, 100, 0.35)',
        'glow-rose': '0 0 25px rgba(223, 94, 126, 0.35)',
        'glow-emerald': '0 0 25px rgba(43, 158, 120, 0.35)',
        'luxury': '0 20px 50px -10px rgba(0, 0, 0, 0.5), 0 10px 20px -5px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
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
