/* eslint-disable */
import SFChosen from './plugins/_sfchosen';
import SFBuild from './plugins/_sfbuild';
import CalculateHeight from './helpers/_calculateHeight';
import Wolfpack from './libraries/_wolfpack';
import CircleText from './modules/_circleText';
import HeroSlider from './modules/_heroSlider';
import ResearchSlider from './modules/_researchSlider';
import MapShow from './modules/_mapShow';
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
import InteractiveMap from './modules/_interactiveMap';
import InvoiceHint from './modules/_invoiceHint';
import Team from './modules/_team';

const App = {
	/**
	 * App.init
	 */
	init() {
		// Swup Scripts
		const swup = new Swup({
			plugins: [new SwupBodyClassPlugin()],
		});
		let invoiceReloaded = true;

		function init() {
			/* if (document.querySelector('.home-social__feed')) {
				sbi_init();
			} */
			if (!document.querySelector('.page-template-tp-invoice')) {
				invoiceReloaded = false;
			}
			if (!invoiceReloaded && document.querySelector('.page-template-tp-invoice')) {
				location.reload();
			} else {
				const sfchosen = new SFChosen();
				const sfbuild = new SFBuild();
				const calculateHeight = new CalculateHeight();
				const wolfpack = new Wolfpack();
				const heroSlider = new HeroSlider();
				const videoToggle = new VideoToggle();
				const mapShow = new MapShow();
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
				const interactiveMap = new InteractiveMap();
				const invoiceHint = new InvoiceHint();
				const team = new Team();
			}
		}
		init();
		jQuery(document).on('sf:ajaxfinish', '.searchandfilter', function () {
			const termsPolicies = new TermsPolicies();
		});
		swup.on('contentReplaced', init);
	},
};

document.addEventListener('DOMContentLoaded', () => {
	App.init();
});
