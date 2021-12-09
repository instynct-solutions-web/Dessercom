/* eslint-disable */
import CalculateHeight from './helpers/_calculateHeight';
import Wolfpack from './libraries/_wolfpack';
import CircleText from './modules/_circleText';
import Menu from './modules/_menu';

const App = {
	/**
	 * App.init
	 */
	init() {
		// Calculate Height Scripts
		const calculateHeight = new CalculateHeight();
		// Wolfpack Scripts
		const wolfpack = new Wolfpack();
		// Circle Text Scripts
		const circleText = new CircleText();
		// Menu Scripts
		const menu = new Menu();
	},
};

document.addEventListener('DOMContentLoaded', () => {
	App.init();
});
