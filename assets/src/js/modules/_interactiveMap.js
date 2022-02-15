export default class InteractiveMap {
	constructor() {
		this.map = document.querySelector('[data-map-svg]');
		this.mapRegionList = document.querySelectorAll('[data-map-svg-region]');
		this.mapBackgroundList = document.querySelectorAll('[data-map-background]');
		this.mapNumberList = document.querySelectorAll('[data-map-number]');
		this.linkRegionList = document.querySelectorAll('[data-map-region]');
		this.labelList = document.querySelectorAll('[data-region-name]');
		this.manageEvents();
	}

	manageEvents() {
		for (let i = 0; i < this.linkRegionList.length; i++) {
			if (window.innerWidth >= 1280) {
				this.linkRegionList[i].addEventListener('mouseover', () => {
					let regionLabelClass = this.labelList[i].classList[0];
					this.labelList[i].classList.add(`${regionLabelClass}--active`);
					for (let j = 0; j < this.mapRegionList.length; j++) {
						const clickedRegion = this.linkRegionList[i].dataset.mapRegion;
						let regionId = this.mapRegionList[j].dataset.regionId;
						if (clickedRegion == regionId) {
							let svgGroupClass = this.mapRegionList[j].classList[0];
							let svgBackgroundClass = this.mapBackgroundList[j].classList[0];
							let svgNumberClass = this.mapNumberList[j].classList[0];
							this.mapRegionList[j].classList.add(`${svgGroupClass}--active`);
							this.mapBackgroundList[j].classList.add(`${svgBackgroundClass}--active`);
							this.mapNumberList[j].classList.add(`${svgNumberClass}--active`);
						}
					}
				});
				this.linkRegionList[i].addEventListener('mouseout', () => {
					let regionLabelClass = this.labelList[i].classList[0];
					this.labelList[i].classList.remove(`${regionLabelClass}--active`);
					for (let j = 0; j < this.mapRegionList.length; j++) {
						const clickedRegion = this.linkRegionList[i].dataset.mapRegion;
						let regionId = this.mapRegionList[j].dataset.regionId;
						if (clickedRegion == regionId) {
							let svgGroupClass = this.mapRegionList[j].classList[0];
							let svgBackgroundClass = this.mapBackgroundList[j].classList[0];
							let svgNumberClass = this.mapNumberList[j].classList[0];
							this.mapRegionList[j].classList.remove(`${svgGroupClass}--active`);
							this.mapBackgroundList[j].classList.remove(`${svgBackgroundClass}--active`);
							this.mapNumberList[j].classList.remove(`${svgNumberClass}--active`);
						}
					}
				});
			} else {
				this.linkRegionList[i].addEventListener('click', () => {
					for (let j = 0; j < this.mapRegionList.length; j++) {
						const clickedRegion = this.linkRegionList[i].dataset.mapRegion;
						let regionId = this.mapRegionList[j].dataset.regionId;
						if (clickedRegion == regionId) {
							let svgGroupClass = this.mapRegionList[j].classList[0];
							let svgBackgroundClass = this.mapBackgroundList[j].classList[0];
							let svgNumberClass = this.mapNumberList[j].classList[0];
							let regionLabelClass = this.labelList[i].classList[0];
							if (this.mapRegionList[j].classList.contains(`${svgGroupClass}--active`)) {
								this.mapRegionList[j].classList.remove(`${svgGroupClass}--active`);
								this.mapBackgroundList[j].classList.remove(`${svgBackgroundClass}--active`);
								this.mapNumberList[j].classList.remove(`${svgNumberClass}--active`);
								this.labelList[i].classList.remove(`${regionLabelClass}--active`);
							} else {
								this.mapRegionList[j].classList.add(`${svgGroupClass}--active`);
								this.mapBackgroundList[j].classList.add(`${svgBackgroundClass}--active`);
								this.mapNumberList[j].classList.add(`${svgNumberClass}--active`);
								this.labelList[i].classList.add(`${regionLabelClass}--active`);
							}
						}
					}
				});
			}
		}
	}
}
