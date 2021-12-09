export default class Menu {
	constructor() {
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
		this.navigation.classList.add(`${this.navigation.classList[0]}--opened`);
		this.navigationButton.classList.add(`${this.navigationButton.classList[0]}--opened`);
	}

	closeMenu() {
		this.navigation.classList.remove(`${this.navigation.classList[0]}--opened`);
		this.navigationButton.classList.remove(`${this.navigationButton.classList[0]}--opened`);
	}
}
