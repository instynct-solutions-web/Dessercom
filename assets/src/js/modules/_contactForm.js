export default class ContactForm {
	constructor() {
		this.url_string = window.location.href; //window.location.href
		this.url = new URL(this.url_string);
		this.urlParam = this.url.searchParams.get('subject');
		this.formDropdown = document.querySelector('#input_2_1');
		if (this.formDropdown) {
			this.manageEvents();
		}
	}

	manageEvents() {
		if (this.urlParam === 'medical') {
			this.formDropdown.selectedIndex = 4;
		}
	}
}
