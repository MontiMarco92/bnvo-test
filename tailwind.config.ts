import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				'day-darker': '#002859',
				'day-lighter': '#035AC5',
				'day-dark-5': '##C0CCDA',
				'day-dark-4': '#647184',
				'day-light-4': '#EFF2F7',
				'day-light-5': '#F9FAFC',
				'day-light-3': '#E5E9F2',
				'day-blue-4': '#C6DFFE',
				border: '#F5F5F5',
			},
			boxShadow: {
				form: '0px 0px 4.387px 0px rgba(0, 0, 0, 0.02), 0px 0px 27px 0px rgba(0, 0, 0, 0.04);',
			},
		},
	},
	plugins: [],
};
export default config;
