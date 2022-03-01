import Flickity from 'flickity';
import 'flickity-sync';
import 'flickity-imagesloaded';
import 'flickity-fade';
import Utils from '../helpers/_utils';

export default class HistorySlider {
	constructor() {
		this.cursor = document.querySelector('[data-cursor-container]');
		this.sliderContainer = document.querySelector('[data-history-slider-container]');
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
			if (window.innerWidth >= 1280) {
				this.sliderContainer.addEventListener('click', () => {
					const xRatio = Utils.calculateRatio(this.sliderContainer);
					if (xRatio > 50) {
						this.flktyDates.next();
					} else {
						this.flktyDates.previous();
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
			}

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
