import lottie from 'lottie-web';
export default class ContactShow {
	constructor() {
		// All DOM selector / elements goes here
		this.cursor = document.querySelector('[data-cursor-pointer]');
		this.header = document.querySelector('[data-header]');
		this.headerElemList = document.querySelectorAll('[data-header-hide]');
		this.logoElemList = document.querySelectorAll('[data-header-logo]');
		this.contactMedia = document.querySelector('[data-contact-media]');
		this.showContactButton = document.querySelector(' [data-contact-show]');
		this.closeContactButton = document.querySelector('[data-contact-close]');
		this.hero = document.querySelector('[data-contact-hero]');
		this.lottie = document.querySelector('[data-lottie-contact]');
		this.opened = false;
		this.body = document.querySelector('body');
		if (this.showContactButton) {
			this.manageEvents();
		}
	}

	manageEvents() {
		// All Dom events goes here
		this.showContactButton.addEventListener('click', () => {
			this.opened = true;
			this.body.classList.add('noscroll');
			this.show();
		});
		this.closeContactButton.addEventListener('click', () => {
			this.opened = false;
			this.body.classList.remove('noscroll');
			this.hide();
		});
		this.animationOptions = {
			container: this.lottie,
			renderer: 'svg',
			loop: true,
			autoplay: false,
			path: this.lottie.getAttribute('data-lottie-contact'),
		};
		this.animation = lottie.loadAnimation(this.animationOptions);
	}

	show() {
		this.header.classList.add(`${this.header.classList[0]}--hidden`);
		this.hero.classList.add(`${this.hero.classList[0]}--hide`);
		this.contactMedia.classList.add(`${this.contactMedia.classList[0]}--show`);
		this.cursor.classList.add(`${this.cursor.classList[0]}--white`);
		for (let i = 0; i < this.headerElemList.length; i += 1) {
			this.headerElemList[i].classList.add(`${this.headerElemList[i].classList[0]}--hide`);
		}
		for (let i = 0; i < this.logoElemList.length; i += 1) {
			this.logoElemList[i].classList.add(`${this.logoElemList[i].classList[0]}--white`);
		}
		this.lottie.style.display = 'block';
		this.animation.play();
	}

	hide() {
		this.header.classList.remove(`${this.header.classList[0]}--hidden`);
		this.hero.classList.remove(`${this.hero.classList[0]}--hide`);
		this.contactMedia.classList.remove(`${this.contactMedia.classList[0]}--show`);
		this.cursor.classList.remove(`${this.cursor.classList[0]}--white`);
		for (let i = 0; i < this.headerElemList.length; i += 1) {
			this.headerElemList[i].classList.remove(`${this.headerElemList[i].classList[0]}--hide`);
		}
		for (let i = 0; i < this.logoElemList.length; i += 1) {
			this.logoElemList[i].classList.remove(`${this.logoElemList[i].classList[0]}--white`);
		}
		setTimeout(() => {
			this.lottie.style.display = 'none';
			this.animation.stop();
		}, 500);
	}
}
