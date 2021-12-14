/* eslint-disable */
import CalculateHeight from './helpers/_calculateHeight';
import Wolfpack from './libraries/_wolfpack';
import CircleText from './modules/_circleText';
import HeroSlider from './modules/_heroSlider';
import MapShow from './modules/_mapShow';
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

		const circleText = new CircleText();

		const mapShow = new MapShow();
		console.log('test');
	},
};

document.addEventListener('DOMContentLoaded', () => {
	App.init();
});
