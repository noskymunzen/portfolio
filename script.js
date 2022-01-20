const theme = localStorage.getItem('theme')

if (!theme) {
	setTheme('light')
} else {
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (let i = 0; themeDots.length > i; i++) {
	themeDots[i].addEventListener('click', function () {
		let mode = this.dataset.mode
		setTheme(mode)
	})
}

function setTheme(mode) {
	const modes = {
		light: 'styles.css',
		turquesa: 'turquesa.css',
		lila: 'lila.css',
		damasco: 'damasco.css'
	};

	const href = modes[mode];

	document.getElementById('theme-style').href = href;

	localStorage.setItem('theme', mode);
}