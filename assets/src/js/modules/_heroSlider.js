import Flickity from 'flickity';
// import 'flickity-as-nav-for';
import 'flickity-sync';
import 'flickity-imagesloaded';

export default class HeroSlider {
	constructor() {
		// All DOM selector / elements goes here

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
			this.asNavFor = new Flickity(this.sliderNav, {
				sync: this.slider,
				wrapAround: true,
				draggable: true,
				pageDots: false,
				prevNextButtons: false,
			});
			this.prev.addEventListener('click', () => {
				this.flkty.previous();
			});
			this.next.addEventListener('click', () => {
				this.flkty.next();
			});
		}
	}
}
