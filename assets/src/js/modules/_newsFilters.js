import List from 'list.js';

export default class NewsFilters {
	constructor() {
		this.filterList = document.querySelectorAll('[data-news-filter]');
		this.filterParentList = document.querySelectorAll('[data-news-filter-parent]');
		this.filterChildrenList = document.querySelectorAll('[data-news-filter-children]');
		this.posts = document.querySelector('#news');
		this.articleList = document.querySelectorAll('[data-post]');

		this.manageEvents();
	}

	manageEvents() {
		if (this.filterList.length !== 0) {
			this.postFilters = new List('news', {
				valueNames: [{name: 'category', attr: 'data-category'}],
				indexAsync: true,
				page: 10,
				pagination: {
					item: "<li class='news-list__page'><span class='page news-list__page-content'></span></li>",
				},
			});

			for (let i = 0; i < this.filterList.length; i += 1) {
				setTimeout(() => {
					this.pagination = document.querySelector('.news-list__pagination');
					this.pageList = document.querySelectorAll('.news-list__page');
					if (this.pageList.length === 1) {
						this.pagination.style.display = 'none';
					} else {
						this.pagination.style.display = 'inline-flex';
					}
				}, 100);

				this.filterList[0].classList.add(`${this.filterList[0].classList[0]}--active`);
				this.filterList[i].addEventListener('click', () => {
					// Add Active Class
					for (let j = 0; j < this.filterList.length; j += 1) {
						this.filterList[j].classList.remove(`${this.filterList[j].classList[0]}--active`);
					}
					for (let j = 0; j < this.filterParentList.length; j += 1) {
						this.filterParentList[j].classList.remove(`${this.filterParentList[j].classList[0]}--active`);
					}
					this.filterList[i].classList.add(`${this.filterList[i].classList[0]}--active`);

					// Filter Posts
					this.category = this.filterList[i].getAttribute('data-news-filter');

					for (let j = 0; j < this.articleList.length; j += 1) {
						this.articleList[j].classList.add(`${this.articleList[j].classList[0]}--hide`);
					}

					setTimeout(() => {
						this.pagination = document.querySelector('.news-list__pagination');
						this.pageList = document.querySelectorAll('.news-list__page');
						if (this.pageList.length === 1) {
							this.pagination.style.display = 'none';
						} else {
							this.pagination.style.display = 'inline-flex';
						}
					}, 600);

					setTimeout(() => {
						if (this.category !== 'all') {
							this.postFilters.filter((item) => {
								console.log(item.values().zone);
								if (item.values().category === this.category) {
									return true;
									// eslint-disable-next-line
								} else {
									return false;
								}
							});
						} else {
							this.postFilters.filter();
						}
						setTimeout(() => {
							for (let j = 0; j < this.articleList.length; j += 1) {
								this.articleList[j].classList.remove(`${this.articleList[j].classList[0]}--hide`);
							}
						}, 100);
					}, 500);
				});
			}

			if (window.location.href.indexOf('?_filtre') > -1) {
				this.locationFilter = window.location.href.replace(`${window.location.origin + window.location.pathname}?_filtre=`, '');
				this.postFilters.filter((item) => {
					if (item.values().category === this.locationFilter) {
						return true;
						// eslint-disable-next-line
					} else {
						return false;
					}
				});
				for (let i = 0; i < this.filterList.length; i += 1) {
					this.category = this.filterList[i].getAttribute('data-news-filter');
					if (this.category === this.locationFilter) {
						this.filterList[i].classList.add(`${this.filterList[i].classList[0]}--active`);
					} else {
						this.filterList[i].classList.remove(`${this.filterList[i].classList[0]}--active`);
					}
				}
			}

			for (let i = 0; i < this.filterParentList.length; i += 1) {
				this.filterParentList[i].addEventListener('click', () => {
					// Add Active Class
					this.filterParentList[i].classList.toggle(`${this.filterParentList[i].classList[0]}--opened`);

					// Open Children List
					this.filterChildrenList[i].classList.toggle(`${this.filterChildrenList[i].classList[0]}--opened`);
				});
			}

			for (let i = 0; i < this.filterChildrenList.length; i += 1) {
				this.childList = this.filterChildrenList[i].querySelectorAll('[data-news-filter]');
				for (let j = 0; j < this.childList.length; j += 1) {
					this.childList[j].addEventListener('click', () => {
						this.filterParentList[i].classList.add(`${this.filterParentList[i].classList[0]}--active`);
					});
				}
			}
		}
	}
}
