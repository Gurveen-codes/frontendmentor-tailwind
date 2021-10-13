module.exports = {
	mode: 'jit',
	purge: ['./public/**/*.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				poppins: ['"Poppins"', 'sans-serif'],
			},
			colors: {
				pry: {
					cyan: 'hsl(180, 62%, 55%)',
					blue: 'hsl(212, 86%, 64%)',
					red: 'hsl(0, 78%, 62%)',
					orange: 'hsl(34, 97%, 64%)',
				},
				sec: {
					darkBlue: 'hsl(234, 12%, 34%)',
					grayBlue: 'hsl(229, 6%, 66%)',
					lightGray: 'hsl(0, 0%, 98%)',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
