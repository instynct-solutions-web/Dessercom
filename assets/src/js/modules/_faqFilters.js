import List from 'list.js';

export default class FaqFilters {
	constructor() {
		this.faqCategoryList = document.querySelectorAll('[data-faq-category]');
		this.faqs = document.querySelector('#faqs');
		this.faqList = document.querySelectorAll('[data-faq]');
		this.category = 'all';
		this.manageEvents();
	}

	manageEvents() {
		if (this.faqCategoryList.length !== 0) {
			this.faqsFilters = new List('faqs', {
				valueNames: ['category'],
				indexAsync: true,
			});

			for (let i = 0; i < this.faqCategoryList.length; i += 1) {
				this.faqCategoryList[0].classList.add(`${this.faqCategoryList[0].classList[0]}--active`);
				this.faqCategoryList[i].addEventListener('click', () => {
					// Add Active Class
					for (let j = 0; j < this.faqCategoryList.length; j += 1) {
						this.faqCategoryList[j].classList.remove(`${this.faqCategoryList[j].classList[0]}--active`);
					}
					this.faqCategoryList[i].classList.add(`${this.faqCategoryList[i].classList[0]}--active`);

					for (let j = 0; j < this.faqList.length; j += 1) {
						this.faqList[j].classList.add(`${this.faqList[j].classList[0]}--hide`);
					}

					// Filter Posts
					this.category = this.faqCategoryList[i].getAttribute('data-faq-category');
					this.filterFaq();
				});
			}
		}

		if (window.location.href.indexOf('?_filtre') > -1) {
			this.locationFilter = window.location.href.replace(`${window.location.origin + window.location.pathname}?_filtre=`, '');
			if (this.faqsFilters) {
				this.faqsFilters.filter((item) => {
					if (item.values().category === this.locationFilter) {
						return true;
						// eslint-disable-next-line
					} else {
						return false;
					}
				});
			}
			for (let i = 0; i < this.faqCategoryList.length; i += 1) {
				this.category = this.faqCategoryList[i].getAttribute('data-faq-category');
				if (this.category === this.locationFilter) {
					this.faqCategoryList[i].classList.add(`${this.faqCategoryList[i].classList[0]}--active`);
				} else {
					this.faqCategoryList[i].classList.remove(`${this.faqCategoryList[i].classList[0]}--active`);
				}
			}
		}
	}

	filterFaq() {
		setTimeout(() => {
			if (this.category === 'all') {
				this.faqsFilters.filter();
			} else {
				this.faqsFilters.filter((item) => {
					if (item.values().category === this.category) {
						return true;
						// eslint-disable-next-line
					} else {
						return false;
					}
				});
			}
			setTimeout(() => {
				for (let i = 0; i < this.faqList.length; i += 1) {
					this.faqList[i].classList.remove(`${this.faqList[i].classList[0]}--hide`);
				}
			}, 100);
		}, 500);
	}
}
