export default class VideoToggle {
	constructor() {
		// All DOM selector / elements goes here
		this.button = document.querySelector('[data-video-button]');
		this.overlay = document.querySelector('[data-video-overlay]');
		this.manageEvents();
	}

	manageEvents() {
		if (this.overlay) {
			const overlayClass = this.overlay.classList;
			this.button.addEventListener('click', () => {
				this.overlay.classList.add(`${overlayClass[0]}--hide`);
			});
		}

		// All Dom events goes here
	}
}
