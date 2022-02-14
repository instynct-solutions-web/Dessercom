export default class InteractiveMap {
	constructor() {
		this.map = document.querySelector('[data-map-svg]');
		this.mapRegionList = document.querySelectorAll('[data-map-svg-region]');
		this.mapBackgroundList = document.querySelectorAll('[data-map-background]');
		this.mapNumberList = document.querySelectorAll('[data-map-number]');
		this.linkRegionList = document.querySelectorAll('[data-map-region]');
		this.manageEvents();
	}

	manageEvents() {
		for (let i = 0; i < this.linkRegionList.length; i++) {
			if (window.innerWidth >= 1280) {
				this.linkRegionList[i].addEventListener('mouseover', () => {
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
			}
			this.linkRegionList[i].addEventListener('click', () => {
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
		}
	}
}
