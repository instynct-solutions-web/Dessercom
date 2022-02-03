import { TweenLite, Power4 } from 'gsap';

export default class Preloader {
	// eslint-disable-next-line
	initPreloader(preloader, speed, delay) {
		if (preloader) {
			window.addEventListener('load', () => {
				TweenLite.to(preloader, speed, {
					ease: Power4.easeInOut,
					opacity: 0,
					force3D: true,
				});
				setTimeout(() => {
					preloader.style.display = 'none';
				}, delay);
			});
		}
	}
}
