const input = document.querySelector('input')
const warnings = document.querySelectorAll('.warn')
const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

input.addEventListener('input', (e) => {
	const value = e.target.value
	if (!regex.test(value)) {
		warnings.forEach((warn) => (warn.style.visibility = 'visible'))
	} else {
		warnings.forEach((warn) => (warn.style.visibility = 'hidden'))
	}
})
