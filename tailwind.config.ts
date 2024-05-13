import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { 'trasform': 'translateX(0)' },
          '100%': { 'trasform': 'translateX(50px)' },
        }
      },
      animation: {
        wiggle: 'wiggle 200ms ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'login-switch-botton-active': '2px 2px 6px #d1d9e6, -2px -2px 6px #f9f9f9',
        'login-box': '10px 10px 10px #d1d9d6, -10px -10px 10px #f9f9f9',
        'login-switch-shadow': '4px 4px 10px #d1d9e6, -4px -4px 10px #d1d9e6',
        'login-switch-circle-shadow': 'inset 8px 8px 12px #b8bec7, inset -8px -8px 12px #fff',
        'login-botton-shadow': '8px 8px 16px #d1d9e6, -8px -8px 16px #f9f9f9',
        'login-input-shadow': 'inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9',
        'login-button-hover-shadow': '6px 6px 10px #d1d9e6, -6px -6px 10px #f9f9f9',
        'login-circle-card': 'inset -35px 0px 30px 5px #8babd0, 55px 0px 53px 2px #81a0bc'
      }
    },
  },
  plugins: [],
}
export default config
