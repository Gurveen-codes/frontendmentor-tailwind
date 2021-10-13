module.exports = {
	mode: 'jit',
	purge: ['./public/**/*.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				kumbh: ['"Kumbh Sans"', 'sans-serif'],
			},
			colors: {
				grad: {
					violet: 'hsl(273, 75%, 66%)',
					blue: 'hsl(240, 73%, 65%)',
				},
				pry: {
					text: 'hsl(238, 29%, 16%)',
					softRed: 'hsl(14, 88%, 65%)',
				},
				sec: {
					veryDarkBlue: 'hsl(237, 12%, 33%)',
					darkBlue: 'hsl(240, 6%, 50%)',
					lightBlue: 'hsl(240, 5%, 91%)',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
