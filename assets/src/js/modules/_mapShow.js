export default class MapShow {
	constructor() {
		// All DOM selector / elements goes here
		this.body = document.querySelector('body');
		this.header = document.querySelector('[data-header]');
		this.headerElemList = document.querySelectorAll('[data-header-hide]');
		this.showMapButton = document.querySelector(' [data-map-show]');
		this.closeMapButton = document.querySelector('[data-map-close]');
		this.hero = document.querySelector('[data-map-hero]');
		this.map = document.querySelector('[data-map]');
		if (this.showMapButton) {
			this.manageEvents();
		}
	}

	manageEvents() {
		// All Dom events goes here
		this.showMapButton.addEventListener('click', () => {
			this.body.classList.add('noscroll');
			this.show();
		});
		this.closeMapButton.addEventListener('click', () => {
			this.body.classList.remove('noscroll');
			this.hide();
		});
	}

	show() {
		this.header.classList.add(`${this.header.classList[0]}--hide`);
		this.hero.classList.add(`${this.hero.classList[0]}--hide`);
		this.map.classList.add(`${this.map.classList[0]}--show`);
		for (let i = 0; i < this.headerElemList.length; i += 1) {
			this.headerElemList[i].classList.add(`${this.headerElemList[i].classList[0]}--hide`);
		}
	}

	hide() {
		this.header.classList.remove(`${this.header.classList[0]}--hide`);
		this.hero.classList.remove(`${this.hero.classList[0]}--hide`);
		this.map.classList.remove(`${this.map.classList[0]}--show`);
		for (let i = 0; i < this.headerElemList.length; i += 1) {
			this.headerElemList[i].classList.remove(`${this.headerElemList[i].classList[0]}--hide`);
		}
	}
}
