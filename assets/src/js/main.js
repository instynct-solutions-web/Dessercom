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
import ContactForm from './modules/_contactForm';
import FooterCursor from './modules/_footerCursor';
import HighlightCursor from './modules/_highlightCursor';
import Swup from 'swup';
import SwupBodyClassPlugin from '@swup/body-class-plugin';
import SwupScriptsPlugin from '@swup/scripts-plugin';
import PayButton from './modules/_payButton';

const App = {
	/**
	 * App.init
	 */
	init() {
		// Swup Scripts
		const swup = new Swup({
			plugins: [
				new SwupBodyClassPlugin(),
				new SwupScriptsPlugin({
					head: true,
					body: false,
				}),
			],
		});
		function init() {
			const calculateHeight = new CalculateHeight();
			const wolfpack = new Wolfpack();
			const heroSlider = new HeroSlider();
			const videoToggle = new VideoToggle();
			const mapShow = new MapShow();
			const canvas = new Canvas();
			const servicesDrawer = new ServicesDrawer();
			const contactDrawer = new ContactDrawer();
			const contactShow = new ContactShow();
			const circleText = new CircleText();
			const menu = new Menu();
			const historySlider = new HistorySlider();
			const jobsSlider = new JobsSlider();
			const jobs = new Jobs();
			const termsPolicies = new TermsPolicies();
			const forms = new Forms();
			const researchSlider = new ResearchSlider();
			const lightboxSlider = new LightboxSlider();
			const homeServices = new HomeServices();
			const pricing = new Pricing();
			const contactForm = new ContactForm();
			const footerCursor = new FooterCursor();
			const highlightCursor = new HighlightCursor();
			const payButton = new PayButton();
		}
		init();
		swup.on('contentReplaced', init);
	},
};

document.addEventListener('DOMContentLoaded', () => {
	App.init();
});
