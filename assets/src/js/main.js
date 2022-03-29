/* eslint-disable */
import CalculateHeight from './helpers/_calculateHeight';
import Wolfpack from './libraries/_wolfpack';
import Cursor from './libraries/_cursor';
import Marquee from './libraries/_marquee';
import Text from './libraries/_text';
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
import PayButton from './modules/_payButton';
import InteractiveMap from './modules/_interactiveMap';
import InvoiceHint from './modules/_invoiceHint';
import Team from './modules/_team';
import NewsFilters from './modules/_newsFilters';
import JobsFilters from './modules/_jobsFilters';
import FaqFilters from './modules/_faqFilters';
import CFF from './plugins/_cff';

const App = {
	/**
	 * App.init
	 */
	init() {
		const calculateHeight = new CalculateHeight();
		const wolfpack = new Wolfpack();
		const cursor = new Cursor();
		const marquee = new Marquee();
		const text = new Text();
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
		const newsFilters = new NewsFilters();
		const jobsFilters = new JobsFilters();
		const faqFilters = new FaqFilters();
		const cff = new CFF();
		jQuery(document).on('sf:ajaxfinish', '.searchandfilter', function () {
			const termsPolicies = new TermsPolicies();
		});
	},
};

document.addEventListener('DOMContentLoaded', () => {
	App.init();
});
