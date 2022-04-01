export default class VideoToggle {
	constructor() {
		// All DOM selector / elements goes here
		this.button = document.querySelector('[data-video-button]');
		this.overlay = document.querySelector('[data-video-overlay]');
		this.player = document.querySelector('[data-video-player]');
		this.manageEvents();
	}

	manageEvents() {
		if (this.overlay) {
			const overlayClass = this.overlay.classList;
			const buttonClass = this.button.classList;
			if (window.innerWidth >= 1280) {
				this.overlay.addEventListener('click', () => {
					this.hideOverlay(overlayClass, buttonClass);
				});
			} else {
				this.button.addEventListener('click', () => {
					this.hideOverlay(overlayClass, buttonClass);
				});
			}
		}

		// All Dom events goes here
	}

	hideOverlay(overlayClass, buttonClass) {
		this.overlay.classList.add(`${overlayClass[0]}--hide`);
		this.button.classList.add(`${buttonClass[0]}--hide`);
		this.player.play();
	}
}
