/* eslint-disable */
import CalculateHeight from './helpers/_calculateHeight';
import Wolfpack from './libraries/_wolfpack';
import HeroSlider from './modules/_heroSlider';
import VideoToggle from './modules/_videoToggle';
const App = {
	/**
	 * App.init
	 */
	init() {
		// Calculate Height Scripts
		const calculateHeight = new CalculateHeight();
		// Wolfpack Scripts
		const wolfpack = new Wolfpack();

		const heroSlider = new HeroSlider();

		const videoToggle = new VideoToggle();
	},
};

document.addEventListener('DOMContentLoaded', () => {
	App.init();
});
