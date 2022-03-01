import Flickity from 'flickity';
import 'flickity-sync';
import 'flickity-imagesloaded';
import Utils from '../helpers/_utils';

export default class HeroSlider {
	constructor() {
		// All DOM selector / elements goes here
		this.cursor = document.querySelector('[data-cursor-container]');
		this.sliderContainer = document.querySelector('[data-hero-slider-container]');
		this.slider = document.querySelector('[data-hero-slider]');
		this.sliderNav = document.querySelector('[data-hero-slider-nav]');
		this.prev = document.querySelector('[data-hero-slider-prev]');
		this.next = document.querySelector('[data-hero-slider-next]');
		this.manageEvents();
	}

	manageEvents() {
		// All Dom events goes here
		if (this.slider) {
			this.flkty = new Flickity(this.slider, {
				// options
				sync: this.sliderNav,
				wrapAround: true,
				imagesLoaded: true,
				draggable: true,
				pageDots: false,
				prevNextButtons: false,
			});
			this.sliderContainer.addEventListener('click', () => {
				const xRatio = Utils.calculateRatio(this.sliderContainer);
				if (xRatio > 50) {
					this.flkty.next();
				} else {
					this.flkty.previous();
				}
			});
			this.sliderContainer.addEventListener('mousemove', () => {
				const xRatio = Utils.calculateRatio(this.sliderContainer);
				const cursorClass = this.cursor.classList[0];
				if (xRatio > 50) {
					if (!this.cursor.classList.contains(`${cursorClass}--slider-next`)) {
						this.cursor.classList.add(`${cursorClass}--slider-next`);
						this.cursor.classList.remove(`${cursorClass}--slider-prev`);
					}
				} else {
					if (!this.cursor.classList.contains(`${cursorClass}--slider-prev`)) {
						this.cursor.classList.add(`${cursorClass}--slider-prev`);
						this.cursor.classList.remove(`${cursorClass}--slider-next`);
					}
				}
			});
			this.sliderContainer.addEventListener('mouseleave', () => {
				const cursorClass = this.cursor.classList[0];
				this.cursor.classList.remove(`${cursorClass}--slider-next`);
				this.cursor.classList.remove(`${cursorClass}--slider-prev`);
			});
			setTimeout(() => {
				this.flkty.resize();
			}, 10);
			this.asNavFor = new Flickity(this.sliderNav, {
				sync: this.slider,
				wrapAround: true,
				draggable: false,
				pageDots: false,
				prevNextButtons: false,
			});
			setTimeout(() => {
				this.asNavFor.resize();
			}, 10);
			this.prev.addEventListener('click', () => {
				this.flkty.previous();
			});
			this.next.addEventListener('click', () => {
				this.flkty.next();
			});
		}
	}
}
