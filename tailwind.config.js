/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontSize: {
				'custom-24': [
					'24px',
					{
						lineHeight: '100%',
						letterSpacing: '0%'
					}
				]
			},
			fontWeight: {
				medium: '500'
			}
		}
	},
	plugins: []
}
