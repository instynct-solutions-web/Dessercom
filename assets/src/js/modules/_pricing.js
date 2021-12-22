export default class Pricing {
	constructor() {
		this.drawerList = document.querySelectorAll('[data-pricing]');
		this.drawerButtonList = document.querySelectorAll('[data-pricing-button]');
		this.manageEvents();
	}

	manageEvents() {
		if (this.drawerList.length !== 0) {
			this.drawerList[1].classList.add(`${this.drawerList[1].classList[0]}--closed`);
			for (let i = 0; i < this.drawerList.length; i += 1) {
				this.drawerButtonList[i].addEventListener('click', () => {
					this.toggleDrawer(i);
				});
			}
		}
	}

	toggleDrawer(index) {
		this.drawerList[index].classList.toggle(`${this.drawerList[index].classList[0]}--closed`);
	}
}
