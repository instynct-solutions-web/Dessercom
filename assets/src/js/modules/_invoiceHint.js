export default class InvoiceHint {
	constructor() {
		this.hintIcon = document.querySelector('[data-hint-icon]');
		this.hintImageCloseList = document.querySelectorAll('[data-hint-image-close]');
		this.hintImageContainerList = document.querySelectorAll('[data-hint-image-container]');
		this.hintImageList = document.querySelectorAll('[data-hint-image]');
		if (this.hintImageList[0]) {
			this.manageEvents();
		}
	}

	manageEvents() {
		this.hintIcon.onclick = () => {
			for (let i = 0; i < this.hintImageContainerList.length; i++) {
				this.show(i);
			}
		};
		for (let i = 0; i < this.hintImageCloseList.length; i++) {
			this.hintImageCloseList[i].onclick = () => {
				this.close(i);
			};
		}
	}

	show(i) {
		this.hintImageContainerList[i].classList.add(`${this.hintImageContainerList[i].classList[0]}--visible`);
	}

	close(i) {
		this.hintImageContainerList[i].classList.remove(`${this.hintImageContainerList[i].classList[0]}--visible`);
	}
}
