import type { Config } from 'tailwindcss';

export default {
	content: ['./app/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			display: ['Rowdies', 'sans-serif'],
		},
		colors: {
			transparent: 'transparent',
			white: '#ffffff',
			black: '#000000',
			linen: '#F8F7F3',
			orange: '#EF7850',
			casal: '#2A5462',
			lavender: '#ABA9FC',
			sand: '#FCE1AA',
			peach: '#FEE3C6',
		},
		extend: {},
	},
	plugins: [],
} satisfies Config;
