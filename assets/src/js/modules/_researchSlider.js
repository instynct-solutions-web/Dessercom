import Flickity from 'flickity';
// import 'flickity-as-nav-for';
import 'flickity-sync';
import 'flickity-imagesloaded';

export default class ResearchSlider {
	constructor() {
		// All DOM selector / elements goes here
		this.slider = document.querySelector('[data-research-slider]');
		this.foreground = document.querySelector('[data-research-foreground]');
		this.toggle = document.querySelector('[data-research-slider-toggle]');
		this.close = document.querySelector('[data-research-slider-close]');
		this.text = document.querySelector('[data-research-text]');
		this.imageList = document.querySelector('[data-research-slider-images]');
		this.manageEvents();
	}

	manageEvents() {
		if (this.slider) {
			this.initSlider();
		}
		console.log(this.toggle);
		if (this.toggle) {
			this.toggle.addEventListener('click', () => {
				this.toggleSlider();
			});
		}
		if (this.close) {
			this.close.addEventListener('click', () => {
				this.closeSlider();
			});
		}
	}

	initSlider() {
		this.flkty = new Flickity(this.slider, {
			// options
			wrapAround: true,
			imagesLoaded: true,
			draggable: true,
			pageDots: false,
			prevNextButtons: false,
		});
		console.log(this.flkty);
	}

	toggleSlider() {
		const foregroundClass = this.foreground.classList[0];
		const closeClass = this.close.classList[0];
		const textClass = this.text.classList[0];
		const ulClass = this.imageList.classList[0];

		this.foreground.classList.add(`${foregroundClass}--hide`);
		this.close.classList.add(`${closeClass}--visible`);
		this.text.classList.add(`${textClass}--visible`);
		this.imageList.classList.add(`${ulClass}--visible`);
	}

	closeSlider() {
		const foregroundClass = this.foreground.classList[0];
		const closeClass = this.close.classList[0];
		const textClass = this.text.classList[0];
		const ulClass = this.imageList.classList[0];

		this.foreground.classList.remove(`${foregroundClass}--hide`);
		this.close.classList.remove(`${closeClass}--visible`);
		this.text.classList.remove(`${textClass}--visible`);
		this.imageList.classList.remove(`${ulClass}--visible`);
	}
}
