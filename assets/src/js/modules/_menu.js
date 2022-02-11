export default class Menu {
	constructor() {
		this.body = document.querySelector('body');
		this.header = document.querySelector('[data-header]');
		this.navigation = document.querySelector('[data-navigation]');
		this.navigationButton = document.querySelector('[data-navigation-button]');
		this.headerLinkList = this.header.querySelectorAll('a');
		this.opened = false;
		this.manageEvents();
	}

	manageEvents() {
		this.navigationButton.addEventListener('click', () => {
			if (!this.opened) {
				this.opened = true;
				this.body.classList.add('noscroll');
				this.openMenu();
			} else {
				this.opened = false;
				this.body.classList.remove('noscroll');
				this.closeMenu();
			}
		});
		for (let i = 0; i < this.headerLinkList.length; i += 1) {
			this.headerLinkList[i].addEventListener('click', () => {
				if (this.opened) {
					this.opened = false;
					this.body.classList.remove('noscroll');
					this.closeMenu();
				}
			});
		}
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
