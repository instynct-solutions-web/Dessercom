export default class ContactDrawer {
	constructor() {
		// All DOM selector / elements goes here
		this.toggleList = document.querySelectorAll('[data-contact-drawer-toggle]');
		this.toggleContainerList = document.querySelectorAll('[data-contact-drawer-container]');
		this.toggleIconList = document.querySelectorAll('[data-contact-drawer-icon]');
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
					ContactDrawer.close(toggle, icon, container);
				} else {
					this.open(toggle, icon, container);
				}
			});
		}
	}

	open(clickedElem, elemIcon, elemContainer) {
		const toggle = clickedElem;
		const container = elemContainer;
		const icon = elemIcon;
		for (let index = 0; index < this.toggleContainerList.length; index += 1) {
			this.toggleContainerList[index].classList.remove(`${container.classList[0]}--open`);
			this.toggleList[index].classList.remove(`${toggle.classList[0]}--open`);
			this.toggleIconList[index].classList.remove(`${icon.classList[0]}--open`);
		}
		container.classList.add(`${container.classList[0]}--open`);
		toggle.classList.add(`${toggle.classList[0]}--open`);
		icon.classList.add(`${icon.classList[0]}--open`);
	}

	static close(clickedElem, elemIcon, elemContainer) {
		const toggle = clickedElem;
		const container = elemContainer;
		const icon = elemIcon;
		container.classList.remove(`${container.classList[0]}--open`);
		toggle.classList.remove(`${toggle.classList[0]}--open`);
		icon.classList.remove(`${icon.classList[0]}--open`);
	}
}
