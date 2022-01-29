import Flickity from 'flickity';
import 'flickity-sync';
import 'flickity-imagesloaded';

export default class LightboxSlider {
	constructor() {
		// All DOM selector / elements goes here
		this.sliderContainerList = document.querySelectorAll('[data-lightbox-slider-container]');
		this.sliderList = document.querySelectorAll('[data-lightbox-slider]');
		this.toggleList = document.querySelectorAll('[data-lightbox-slider-toggle]');
		this.closeList = document.querySelectorAll('[data-lightbox-slider-close]');
		this.prevList = document.querySelectorAll('[data-lightbox-slider-prev]');
		this.nextList = document.querySelectorAll('[data-lightbox-slider-next]');
		this.flktyList = [];
		this.speedX = 0;
		this.velocity = 0.1;
		this.loop;
		this.currentFrame;
		this.mouseEvent;
		this.manageEvents();
	}

	manageEvents() {
		if (this.sliderList) {
			for (let i = 0; i < this.sliderList.length; i++) {
				this.initSlider(this.sliderList[i], i);
				this.sliderContainerList[i].addEventListener('mousemove', (event) => {
					this.mouseEvent = event;
				});
			}
		}
		if (this.toggleList) {
			for (let i = 0; i < this.toggleList.length; i++) {
				this.toggleList[i].addEventListener('click', (e) => {
					this.mouseEvent = e;
					this.toggleSlider(i);
					this.startLoop(this.mouseEvent, i);
				});
			}
		}

		if (this.closeList) {
			for (let i = 0; i < this.closeList.length; i++) {
				this.closeList[i].addEventListener('click', () => {
					this.closeSlider(i);
					this.stopLoop(this.mouseEvent, i);
				});
			}
		}
		for (let i = 0; i < this.prevList.length; i++) {
			this.prevList[i].addEventListener('click', () => {
				this.flktyList[i].previous();
			});
			this.nextList[i].addEventListener('click', () => {
				this.flktyList[i].next();
			});
		}
	}

	initSlider(slider, index) {
		this.flktyList[index] = new Flickity(slider, {
			// options
			wrapAround: true,
			imagesLoaded: true,
			draggable: true,
			freeScroll: true,
			pageDots: false,
			prevNextButtons: false,
		});
		console.log(this.flktyList[index]);
	}

	startLoop(event, index) {
		if (!this.loop) {
			const flickitySlider = this.flktyList[index];
			const rect = this.sliderList[index].getBoundingClientRect();
			const xWidth = rect.right - rect.left;
			this.loop = window.requestAnimationFrame(() => {
				this.moveSlider(index, event, rect, xWidth, flickitySlider);
			});
		}
	}

	stopLoop(event, index) {
		if (this.loop) {
			window.cancelAnimationFrame(this.loop);
			this.loop = undefined;
		}
	}

	map(value, x1, y1, x2, y2) {
		return ((value - x1) * (y2 - x2)) / (y1 - x1) + x2;
	}

	moveSlider(index, event, rect, xWidth, flickitySlider) {
		this.loop = undefined;
		const e = this.mouseEvent;
		const x = e.clientX - rect.left; // x position within the element.
		const xRatio = (x / xWidth) * 100;
		const mapSpeed = this.map(xRatio, 0, 100, -10, 10);
		this.speedX = mapSpeed;
		flickitySlider.x += Math.floor(this.speedX);
		flickitySlider.integratePhysics();
		flickitySlider.settle(flickitySlider.x);

		/* 		for (let i = 0; i < flickitySlider.slides.length; i++) {
			flickitySlider.slides[i].updateTarget();
		}
		flickitySlider.updateSelectedSlide();
		console.log(flickitySlider.slides[0]); */
		this.startLoop(event, index);
	}

	toggleSlider(i) {
		const closeClass = this.closeList[i].classList[0];
		const sliderContainerClass = this.sliderContainerList[i].classList[0];
		this.closeList[i].classList.add(`${closeClass}--visible`);
		this.sliderContainerList[i].classList.add(`${sliderContainerClass}--visible`);
	}

	closeSlider(i) {
		const closeClass = this.closeList[i].classList[0];
		const sliderContainerClass = this.sliderContainerList[i].classList[0];
		this.closeList[i].classList.remove(`${closeClass}--visible`);
		this.sliderContainerList[i].classList.remove(`${sliderContainerClass}--visible`);
	}
}