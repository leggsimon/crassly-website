import type { Config } from 'tailwindcss';

export default {
	content: ['./app/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			display: ['Rowdies', 'sans-serif'],
		},
		extend: {},
	},
	plugins: [],
} satisfies Config;
