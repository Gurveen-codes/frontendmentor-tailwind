module.exports = {
	mode: 'jit',
	purge: ['./public/**/*.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				manrope: ['"Manrope"', 'sans-serif'],
			},
			colors: {
				arrow: 'hsl(217, 19%, 35%)',
				light: 'hsl(212, 23%, 69%)',
				para: 'hsl(214, 17%, 51%)',
				back: 'hsl(210, 46%, 95%)',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
