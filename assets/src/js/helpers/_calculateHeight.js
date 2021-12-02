export default class CalculateHeight {
	constructor() {
		this.elemCalcMobile = document.querySelectorAll('[data-calc-mobile]');
		this.manageEvents();
	}

	manageEvents() {
		// Calculate True 100vh for Mobile on selected element
		const domBody = document.querySelector('body');
		domBody.style.height = `${window.innerHeight}px`;
		if (this.elemCalcMobile.length > 0) {
			for (let i = 0; i < this.elemCalcMobile.length; i += 1) {
				this.setHeight(this.elemCalcMobile[i]);
			}
		}
		window.addEventListener('resize', () => {
			domBody.style.height = `${window.innerHeight}px`;
			for (let i = 0; i < this.elemCalcMobile.length; i += 1) {
				this.setHeight(this.elemCalcMobile[i]);
			}
		});
	}

	// Calculate True 100vh for Mobile on selected element
	setHeight(element) {
		const windowH = window.innerHeight;
		this.element = element;
		this.element.style.height = `${windowH}px`;
	}
}
