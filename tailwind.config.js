/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: false,
	theme: {
		extend: {
			gridTemplateColumns: {
				'auto-fill-350': 'repeat(auto-fill, minmax(350px, 1fr))',
			},
		},
	},
	plugins: [],
}
