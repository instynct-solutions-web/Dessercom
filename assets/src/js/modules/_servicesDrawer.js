export default class ServicesDrawer {
	constructor() {
		// All DOM selector / elements goes here
		this.toggleList = document.querySelectorAll('[data-services-drawer-toggle]');
		this.toggleContainerList = document.querySelectorAll('[data-services-drawer-container]');
		this.toggleIconList = document.querySelectorAll('[data-services-drawer-icon]');
		this.manageEvents();
	}

	manageEvents() {
		// All Dom events goes here
		for (let index = 0; index < this.toggleList.length; index += 1) {
			const toggle = this.toggleList[index];
			const container = this.toggleContainerList[index];
			const icon = this.toggleIconList[index];
			toggle.addEventListener('click', () => {
				if (container.classList.contains(`${container.classList[0]}--open`)) {
					this.close(index);
				} else {
					this.open(index);
				}
			});
		}
	}

	open(i) {
		const toggle = this.toggleList[i];
		const container = this.toggleContainerList[i];
		const icon = this.toggleIconList[i];
		for (let index = 0; index < this.toggleContainerList.length; index += 1) {
			this.toggleContainerList[index].classList.remove(`${container.classList[0]}--open`);
			this.toggleList[index].classList.remove(`${toggle.classList[0]}--open`);
			this.toggleIconList[index].classList.remove(`${icon.classList[0]}--open`);
		}
		container.classList.add(`${container.classList[0]}--open`);
		toggle.classList.add(`${toggle.classList[0]}--open`);
		icon.classList.add(`${icon.classList[0]}--open`);
	}

	close(i) {
		const toggle = this.toggleList[i];
		const container = this.toggleContainerList[i];
		const icon = this.toggleIconList[i];
		container.classList.remove(`${container.classList[0]}--open`);
		toggle.classList.remove(`${toggle.classList[0]}--open`);
		icon.classList.remove(`${icon.classList[0]}--open`);
	}
}
