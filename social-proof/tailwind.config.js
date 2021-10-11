module.exports = {
	mode: 'jit',
	purge: ['./public/**/*.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				pry: {
					magenta: 'hsl(300, 43%, 22%)',
					pink: 'hsl(333, 80%, 67%)',
				},
				sec: {
					darkGray: 'hsl(303, 10%, 53%)',
					lightGray: 'hsl(300, 24%, 96%)',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
