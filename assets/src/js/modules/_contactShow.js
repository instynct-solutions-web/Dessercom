export default class ContactShow {
	constructor() {
		// All DOM selector / elements goes here
		this.showContactButton = document.querySelector(' [data-contact-show]');
		this.closeContactButton = document.querySelector('[data-contact-close]');
		this.hero = document.querySelector('[data-contact-hero]');

		if (this.showContactButton) {
			this.manageEvents();
		}
	}

	manageEvents() {
		// All Dom events goes here
		this.showContactButton.addEventListener('click', () => {
			this.hero.classList.add(`${this.hero.classList[0]}--hide`);
		});
		this.closeContactButton.addEventListener('click', () => {
			this.hero.classList.remove(`${this.hero.classList[0]}--hide`);
		});
	}
}
