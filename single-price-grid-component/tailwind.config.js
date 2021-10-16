module.exports = {
	mode: 'jit',
	purge: ['./public/**/*.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				karla: ['"Karla"', 'sans-serif'],
			},
			colors: {
				pry: {
					cyan: 'hsl(179, 62%, 43%)',
					yellow: 'hsl(71, 73%, 54%)',
					cyanLight: '#4ABEBD',
				},
				sec: {
					lightGray: 'hsl(204, 43%, 93%)',
					blueGray: 'hsl(218, 22%, 67%)',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
