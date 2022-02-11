import {TweenMax} from 'gsap';
import Power1 from 'gsap';

export default class HighlightCursor {
	constructor() {
		// All DOM selector / elements goes here
		this.textCursor = document.querySelector('[data-highlight-cursor]');
		this.textContainer = document.querySelector('[data-highlight-container]');
		this.sectionWrapper = document.querySelector('[data-higlight-wrapper]');
		this.cursorPointer = document.querySelector('[data-cursor-pointer]');
		this.cursorTop = 0;
		if (this.textCursor) {
			this.manageEvents();
		}
	}

	manageEvents() {
		this.textContainer.addEventListener('mouseover', (e) => {
			const cursorClass = this.textCursor.classList[0];
			this.textCursor.classList.add(`${cursorClass}--show`);
			TweenMax.to(this.textCursor, 0.3, {
				scale: 1,
				ease: Power1.easeOut,
			});
		});
		this.textContainer.addEventListener('mouseleave', (e) => {
			const cursorClass = this.textCursor.classList[0];
			this.textCursor.classList.remove(`${cursorClass}--show`);
			TweenMax.to(this.textCursor, 0.3, {
				scale: 0,
				ease: Power1.easeOut,
			});
		});
		this.sectionWrapper.addEventListener('mousemove', (e) => {
			const hoverHighlightRect = this.sectionWrapper.getBoundingClientRect();
			const hoverHighlightWidth = hoverHighlightRect.right - hoverHighlightRect.left;
			const hoverHighlightHeight = hoverHighlightRect.bottom - hoverHighlightRect.top;
			const ballX = HighlightCursor.mapRange(e.clientX, hoverHighlightRect.left, hoverHighlightRect.right, -hoverHighlightWidth / 2, hoverHighlightWidth / 2);
			const ballY = HighlightCursor.mapRange(e.clientY, hoverHighlightRect.top, hoverHighlightRect.bottom, -hoverHighlightHeight / 2, hoverHighlightHeight / 2);
			TweenMax.to(this.textCursor, 0.3, {
				ease: Power1.easeOut,
				x: ballX,
				y: ballY,
			});
		});

		// All Dom events goes here
	}

	static mapRange(value, a, b, c, d) {
		// first map value from (a..b) to (0..1)
		const newValue = (value - a) / (b - a);
		// then map it from (0..1) to (c..d) and return it
		return c + newValue * (d - c);
	}
}
