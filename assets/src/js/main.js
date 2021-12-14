/* eslint-disable */
import CalculateHeight from './helpers/_calculateHeight';
import Wolfpack from './libraries/_wolfpack';
import CircleText from './modules/_circleText';
import Menu from './modules/_menu';
import HistorySlider from './modules/_historySlider';
import JobsSlider from './modules/_jobsSlider';
import Jobs from './modules/_jobs';
import TermsPolicies from './modules/_termsPolicies';
import Forms from './modules/_forms';

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
		// History Slider Scripts
		const historySlider = new HistorySlider();
		// Jobs Slider Scripts
		const jobsSlider = new JobsSlider();
		// Jobs Scripts
		const jobs = new Jobs();
		// TermsPolicies Scripts
		const termsPolicies = new TermsPolicies();
		// Forms Scripts
		const forms = new Forms();
	},
};

document.addEventListener('DOMContentLoaded', () => {
	App.init();
});
