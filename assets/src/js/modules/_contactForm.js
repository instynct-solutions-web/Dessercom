export default class ContactForm {
	constructor() {
		this.url_string = window.location.href; //window.location.href
		this.url = new URL(this.url_string);
		this.urlParam = this.url.searchParams.get('subject');
		this.form = document.querySelector('.contact-form__form');
		this.formDropdown = this.form.querySelector('select');
		if (this.formDropdown) {
			this.manageEvents();
		}
	}

	manageEvents() {
		if (this.urlParam === 'medical') {
			this.formDropdown.selectedIndex = 4;
		}
		if (this.urlParam === 'wrongdoing') {
			this.formDropdown.selectedIndex = 8;
		}
		if (this.urlParam === 'internship') {
			this.formDropdown.selectedIndex = 9;
		}
		if (this.urlParam === 'donations') {
			this.formDropdown.selectedIndex = 1;
		}
	}
}
