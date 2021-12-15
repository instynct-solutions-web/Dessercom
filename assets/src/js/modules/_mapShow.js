export default class MapShow {
	constructor() {
		// All DOM selector / elements goes here
		this.showMapButton = document.querySelector(' [data-map-show]');
		this.closeMapButton = document.querySelector('[data-map-close]');
		this.hero = document.querySelector('[data-map-hero]');
		if (this.showMapButton) {
			this.manageEvents();
		}
	}

	manageEvents() {
		// All Dom events goes here
		this.showMapButton.addEventListener('click', () => {
			this.hero.classList.add(`${this.hero.classList[0]}--hide`);
		});
		this.closeMapButton.addEventListener('click', () => {
			this.hero.classList.remove(`${this.hero.classList[0]}--hide`);
		});
	}
}
