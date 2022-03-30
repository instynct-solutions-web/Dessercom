import lottie from 'lottie-web';

export default class Menu {
	constructor() {
		this.body = document.querySelector('body');
		this.html = document.querySelector('html');
		this.header = document.querySelector('[data-header]');
		this.navigation = document.querySelector('[data-navigation]');
		this.navigationButton = document.querySelector('[data-navigation-button]');
		this.headerLinkList = this.header.querySelectorAll('a');
		this.lottie = document.querySelector('[data-lottie-menu]');
		this.animation = '';
		this.opened = false;
		this.manageEvents();
	}

	manageEvents() {
		this.navigationButton.addEventListener('click', () => {
			if (!this.opened) {
				this.opened = true;
				this.body.classList.add('noscroll');
				this.html.classList.add('noscroll');
				this.openMenu();
			} else {
				this.opened = false;
				this.body.classList.remove('noscroll');
				this.html.classList.remove('noscroll');
				this.closeMenu();
			}
		});
		for (let i = 0; i < this.headerLinkList.length; i += 1) {
			this.headerLinkList[i].addEventListener('click', () => {
				if (this.opened) {
					this.opened = false;
					this.body.classList.remove('noscroll');
					this.html.classList.remove('noscroll');
					this.closeMenu();
				}
			});
		}

		this.animationOptions = {
			container: this.lottie,
			renderer: 'svg',
			loop: true,
			autoplay: false,
			path: this.lottie.getAttribute('data-lottie-menu'),
		};
		this.animation = lottie.loadAnimation(this.animationOptions);
	}

	openMenu() {
		this.header.classList.add(`${this.header.classList[0]}--opened`);
		this.navigation.classList.add(`${this.navigation.classList[0]}--opened`);
		this.navigationButton.classList.add(`${this.navigationButton.classList[0]}--opened`);
		this.lottie.style.display = 'block';
		this.animation.play();
	}

	closeMenu() {
		this.header.classList.remove(`${this.header.classList[0]}--opened`);
		this.navigation.classList.remove(`${this.navigation.classList[0]}--opened`);
		this.navigationButton.classList.remove(`${this.navigationButton.classList[0]}--opened`);
		setTimeout(() => {
			this.lottie.style.display = 'none';
			this.animation.stop();
		}, 500);
	}
}
