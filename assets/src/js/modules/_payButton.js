export default class PayButton {
	constructor() {
		this.button = document.querySelector('[data-invoice-button]');
		this.buttonContainer = document.querySelector('[data-invoice-button-container]');
		this.mock = document.querySelector('[data-invoice-mock]');
		this.manageEvents();
	}

	manageEvents() {
		this.buttonContainer.addEventListener('mouseover', () => {
			this.mock.classList.add(`${this.mock.classList[1]}--hide`);
		});
		this.buttonContainer.addEventListener('mouseout', () => {
			this.mock.classList.remove(`${this.mock.classList[1]}--hide`);
		});
	}
}
