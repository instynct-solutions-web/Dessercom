export default class Jobs {
	constructor() {
		this.zoneTitle = document.querySelector('.sf-field-taxonomy-zone h4');
		this.zoneList = document.querySelector('.sf-field-taxonomy-zone ul');
		this.typeTitle = document.querySelector('.sf-field-taxonomy-type h4');
		this.typeList = document.querySelector('.sf-field-taxonomy-type ul');
		this.arrow = '<svg class="jobs-careers__filters-arrow" xmlns="http://www.w3.org/2000/svg" width="9.803" height="5.402" viewBox="0 0 9.803 5.402"><g id="Groupe_1316" data-name="Groupe 1316" transform="translate(0.707 -23.411)"><path id="Tracé_3" data-name="Tracé 3" d="M0,0,4.195,4.195,8.389,0" transform="translate(0 24.118)" fill="none" stroke="#041e36" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1"/></g></svg>';
		this.sectorButtonList = document.querySelectorAll('[data-job-sector-button]');
		this.sectorList = document.querySelectorAll('[data-job-sector]');
		this.manageEvents();
	}

	manageEvents() {
		if (this.zoneTitle) {
			this.zoneTitle.innerHTML += this.arrow;
			this.zoneTitle.addEventListener('click', () => {
				if (!this.zoneList.classList.contains('opened')) {
					this.openDrawer(this.zoneList, this.zoneTitle);
				} else {
					this.closeDrawer(this.zoneList, this.zoneTitle);
				}
			});
		}
		if (this.typeTitle) {
			this.typeTitle.innerHTML += this.arrow;
			this.typeTitle.addEventListener('click', () => {
				if (!this.typeList.classList.contains('opened')) {
					this.openDrawer(this.typeList, this.typeTitle);
				} else {
					this.closeDrawer(this.typeList, this.typeTitle);
				}
			});
		}
		if (this.sectorButtonList.length !== 0) {
			this.sectorButtonList[0].classList.add(`${this.sectorButtonList[0].classList[0]}--selected`);
			this.sectorList[0].classList.add(`${this.sectorList[0].classList[0]}--selected`);
			for (let i = 0; i < this.sectorList.length; i += 1) {
				this.sectorButtonList[i].addEventListener('click', () => {
					if (!this.sectorList[i].classList.contains(`${this.sectorList[i].classList[0]}--selected`)) {
						this.openSector(this.sectorList[i], this.sectorButtonList[i]);
						for (let j = 0; j < this.sectorButtonList.length; j += 1) {
							if (this.sectorButtonList[j] !== this.sectorButtonList[i]) {
								this.closeSector(this.sectorList[j], this.sectorButtonList[j]);
							}
						}
					}
				});
			}
		}
	}

	openDrawer(drawer, title) {
		drawer.classList.add('opened');
		title.classList.add('opened');
	}

	closeDrawer(drawer, title) {
		drawer.classList.remove('opened');
		title.classList.remove('opened');
	}

	openSector(sector, button) {
		sector.classList.add(`${sector.classList[0]}--selected`);
		button.classList.add(`${button.classList[0]}--selected`);
	}

	closeSector(sector, button) {
		sector.classList.remove(`${sector.classList[0]}--selected`);
		button.classList.remove(`${button.classList[0]}--selected`);
	}
}
