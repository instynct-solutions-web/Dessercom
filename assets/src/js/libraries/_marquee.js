export default class Marquee {
	constructor() {
		this.marqueeList = document.querySelectorAll('[data-marquee]');
		this.marqueeSpeed = [];
		this.marqueeClass = [];
		this.marqueeHTML = [];
		this.marqueeNewHTML = [];
		if (this.marqueeList.length !== 0) {
			for (let i = 0; i < this.marqueeList.length; i += 1) {
				if (this.marqueeList[i].getAttribute('data-marquee-speed')) {
					this.marqueeSpeed.push(this.marqueeList[i].getAttribute('data-marquee-speed'));
				} else {
					this.marqueeSpeed.push(20);
				}
				this.marqueeClass.push(this.marqueeList[i].classList[0]);
				this.marqueeHTML.push(this.marqueeList[i].innerHTML);
				this.marqueeNewHTML.push(`<div class="${this.marqueeClass[i]}--marquee" data-marquee-container><div class="${this.marqueeClass[i]}--marquee-content" data-marquee-content style="animation-duration:${this.marqueeSpeed[i]}s"><p>${this.marqueeHTML[i]}</p><p>${this.marqueeHTML[i]}</p><p>${this.marqueeHTML[i]}</p><p>${this.marqueeHTML[i]}</p><p>${this.marqueeHTML[i]}</p></div></div>`);
			}
		}
		this.manageEvents();
	}

	manageEvents() {
		if (this.marqueeList.length !== 0) {
			for (let i = 0; i < this.marqueeList.length; i += 1) {
				this.marqueeList[i].innerHTML = this.marqueeNewHTML[i];
				this.marqueeList[i].style.width = '100%';
				this.marqueeContainerList = document.querySelectorAll('[data-marquee-container]');
				for (let j = 0; j < this.marqueeContainerList.length; j += 1) {
					this.marqueeContainerHTML = this.marqueeContainerList[j].innerHTML;
					this.marqueeContainerList[j].innerHTML = this.marqueeContainerHTML + this.marqueeContainerHTML;
				}
			}
		}
	}
}
