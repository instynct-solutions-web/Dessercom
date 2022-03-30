export default class CalculateHeight {
	constructor() {
		this.windowHeight = 0;
		this.elemCalcMobile = document.querySelectorAll('[data-calc-mobile]');
		this.elemHeightMobile = [];
		this.domBody = document.querySelector('body');
		this.manageEvents();
	}

	manageEvents() {
		this.windowHeight = `${window.innerHeight}px`;
		if (this.domBody.classList.contains('wolfpack-desktop')) {
			CalculateHeight.setHeight(this.domBody, this.windowHeight);
		}
		if (this.elemCalcMobile.length > 0) {
			for (let i = 0; i < this.elemCalcMobile.length; i += 1) {
				if (this.elemCalcMobile[i].getAttribute('data-calc-mobile-responsive')) {
					this.elemHeightMobile.push(this.elemCalcMobile[i].getAttribute('data-calc-mobile-responsive'));
				} else {
					this.elemHeightMobile.push('full');
				}
				if (this.elemHeightMobile[i] !== 'full') {
					if (this.domBody.classList.contains('wolfpack-desktop')) {
						CalculateHeight.setHeight(this.elemCalcMobile[i], this.windowHeight);
					}
				} else {
					CalculateHeight.setHeight(this.elemCalcMobile[i], this.windowHeight);
				}
			}
		}
	}

	static setHeight(element, windowHeight) {
		element.style.height = windowHeight;
	}
}
