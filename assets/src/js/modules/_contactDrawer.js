import {gsap, TweenLite} from 'gsap';
import CustomEase from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase);

export default class ContactDrawer {
	constructor() {
		// All DOM selector / elements goes here
		this.toggleList = document.querySelectorAll('[data-contact-drawer-toggle]');
		this.toggleContainerList = document.querySelectorAll('[data-contact-drawer-container]');
		this.toggleIconList = document.querySelectorAll('[data-contact-drawer-icon]');
		this.manageEvents();
	}

	manageEvents() {
		// All Dom events goes here
		for (let index = 0; index < this.toggleList.length; index += 1) {
			const toggle = this.toggleList[index];
			const container = this.toggleContainerList[index];
			const icon = this.toggleIconList[index];
			toggle.addEventListener('click', () => {
				if (container.classList.contains(`${container.classList[0]}--open`)) {
					this.close(index);
				} else {
					this.open(index);
				}
			});
		}
	}

	open(i) {
		const toggle = this.toggleList[i];
		const container = this.toggleContainerList[i];
		const icon = this.toggleIconList[i];
		for (let index = 0; index < this.toggleContainerList.length; index += 1) {
			this.toggleContainerList[index].classList.remove(`${container.classList[0]}--open`);
			this.toggleList[index].classList.remove(`${toggle.classList[0]}--open`);
			this.toggleIconList[index].classList.remove(`${icon.classList[0]}--open`);
		}
		container.classList.add(`${container.classList[0]}--open`);
		toggle.classList.add(`${toggle.classList[0]}--open`);
		icon.classList.add(`${icon.classList[0]}--open`);
		TweenLite.to(this.toggleContainerList[i], 0.5, {
			ease: CustomEase.create('custom', 'M0,0 C0.038,0 0.214,1 1,1 '),
			height: 'auto',
			force3D: true,
		});
	}

	close(i) {
		const toggle = this.toggleList[i];
		const container = this.toggleContainerList[i];
		const icon = this.toggleIconList[i];
		container.classList.remove(`${container.classList[0]}--open`);
		toggle.classList.remove(`${toggle.classList[0]}--open`);
		icon.classList.remove(`${icon.classList[0]}--open`);
		TweenLite.to(this.toggleContainerList[i], 0.5, {
			ease: CustomEase.create('custom', 'M0,0 C0.038,0 0.214,1 1,1 '),
			height: 0,
			force3D: true,
		});
	}
}
