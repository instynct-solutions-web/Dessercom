import { gsap, TweenLite } from 'gsap';
import CustomEase from 'gsap/CustomEase';
gsap.registerPlugin(CustomEase);
export default class Pricing {
	constructor() {
		this.drawerList = document.querySelectorAll('[data-pricing]');
		this.drawerButtonList = document.querySelectorAll('[data-pricing-button]');
		this.drawerContent = document.querySelectorAll('[data-pricing-content]');
		this.manageEvents();
	}

	manageEvents() {
		if (this.drawerList.length !== 0) {
			this.drawerContent[1].style.height = '0px';
			this.drawerList[1].classList.add(`${this.drawerList[1].classList[0]}--closed`);
			for (let i = 0; i < this.drawerList.length; i += 1) {
				this.drawerButtonList[i].addEventListener('click', () => {
					this.toggleDrawer(i);
				});
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
