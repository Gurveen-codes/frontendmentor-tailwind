module.exports = {
	mode: 'jit',
	purge: ['./public/**/*.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				josefin: ['"Josefin Sans"', 'sans-serif'],
			},
			colors: {
				grad: {
					lightLeft: 'hsl(0, 0, 100%)',
					lightRight: 'hsl(0, 100%, 98%)',
					darkLeft: 'hsl(0, 80%, 86%)',
					darkRight: 'hsl(0, 74%, 74%)',
				},
				darkGray: 'hsl(0, 6%, 24%)',
				softRed: 'hsl(0, 93%, 68%)',
				desatRed: 'hsl(0, 36%, 70%)',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
