
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Poppins', 'Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				indigo: {
					50: 'hsl(var(--indigo-50))',
					100: 'hsl(var(--indigo-100))',
					200: 'hsl(var(--indigo-200))',
					300: 'hsl(var(--indigo-300))',
					400: 'hsl(var(--indigo-400))',
					500: 'hsl(var(--indigo-500))',
					600: 'hsl(var(--indigo-600))',
					700: 'hsl(var(--indigo-700))',
					800: 'hsl(var(--indigo-800))',
					900: 'hsl(var(--indigo-900))'
				},
				teal: {
					50: 'hsl(var(--teal-50))',
					100: 'hsl(var(--teal-100))',
					200: 'hsl(var(--teal-200))',
					300: 'hsl(var(--teal-300))',
					400: 'hsl(var(--teal-400))',
					500: 'hsl(var(--teal-500))',
					600: 'hsl(var(--teal-600))',
					700: 'hsl(var(--teal-700))',
					800: 'hsl(var(--teal-800))',
					900: 'hsl(var(--teal-900))'
				},
				purple: {
					50: 'hsl(var(--purple-50))',
					100: 'hsl(var(--purple-100))',
					200: 'hsl(var(--purple-200))',
					300: 'hsl(var(--purple-300))',
					400: 'hsl(var(--purple-400))',
					500: 'hsl(var(--purple-500))',
					600: 'hsl(var(--purple-600))',
					700: 'hsl(var(--purple-700))',
					800: 'hsl(var(--purple-800))',
					900: 'hsl(var(--purple-900))'
				},
				rose: {
					50: 'hsl(var(--rose-50))',
					100: 'hsl(var(--rose-100))',
					200: 'hsl(var(--rose-200))',
					300: 'hsl(var(--rose-300))',
					400: 'hsl(var(--rose-400))',
					500: 'hsl(var(--rose-500))',
					600: 'hsl(var(--rose-600))',
					700: 'hsl(var(--rose-700))',
					800: 'hsl(var(--rose-800))',
					900: 'hsl(var(--rose-900))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
					'25%': { transform: 'translateY(-8px) rotate(-1deg)' },
					'75%': { transform: 'translateY(8px) rotate(1deg)' }
				},
				'pulse': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				},
				'bounce-slow': {
					'0%, 100%': { transform: 'translateY(-5%)' },
					'50%': { transform: 'translateY(0)' }
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'blink': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0' }
				},
				'gradient': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'fade-out': 'fade-out 0.5s ease-out forwards',
				'float': 'float 6s ease-in-out infinite',
				'pulse': 'pulse 2s ease-in-out infinite',
				'bounce-slow': 'bounce-slow 4s ease-in-out infinite',
				'spin-slow': 'spin-slow 8s linear infinite',
				'blink': 'blink 1s step-end infinite',
				'gradient': 'gradient 8s ease infinite',
			},
			backgroundSize: {
				'300%': '300%',
			},
			transitionProperty: {
				'width': 'width',
				'height': 'height',
				'spacing': 'margin, padding',
			},
			boxShadow: {
				'glow': '0 0 15px 2px rgba(99, 102, 241, 0.3)',
				'glow-teal': '0 0 15px 2px rgba(20, 184, 166, 0.3)',
				'glow-purple': '0 0 15px 2px rgba(139, 92, 246, 0.3)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
