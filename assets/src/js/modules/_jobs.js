import { gsap, TweenLite } from 'gsap';
import CustomEase from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase);

export default class Jobs {
	constructor() {
		this.zoneTitle = document.querySelector('.sf-field-taxonomy-zone h4');
		this.zoneList = document.querySelector('.sf-field-taxonomy-zone ul');
		this.typeTitle = document.querySelector('.sf-field-taxonomy-type h4');
		this.typeList = document.querySelector('.sf-field-taxonomy-type ul');
		this.arrow = '<svg class="jobs-careers__filters-arrow" xmlns="http://www.w3.org/2000/svg" width="9.803" height="5.402" viewBox="0 0 9.803 5.402"><g id="Groupe_1316" data-name="Groupe 1316" transform="translate(0.707 -23.411)"><path id="Tracé_3" data-name="Tracé 3" d="M0,0,4.195,4.195,8.389,0" transform="translate(0 24.118)" fill="none" stroke="#041e36" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1"/></g></svg>';
		this.sectorButtonList = document.querySelectorAll('[data-job-sector-button]');
		this.sectorList = document.querySelectorAll('[data-job-sector]');
		this.sectorBackgroundList = document.querySelectorAll('[data-job-sector-background]');
		this.manageEvents();
	}

	manageEvents() {
		if (this.zoneTitle) {
			Jobs.openDrawer(this.zoneList, this.zoneTitle);
			this.zoneTitle.innerHTML += this.arrow;
			this.zoneTitle.addEventListener('click', () => {
				if (!this.zoneList.classList.contains('opened')) {
					Jobs.openDrawer(this.zoneList, this.zoneTitle);
				} else {
					Jobs.closeDrawer(this.zoneList, this.zoneTitle);
				}
			});
		}
		if (this.typeTitle) {
			this.typeTitle.innerHTML += this.arrow;
			this.typeTitle.addEventListener('click', () => {
				if (!this.typeList.classList.contains('opened')) {
					Jobs.openDrawer(this.typeList, this.typeTitle);
				} else {
					Jobs.closeDrawer(this.typeList, this.typeTitle);
				}
			});
		}
		if (this.sectorButtonList.length !== 0) {
			this.sectorButtonList[0].classList.add(`${this.sectorButtonList[0].classList[0]}--selected`);
			this.sectorList[0].classList.add(`${this.sectorList[0].classList[0]}--selected`);
			this.sectorBackgroundList[0].classList.add(`${this.sectorBackgroundList[0].classList[0]}--selected`);
			Jobs.openSector(this.sectorList[0], this.sectorButtonList[0], this.sectorBackgroundList[0]);
			for (let i = 0; i < this.sectorList.length; i += 1) {
				this.sectorButtonList[i].addEventListener('click', () => {
					if (!this.sectorList[i].classList.contains(`${this.sectorList[i].classList[0]}--selected`)) {
						Jobs.openSector(this.sectorList[i], this.sectorButtonList[i], this.sectorBackgroundList[i]);
						for (let j = 0; j < this.sectorButtonList.length; j += 1) {
							if (this.sectorButtonList[j] !== this.sectorButtonList[i]) {
								Jobs.closeSector(this.sectorList[j], this.sectorButtonList[j], this.sectorBackgroundList[j]);
							}
						}
					}
				});
			}
		}
	}

	static openDrawer(drawer, title) {
		drawer.classList.add('opened');
		title.classList.add('opened');
	}

	static closeDrawer(drawer, title) {
		drawer.classList.remove('opened');
		title.classList.remove('opened');
	}

	static openSector(sector, button, background) {
		sector.classList.add(`${sector.classList[0]}--selected`);
		if (window.innerWidth <= 1024) {
			TweenLite.to(sector, 0.5, {
				ease: CustomEase.create('custom', 'M0,0 C0.038,0 0.214,1 1,1 '),
				height: 'auto',
				force3D: true,
			});
		}
		button.classList.add(`${button.classList[0]}--selected`);
		background.classList.add(`${background.classList[0]}--selected`);
	}

	static closeSector(sector, button, background) {
		sector.classList.remove(`${sector.classList[0]}--selected`);
		if (window.innerWidth <= 1024) {
			TweenLite.to(sector, 0.5, {
				ease: CustomEase.create('custom', 'M0,0 C0.038,0 0.214,1 1,1 '),
				height: 0,
				force3D: true,
			});
		}
		button.classList.remove(`${button.classList[0]}--selected`);
		background.classList.remove(`${background.classList[0]}--selected`);
	}
}
