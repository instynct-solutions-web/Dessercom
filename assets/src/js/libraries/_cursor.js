/* eslint-disable */
import { TweenMax } from 'gsap';

export default class Cursor {
	constructor() {
		this.cursorPointerList = document.querySelectorAll('[data-cursor-pointer]');
		this.cursor = document.querySelector('[data-cursor-container]');
		this.cursorTop = 0;
		this.cursorTimer = '';
		this.cursorElementList = document.querySelectorAll('[data-cursor]');
		this.cursorAttribute = [];
		if (this.cursorElementList.length !== 0) {
			this.cursorAttribute.push('');
		}

		if (this.cursor) {
			this.cursor.classList.remove(this.cursor.classList[1]);
			document.addEventListener('mousemove', (e) => {
				this.moveCursor(e, this.cursor, this.cursorPointerList, this.cursorTop);
				clearTimeout(this.cursorTimer);
				this.cursorTimer = setTimeout(this.mouseStopped(this.cursor, this.cursorPointerList), 100);
			});
		}

		if (this.cursorElementList.length !== 0) {
			for (let i = 0; i < this.cursorElementList.length; i += 1) {
				if (this.cursor) {
					this.cursorElement = this.cursorElementList[i];
					this.cursorClass = this.cursor.classList[0];
					this.cursorAttribute[i] = this.cursorElement.getAttribute('data-cursor-class');
					if (!this.cursorAttribute[i]) {
						this.cursorElement.addEventListener('mouseover', () => {
							if (!this.cursor.classList.contains(`${this.cursorClass}--animate`)) {
								this.cursor.classList.add(`${this.cursorClass}--animate`);
							}
						});
						this.cursorElement.addEventListener('mouseleave', () => {
							this.cursor.classList.remove(`${this.cursorClass}--animate`);
						});
					} else {
						this.cursorElement.addEventListener('mouseover', () => {
							if (!this.cursor.classList.contains(`${this.cursorClass}--${this.cursorAttribute[i]}`)) {
								this.cursor.classList.add(`${this.cursorClass}--${this.cursorAttribute[i]}`);
							}
						});
						this.cursorElement.addEventListener('mouseleave', () => {
							this.cursor.classList.remove(`${this.cursorClass}--${this.cursorAttribute[i]}`);
						});
					}
				}
			}
		}
	}

	mouseStopped(cursor, cursorPointers) {
		cursor.classList.remove('moving');
		for (let i = 0; i < cursorPointers.length; i += 1) {
			this.cursorPointer = cursorPointers[i];
			if (this.cursorPointer.classList.contains('cursor__image')) {
				TweenMax.to(this.cursorPointer, 0.5, {
					rotation: 0,
				});
			}
		}
	}

	moveCursor(e, cursor, cursorPointers, offsetCursorTop) {
		cursor.classList.add('moving');
		for (let i = 0; i < cursorPointers.length; i += 1) {
			this.cursorPointer = cursorPointers[i];
			this.cursorPointerHeight = cursorPointers[i].offsetHeight;
			this.cursorPointerWidth = cursorPointers[i].offsetWidth;

			if (this.cursorPointer.classList.contains('cursor__image')) {
				const oldx = e.clientX;
				if (e.clientX > oldx) {
					TweenMax.to(cursorPointers[i], 0.5, {
						x: e.clientX - parseFloat(this.cursorPointerWidth / 2),
						y: e.clientY - parseFloat(this.cursorPointerHeight / 2) + offsetCursorTop,
						rotation: e.clientX / 100,
					});
				} else if (e.clientX < oldx) {
					TweenMax.to(cursorPointers[i], 0.5, {
						x: e.clientX - parseFloat(this.cursorPointerWidth / 2),
						y: e.clientY - parseFloat(this.cursorPointerHeight / 2) + offsetCursorTop,
						rotation: -e.clientX / 100,
					});
				}
			} else {
				TweenMax.to(cursorPointers[i], 0.1, {
					x: e.clientX - parseFloat(this.cursorPointerWidth / 2),
					y: e.clientY - parseFloat(this.cursorPointerHeight / 2) + offsetCursorTop,
				});
			}
		}
	}
}
