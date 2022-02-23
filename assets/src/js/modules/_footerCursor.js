import {TweenMax} from 'gsap';
import Power1 from 'gsap';

export default class FooterCursor {
	constructor() {
		// All DOM selector / elements goes here
		this.footerCursorList = document.querySelectorAll('[data-footer-cursor]');
		this.footerLinkList = document.querySelectorAll('[data-footer-link]');
		this.cursorPointer = document.querySelector('[data-cursor-pointer]');
		this.cursorTop = 0;
		if (this.footerCursorList) {
			this.manageEvents();
		}
	}

	manageEvents() {
		for (let i = 0; i < this.footerLinkList.length; i++) {
			this.footerLinkList[i].addEventListener('mouseenter', (e) => {
				const cursorClass = this.footerCursorList[i].classList[0];
				this.footerCursorList[i].classList.add(`${cursorClass}--show`);
				TweenMax.to(this.footerCursorList[i], 1, {
					scale: 6,
					ease: Power1.easeOut,
				});
			});
			this.footerLinkList[i].addEventListener('mouseout', (e) => {
				const cursorClass = this.footerCursorList[i].classList[0];
				this.footerCursorList[i].classList.remove(`${cursorClass}--show`);
				TweenMax.to(this.footerCursorList[i], 1, {
					scale: 0,
					ease: Power1.easeOut,
				});
			});
			/* this.footerLinkList[i].addEventListener('mousemove', (e) => {
				const footerCursorRect = this.footerCursorList[i].getBoundingClientRect();
				const hoverFooterRect = this.footerLinkList[i].getBoundingClientRect();
				const ballX = e.clientX - footerCursorRect.left - 100;
				// const ballY = e.clientY - hoverFooterRect.top - 50;
				TweenMax.to(this.footerCursorList[i], 0.3, {
					ease: Power1.easeOut,
					x: ballX,
					// y: ballY,
				});
			}); */
		}
		// All Dom events goes here
	}
}
