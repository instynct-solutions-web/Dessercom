import {gsap, TweenLite} from 'gsap';
import CustomEase from 'gsap/CustomEase';
gsap.registerPlugin(CustomEase);
export default class Pricing {
	constructor() {
		this.drawerList = document.querySelectorAll('[data-pricing]');
		this.drawerButtonList = document.querySelectorAll('[data-pricing-button]');
		this.drawerContent = document.querySelectorAll('[data-pricing-content]');
		this.manageEvents();
		setTimeout(() => {
			this.resizeDrawers();
		}, 100);
		window.addEventListener('resize', () => {
			this.resizeDrawers();
		});
	}

	manageEvents() {
		if (this.drawerList.length !== 0) {
			for (let i = 0; i < this.drawerList.length; i += 1) {
				this.drawerContent[i].style.height = '0px';
				this.drawerList[i].classList.add(`${this.drawerList[1].classList[0]}--closed`);
				this.drawerButtonList[i].addEventListener('click', () => {
					this.toggleDrawer(i);
				});
			}
		}
	}

	resizeDrawers() {
		if (this.drawerList.length !== 0) {
			this.drawerHeight = 0;
			for (let i = 0; i < this.drawerList.length; i += 1) {
				this.drawerButtonList[i].style.minHeight = `0px`;
			}
			for (let i = 0; i < this.drawerList.length; i += 1) {
				if (this.drawerButtonList[i].offsetHeight > this.drawerHeight) {
					this.drawerHeight = this.drawerButtonList[i].offsetHeight;
				}
			}
			for (let i = 0; i < this.drawerList.length; i += 1) {
				this.drawerButtonList[i].style.minHeight = `${this.drawerHeight}px`;
			}
		}
	}

	toggleDrawer(index) {
		if (this.drawerList[index].classList.contains(`${this.drawerList[index].classList[0]}--closed`)) {
			TweenLite.to(this.drawerContent[index], 0.5, {
				ease: CustomEase.create('custom', 'M0,0 C0.038,0 0.214,1 1,1 '),
				height: 'auto',
				force3D: true,
			});
		} else {
			TweenLite.to(this.drawerContent[index], 0.5, {
				ease: CustomEase.create('custom', 'M0,0 C0.038,0 0.214,1 1,1 '),
				height: 0,
				force3D: true,
			});
		}
		this.drawerList[index].classList.toggle(`${this.drawerList[index].classList[0]}--closed`);
	}
}
