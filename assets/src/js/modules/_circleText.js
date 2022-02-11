import CircleType from 'circletype';

export default class CircleText {
	constructor() {
		this.circleTextList = document.querySelectorAll('[data-circle-text]');

		this.manageEvents();
	}

	manageEvents() {
		if (this.circleTextList.length !== 0) {
			for (let i = 0; i < this.circleTextList.length; i += 1) {
				const circleClass = this.circleTextList[i].classList[0];
				CircleText.circleText(this.circleTextList[i], circleClass);
				window.addEventListener('resize', () => {
					CircleText.circleText(this.circleTextList[i], circleClass);
				});
			}
		}
	}

	static circleText(thisCircleText, circleClass) {
		setTimeout(() => {
			if (window.getComputedStyle(thisCircleText).display !== 'none') {
				if (!thisCircleText.classList.contains(`${circleClass}--circled`)) {
					const circleText = thisCircleText;
					const circleType = new CircleType(circleText);
					circleText.style.transform = 'rotate(90deg)';
					circleText.style.animationName = 'textRotation';
					circleText.classList.add(`${circleClass}--circled`);
				}
			}
		}, 10);
	}
}
