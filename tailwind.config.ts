import type { Config } from "tailwindcss";

const toRGBA = (myColor: any, opacity: number = 1) => `rgb(var(${myColor}),${opacity})`;

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      ibmplex: 'IBM Plex Sans, sans-serif'
    },
    fontSize: {
      xs: 'var(--text-body-xs)',
      sm: 'var(--text-body-sm)',
      md: 'var(--text-body-md)',
      lg: 'var(--text-body-lg)',
      xl: 'var(--text-body-xl)',
    },
    screens: {
      'mobile-xs': 'var(--screen-mobile-xs)',
      'mobile-sm': 'var(--screen-mobile-sm)',
      // => @media (min-width: 640px) { ... }
      'tablet': 'var(--screen-tablet)',
      // => @media (min-width: 768px) { ... }
      'desktop': 'var(--screen-desktop)',
      // => @media (min-width: 1024px) { ... }
      'desktop-lg': 'var(--screen-desktop-lg)',
      // => @media (min-width: 1280px) { ... }
      'desktop-xl': 'var(--screen-desktop-xl)',
      // => @media (min-width: 1536px) { ... }
    },
    spacing: {
      1: 'var(--spacing-1)',
      2: 'var(--spacing-2)',
      3: 'var(--spacing-3)',
      4: 'var(--spacing-4)',
      5: 'var(--spacing-5)',
      6: 'var(--spacing-6)',
      7: 'var(--spacing-7)',
      8: 'var(--spacing-8)',
      9: 'var(--spacing-9)',
      10: 'var(--spacing-10)',
      11: 'var(--spacing-11)',
      12: 'var(--spacing-12)',
      13: 'var(--spacing-13)',
      14: 'var(--spacing-14)',
    },
    borderRadius: {
      0: 'var(--border-radius-none)',
      1: 'var(--border-radius-sm)',
      2: 'var(--border-radius-md)',
      3: 'var(--border-radius-lg)',
    },
    backgroundColor: {
      btn: {
        'primary': toRGBA('--primary'),
        'primary-disabled': toRGBA('--surface-400'),
        'secondary-dark': toRGBA('--bg-dark-50'),
        'secondary-light': toRGBA('--bg-dark-50'),
        'light-disabled': toRGBA('--bg-dark-50'),
        'dark-disabled': toRGBA('--surface-600'),
      },
    },
    extend: {
      colors: {
        'primary': toRGBA('--primary'),
        'secondary': toRGBA('--secondary'),
        'primary-50': toRGBA('--primary-50'),
        'primary-100': toRGBA('--primary-100'),
        'primary-200': toRGBA('--primary-200'),
        'secondary-50': toRGBA('--secondary-50'),
        'secondary-100': toRGBA('--secondary-100'),
        'secondary-200': toRGBA('--secondary-200'),
        'surface-200': toRGBA('--surface-200'),
        'surface-300': toRGBA('--surface-300'),
        'surface-700': toRGBA('--surface-700'),
        'disabled': toRGBA('--surface-600'),
      },
      blur: {
        default: 'var(--blur)',
      }
    },
  },
  plugins: [],
};
export default config;
