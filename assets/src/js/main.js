/* eslint-disable */
import CalculateHeight from './helpers/_calculateHeight';
import Wolfpack from './libraries/_wolfpack';
import CircleText from './modules/_circleText';
import HeroSlider from './modules/_heroSlider';
import ResearchSlider from './modules/_researchSlider';
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
import Pricing from './modules/_pricing';
import LightboxSlider from './modules/_lightboxSlider';

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
		// Research Slider Scripts
		const researchSlider = new ResearchSlider();
		// Dessercom House Slider
		// const houseSlider = new HouseSlider();
		// Dessercom Border Slider
		// const bordersSlider = new BordersSlider();

		const lightboxSlider = new LightboxSlider();
		// Home Services Scripts
		const homeServices = new HomeServices();
		// Pricing Scripts
		const pricing = new Pricing();
	},
};

document.addEventListener('DOMContentLoaded', () => {
	App.init();
});
