module.exports = {
	mode: 'jit',
	purge: ['./public/**/*.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		// screens: {
		// 	xs: '375px',
		// },
		extend: {
			fontFamily: {
				lexend: ['"Lexend Deca"', 'sans-serif'],
				shoulders: ['"Big Shoulders Display"', 'cursive'],
			},
		},
		colors: {
			org: 'hsl(31, 77%, 52%)',
			cyan: {
				light: 'hsl(184, 100%, 22%)',
				dark: 'hsl(179, 100%, 13%)',
			},
			twhite: 'hsla(0, 0%, 100%, 0.75)',
			lgray: 'hsl(0, 0%, 95%)',
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
