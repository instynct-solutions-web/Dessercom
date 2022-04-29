/* eslint-disable */
export default class Forms {
	constructor() {
		this.downloadIcon =
			'<svg class="field__download-icon" xmlns="http://www.w3.org/2000/svg" width="13.384" height="17.5" viewBox="0 0 13.384 17.5"><g id="Groupe_1344" data-name="Groupe 1344" transform="translate(-2873.733 1344.5)"><g id="Groupe_788" data-name="Groupe 788" transform="translate(2872.414 -1342.69)"><path id="Tracé_3" data-name="Tracé 3" d="M0,0,5.278,5.278,10.555,0" transform="translate(2.733 4.693)" fill="none" stroke="#008884" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><line id="Ligne_1" data-name="Ligne 1" y1="10.781" transform="translate(8.011 -0.81)" fill="none" stroke="#008884" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/></g><path id="Tracé_975" data-name="Tracé 975" d="M2875.147-1328h10.764" transform="translate(-0.147)" fill="none" stroke="#008884" stroke-linecap="round" stroke-width="2"/></g></svg>';
		this.fieldFileList = document.querySelectorAll('.field__file');
		this.dropdownIcon = '<svg class="field__dropdown-icon" xmlns="http://www.w3.org/2000/svg" width="12.828" height="7.414" viewBox="0 0 12.828 7.414"><g id="Groupe_1175" data-name="Groupe 1175" transform="translate(1.414 -22.704)"><path id="Tracé_3" data-name="Tracé 3" d="M0,0,5,5l5-5" transform="translate(0 24.118)" fill="none" stroke="#041e36" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/></g></svg>';
		this.fieldDropdownList = document.querySelectorAll('.field__dropdown');
		this.sendIcon = '<svg class="field__send-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.19 14.19"><g id="Groupe_789" data-name="Groupe 789"><path id="Tracé_3" data-name="Tracé 3" d="M13.42,11.71V2.28H4" transform="translate(-0.74 -0.78)" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 3px"/><line id="Ligne_1" data-name="Ligne 1" x1="12.69" y1="1.5" x2="1.5" y2="12.69" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-miterlimit: 9.99999982885729;stroke-width: 3px"/></g></svg>';
		this.fieldSend = document.querySelector('.gform_footer');
		this.fieldAmount = document.querySelector('.ginput_amount');
		this.fieldInvoice = document.querySelector('.field__invoice input');
		this.manageEvents();
	}

	manageEvents() {
		if (this.fieldFileList.length !== 0) {
			for (let i = 0; i < this.fieldFileList.length; i += 1) {
				this.fieldFileList[i].innerHTML += this.downloadIcon;
			}
		}
		if (this.fieldDropdownList.length !== 0) {
			for (let i = 0; i < this.fieldDropdownList.length; i += 1) {
				this.fieldDropdownList[i].innerHTML += this.dropdownIcon;
			}
		}
		if (this.fieldSend) {
			this.fieldSend.innerHTML += this.sendIcon;
		}
		if (this.fieldInvoice) {
			this.fieldInvoice.addEventListener('focusout', (e) => {
				setTimeout(() => {
					if (this.fieldInvoice.value.length < 7) {
						this.fieldInvoice.value = '';
					}
				}, 1);
			});
		}
		if (this.fieldAmount) {
			this.pastValue = '';
			this.fieldAmount.addEventListener('keyup', () => {
				this.newCharacter = this.fieldAmount.value.replace(this.pastValue, '');
				if (this.newCharacter == '.') {
					this.newValue = this.pastValue + ',';
					this.fieldAmount.value = this.newValue;
					this.pastValue = this.fieldAmount.value;
				} else if (parseInt(this.fieldAmount.value.replace(/ /g, '')) >= 2000) {
					this.fieldAmount.value = 2000;
					this.pastValue = this.fieldAmount.value;
				} else {
					this.pastValue = this.fieldAmount.value;
					return true;
				}
			});
			window.addEventListener('click', () => {
				if (parseInt(this.fieldAmount.value.replace(/ /g, '')) >= 2000) {
					this.fieldAmount.value = 2000;
				}
			});
		}
	}
}
