export default class InteractiveMap {
	constructor() {
		this.map = document.querySelector('[data-map-svg]');
		this.mapRegionList = document.querySelectorAll('[data-map-svg-region]');
		this.linkRegionList = document.querySelectorAll('[data-map-region]');
		this.manageEvents();
	}

	manageEvents() {
		for (let i = 0; i < this.linkRegionList.length; i++) {
			this.linkRegionList[i].addEventListener('click', () => {
				for (let j = 0; j < this.mapRegionList.length; j++) {
					const clickedRegion = this.linkRegionList[i].dataset.mapRegion;
					let regionId = this.mapRegionList[j].dataset.regionId;
					if (clickedRegion == regionId) {
						console.log(this.mapRegionList[j]);
					}
				}
			});
		}
	}
}
