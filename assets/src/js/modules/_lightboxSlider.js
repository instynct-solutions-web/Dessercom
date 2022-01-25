import Flickity from 'flickity';
// import 'flickity-as-nav-for';
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
		this.manageEvents();
	}

	manageEvents() {
		if (this.sliderList) {
			for (let i = 0; i < this.sliderList.length; i++) {
				this.initSlider(this.sliderList[i], i);
			}
		}
		if (this.toggleList) {
			for (let i = 0; i < this.toggleList.length; i++) {
				this.toggleList[i].addEventListener('click', () => {
					this.toggleSlider(i);
				});
			}
		}

		if (this.closeList) {
			for (let i = 0; i < this.closeList.length; i++) {
				this.closeList[i].addEventListener('click', () => {
					this.closeSlider(i);
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
			pageDots: false,
			prevNextButtons: false,
		});
	}

	toggleSlider(i) {
		const closeClass = this.closeList[i].classList[0];
		const sliderContainerClass = this.sliderContainerList[i].classList[0];
		console.log(this.sliderList[i]);
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
