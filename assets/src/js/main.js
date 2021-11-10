/* eslint-disable */
import CalculateHeight from './helpers/_calculateHeight';
import Wolfpack from './libraries/_wolfpack';
const App = {
	/**
	 * App.init
	 */
	init() {
		// Utils Scripts
		const calculateHeight = new CalculateHeight();
		// Wolfpack Scripts
		const wolfpack = new Wolfpack();
	},
};

document.addEventListener('DOMContentLoaded', () => {
	App.init();
});
