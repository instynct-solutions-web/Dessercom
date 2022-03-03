import List from 'list.js';
export default class NewsFilters {
	constructor() {
		this.filterList = document.querySelectorAll('[data-news-filter]');
		this.posts = document.querySelector('#news');
		this.manageEvents();
	}

	manageEvents() {
		this.postFilters = new List('news', {
			valueNames: ['category'],
			indexAsync: true,
			page: 1,
			pagination: {
				item: " <li class='news-list__page'><span class='page news-list__page-content'></span></li>",
			},
		});

		for (let i = 0; i < this.filterList.length; i += 1) {
			this.filterList[0].classList.add(`${this.filterList[0].classList[0]}--active`);
			this.filterList[i].addEventListener('click', () => {
				// Add Active Class
				for (let j = 0; j < this.filterList.length; j += 1) {
					this.filterList[j].classList.remove(`${this.filterList[j].classList[0]}--active`);
				}
				this.filterList[i].classList.add(`${this.filterList[i].classList[0]}--active`);

				// Filter Posts
				this.category = this.filterList[i].getAttribute('data-news-filter');

				if (this.category !== 'all') {
					this.postFilters.filter((item) => {
						if (item.values().category === this.category) {
							return true;
						} else {
							return false;
						}
					});
				} else {
					this.postFilters.filter();
				}
			});
		}
	}
}
