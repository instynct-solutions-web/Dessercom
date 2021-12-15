export default class Menu {
	constructor() {
		this.header = document.querySelector('[data-header]');
		this.navigation = document.querySelector('[data-navigation]');
		this.navigationButton = document.querySelector('[data-navigation-button]');
		this.manageEvents();
	}

	manageEvents() {
		this.navigationButton.addEventListener('click', () => {
			if (!this.navigation.classList.contains(`${this.navigation.classList[0]}--opened`)) {
				this.openMenu();
			} else {
				this.closeMenu();
			}
		});
	}

	openMenu() {
		this.header.classList.add(`${this.header.classList[0]}--opened`);
		this.navigation.classList.add(`${this.navigation.classList[0]}--opened`);
		this.navigationButton.classList.add(`${this.navigationButton.classList[0]}--opened`);
	}

	closeMenu() {
		this.header.classList.remove(`${this.header.classList[0]}--opened`);
		this.navigation.classList.remove(`${this.navigation.classList[0]}--opened`);
		this.navigationButton.classList.remove(`${this.navigationButton.classList[0]}--opened`);
	}
}
