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
import Menu from './modules/_menu';
import HistorySlider from './modules/_historySlider';
import JobsSlider from './modules/_jobsSlider';
import Jobs from './modules/_jobs';
import TermsPolicies from './modules/_termsPolicies';
import Forms from './modules/_forms';
import HomeServices from './modules/_homeServices';

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

		const mapShow = new MapShow();

		const canvas = new Canvas();

		const servicesDrawer = new ServicesDrawer();

		const contactDrawer = new ContactDrawer();

		const contactShow = new ContactShow();

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
		// Home Services Scripts
		const homeServices = new HomeServices();
	},
};

document.addEventListener('DOMContentLoaded', () => {
	App.init();
});
