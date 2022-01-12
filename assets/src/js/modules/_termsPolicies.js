export default class TermsPolicies {
	constructor() {
		this.termsPolicies = document.querySelectorAll('[data-terms-policies]');
		this.termsPoliciesTitle = document.querySelectorAll('[data-terms-policies-title]');
		this.manageEvents();
	}

	manageEvents() {
		if (this.termsPolicies.length !== 0) {
			for (let i = 0; i < this.termsPolicies.length; i += 1) {
				if (i !== 0) {
					this.termsPolicies[i].classList.add(`${this.termsPolicies[i].classList[0]}--closed`);
				}
				this.termsPoliciesTitle[i].addEventListener('click', () => {
					if (this.termsPolicies[i].classList.contains(`${this.termsPolicies[i].classList[0]}--closed`)) {
						TermsPolicies.openDrawer(this.termsPolicies[i]);
						for (let j = 0; j < this.termsPolicies.length; j += 1) {
							if (this.termsPolicies[j] !== this.termsPolicies[i]) {
								TermsPolicies.closeDrawer(this.termsPolicies[j]);
							}
						}
					} else {
						TermsPolicies.closeDrawer(this.termsPolicies[i]);
					}
				});
			}
		}
	}

	static openDrawer(drawer) {
		drawer.classList.remove(`${drawer.classList[0]}--closed`);
	}

	static closeDrawer(drawer) {
		drawer.classList.add(`${drawer.classList[0]}--closed`);
	}
}
