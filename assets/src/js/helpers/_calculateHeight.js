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
		if (window.innerWidth >= 1024) {
			CalculateHeight.setHeight(this.domBody, this.windowHeight);
		} else {
			CalculateHeight.autoHeight(this.domBody);
		}
		if (this.elemCalcMobile.length > 0) {
			for (let i = 0; i < this.elemCalcMobile.length; i += 1) {
				if (this.elemCalcMobile[i].getAttribute('data-calc-mobile-responsive')) {
					this.elemHeightMobile.push(this.elemCalcMobile[i].getAttribute('data-calc-mobile-responsive'));
				} else {
					this.elemHeightMobile.push('full');
				}
				if (this.elemHeightMobile[i] !== 'full') {
					if (window.innerWidth >= 1024) {
						CalculateHeight.setHeight(this.elemCalcMobile[i], this.windowHeight);
					} else {
						CalculateHeight.autoHeight(this.elemCalcMobile[i]);
					}
				} else {
					CalculateHeight.setHeight(this.elemCalcMobile[i], this.windowHeight);
				}
			}
		}
		window.addEventListener('resize', () => {
			this.windowHeight = `${window.innerHeight}px`;
			if (window.innerWidth >= 1024) {
				CalculateHeight.setHeight(this.domBody, this.windowHeight);
			} else {
				CalculateHeight.autoHeight(this.domBody);
			}
			for (let i = 0; i < this.elemCalcMobile.length; i += 1) {
				if (this.elemHeightMobile[i] !== 'full') {
					if (window.innerWidth >= 1024) {
						CalculateHeight.setHeight(this.elemCalcMobile[i], this.windowHeight);
					} else {
						CalculateHeight.autoHeight(this.elemCalcMobile[i]);
					}
				} else {
					CalculateHeight.setHeight(this.elemCalcMobile[i], this.windowHeight);
				}
			}
		});
	}

	static setHeight(element, windowHeight) {
		element.style.height = windowHeight;
	}

	static autoHeight(element) {
		element.style.height = 'auto';
	}
}
