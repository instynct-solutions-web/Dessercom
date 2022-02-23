export default class Team {
	constructor() {
		this.teamMembersList = document.querySelectorAll('.team-grid__division-grid');
		this.teamMembersButtonList = document.querySelectorAll('.team-grid__division-item');
		this.teamMembersButtons = document.querySelector('.team-grid__division-list');
		this.teamMembersId = [];
		this.teamMembersTop = [];
		this.teamMembersHeight = [];
		this.manageEvents();
	}

	manageEvents() {
		if (this.teamMembersList.length !== 0) {
			if (window.innerWidth >= 600 && window.innerWidth <= 1024) {
				for (let i = 0; i < this.teamMembersList.length; i += 1) {
					this.teamMembers = this.teamMembersList[i];
					this.teamMembersId.push(this.teamMembers.id);
					this.teamMembersTop.push(this.teamMembers.getBoundingClientRect().y);
					this.teamMembersHeight.push(this.teamMembers.getBoundingClientRect().height);
				}
			}
			window.addEventListener('scroll', () => {
				for (let i = 0; i < this.teamMembersList.length; i += 1) {
					if (window.scrollY >= this.teamMembersTop[i] - 150 && window.scrollY < this.teamMembersTop[i] + this.teamMembersHeight[i] - 150) {
						for (let j = 0; j < this.teamMembersList.length; j += 1) {
							this.teamMembersButtons.classList.remove(`${this.teamMembersButtons.classList[0]}--${this.teamMembersId[j]}`);
						}
						this.teamMembersButtons.classList.add(`${this.teamMembersButtons.classList[0]}--${this.teamMembersId[i]}`);
					}
				}
			});
		}
	}
}
