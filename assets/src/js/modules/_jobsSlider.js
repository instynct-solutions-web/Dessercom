import Flickity from 'flickity';
import 'flickity-sync';
import 'flickity-imagesloaded';

export default class jobsSlider {
	constructor() {
		this.sliderJobs = document.querySelector('[data-jobs-slider]');
		this.prev = document.querySelector('[data-jobs-slider-prev]');
		this.next = document.querySelector('[data-jobs-slider-next]');
		this.jobsValueList = document.querySelectorAll('[data-jobs-values]');
		this.jobsValueTogglerList = document.querySelectorAll('[data-jobs-values-toggler]');
		this.jobsValueNameList = document.querySelectorAll('[data-jobs-values-name]');
		this.picto = document.querySelectorAll('[data-jobs-values-picto]');
		this.manageEvents();
	}

	manageEvents() {
		// All Dom events goes here
		if (window.innerWidth < 768) {
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
		} else if (this.jobsValueList.length !== 0) {
			for (let i = 0; i < this.jobsValueList.length; i += 1) {
				this.jobsValueList[0].classList.add(`${this.jobsValueList[0].classList[0]}--opened`);
				this.jobsValueTogglerList[0].classList.add(`${this.jobsValueTogglerList[0].classList[0]}--opened`);
				this.jobsValueNameList[0].classList.add(`${this.jobsValueNameList[0].classList[0]}--opened`);
				this.jobsValueTogglerList[i].addEventListener('click', () => {
					if (!this.jobsValueList[i].classList.contains(`${this.jobsValueList[i].classList[0]}--opened`)) {
						for (let j = 0; j < this.jobsValueList.length; j += 1) {
							if (this.jobsValueList[j] !== this.jobsValueList[i]) {
								this.jobsValueList[j].classList.remove(`${this.jobsValueList[j].classList[0]}--opened`);
								this.jobsValueTogglerList[j].classList.remove(`${this.jobsValueTogglerList[j].classList[0]}--opened`);
								this.jobsValueNameList[j].classList.remove(`${this.jobsValueNameList[j].classList[0]}--opened`);
							}
						}
						this.jobsValueList[i].classList.add(`${this.jobsValueList[i].classList[0]}--opened`);
						this.jobsValueTogglerList[i].classList.add(`${this.jobsValueTogglerList[i].classList[0]}--opened`);
						this.jobsValueNameList[i].classList.add(`${this.jobsValueNameList[i].classList[0]}--opened`);
					} else {
						this.jobsValueList[i].classList.remove(`${this.jobsValueList[i].classList[0]}--opened`);
						this.jobsValueTogglerList[i].classList.remove(`${this.jobsValueTogglerList[i].classList[0]}--opened`);
						this.jobsValueNameList[i].classList.remove(`${this.jobsValueNameList[i].classList[0]}--opened`);
					}
				});
				this.jobsValueNameList[i].addEventListener('click', () => {
					if (!this.jobsValueList[i].classList.contains(`${this.jobsValueList[i].classList[0]}--opened`)) {
						for (let j = 0; j < this.jobsValueList.length; j += 1) {
							if (this.jobsValueList[j] !== this.jobsValueList[i]) {
								this.jobsValueList[j].classList.remove(`${this.jobsValueList[j].classList[0]}--opened`);
								this.jobsValueTogglerList[j].classList.remove(`${this.jobsValueTogglerList[j].classList[0]}--opened`);
								this.jobsValueNameList[j].classList.remove(`${this.jobsValueNameList[j].classList[0]}--opened`);
							}
						}
						this.jobsValueList[i].classList.add(`${this.jobsValueList[i].classList[0]}--opened`);
						this.jobsValueTogglerList[i].classList.add(`${this.jobsValueTogglerList[i].classList[0]}--opened`);
						this.jobsValueNameList[i].classList.add(`${this.jobsValueNameList[i].classList[0]}--opened`);
					} else {
						this.jobsValueList[i].classList.remove(`${this.jobsValueList[i].classList[0]}--opened`);
						this.jobsValueTogglerList[i].classList.remove(`${this.jobsValueTogglerList[i].classList[0]}--opened`);
						this.jobsValueNameList[i].classList.remove(`${this.jobsValueNameList[i].classList[0]}--opened`);
					}
				});

				this.jobsValueNameList[i].addEventListener('mouseenter', () => {
					if (!this.jobsValueList[i].classList.contains(`${this.jobsValueList[i].classList[0]}--opened`)) {
						this.picto[i].classList.add(`${this.picto[i].classList[0]}--colored`);
					}
				});
				this.jobsValueNameList[i].addEventListener('mouseout', () => {
					this.picto[i].classList.remove(`${this.picto[i].classList[0]}--colored`);
				});
			}
		}
	}
}
