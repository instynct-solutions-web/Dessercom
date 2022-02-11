export default class MapShow {
	constructor() {
		// All DOM selector / elements goes here
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
			this.show();
		});
		this.closeMapButton.addEventListener('click', () => {
			this.hide();
		});
	}

	show() {
		this.hero.classList.add(`${this.hero.classList[0]}--hide`);
		this.map.classList.add(`${this.map.classList[0]}--show`);
	}

	hide() {
		this.hero.classList.remove(`${this.hero.classList[0]}--hide`);
		this.map.classList.remove(`${this.map.classList[0]}--show`);
	}
}
