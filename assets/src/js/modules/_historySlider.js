import Flickity from 'flickity';
import 'flickity-sync';
import 'flickity-imagesloaded';
import 'flickity-fade';

export default class HistorySlider {
	constructor() {
		this.sliderDates = document.querySelector('[data-history-slider-dates]');
		this.sliderContent = document.querySelector('[data-history-slider-content]');
		this.sliderMedias = document.querySelector('[data-history-slider-medias]');
		this.prev = document.querySelector('[data-history-slider-prev]');
		this.next = document.querySelector('[data-history-slider-next]');
		this.manageEvents();
	}

	manageEvents() {
		// All Dom events goes here
		if (this.sliderDates) {
			this.flktyDates = new Flickity(this.sliderDates, {
				cellAlign: 'left',
				wrapAround: true,
				pageDots: false,
				prevNextButtons: false,
			});
			this.flktyContent = new Flickity(this.sliderContent, {
				sync: this.sliderDates,
				wrapAround: true,
				draggable: true,
				pageDots: false,
				prevNextButtons: false,
				fade: true,
			});
			this.flktyMedias = new Flickity(this.sliderMedias, {
				sync: this.sliderDates,
				wrapAround: true,
				imagesLoaded: true,
				draggable: true,
				pageDots: false,
				prevNextButtons: false,
				fade: true,
			});
			this.prev.addEventListener('click', () => {
				this.flktyDates.previous();
			});
			this.next.addEventListener('click', () => {
				this.flktyDates.next();
			});
			setTimeout(() => {
				this.flktyContent.resize();
			}, 100);
			this.flktyDates.on('change', () => {
				this.flktyContent.resize();
			});
		}
	}
}
