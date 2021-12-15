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
		for (let index = 0; index < this.toggleList.length; index++) {
			let toggle = this.toggleList[index];
			let container = this.toggleContainerList[index];
			let icon = this.toggleIconList[index];
			toggle.addEventListener('click', () => {
				if (container.classList.contains(`${container.classList[0]}--open`)) {
					this.close(toggle, icon, container);
				} else {
					this.open(toggle, icon, container);
				}
			});
		}
	}
	open(clickedElem, elemIcon, elemContainer) {
		let toggle = clickedElem;
		let container = elemContainer;
		let icon = elemIcon;
		for (let index = 0; index < this.toggleContainerList.length; index++) {
			this.toggleContainerList[index].classList.remove(`${container.classList[0]}--open`);
			this.toggleList[index].classList.remove(`${toggle.classList[0]}--open`);
			this.toggleIconList[index].classList.remove(`${icon.classList[0]}--open`);
		}
		container.classList.add(`${container.classList[0]}--open`);
		toggle.classList.add(`${toggle.classList[0]}--open`);
		icon.classList.add(`${icon.classList[0]}--open`);
	}
	close(clickedElem, elemIcon, elemContainer) {
		let toggle = clickedElem;
		let container = elemContainer;
		let icon = elemIcon;
		container.classList.remove(`${container.classList[0]}--open`);
		toggle.classList.remove(`${toggle.classList[0]}--open`);
		icon.classList.remove(`${icon.classList[0]}--open`);
	}
}
