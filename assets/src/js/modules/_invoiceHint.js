/* eslint-disable */
export default class InvoiceHint {
	constructor() {
		this.hintIcon = document.querySelector('[data-hint-icon]');
		this.hintImageCloseList = document.querySelectorAll('[data-hint-image-close]');
		this.hintImageContainerList = document.querySelectorAll('[data-hint-image-container]');
		this.hintImageList = document.querySelectorAll('[data-hint-image]');
		if (this.hintImageList[0]) {
			this.manageEvents();
		}
	}

	manageEvents() {
		this.hintIcon.onclick = () => {
			for (let i = 0; i < this.hintImageContainerList.length; i++) {
				this.show(i);
			}
		};
		for (let i = 0; i < this.hintImageCloseList.length; i++) {
			this.hintImageCloseList[i].onclick = () => {
				this.close(i);
			};
		}
		jQuery(function ($) {
			$('form[id^="gform_"]')
				.on('change', function (e) {
					var $reqd = $(this)
						.find('.gfield_contains_required.gfield_visibility_visible')
						.filter(function (i, c) {
							return []
								.concat(
									$(c)
										.find('input[type="text"], textarea')
										.filter(function (i, fl) {
											return $(fl).val().length == 0;
										})
										.get()
								)
								.concat($(c).find('input[type="checkbox"]').not(':checked').get()).length;
						});
					if ($reqd.length) {
						$(this).find('input[type="submit"]').addClass('disabled button-disabled');
					} else {
						$(this).find('input[type="submit"]').removeClass('disabled button-disabled');
					}
				})
				.trigger('change');
		});
	}

	show(i) {
		this.hintImageContainerList[i].classList.add(`${this.hintImageContainerList[i].classList[0]}--visible`);
	}

	close(i) {
		this.hintImageContainerList[i].classList.remove(`${this.hintImageContainerList[i].classList[0]}--visible`);
	}
}
