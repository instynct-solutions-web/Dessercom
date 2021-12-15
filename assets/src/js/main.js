/* eslint-disable */
import CalculateHeight from './helpers/_calculateHeight';
import Wolfpack from './libraries/_wolfpack';
import CircleText from './modules/_circleText';
import HeroSlider from './modules/_heroSlider';
import MapShow from './modules/_mapShow';
import Canvas from './modules/_canvas';
import VideoToggle from './modules/_videoToggle';
import ServicesDrawer from './modules/_servicesDrawer';
import ContactDrawer from './modules/_contactDrawer';
import ContactShow from './modules/_contactShow';

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

		const canvas = new Canvas();

		const servicesDrawer = new ServicesDrawer();

		const contactDrawer = new ContactDrawer();

		const contactShow = new ContactShow();
	},
};

document.addEventListener('DOMContentLoaded', () => {
	App.init();
});
