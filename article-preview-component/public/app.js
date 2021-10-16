const bottomFront = document.querySelector('.bottom-f')
const bottomBack = document.querySelector('.bottom-b')

const shareButtons = document.querySelectorAll('.share')

shareButtons.forEach((button) => {
	button.addEventListener('click', () => {
		if (bottomFront.style.display !== 'none') {
			bottomFront.style.display = 'none'
			bottomBack.style.display = 'flex'
		} else {
			bottomFront.style.display = 'flex'
			bottomBack.style.display = 'none'
		}
	})
})

// window.addEventListener('resize', (e) => {
// 	const currentWidth = e.target.innerWidth
// 	if (currentWidth >= 768) {
// 		bottomBack.style.display = 'flex'
// 	}
// })
