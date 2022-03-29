import List from 'list.js';

export default class JobsFilters {
	constructor() {
		this.zoneList = document.querySelectorAll('[data-jobs-zone]');
		this.typeList = document.querySelectorAll('[data-jobs-type]');
		this.jobs = document.querySelector('#jobs');
		this.jobList = document.querySelectorAll('[data-job]');
		this.zone = 'all';
		this.type = 'all';
		this.jobsFilterContainer = document.querySelectorAll('[data-filter-container]');
		this.jobsFilterTitleList = document.querySelectorAll('[data-filter-title]');
		this.manageEvents();
	}

	manageEvents() {
		if (this.typeList.length !== 0) {
			// Open Filters Drawers
			this.jobsFilterContainer[0].classList.toggle(`${this.jobsFilterContainer[0].classList[0]}--opened`);
			for (let i = 0; i < this.jobsFilterContainer.length; i += 1) {
				this.jobsFilterTitleList[i].addEventListener('click', () => {
					this.jobsFilterContainer[i].classList.toggle(`${this.jobsFilterContainer[i].classList[0]}--opened`);
				});
			}

			this.jobsFilters = new List('jobs', {
				valueNames: ['zone', 'type'],
				indexAsync: true,
			});

			for (let i = 0; i < this.zoneList.length; i += 1) {
				this.zoneList[0].classList.add(`${this.zoneList[0].classList[0]}--active`);
				this.zoneList[i].addEventListener('click', () => {
					// Add Active Class
					for (let j = 0; j < this.zoneList.length; j += 1) {
						this.zoneList[j].classList.remove(`${this.zoneList[j].classList[0]}--active`);
					}
					this.zoneList[i].classList.add(`${this.zoneList[i].classList[0]}--active`);

					for (let j = 0; j < this.jobList.length; j += 1) {
						this.jobList[j].classList.add(`${this.jobList[j].classList[0]}--hide`);
					}

					// Filter Posts
					this.zone = this.zoneList[i].getAttribute('data-jobs-zone');
					this.filterZone();
				});
			}

			for (let i = 0; i < this.typeList.length; i += 1) {
				this.typeList[0].classList.add(`${this.typeList[0].classList[0]}--active`);
				this.typeList[i].addEventListener('click', () => {
					// Add Active Class
					for (let j = 0; j < this.typeList.length; j += 1) {
						this.typeList[j].classList.remove(`${this.typeList[j].classList[0]}--active`);
					}
					this.typeList[i].classList.add(`${this.typeList[i].classList[0]}--active`);

					for (let j = 0; j < this.jobList.length; j += 1) {
						this.jobList[j].classList.add(`${this.jobList[j].classList[0]}--hide`);
					}

					// Filter Posts
					this.type = this.typeList[i].getAttribute('data-jobs-type');
					this.filterType();
				});
			}
		}
	}

	filterZone() {
		setTimeout(() => {
			if (this.zone === 'all' && this.type === 'all') {
				this.jobsFilters.filter();
			} else if (this.zone === 'all') {
				this.jobsFilters.filter((item) => {
					if (item.values().type.includes(this.type)) {
						return true;
						// eslint-disable-next-line
					} else {
						return false;
					}
				});
			} else if (this.type === 'all') {
				this.jobsFilters.filter((item) => {
					if (item.values().zone.includes(this.zone)) {
						return true;
						// eslint-disable-next-line
					} else {
						return false;
					}
				});
			} else {
				this.jobsFilters.filter((item) => {
					if (item.values().type.includes(this.type) && item.values().zone.includes(this.zone)) {
						return true;
						// eslint-disable-next-line
					} else {
						return false;
					}
				});
			}
			setTimeout(() => {
				for (let i = 0; i < this.jobList.length; i += 1) {
					this.jobList[i].classList.remove(`${this.jobList[i].classList[0]}--hide`);
				}
			}, 100);
		}, 500);
	}

	filterType() {
		setTimeout(() => {
			if (this.type === 'all' && this.zone === 'all') {
				this.jobsFilters.filter();
			} else if (this.type === 'all') {
				this.jobsFilters.filter((item) => {
					if (item.values().zone.includes(this.zone)) {
						return true;
						// eslint-disable-next-line
					} else {
						return false;
					}
				});
			} else if (this.zone === 'all') {
				this.jobsFilters.filter((item) => {
					if (item.values().type.includes(this.type)) {
						return true;
						// eslint-disable-next-line
					} else {
						return false;
					}
				});
			} else {
				this.jobsFilters.filter((item) => {
					if (item.values().type.includes(this.type) && item.values().zone.includes(this.zone)) {
						return true;
						// eslint-disable-next-line
					} else {
						return false;
					}
				});
			}
			setTimeout(() => {
				for (let i = 0; i < this.jobList.length; i += 1) {
					this.jobList[i].classList.remove(`${this.jobList[i].classList[0]}--hide`);
				}
			}, 100);
		}, 500);
	}
}
