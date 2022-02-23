export default class FilterHover {
	constructor() {
		// All DOM selector / elements goes here
		this.filterItemsList = document.querySelectorAll('[data-sf-count]');
		this.manageEvents();
	}

	manageEvents() {
		for (let i = 0; i < this.filterItemsList.length; i++) {
			this.filterItemsList[i].setAttribute('data-cursor', '');
		}
	}
}
