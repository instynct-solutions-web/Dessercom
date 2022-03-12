import lottie from 'lottie-web';

export default class AboutPattern {
	constructor() {
		this.aboutPattern = document.querySelector('.about-funding__motif');
		this.manageEvents();
	}

	manageEvents() {
		this.aboutPatternOptions = {
			container: this.aboutPattern,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			path: this.aboutPattern.getAttribute('data-lottie-pattern'),
		};
		this.aboutPattnerAnimation = lottie.loadAnimation(this.aboutPatternOptions);
		playAboutPattern();
		window.addEventListener('resize', () => {
			playAboutPattern();
		});
	}

	playAboutPattern() {
		if (window.innerWidth < 1024) {
			this.aboutPattnerAnimation.play();
		} else {
			this.aboutPattnerAnimation.stop();
		}
	}
}
