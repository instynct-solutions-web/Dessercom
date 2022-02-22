export default class HomeServices {
	constructor() {
		this.serviceList = document.querySelectorAll('[data-home-service]');
		this.imageList = document.querySelectorAll('[data-home-service-image]');
		this.index = 0;
		this.manageEvents();
	}

	manageEvents() {
		if (this.serviceList.length !== 0) {
			if (window.innerWidth > 600 && window.innerWidth <= 1024) {
				this.loopService();
			} else if (window.innerWidth > 1024) {
				this.openService(0);
				for (let i = 0; i < this.serviceList.length; i += 1) {
					this.serviceList[i].addEventListener('mouseenter', () => {
						for (let j = 0; j < this.serviceList.length; j += 1) {
							if (this.serviceList[j] !== this.serviceList[i]) {
								this.closeService(j);
							}
						}
						this.openService(i);
					});
				}
			}
		}
	}

	loopService() {
		this.openService(this.index);
		for (let i = 0; i < this.serviceList.length; i += 1) {
			if (i !== this.index) {
				this.closeService(i);
			}
		}
		if (this.index !== this.serviceList.length - 1) {
			this.index += 1;
		} else {
			this.index = 0;
		}
		setTimeout(() => {
			this.loopService();
		}, 3000);
	}

	openService(index) {
		this.serviceList[index].classList.add(`${this.serviceList[index].classList[0]}--selected`);
		this.imageList[index].classList.add(`${this.imageList[index].classList[0]}--selected`);
	}

	closeService(index) {
		this.serviceList[index].classList.remove(`${this.serviceList[index].classList[0]}--selected`);
		this.imageList[index].classList.remove(`${this.imageList[index].classList[0]}--selected`);
	}
}
