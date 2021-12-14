export default class Forms {
	constructor() {
		this.downloadIcon =
			'<svg class="field__download-icon" xmlns="http://www.w3.org/2000/svg" width="13.384" height="17.5" viewBox="0 0 13.384 17.5"><g id="Groupe_1344" data-name="Groupe 1344" transform="translate(-2873.733 1344.5)"><g id="Groupe_788" data-name="Groupe 788" transform="translate(2872.414 -1342.69)"><path id="Tracé_3" data-name="Tracé 3" d="M0,0,5.278,5.278,10.555,0" transform="translate(2.733 4.693)" fill="none" stroke="#008884" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><line id="Ligne_1" data-name="Ligne 1" y1="10.781" transform="translate(8.011 -0.81)" fill="none" stroke="#008884" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/></g><path id="Tracé_975" data-name="Tracé 975" d="M2875.147-1328h10.764" transform="translate(-0.147)" fill="none" stroke="#008884" stroke-linecap="round" stroke-width="2"/></g></svg>';
		this.fieldFileList = document.querySelectorAll('.field__file');
		this.dropdownIcon = '<svg class="field__dropdown-icon" xmlns="http://www.w3.org/2000/svg" width="12.828" height="7.414" viewBox="0 0 12.828 7.414"><g id="Groupe_1175" data-name="Groupe 1175" transform="translate(1.414 -22.704)"><path id="Tracé_3" data-name="Tracé 3" d="M0,0,5,5l5-5" transform="translate(0 24.118)" fill="none" stroke="#041e36" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/></g></svg>';
		this.fieldDropdownList = document.querySelectorAll('.field__dropdown');
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
	}
}
