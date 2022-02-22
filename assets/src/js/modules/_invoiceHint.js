export default class InvoiceHint {
	constructor() {
		this.hintIcon = document.querySelector('[data-hint-icon]');
		this.hintImage = document.querySelector('[data-hint-image]');

		if (this.hintImage) {
			this.manageEvents();
		}
	}

	manageEvents() {
		this.hintIcon.addEventListener('mouseover', () => {
			this.hintImage.classList.add(this.hintImage.classList.add(`${this.hintImage.classList[0]}--visible`));
		});
		this.hintIcon.addEventListener('mouseleave', () => {
			this.hintImage.classList.add(this.hintImage.classList.remove(`${this.hintImage.classList[0]}--visible`));
		});
	}
}
