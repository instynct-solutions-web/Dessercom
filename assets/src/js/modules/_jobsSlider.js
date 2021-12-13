import Flickity from 'flickity';
import 'flickity-sync';
import 'flickity-imagesloaded';

export default class jobsSlider {
	constructor() {
		this.sliderJobs = document.querySelector('[data-jobs-slider]');
		this.prev = document.querySelector('[data-jobs-slider-prev]');
		this.next = document.querySelector('[data-jobs-slider-next]');
		this.manageEvents();
	}

	manageEvents() {
		// All Dom events goes here
		if (this.sliderJobs) {
			this.flktyJobs = new Flickity(this.sliderJobs, {
				cellAlign: 'left',
				wrapAround: true,
				draggable: true,
				pageDots: false,
				prevNextButtons: false,
			});
			this.prev.addEventListener('click', () => {
				this.flktyJobs.previous();
			});
			this.next.addEventListener('click', () => {
				this.flktyJobs.next();
			});
		}
	}
}
