/* eslint-disable */
import VirtualScroll from 'virtual-scroll';
import Tadam from './_tadam';
import Preloader from './_preloader';

export default class Wolfpack {
	constructor() {
		window.addEventListener(
			'pageshow',
			(evt) => {
				if (evt.persisted) {
					setTimeout(() => {
						window.location.reload();
					}, 10);
				}
			},
			false
		);

		// Stop default behaviour
		window.scrollTo(0, 0);
		if (window.event) {
			window.event.preventDefault();
		}

		// Check Touch Devices
		this.isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

		// Preloader Variables
		const preloaderFunction = new Preloader();
		const preloader = document.querySelector('[data-preloader]');
		let preloaderDelay = 0;
		let preloaderSpeed = 0;
		if (preloader) {
			if (preloader.getAttribute('data-preloader-delay')) {
				preloaderDelay = preloader.getAttribute('data-preloader-delay');
				preloaderSpeed = preloaderDelay / 1000;
			} else {
				preloaderDelay = 700;
				preloaderSpeed = preloaderDelay / 1000;
			}
		}

		const linkList = document.querySelectorAll('a');
		for (let i = 0; i < linkList.length; i += 1) {
			linkList[i].addEventListener('click', (e) => {
				if (linkList[i].getAttribute('href') === window.location.pathname) {
					e.preventDefault();
					preloaderFunction.showPreloader(preloader, preloaderSpeed);
				} else if (!linkList[i].getAttribute('href').includes(window.location.pathname + '#') && linkList[i].getAttribute('href').includes('/') && linkList[i].getAttribute('target') !== '_blank') {
					e.preventDefault();
					preloaderFunction.showPreloader(preloader, preloaderSpeed);
					setTimeout(() => {
						window.location = linkList[i].getAttribute('href');
					}, preloaderDelay);
				}
			});
		}

		// Preloader Init
		preloaderFunction.initPreloader(preloader, preloaderSpeed, preloaderDelay);

		if (!this.isTouchDevice) {
			this.wolfpackDesktop();
		} else {
			this.wolfpackMobile();
		}
	}

	wolfpackDesktop() {
		// FORM LABELS
		// Forms Variables
		const formsList = document.querySelectorAll('[data-form]');
		let formChanged = [];
		let formParentPosition = [];
		let formClass = [];
		let fieldList = [];
		if (formsList.length !== 0) {
			for (let i = 0; i < formsList.length; i += 1) {
				formChanged.push(false);
				fieldList.push([]);
			}
		}

		// Forms Init
		initForms();

		setTimeout(() => {
			updateFormFocus();
		}, 200);
		jQuery(document).bind('gform_post_render', () => {
			updateFormFocus();
		});

		jQuery(document).bind('gform_post_render', () => {
			setTimeout(() => {
				window.scrollTo(0, 0);
				domBody.classList.add('noscroll');
				setTimeout(() => {
					domBody.classList.remove('noscroll');
				}, 500);
				if (!anchorScrolling) {
					anchorScrolling = true;
				}
				if (!scrolling) {
					startLoopSections(wolfpackMainIndex);
					showScrollbar(wolfpackMainIndex);
					scrollTimerSections(wolfpackMainIndex);
					scrolling = true;
				}
				updateTargetY(0, wolfpackMainIndex);
				time = 10;
			}, 200);
			for (let i = 0; i < formsList.length; i += 1) {
				formChanged[i] = false;
			}
			initForms();
		});

		// Filter Height Variables
		const filterList = document.querySelectorAll('.search-filter-results');
		let filterHeightInitial = [];
		let filterHeightNew = [];
		let filterHeightDifference = [];
		if (filterList.length !== 0) {
			for (let i = 0; i < filterList.length; i += 1) {
				filterHeightInitial.push(filterList[i].getBoundingClientRect().height);
				filterHeightNew.push(0);
				filterHeightDifference.push(0);
			}
		}

		// Filter Height Function
		initFilterHeight();

		// VARIABLES & INIT

		// HTML & Body style
		const domHTML = document.querySelector('html');
		domHTML.style.overflow = 'hidden';

		const domBody = document.querySelector('body');
		domBody.classList.add('wolfpack-desktop');
		domBody.style.overflow = 'hidden';
		domBody.style.height = '100vh';

		// Orientation Variables
		let previousOrientation = window.orientation;

		// Orientation Init
		initOrientation();

		// Virtual Scroll Variables
		let virtualScroll;

		// Virtual Scroll Init
		initVirtualScroll();

		// Global Variables
		const menu = document.querySelector('[data-menu]');
		let scrolling = false;
		let anchorScrolling = false;
		const ease = 0.06;
		let time = 10;
		let windowHeight = window.innerHeight;

		// Preloader Variables
		const preloader = document.querySelector('[data-preloader]');

		// Wolfpack Variables
		let wolfpackList = [];
		let wolfpackHovering = 0;
		let wolfpackMainIndex = 0;
		let wolfpackLoop = [];
		let wolfpackCurrentY = [];
		let wolfpackTargetY = [];
		let wolfpackHeight = [];
		let wolfpackParentHeight = [];
		let wolfpackScrollLimit = [];
		let wolfpackTransform = [];
		let wolfpackScrollPosition = [];
		let wolfpackLastOffset = [];
		let wolfpackDirection = [];
		let wolfpackDragging = [];
		let wolfpackSectionList = [];
		let wolfpackSectionTopList = [];
		let wolfpackSectionBottomList = [];

		setTimeout(() => {
			// Wolfpack Init
			initWolfpack();

			// Wolfpack Watch
			watchWolfpack();

			// Watch Wolfpack Resize
			watchWolfpackResize();
		}, 100);

		// Scrollbar Variables
		let scrollbarList = [];
		let scrollbarThumbList = [];
		let scrollbarIndex = [];
		let scrollbarCurrentY = [];
		let scrollbarTargetY = [];
		let scrollbarHeight = [];
		let scrollbarThumbHeight = [];
		let scrollbarScrollLimit = [];
		let scrollbarTransform = [];

		// Scrollbar Init
		setTimeout(() => {
			// Scrollbar Init
			initScrollbar();

			// Scrollbar Watch
			watchScrollbar();
		}, 100);

		// Location Variables
		const locationHash = window.location.hash;
		let locationElement = undefined;
		let locationTop = 0;
		if (window.location.hash) {
			locationElement = document.querySelector(locationHash);
		}

		// Location Init
		initLocation();

		// Anchors Variables
		let anchorList = document.querySelectorAll(`a[href*="#"]`);
		let anchorElementList = [];
		let anchorLocation = [];
		let anchorLocationTop = [];
		if (anchorList.length !== 0) {
			for (let i = 0; i < anchorList.length; i += 1) {
				if (anchorList[i].pathname === window.location.pathname && anchorList[i].getAttribute('href') !== '#') {
					anchorElementList.push(anchorList[i]);
					anchorLocation.push(document.querySelector(anchorList[i].getAttribute('href').replace(window.location.pathname, '')));
					if (document.querySelector(anchorList[i].getAttribute('href').replace(window.location.pathname, ''))) {
						anchorLocationTop.push(document.querySelector(anchorList[i].getAttribute('href').replace(window.location.pathname, '')).getBoundingClientRect().y);
					} else {
						anchorLocationTop.push(0);
					}
				} else {
					anchorList[i].classList.add('no-anchor');
				}
			}
		}

		// Anchors Init
		initAnchors();

		// First Loop Variables
		let firstLoop = true;

		// First Loop Init
		setTimeout(() => {
			initFirstLoop();
		}, 100);

		// Scroll Watch Variables
		let modulesUpdated = false;

		// Scroll Watch Init
		initScrollWatch();

		// Header Disappear Variables
		let headerDisappearList = [];
		let headerDisappearSmall = [];
		let headerDisappearHide = [];

		setTimeout(() => {
			// Init Header Disappear
			initHeaderDisappear();
		}, 100);

		// Tadam Variables
		const tadamFunction = new Tadam();
		let tadamList = [];
		let tadamTop = [];
		let tadamRepeat = [];
		let tadamThreshold = [];
		let tadamThresholdMobile = [];
		let tadamElementList = [];
		let tadamAnimationList = [];
		let tadamRepeatAnimationList = [];
		let tadamFinished = [];
		let tadamVisible = [];

		setTimeout(() => {
			// Init Tadam
			initTadam();

			// Watch Tadam
			watchTadam();
		}, 100);

		// Parallax Variables
		let parallaxList = [];
		let parallaxTop = [];
		let parallaxStop = [];
		let parallaxSpeed = [];
		let parallaxCurrentPosition = [];
		let parallaxPositionY = [];
		let parallaxScrollVariable = [];
		let parallaxTransform = [];

		setTimeout(() => {
			// Init Parallax
			initParallax();
		}, 100);

		// Follow-me variables
		let followMeContainerList = [];
		let followMeList = [];
		let followMeTop = [];
		let followMeHeight = [];
		let followMeContainerHeight = [];
		let followMeStart = [];
		let followMeStop = [];
		let followMeTransform = [];

		setTimeout(() => {
			// Init Follow Me
			initFollowMe();
		}, 100);

		// Animation squence variables
		const animationSequenceList = document.querySelectorAll('[data-animation]');
		let animationSequenceName = [];
		let animationSequenceFullPage = [];
		let animationSequenceTop = [];
		let animationSequenceHeight = [];
		let animationTimeline = [];
		let animationSequenceStop = [];
		let animationCurrentPosition = [];
		let animationPositionY = [];
		let animationScrollVariable = [];
		if (animationSequenceList.length !== 0) {
			for (let i = 0; i < animationSequenceList.length; i += 1) {
				animationSequenceTop.push(animationSequenceList[i].getBoundingClientRect().y);
				animationSequenceHeight.push(animationSequenceList[i].offsetHeight);
				animationTimeline.push(parseFloat(windowHeight + animationSequenceHeight[i]));
				animationSequenceStop.push(parseFloat(animationSequenceList[i].offsetHeight + animationSequenceList[i].getBoundingClientRect().y + windowHeight));
				animationCurrentPosition.push(0);
				animationPositionY.push(0);
				animationScrollVariable.push(0);
				if (animationSequenceList[i].getAttribute('data-animation-name')) {
					animationSequenceName.push(animationSequenceList[i].getAttribute('data-animation-name'));
				} else {
					animationSequenceName.push(`sequence-${i}`);
				}
				if (animationSequenceList[i].getAttribute('data-animation-full-page')) {
					if (animationSequenceList[i].getAttribute('data-animation-full-page') === 'true') {
						animationSequenceFullPage.push(true);
					} else {
						animationSequenceFullPage.push(false);
					}
				} else {
					animationSequenceFullPage.push(false);
				}
				animationSequenceList[i].style.animation = `animation-${animationSequenceName[i]} 1s linear`;
				animationSequenceList[i].style.animationDelay = `calc(var(--scroll-${i}) * -1s)`;
				animationSequenceList[i].style.animationPlayState = 'paused';
				animationSequenceList[i].style.animationIterationCount = '1';
				animationSequenceList[i].style.animationFillMode = 'both';
			}
		}

		// Changes variables
		const changesList = document.querySelectorAll('[data-changes]');
		let changesTop = [];
		let changesElements = [];
		let changesClasses = [];
		let changesActive = [];
		if (changesList.length !== 0) {
			for (let i = 0; i < changesList.length; i += 1) {
				changesTop.push(changesList[i].getBoundingClientRect().y + parseFloat(windowHeight / 2));
				if (changesList[i].getAttribute('data-changes-elements')) {
					changesElements.push(changesList[i].getAttribute('data-changes-elements').split(', '));
				} else {
					changesElements.push('body');
				}
				if (changesList[i].getAttribute('data-changes-classes')) {
					changesClasses.push(changesList[i].getAttribute('data-changes-classes').split(', '));
				} else {
					changesClasses.push('changes');
				}
				changesActive.push(false);
			}
		}

		// Links Variables
		const linkList = document.querySelectorAll('a');
		for (let i = 0; i < linkList.length; i += 1) {
			linkList[i].addEventListener('click', () => {
				if (linkList[i].getAttribute('href') === window.location.pathname) {
					location.reload();
				} else if (!linkList[i].getAttribute('href').includes(window.location.pathname + '#') && linkList[i].getAttribute('href').includes('/') && linkList[i].getAttribute('target') !== '_blank') {
					virtualScroll.off(moveScroll);
				}
			});
		}

		// FUNCTIONS

		// Orientation Init Function
		function initOrientation() {
			setInterval(watchOrientation, 2000);
		}

		// Orientation Watch Function
		function watchOrientation() {
			if (window.orientation !== previousOrientation) {
				previousOrientation = window.orientation;
				location.reload();
			}
		}

		// Virtual Scroll Function
		function initVirtualScroll() {
			if (virtualScroll === undefined) {
				virtualScroll = new VirtualScroll({
					mouseMultiplier: 0.4,
					touchMultiplier: 2,
					useKeyboard: false,
				});
				document.querySelector('body').classList.add('wolfpack-scroll');
				document.querySelector('html').classList.add('wolfpack-scroll');
			}
		}

		// Wolfpack Init Function
		function initWolfpack() {
			wolfpackList = document.querySelectorAll('[data-wolfpack]');
			if (wolfpackList.length !== 0) {
				for (let i = 0; i < wolfpackList.length; i += 1) {
					const wolfpack = wolfpackList[i];
					if (wolfpack.getAttribute('data-wolfpack')) {
						wolfpackMainIndex = i;
					}
					wolfpackLoop.push(undefined);
					wolfpackCurrentY.push(0);
					wolfpackTargetY.push(0);
					wolfpackHeight.push(wolfpack.scrollHeight);
					wolfpackParentHeight.push(wolfpack.parentNode.offsetHeight);
					wolfpackScrollLimit.push((wolfpackHeight[i] - wolfpackParentHeight[i]) * -1);
					wolfpackTransform.push('');
					wolfpackList[i].style.transform = wolfpackTransform[i];
					wolfpackScrollPosition.push(0);
					wolfpackLastOffset.push(0);
					wolfpackDirection.push('down');
					wolfpackDragging.push(false);
					wolfpackSectionList.push(wolfpack.querySelectorAll('[data-wolfpack-section]'));
					wolfpackSectionTopList.push([]);
					wolfpackSectionBottomList.push([]);
					if (wolfpackSectionList[i].length !== 0) {
						for (let j = 0; j < wolfpackSectionList[i].length; j += 1) {
							wolfpackSectionTopList[i].push(wolfpackSectionList[i][j].offsetTop);
							wolfpackSectionBottomList[i].push(wolfpackSectionTopList[i][j] + wolfpackSectionList[i][j].getBoundingClientRect().height + windowHeight);
						}
					}
				}
			}
		}

		// Wolfpack Update Function
		function updateWolfpack() {
			if (wolfpackList.length !== 0) {
				for (let i = 0; i < wolfpackList.length; i += 1) {
					const wolfpack = wolfpackList[i];
					wolfpackHeight[i] = wolfpack.scrollHeight;
					if (wolfpack.parentNode) {
						wolfpackParentHeight[i] = wolfpack.parentNode.offsetHeight;
					}
					wolfpackScrollLimit[i] = (wolfpackHeight[i] - wolfpackParentHeight[i]) * -1;
					if (wolfpackSectionList[i].length !== 0) {
						for (let j = 0; j < wolfpackSectionList[i].length; j += 1) {
							wolfpackSectionTopList[i][j] = wolfpackSectionList[i][j].offsetTop;
							wolfpackSectionBottomList[i][j] = wolfpackSectionTopList[i][j] + wolfpackSectionList[i][j].getBoundingClientRect().height + windowHeight;
						}
					}
				}
			}
		}

		// Wolfpack Watch Function
		function watchWolfpack() {
			if (wolfpackList.length !== 0) {
				for (let i = 0; i < wolfpackList.length; i += 1) {
					if (preloader.style.display === 'none') {
						wolfpackHovering = wolfpackMainIndex;
					}
					wolfpackList[i].addEventListener('mouseenter', () => {
						if (!anchorScrolling) {
							for (let j = 0; j < wolfpackList.length; j += 1) {
								scrolling = false;
								stopLoopSections(j);
							}
						}
						wolfpackHovering = i;
					});
					wolfpackList[i].addEventListener('mouseleave', () => {
						if (!anchorScrolling) {
							for (let j = 0; j < wolfpackList.length; j += 1) {
								scrolling = false;
								stopLoopSections(j);
							}
						}
						wolfpackHovering = wolfpackMainIndex;
					});
				}
			}
		}

		// First Loop Function
		function initFirstLoop() {
			if (wolfpackList.length !== 0 && !locationHash) {
				for (let i = 0; i < wolfpackList.length; i += 1) {
					if (!scrolling) {
						startLoopSections(i);
						scrollTimerSections(i);
					}
					time = 0;
				}
				scrolling = true;
			}
		}

		// Scroll Watch Function
		function initScrollWatch() {
			if (virtualScroll) {
				virtualScroll.on(moveScroll);
			}
		}

		// Move Scroll Function
		function moveScroll(e) {
			if (!modulesUpdated) {
				modulesUpdated = true;
				updateModules();
			}
			if (!scrolling) {
				startLoopSections(wolfpackHovering);
				showScrollbar(wolfpackHovering);
				scrollTimerSections(wolfpackHovering);
				anchorScrolling = false;
				scrolling = true;
			}
			updateTargetY(e.deltaY, wolfpackHovering);
			time = 10;
		}

		// Scrollbar Init Function
		function initScrollbar() {
			scrollbarList = document.querySelectorAll('[data-scrollbar]');
			scrollbarThumbList = document.querySelectorAll('[data-scrollbar-thumb]');
			if (scrollbarList.length !== 0) {
				for (let i = 0; i < scrollbarList.length; i += 1) {
					scrollbarIndex.push(scrollbarList[i].getAttribute('data-scrollbar-index'));
					scrollbarCurrentY.push(0);
					scrollbarTargetY.push(0);
					scrollbarHeight.push(scrollbarList[i].offsetHeight);
					scrollbarThumbHeight.push((scrollbarHeight[i] * wolfpackParentHeight[scrollbarIndex[i]]) / wolfpackHeight[scrollbarIndex[i]]);
					scrollbarScrollLimit.push((scrollbarHeight[i] - scrollbarThumbHeight[i]) * -1);
					scrollbarTransform.push(`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`);
					scrollbarThumbList[i].style.height = scrollbarThumbHeight[i] + 'px';
				}
			}
		}

		// Scrollbar Update Function
		function updateScrollbar() {
			if (scrollbarList.length !== 0) {
				for (let i = 0; i < scrollbarList.length; i += 1) {
					const scrollbar = scrollbarList[i];
					scrollbarHeight[i] = scrollbar.offsetHeight;
					scrollbarThumbHeight[i] = (scrollbarHeight[i] * wolfpackParentHeight[scrollbarIndex[i]]) / wolfpackHeight[scrollbarIndex[i]];
					scrollbarScrollLimit[i] = (scrollbarHeight[i] - scrollbarThumbHeight[i]) * -1;
					scrollbarThumbList[i].style.height = scrollbarThumbHeight[i] + 'px';
				}
			}
		}

		// Scrollbar Dragging Function
		function watchScrollbar() {
			if (scrollbarThumbList.length !== 0) {
				for (let i = 0; i < scrollbarThumbList.length; i += 1) {
					scrollbarThumbList[i].addEventListener('mousedown', (e) => {
						if (!modulesUpdated) {
							modulesUpdated = true;
							updateModules();
						}
						if (wolfpackSectionList[scrollbarIndex[i]].length === 0) {
							wolfpackDragging[scrollbarIndex[i]] = true;
							showScrollbar(scrollbarIndex[i]);
							document.addEventListener('mousemove', (f) => {
								if (wolfpackDragging[scrollbarIndex[i]]) {
									f.preventDefault();
									if (!scrolling) {
										startLoop(scrollbarIndex[i]);
										showScrollbar(scrollbarIndex[i]);
										scrolling = true;
									}
									dragTargetY(f.clientY, scrollbarIndex[i]);
								}
							});
						} else {
							wolfpackDragging[scrollbarIndex[i]] = true;
							showScrollbar(i);
							document.addEventListener('mousemove', (f) => {
								if (wolfpackDragging[scrollbarIndex[i]]) {
									f.preventDefault();
									if (!scrolling) {
										startLoopSections(scrollbarIndex[i]);
										showScrollbar(i);
										scrolling = true;
									}
									dragTargetY(f.clientY, scrollbarIndex[i]);
								}
							});
						}
					});
					document.addEventListener('mouseup', () => {
						scrolling = false;
						wolfpackDragging[scrollbarIndex[i]] = false;
						hideScrollbar(i);
					});
				}
			}
		}

		// Anchors Function
		function initAnchors() {
			if (anchorElementList.length !== 0) {
				for (let i = 0; i < anchorElementList.length; i += 1) {
					if (!anchorElementList[i].classList.contains('no-anchor')) {
						anchorElementList[i].addEventListener('click', (e) => {
							e.preventDefault();
							domBody.classList.add('noscroll');
							setTimeout(() => {
								domBody.classList.remove('noscroll');
							}, 500);
							if (!anchorScrolling) {
								anchorScrolling = true;
							}
							if (!scrolling) {
								startLoopSections(wolfpackMainIndex);
								showScrollbar(wolfpackMainIndex);
								scrollTimerSections(wolfpackMainIndex);
								scrolling = true;
							}
							updateTargetY(-(anchorLocationTop[i] + wolfpackCurrentY[wolfpackMainIndex]), wolfpackMainIndex);
							time = 10;
						});
					}
				}
			}
		}

		// Location Function
		function initLocation() {
			if (locationHash) {
				setTimeout(() => {
					if (!modulesUpdated) {
						modulesUpdated = true;
						updateModules();
					}
					locationTop = locationElement.getBoundingClientRect().y + Math.abs(wolfpackCurrentY[wolfpackMainIndex]);
					if (!anchorScrolling) {
						anchorScrolling = true;
						if (!scrolling) {
							startLoopSections(wolfpackMainIndex);
							scrollTimerSections(wolfpackMainIndex);
						}
						scrolling = true;
						updateTargetY(-Math.abs(locationTop), wolfpackMainIndex);
						time = 10;
					}
				}, 750);
			}
		}

		// Start Loop Sections Function
		function startLoopSections(index) {
			if (!wolfpackLoop[index]) {
				wolfpackLoop[index] = window.requestAnimationFrame(() => {
					updateLoopSections(index);
				});
			}
		}

		// Stop Loop Sections Function
		function stopLoopSections(index) {
			if (wolfpackLoop[index]) {
				cancelAnimationFrame(updateLoopSections(index));
				wolfpackLoop[index] = undefined;
			}
		}

		// Scroll Timer Sections Function
		function scrollTimerSections(index) {
			const timer = setInterval(() => {
				time -= 1;
				if (time <= 0) {
					clearInterval(timer);
					scrolling = false;
					anchorScrolling = false;
					hideScrollbar(index);
					stopLoopSections(index);
					setTimeout(() => {
						firstLoop = false;
					}, 100);
				}
			}, 200);
		}

		// Update Loop Sections Function
		function updateLoopSections(index) {
			wolfpackLoop[index] = undefined;
			if (scrolling) {
				updateCurrentY(index);
				updateScrollPosition(index);
				updateTransformSections(index);
				detectWolfpackSection(index);
				updateDirection(index);
				watchHeaderDisappear();
				watchTadam();
				watchParallax();
				watchFollowMe();
				watchAnimationSequence();
				watchChanges();
				startLoopSections(index);
			}
		}

		// Update Current Y Function
		function updateCurrentY(index) {
			wolfpackCurrentY[index] += Math.round(((wolfpackTargetY[index] - wolfpackCurrentY[index]) * ease + Number.EPSILON) * 1000) / 1000;
			if (scrollbarList.length !== 0) {
				for (let i = 0; i < scrollbarList.length; i += 1) {
					if (parseFloat(index) === parseFloat(scrollbarIndex[i])) {
						scrollbarCurrentY[i] += Math.round(((scrollbarTargetY[i] - scrollbarCurrentY[i]) * ease + Number.EPSILON) * 1000) / 1000;
					}
				}
			}
		}

		// Update Target Y Function
		function updateTargetY(e, index) {
			wolfpackTargetY[index] += e;
			wolfpackTargetY[index] = Math.max(wolfpackScrollLimit[index], wolfpackTargetY[index]);
			wolfpackTargetY[index] = Math.min(0, wolfpackTargetY[index]);
			if (scrollbarList.length !== 0) {
				for (let i = 0; i < scrollbarList.length; i += 1) {
					if (parseFloat(index) === parseFloat(scrollbarIndex[i])) {
						scrollbarTargetY[i] = Math.abs((scrollbarHeight[i] * wolfpackTargetY[index]) / wolfpackHeight[index]);
					}
				}
			}
		}

		// Drag Target Y Function
		function dragTargetY(e, index) {
			wolfpackTargetY[index] = parseFloat((wolfpackList[index].parentNode.getBoundingClientRect().y - e) * wolfpackHeight[index]) / wolfpackParentHeight[index];
			wolfpackTargetY[index] = Math.max((wolfpackHeight[index] - wolfpackParentHeight[index]) * -1, wolfpackTargetY[index]);
			wolfpackTargetY[index] = Math.min(0, wolfpackTargetY[index]);
			for (let i = 0; i < scrollbarList.length; i += 1) {
				if (parseFloat(index) === parseFloat(scrollbarIndex[i])) {
					scrollbarTargetY[i] = Math.abs((scrollbarHeight[i] * wolfpackTargetY[index]) / wolfpackHeight[index]);
				}
			}
		}

		// Update Scroll Position Function
		function updateScrollPosition(index) {
			wolfpackScrollPosition[index] = Math.abs(wolfpackCurrentY[index]) + windowHeight;
		}

		// Update Transform Sections Function
		function updateTransformSections(index) {
			if (wolfpackCurrentY[index] <= -0.5) {
				wolfpackTransform[index] = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${wolfpackCurrentY[index]}, 0, 1)`;
				for (let i = 0; i < scrollbarList.length; i += 1) {
					if (parseFloat(index) === parseFloat(scrollbarIndex[i])) {
						scrollbarTransform[i] = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${scrollbarCurrentY[i]}, 0, 1)`;
						scrollbarThumbList[i].style.transform = scrollbarTransform[i];
					}
				}
			}
		}

		// Detect Wolfpack Sections Function
		function detectWolfpackSection(index) {
			for (let i = 0; i < wolfpackSectionList[index].length; i += 1) {
				if (wolfpackScrollPosition[index] + windowHeight >= wolfpackSectionTopList[index][i] && wolfpackScrollPosition[index] - windowHeight < wolfpackSectionBottomList[index][i]) {
					wolfpackSectionList[index][i].style.transform = wolfpackTransform[index];
				}
			}
		}

		// Update Direction Function
		function updateDirection(index) {
			if (Math.abs(wolfpackCurrentY[index]) < wolfpackLastOffset[index]) {
				wolfpackLastOffset[index] = Math.abs(wolfpackCurrentY[index]);
				wolfpackDirection[index] = 'up';
			} else {
				wolfpackLastOffset[index] = Math.abs(wolfpackCurrentY[index]);
				wolfpackDirection[index] = 'down';
			}
		}

		// Show Scrollbar Function
		function showScrollbar(index) {
			for (let i = 0; i < scrollbarList.length; i += 1) {
				if (parseFloat(index) === parseFloat(scrollbarIndex[i])) {
					const scrollbarClass = scrollbarList[i].classList[0]; // eslint-disable-line
					scrollbarList[i].classList.add(`${scrollbarClass}--show`);
				}
			}
		}

		// Hide Scrollbar Function
		function hideScrollbar(index) {
			if (scrollbarList.length !== 0) {
				for (let i = 0; i < scrollbarList.length; i += 1) {
					if (parseFloat(index) === parseFloat(scrollbarIndex[i])) {
						const scrollbarClass = scrollbarList[i].classList[0]; // eslint-disable-line
						scrollbarList[i].classList.remove(`${scrollbarClass}--show`);
					}
				}
			}
		}

		// Header Disappear Init Function
		function initHeaderDisappear() {
			headerDisappearList = document.querySelectorAll('[data-header-disappear]');
			if (headerDisappearList.length !== 0) {
				for (let i = 0; i < headerDisappearList.length; i += 1) {
					if (headerDisappearList[i].getAttribute('data-header-small')) {
						headerDisappearSmall.push(parseFloat(headerDisappearList[i].getAttribute('data-header-small')));
					} else {
						headerDisappearSmall.push(250);
					}
					if (headerDisappearList[i].getAttribute('data-header-hide')) {
						headerDisappearHide.push(parseFloat(headerDisappearList[i].getAttribute('data-header-hide')));
					} else {
						headerDisappearHide.push(500);
					}
				}
			}
		}

		// Header Disappear Watch Function
		function watchHeaderDisappear() {
			if (headerDisappearList.length !== 0) {
				for (let i = 0; i < headerDisappearList.length; i += 1) {
					if (Math.abs(wolfpackCurrentY[wolfpackMainIndex]) >= headerDisappearSmall[i]) {
						headerDisappearList[i].classList.add(`${headerDisappearList[i].classList[0]}--small`);
					} else {
						headerDisappearList[i].classList.remove(`${headerDisappearList[i].classList[0]}--small`);
					}
					if (Math.abs(wolfpackCurrentY[wolfpackMainIndex]) >= headerDisappearHide[i]) {
						if (wolfpackDirection[wolfpackMainIndex] === 'down') {
							headerDisappearList[i].classList.add(`${headerDisappearList[i].classList[0]}--hide`);
						} else {
							headerDisappearList[i].classList.remove(`${headerDisappearList[i].classList[0]}--hide`);
						}
					}
				}
			}
		}

		// Tadam Init Function
		function initTadam() {
			tadamList = document.querySelectorAll('[data-tadam]');
			if (tadamList.length !== 0) {
				for (let i = 0; i < tadamList.length; i += 1) {
					tadamTop.push(tadamList[i].getBoundingClientRect().y);
					if (tadamList[i].getAttribute('data-tadam-repeat') === 'true') {
						tadamRepeat.push(true);
					} else {
						tadamRepeat.push(false);
					}
					if (tadamList[i].getAttribute('data-tadam-threshold-mobile')) {
						tadamThresholdMobile.push(tadamList[i].getAttribute('data-tadam-threshold-mobile'));
					} else {
						tadamThresholdMobile.push('100');
					}
					if (tadamList[i].getAttribute('data-tadam-threshold')) {
						tadamThreshold.push(tadamList[i].getAttribute('data-tadam-threshold'));
					} else {
						tadamThreshold.push('200');
					}
					tadamElementList.push([]);
					tadamAnimationList.push([]);
					tadamRepeatAnimationList.push([]);
					if (tadamList[i].querySelectorAll('[data-tadam-animate]').length !== 0) {
						for (let j = 0; j < tadamList[i].querySelectorAll('[data-tadam-animate]').length; j += 1) {
							tadamElementList[i].push(tadamList[i].querySelectorAll('[data-tadam-animate]')[j]);
						}
					} else {
						tadamElementList[i].push(tadamList[i]);
					}
					for (let j = 0; j < tadamElementList[i].length; j += 1) {
						if (tadamElementList[i][j].getAttribute('data-tadam-animate')) {
							tadamAnimationList[i].push(tadamElementList[i][j].getAttribute('data-tadam-animate'));
						} else {
							tadamAnimationList[i].push('animate');
						}
					}
					for (let j = 0; j < tadamElementList[i].length; j += 1) {
						if (tadamElementList[i][j].getAttribute('data-tadam-animate-repeat')) {
							tadamRepeatAnimationList[i].push(tadamElementList[i][j].getAttribute('data-tadam-animate-repeat'));
						} else {
							tadamRepeatAnimationList[i].push('repeat');
						}
					}
					tadamFinished.push(false);
					tadamVisible.push(parseFloat(tadamTop[i]) + parseFloat(tadamThreshold[i]));
				}
			}
		}

		// Tadam Update Function
		function updateTadam() {
			if (tadamList.length !== 0) {
				for (let i = 0; i < tadamList.length; i += 1) {
					tadamTop[i] = tadamList[i].getBoundingClientRect().y + Math.abs(wolfpackCurrentY[wolfpackMainIndex]);
					if (window.innerWidth < 768) {
						tadamThreshold[i] = tadamThresholdMobile[i];
					} else if (tadamList[i].getAttribute('data-tadam-threshold')) {
						tadamThreshold[i] = tadamList[i].getAttribute('data-tadam-threshold');
					} else {
						tadamThreshold[i] = '200';
					}
					tadamVisible[i] = parseFloat(tadamTop[i]) + parseFloat(tadamThreshold[i]);
				}
			}
		}

		// Tadam Watch Function
		function watchTadam() {
			if (tadamList.length !== 0) {
				for (let i = 0; i < tadamList.length; i += 1) {
					if (tadamThreshold[i] === '-1' && !tadamFinished[i]) {
						for (let j = 0; j < tadamElementList[i].length; j += 1) {
							tadamFunction.tadamAnimate(tadamElementList[i][j], tadamAnimationList[i][j]);
						}
						tadamFinished[i] = true;
					} else if (wolfpackScrollPosition[wolfpackMainIndex] >= tadamVisible[i] && !tadamFinished[i]) {
						for (let j = 0; j < tadamElementList[i].length; j += 1) {
							tadamFunction.tadamAnimate(tadamElementList[i][j], tadamAnimationList[i][j]);
						}
						tadamFinished[i] = true;
					} else if (tadamRepeat[i] && wolfpackScrollPosition[wolfpackMainIndex] < tadamVisible[i] && tadamFinished[i]) {
						for (let j = 0; j < tadamElementList[i].length; j += 1) {
							tadamFunction.tadamAnimate(tadamElementList[i][j], tadamRepeatAnimationList[i][j]);
						}
						tadamFinished[i] = false;
					}
				}
			}
		}

		// Parallax Init Function
		function initParallax() {
			parallaxList = document.querySelectorAll('[data-parallax]');
			if (parallaxList.length !== 0) {
				for (let i = 0; i < parallaxList.length; i += 1) {
					parallaxTop.push(parallaxList[i].getBoundingClientRect().y);
					parallaxStop.push(parseFloat(parallaxList[i].offsetHeight + parallaxList[i].getBoundingClientRect().y + windowHeight));
					if (parallaxList[i].getAttribute('data-parallax-speed')) {
						parallaxSpeed.push(parallaxList[i].getAttribute('data-parallax-speed'));
					} else {
						parallaxSpeed.push('3');
					}
					parallaxCurrentPosition.push(0);
					parallaxPositionY.push(0);
					parallaxScrollVariable.push(0);
					parallaxTransform.push(`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`);
				}
			}
		}

		// Parallax Update Function
		function updateParallax() {
			for (let i = 0; i < parallaxList.length; i += 1) {
				parallaxTop[i] = parallaxList[i].getBoundingClientRect().y + Math.abs(wolfpackCurrentY[wolfpackMainIndex]);
				parallaxStop[i] = parseFloat(parallaxList[i].offsetHeight + parallaxList[i].getBoundingClientRect().y + Math.abs(wolfpackCurrentY[wolfpackMainIndex]) + windowHeight);
			}
		}

		// Parallax Watch Function
		function watchParallax() {
			if (parallaxList.length !== 0) {
				for (let i = 0; i < parallaxList.length; i += 1) {
					if (wolfpackScrollPosition[wolfpackMainIndex] >= parallaxTop[i] && wolfpackScrollPosition[wolfpackMainIndex] < parallaxStop[i]) {
						parallaxCurrentPosition[i] = Math.abs(wolfpackCurrentY[wolfpackMainIndex]) + windowHeight;
						parallaxPositionY[i] = parallaxCurrentPosition[i] - parallaxTop[i];
						parallaxScrollVariable[i] = parallaxPositionY[i] / parallaxSpeed[i];
						parallaxTransform[i] = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${parallaxScrollVariable[i]}, 0, 1)`;
						parallaxList[i].style.transform = parallaxTransform[i];
					}
				}
			}
		}

		// Follow Me Init Function
		function initFollowMe() {
			followMeContainerList = document.querySelectorAll('[data-follow-me-container]');
			followMeList = document.querySelectorAll('[data-follow-me]');
			if (followMeContainerList.length !== 0) {
				for (let i = 0; i < followMeContainerList.length; i += 1) {
					followMeHeight[i] = followMeList[i].offsetHeight;
					followMeContainerHeight[i] = followMeContainerList[i].offsetHeight;
					followMeTop[i] = followMeContainerList[i].getBoundingClientRect().y;
					followMeStart[i] = followMeTop[i] + windowHeight;
					followMeStop[i] = parseFloat(followMeTop[i] + followMeContainerHeight[i] - followMeHeight[i]);
					followMeTransform[i] = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`;
				}
			}
		}

		// Follow Me Update Function
		function updateFollowMe() {
			if (followMeList.length !== 0) {
				for (let i = 0; i < followMeContainerList.length; i += 1) {
					followMeHeight[i] = followMeList[i].offsetHeight;
					followMeContainerHeight[i] = followMeContainerList[i].offsetHeight;
					followMeTop[i] = followMeContainerList[i].getBoundingClientRect().y + Math.abs(wolfpackCurrentY[wolfpackMainIndex]);
					followMeStart[i] = followMeTop[i] + windowHeight;
					followMeStop[i] = parseFloat(followMeTop[i] + followMeContainerHeight[i] - followMeHeight[i]);
				}
			}
		}

		// Follow Me Watch Function
		function watchFollowMe() {
			if (followMeList.length !== 0) {
				for (let i = 0; i < followMeList.length; i += 1) {
					followMeStart[i] = wolfpackScrollPosition[wolfpackMainIndex] - windowHeight;
					if (followMeStart[i] >= followMeTop[i] && followMeStart[i] <= followMeStop[i]) {
						followMeTransform[i] = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${Math.abs(wolfpackCurrentY[wolfpackMainIndex]) - followMeTop[i]}, 0, 1)`;
						followMeList[i].style.transform = followMeTransform[i];
					}
				}
			}
		}

		// Animation Sequence Watch Function
		function watchAnimationSequence() {
			if (animationSequenceList.length !== 0) {
				for (let i = 0; i < animationSequenceList.length; i += 1) {
					if (!animationSequenceFullPage[i]) {
						if (wolfpackScrollPosition[wolfpackMainIndex] >= animationSequenceTop[i] && wolfpackScrollPosition[wolfpackMainIndex] < animationSequenceStop[i]) {
							animationPositionY[i] = wolfpackScrollPosition[wolfpackMainIndex] - animationSequenceTop[i];
							animationScrollVariable[i] = animationPositionY[i] / animationTimeline[i];
							animationSequenceList[i].style.setProperty(`--scroll-${i}`, animationScrollVariable[i]);
						}
					} else if (wolfpackScrollPosition[wolfpackMainIndex] - windowHeight >= 0 && wolfpackScrollPosition[wolfpackMainIndex] < wolfpackHeight[wolfpackMainIndex]) {
						animationPositionY[i] = wolfpackScrollPosition[wolfpackMainIndex] - windowHeight;
						animationScrollVariable[i] = animationPositionY[i] / parseFloat(wolfpackHeight[wolfpackMainIndex] - windowHeight);
						animationSequenceList[i].style.setProperty(`--scroll-${i}`, animationScrollVariable[i]);
					}
				}
			}
		}

		// Animation Sequence Update Function
		function updateAnimationSequence() {
			for (let i = 0; i < animationSequenceList.length; i += 1) {
				animationSequenceTop[i] = animationSequenceList[i].getBoundingClientRect().y + Math.abs(wolfpackCurrentY[wolfpackMainIndex]);
				animationSequenceHeight[i] = animationSequenceList[i].offsetHeight;
				animationTimeline[i] = parseFloat(windowHeight + animationSequenceHeight[i]);
				animationSequenceStop[i] = parseFloat(animationSequenceList[i].offsetHeight + animationSequenceList[i].getBoundingClientRect().y + Math.abs(wolfpackCurrentY[wolfpackMainIndex]) + windowHeight);
			}
		}

		// Changes Update Function
		function updateChanges() {
			if (changesList.length !== 0) {
				for (let i = 0; i < changesList.length; i += 1) {
					changesTop[i] = changesList[i].getBoundingClientRect().y + Math.abs(wolfpackCurrentY[wolfpackMainIndex]) + parseFloat(windowHeight / 2);
				}
			}
		}

		// Changes Function
		function watchChanges() {
			if (changesList.length !== 0) {
				for (let i = 0; i < changesList.length; i += 1) {
					if (wolfpackScrollPosition[wolfpackMainIndex] >= changesTop[i] && wolfpackScrollPosition[wolfpackMainIndex] < changesTop[i] + changesList[i].offsetHeight) {
						if (!changesActive[i]) {
							changesActive[i] = true;
							for (let j = 0; j < changesElements.length; j += 1) {
								for (let k = 0; k < changesElements[j].length; k += 1) {
									document.querySelector(changesElements[j][k]).classList.remove(`${document.querySelector(changesElements[j][k]).classList[0]}--${changesClasses[j][k]}`);
								}
							}
							for (let j = 0; j < changesElements[i].length; j += 1) {
								document.querySelector(changesElements[i][j]).classList.add(`${document.querySelector(changesElements[i][j]).classList[0]}--${changesClasses[i][j]}`);
							}
						}
					} else {
						for (let j = 0; j < changesList.length; j += 1) {
							if (changesList[j] === changesList[i]) {
								changesActive[i] = false;
							}
						}
					}
				}
			}
		}

		// Update Anchors Variables Function
		function updateAnchorsVariables() {
			anchorElementList = [];
			if (anchorList.length !== 0) {
				for (let i = 0; i < anchorList.length; i += 1) {
					if (anchorList[i].pathname === window.location.pathname && anchorList[i].getAttribute('href') !== '#') {
						anchorElementList.push(anchorList[i]);
						if (anchorLocation[i]) {
							anchorLocationTop[i] = anchorLocation[i].getBoundingClientRect().y + Math.abs(wolfpackCurrentY[wolfpackMainIndex]);
						} else {
							anchorLocationTop[i] = 0;
						}
					}
				}
			}
		}

		// Update Modules Function
		function updateModules() {
			windowHeight = window.innerHeight;
			updateWolfpack();
			updateScrollbar();
			updateTadam();
			updateParallax();
			updateFollowMe();
			updateAnimationSequence();
			updateChanges();
		}

		window.addEventListener('resize', () => {
			updateModules();
			watchOrientation();
		});

		window.addEventListener('orientationchange', () => {
			watchOrientation();
		});

		// Check for Wolfpack Resize
		function watchWolfpackResize() {
			if (wolfpackList.length !== 0) {
				const resizeObserver = new ResizeObserver((entries) => updateModules());

				for (let i = 0; i < wolfpackList.length; i += 1) {
					resizeObserver.observe(wolfpackList[i]);
				}
			}
		}

		// Filter Height Function
		function initFilterHeight() {
			jQuery(document).on('sf:ajaxfinish', '.searchandfilter', () => {
				if (filterList.length !== 0) {
					for (let i = 0; i < filterList.length; i += 1) {
						filterHeightNew[i] = filterList[i].getBoundingClientRect().height;
						filterHeightDifference[i] = filterHeightInitial[i] - filterHeightNew[i];
						filterHeightInitial[i] = filterHeightNew[i];
						for (let j = 0; j < tadamList.length; j += 1) {
							tadamTop[j] -= filterHeightDifference[i];
							tadamVisible[j] = parseFloat(tadamTop[j]) + parseFloat(tadamThreshold[j]);
						}
					}
				}
			});
		}

		// Forms Function
		function initForms() {
			if (formsList.length !== 0) {
				for (let i = 0; i < formsList.length; i += 1) {
					if (!formChanged[i]) {
						formChanged[i] = true;
						fieldList[i] = formsList[i].querySelectorAll('.gfield');
						formParentPosition.push(formsList[i].getBoundingClientRect().y);
						formClass.push([]);
						if (fieldList[i].length !== 0) {
							for (let j = 0; j < fieldList[i].length; j += 1) {
								formClass[i].push(fieldList[i][j].classList[0]);
							}
						}
						if (fieldList[i].length !== 0) {
							for (let j = 0; j < fieldList[i].length; j += 1) {
								fieldList[i][j].addEventListener('focusin', () => {
									formFocusIn(fieldList[i][j], i, j);
								});
								fieldList[i][j].addEventListener('focusout', () => {
									if (fieldList[i][j].querySelector('.ginput_container').classList.contains('ginput_complex')) {
										if (fieldList[i][j].querySelector('input').value === '' || fieldList[i][j].querySelector('input').value === null) {
											formFocusOut(fieldList[i][j], i, j);
										}
									} else if (fieldList[i][j].querySelector('.ginput_container').classList.contains('ginput_container_textarea')) {
										if (fieldList[i][j].querySelector('textarea').value === '' || fieldList[i][j].querySelector('textarea').value === null) {
											formFocusOut(fieldList[i][j], i, j);
										}
									} else if (fieldList[i][j].querySelector('.ginput_container').classList.contains('ginput_container_select')) {
										if (fieldList[i][j].querySelector('select').value === '' || fieldList[i][j].querySelector('select').value === null) {
											formFocusOut(fieldList[i][j], i, j);
										}
									} else if (fieldList[i][j].querySelector('input').value === '' || fieldList[i][j].querySelector('input').value === null) {
										formFocusOut(fieldList[i][j], i, j);
									}
								});
								if (fieldList[i][j].querySelector('.ginput_container') && fieldList[i][j].querySelector('.ginput_container').classList.contains('ginput_complex')) {
									if (fieldList[i][j].querySelector('input') && fieldList[i][j].querySelector('input').value !== '') {
										formFocusIn(fieldList[i][j], i, j);
									}
									if (fieldList[i][j].querySelectorAll('.ginput_complex span').length !== 0) {
										for (let k = 0; k < fieldList[i][j].querySelectorAll('.ginput_complex span').length; k += 1) {
											fieldList[i][j].querySelectorAll('.ginput_complex span')[k].addEventListener('focusin', () => {
												formFocusIn(fieldList[i][j].querySelectorAll('.ginput_complex span')[k], i, j);
											});
											fieldList[i][j].querySelectorAll('.ginput_complex span')[k].addEventListener('focusout', () => {
												if (fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('input')) {
													if (fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('input').value === '' || fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('input').value === null) {
														formFocusOut(fieldList[i][j].querySelectorAll('.ginput_complex span')[k], i, j);
													}
												} else if (fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('select')) {
													if (fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('select').value === '' || fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('select').value === null) {
														formFocusOut(fieldList[i][j].querySelectorAll('.ginput_complex span')[k], i, j);
													}
												}
											});
											if (fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('input')) {
												if (fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('input').value !== '') {
													formFocusIn(fieldList[i][j].querySelectorAll('.ginput_complex span')[k], i, j);
												}
											} else if (fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('select')) {
												if (fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('select').value !== '') {
													formFocusIn(fieldList[i][j].querySelectorAll('.ginput_complex span')[k], i, j);
												}
											}
										}
									}
									if (fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full').length !== 0) {
										for (let k = 0; k < fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full').length; k += 1) {
											if (fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full')[k].querySelector('input')) {
												fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full')[k].addEventListener('focusin', () => {
													formFocusIn(fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full')[k], i, j);
												});
												fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full')[k].addEventListener('focusout', () => {
													if (fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full')[k].querySelector('input').value === '' || fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full')[k].querySelector('input').value === null) {
														formFocusOut(fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full')[k], i, j);
													}
												});
												if (fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full')[k].querySelector('input').value !== '') {
													formFocusIn(fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full')[k], i, j);
												}
											}
										}
									}
								} else if (fieldList[i][j].querySelector('.ginput_container') && fieldList[i][j].querySelector('.ginput_container').classList.contains('ginput_container_textarea')) {
									if (fieldList[i][j].querySelector('textarea').value !== '') {
										formFocusIn(fieldList[i][j], i, j);
									}
								} else if (fieldList[i][j].querySelector('.ginput_container') && fieldList[i][j].querySelector('.ginput_container').classList.contains('ginput_container_select')) {
									if (fieldList[i][j].querySelector('select').value !== '') {
										formFocusIn(fieldList[i][j], i, j);
									}
								} else if (fieldList[i][j].querySelector('input') && fieldList[i][j].querySelector('input').value !== '') {
									formFocusIn(fieldList[i][j], i, j);
								}
							}
						}
					}
				}
			}
		}

		// Form Focus In Function
		function formFocusIn(field, mainIndex, index) {
			field.classList.add(`${formClass[mainIndex][index]}--focus`);
		}

		// Form Focus Out Function
		function formFocusOut(field, mainIndex, index) {
			field.classList.remove(`${formClass[mainIndex][index]}--focus`);
		}

		function updateFormFocus() {
			setTimeout(() => {
				//window.scrollTo(0, 0);
			}, 50);
			const formsList = document.querySelectorAll('[data-form]');
			let formChanged = [];
			let formParentPosition = [];
			let formClass = [];
			let fieldList = [];
			if (formsList.length !== 0) {
				for (let i = 0; i < formsList.length; i += 1) {
					formChanged.push(false);
					fieldList.push([]);
				}
			}
			if (formsList.length !== 0) {
				for (let i = 0; i < formsList.length; i += 1) {
					if (!formChanged[i]) {
						formChanged[i] = true;
						fieldList[i] = formsList[i].querySelectorAll('.gfield');
						formParentPosition.push(formsList[i].getBoundingClientRect().y);
						formClass.push([]);
						if (fieldList[i].length !== 0) {
							for (let j = 0; j < fieldList[i].length; j += 1) {
								formClass[i].push(fieldList[i][j].classList[0]);
							}
						}
						if (fieldList[i].length !== 0) {
							for (let j = 0; j < fieldList[i].length; j += 1) {
								fieldList[i][j].addEventListener('focusin', () => {
									formFocusIn(fieldList[i][j], i, j);
								});
								fieldList[i][j].addEventListener('focusout', () => {
									if (fieldList[i][j].querySelector('.ginput_container').classList.contains('ginput_complex')) {
										if (fieldList[i][j].querySelector('input').value === '' || fieldList[i][j].querySelector('input').value === null) {
											formFocusOut(fieldList[i][j], i, j);
										}
									} else if (fieldList[i][j].querySelector('.ginput_container').classList.contains('ginput_container_textarea')) {
										if (fieldList[i][j].querySelector('textarea').value === '' || fieldList[i][j].querySelector('textarea').value === null) {
											formFocusOut(fieldList[i][j], i, j);
										}
									} else if (fieldList[i][j].querySelector('.ginput_container').classList.contains('ginput_container_select')) {
										if (fieldList[i][j].querySelector('select').value === '' || fieldList[i][j].querySelector('select').value === null) {
											formFocusOut(fieldList[i][j], i, j);
										}
									} else if (fieldList[i][j].querySelector('input').value === '' || fieldList[i][j].querySelector('input').value === null) {
										formFocusOut(fieldList[i][j], i, j);
									}
								});
								if (fieldList[i][j].querySelector('.ginput_container') && fieldList[i][j].querySelector('.ginput_container').classList.contains('ginput_complex')) {
									if (fieldList[i][j].querySelector('input') && fieldList[i][j].querySelector('input').value !== '') {
										formFocusIn(fieldList[i][j], i, j);
									}
									if (fieldList[i][j].querySelectorAll('.ginput_complex span').length !== 0) {
										for (let k = 0; k < fieldList[i][j].querySelectorAll('.ginput_complex span').length; k += 1) {
											fieldList[i][j].querySelectorAll('.ginput_complex span')[k].addEventListener('focusin', () => {
												formFocusIn(fieldList[i][j].querySelectorAll('.ginput_complex span')[k], i, j);
											});
											fieldList[i][j].querySelectorAll('.ginput_complex span')[k].addEventListener('focusout', () => {
												if (fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('input')) {
													if (fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('input').value === '' || fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('input').value === null) {
														formFocusOut(fieldList[i][j].querySelectorAll('.ginput_complex span')[k], i, j);
													}
												} else if (fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('select')) {
													if (fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('select').value === '' || fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('select').value === null) {
														formFocusOut(fieldList[i][j].querySelectorAll('.ginput_complex span')[k], i, j);
													}
												}
											});
											if (fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('input')) {
												if (fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('input').value !== '') {
													formFocusIn(fieldList[i][j].querySelectorAll('.ginput_complex span')[k], i, j);
												}
											} else if (fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('select')) {
												if (fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('select').value !== '') {
													formFocusIn(fieldList[i][j].querySelectorAll('.ginput_complex span')[k], i, j);
												}
											}
										}
									}
									if (fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full').length !== 0) {
										for (let k = 0; k < fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full').length; k += 1) {
											if (fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full')[k].querySelector('input')) {
												fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full')[k].addEventListener('focusin', () => {
													formFocusIn(fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full')[k], i, j);
												});
												fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full')[k].addEventListener('focusout', () => {
													if (fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full')[k].querySelector('input').value === '' || fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full')[k].querySelector('input').value === null) {
														formFocusOut(fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full')[k], i, j);
													}
												});
												if (fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full')[k].querySelector('input').value !== '') {
													formFocusIn(fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full')[k], i, j);
												}
											}
										}
									}
								} else if (fieldList[i][j].querySelector('.ginput_container') && fieldList[i][j].querySelector('.ginput_container').classList.contains('ginput_container_textarea')) {
									if (fieldList[i][j].querySelector('textarea').value !== '') {
										formFocusIn(fieldList[i][j], i, j);
									}
								} else if (fieldList[i][j].querySelector('.ginput_container') && fieldList[i][j].querySelector('.ginput_container').classList.contains('ginput_container_select')) {
									if (fieldList[i][j].querySelector('select').value !== '') {
										formFocusIn(fieldList[i][j], i, j);
									}
								} else if (fieldList[i][j].querySelector('input') && fieldList[i][j].querySelector('input').value !== '') {
									formFocusIn(fieldList[i][j], i, j);
								}
							}
						}
					}
				}
			}
		}
	}

	wolfpackMobile() {
		// FORM LABELS
		// Forms Variables
		const formsList = document.querySelectorAll('[data-form]');
		let formChanged = [];
		let formParentPosition = [];
		let formClass = [];
		let fieldList = [];
		if (formsList.length !== 0) {
			for (let i = 0; i < formsList.length; i += 1) {
				formChanged.push(false);
				fieldList.push([]);
			}
		}

		// Forms Init
		initForms();

		setTimeout(() => {
			updateFormFocus();
		}, 200);
		jQuery(document).bind('gform_post_render', () => {
			updateFormFocus();
		});

		jQuery(document).bind('gform_post_render', () => {
			setTimeout(() => {
				window.scrollTo(0, 0);
			}, 200);
			for (let i = 0; i < formsList.length; i += 1) {
				formChanged[i] = false;
			}
			initForms();
		});

		// VARIABLES & INIT
		const domBody = document.querySelector('body');
		domBody.classList.add('wolfpack-mobile');

		// Remove custom cursor
		const cursorList = document.querySelectorAll('[data-cursor-container]');
		for (let i = 0; i < cursorList.length; i += 1) {
			cursorList[i].style.display = 'none';
		}

		// Location Variables
		const locationHash = window.location.hash;
		let locationElement = undefined;
		if (window.location.hash) {
			locationElement = document.querySelector(locationHash);
		}

		// Location Init
		initLocationMobile();

		// Anchors Variables
		const anchorList = document.querySelectorAll(`a[href*="#"]`);
		let anchorElementList = [];
		let anchorLocation = [];
		for (let i = 0; i < anchorList.length; i += 1) {
			if (anchorList[i].pathname === window.location.pathname && anchorList[i].getAttribute('href') !== '#') {
				anchorElementList.push(anchorList[i]);
				anchorLocation.push(anchorList[i].getAttribute('href').replace(window.location.pathname, ''));
			} else {
				anchorList[i].classList.add('no-anchor');
			}
		}

		// Anchors Init
		initAnchors();

		// Scroll Watch Init
		initScrollWatch();

		// Header Disappear Variables
		const headerDisappearList = document.querySelectorAll('[data-header-disappear]');
		let headerDisappearSmall = [];
		let headerDisappearHide = [];
		if (headerDisappearList.length !== 0) {
			for (let i = 0; i < headerDisappearList.length; i += 1) {
				if (headerDisappearList[i].getAttribute('data-header-small')) {
					headerDisappearSmall.push(parseFloat(headerDisappearList[i].getAttribute('data-header-small')));
				} else {
					headerDisappearSmall.push(250);
				}
				if (headerDisappearList[i].getAttribute('data-header-hide')) {
					headerDisappearHide.push(parseFloat(headerDisappearList[i].getAttribute('data-header-hide')));
				} else {
					headerDisappearHide.push(500);
				}
			}
		}

		// Tadam Variables
		const tadamList = document.querySelectorAll('[data-tadam]');
		const tadamFunction = new Tadam();
		let tadamTop = [];
		let tadamRepeat = [];
		let tadamThreshold = [];
		let tadamThresholdMobile = [];
		let tadamElementList = [];
		let tadamAnimationList = [];
		let tadamRepeatAnimationList = [];
		let tadamFinished = [];
		let tadamVisible = [];
		if (tadamList.length !== 0) {
			for (let i = 0; i < tadamList.length; i += 1) {
				tadamTop.push(tadamList[i].getBoundingClientRect().y);
				if (tadamList[i].getAttribute('data-tadam-repeat') === 'true') {
					tadamRepeat.push(true);
				} else {
					tadamRepeat.push(false);
				}
				if (tadamList[i].getAttribute('data-tadam-threshold-mobile')) {
					tadamThresholdMobile.push(tadamList[i].getAttribute('data-tadam-threshold-mobile'));
				} else {
					tadamThresholdMobile.push('100');
				}
				if (tadamList[i].getAttribute('data-tadam-threshold')) {
					tadamThreshold.push(tadamList[i].getAttribute('data-tadam-threshold'));
				} else {
					tadamThreshold.push('200');
				}
				tadamElementList.push([]);
				tadamAnimationList.push([]);
				tadamRepeatAnimationList.push([]);
				if (tadamList[i].querySelectorAll('[data-tadam-animate]').length !== 0) {
					for (let j = 0; j < tadamList[i].querySelectorAll('[data-tadam-animate]').length; j += 1) {
						tadamElementList[i].push(tadamList[i].querySelectorAll('[data-tadam-animate]')[j]);
					}
				} else {
					tadamElementList[i].push(tadamList[i]);
				}
				for (let j = 0; j < tadamElementList[i].length; j += 1) {
					if (tadamElementList[i][j].getAttribute('data-tadam-animate')) {
						tadamAnimationList[i].push(tadamElementList[i][j].getAttribute('data-tadam-animate'));
					} else {
						tadamAnimationList[i].push('animate');
					}
				}
				for (let j = 0; j < tadamElementList[i].length; j += 1) {
					if (tadamElementList[i][j].getAttribute('data-tadam-animate-repeat')) {
						tadamRepeatAnimationList[i].push(tadamElementList[i][j].getAttribute('data-tadam-animate-repeat'));
					} else {
						tadamRepeatAnimationList[i].push('repeat');
					}
				}
				tadamFinished.push(false);
				tadamVisible.push(parseFloat(tadamTop[i]) + parseFloat(tadamThreshold[i]));
			}
		}

		// Tadam Init Function
		initTadam();

		// Scroll Watch Function
		function initScrollWatch() {
			window.addEventListener('scroll', () => {
				moveScroll();
			});
		}

		// Move Scroll Function
		function moveScroll() {
			headerDisappear();
			updateDirection();
		}

		// Update Direction Function
		let wolfpackDirection = 'down';
		let wolfpackLastOffset = 0;
		function updateDirection() {
			if (window.scrollY < wolfpackLastOffset) {
				wolfpackLastOffset = Math.abs(window.scrollY);
				wolfpackDirection = 'up';
			} else {
				wolfpackLastOffset = Math.abs(window.scrollY);
				wolfpackDirection = 'down';
			}
		}

		// Header Disappear Function
		function headerDisappear() {
			if (headerDisappearList.length !== 0) {
				for (let i = 0; i < headerDisappearList.length; i += 1) {
					if (Math.abs(window.scrollY) >= headerDisappearSmall[i]) {
						headerDisappearList[i].classList.add(`${headerDisappearList[i].classList[0]}--small`);
					} else {
						headerDisappearList[i].classList.remove(`${headerDisappearList[i].classList[0]}--small`);
					}
					if (Math.abs(window.scrollY) >= headerDisappearHide[i]) {
						if (wolfpackDirection === 'down') {
							headerDisappearList[i].classList.add(`${headerDisappearList[i].classList[0]}--hide`);
						} else {
							headerDisappearList[i].classList.remove(`${headerDisappearList[i].classList[0]}--hide`);
						}
					}
				}
			}
		}

		// Tadam Function
		function initTadam() {
			if (tadamList.length !== 0) {
				for (let i = 0; i < tadamList.length; i += 1) {
					if (tadamThreshold[i] === '-1') {
						console.log('coucou');
						for (let j = 0; j < tadamElementList[i].length; j += 1) {
							tadamFunction.tadamAnimate(tadamElementList[i][j], tadamAnimationList[i][j]);
						}
						tadamFinished[i] = true;
					}
				}
			}
		}

		// Location Function
		function initLocationMobile() {
			if (locationHash) {
				locationElement.scrollIntoView({
					behavior: 'smooth',
				});
			}
		}

		// Anchors Function
		function initAnchors() {
			if (anchorElementList.length !== 0) {
				for (let i = 0; i < anchorElementList.length; i += 1) {
					if (!anchorElementList[i].classList.contains('no-anchor')) {
						anchorElementList[i].addEventListener('click', (e) => {
							e.preventDefault();
							document.querySelector(anchorLocation[i]).scrollIntoView({
								behavior: 'smooth',
							});
						});
					}
				}
			}
		}

		// Forms Function
		function initForms() {
			if (formsList.length !== 0) {
				for (let i = 0; i < formsList.length; i += 1) {
					if (!formChanged[i]) {
						formChanged[i] = true;
						fieldList[i] = formsList[i].querySelectorAll('.gfield');
						formParentPosition.push(formsList[i].getBoundingClientRect().y);
						formClass.push([]);
						if (fieldList[i].length !== 0) {
							for (let j = 0; j < fieldList[i].length; j += 1) {
								formClass[i].push(fieldList[i][j].classList[0]);
							}
						}
						if (fieldList[i].length !== 0) {
							for (let j = 0; j < fieldList[i].length; j += 1) {
								fieldList[i][j].addEventListener('focusin', () => {
									formFocusIn(fieldList[i][j], i, j);
								});
								fieldList[i][j].addEventListener('focusout', () => {
									if (fieldList[i][j].querySelector('.ginput_container').classList.contains('ginput_complex')) {
										if (fieldList[i][j].querySelector('input').value === '' || fieldList[i][j].querySelector('input').value === null) {
											formFocusOut(fieldList[i][j], i, j);
										}
									} else if (fieldList[i][j].querySelector('.ginput_container').classList.contains('ginput_container_textarea')) {
										if (fieldList[i][j].querySelector('textarea').value === '' || fieldList[i][j].querySelector('textarea').value === null) {
											formFocusOut(fieldList[i][j], i, j);
										}
									} else if (fieldList[i][j].querySelector('.ginput_container').classList.contains('ginput_container_select')) {
										if (fieldList[i][j].querySelector('select').value === '' || fieldList[i][j].querySelector('select').value === null) {
											formFocusOut(fieldList[i][j], i, j);
										}
									} else if (fieldList[i][j].querySelector('input').value === '' || fieldList[i][j].querySelector('input').value === null) {
										formFocusOut(fieldList[i][j], i, j);
									}
								});
								if (fieldList[i][j].querySelector('.ginput_container') && fieldList[i][j].querySelector('.ginput_container').classList.contains('ginput_complex')) {
									if (fieldList[i][j].querySelector('input') && fieldList[i][j].querySelector('input').value !== '') {
										formFocusIn(fieldList[i][j], i, j);
									}
									if (fieldList[i][j].querySelectorAll('.ginput_complex span').length !== 0) {
										for (let k = 0; k < fieldList[i][j].querySelectorAll('.ginput_complex span').length; k += 1) {
											fieldList[i][j].querySelectorAll('.ginput_complex span')[k].addEventListener('focusin', () => {
												formFocusIn(fieldList[i][j].querySelectorAll('.ginput_complex span')[k], i, j);
											});
											fieldList[i][j].querySelectorAll('.ginput_complex span')[k].addEventListener('focusout', () => {
												if (fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('input')) {
													if (fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('input').value === '' || fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('input').value === null) {
														formFocusOut(fieldList[i][j].querySelectorAll('.ginput_complex span')[k], i, j);
													}
												} else if (fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('select')) {
													if (fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('select').value === '' || fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('select').value === null) {
														formFocusOut(fieldList[i][j].querySelectorAll('.ginput_complex span')[k], i, j);
													}
												}
											});
											if (fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('input')) {
												if (fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('input').value !== '') {
													formFocusIn(fieldList[i][j].querySelectorAll('.ginput_complex span')[k], i, j);
												}
											} else if (fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('select')) {
												if (fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('select').value !== '') {
													formFocusIn(fieldList[i][j].querySelectorAll('.ginput_complex span')[k], i, j);
												}
											}
										}
									}
									if (fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full').length !== 0) {
										for (let k = 0; k < fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full').length; k += 1) {
											if (fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full')[k].querySelector('input')) {
												fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full')[k].addEventListener('focusin', () => {
													formFocusIn(fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full')[k], i, j);
												});
												fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full')[k].addEventListener('focusout', () => {
													if (fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full')[k].querySelector('input').value === '' || fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full')[k].querySelector('input').value === null) {
														formFocusOut(fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full')[k], i, j);
													}
												});
												if (fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full')[k].querySelector('input').value !== '') {
													formFocusIn(fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full')[k], i, j);
												}
											}
										}
									}
								} else if (fieldList[i][j].querySelector('.ginput_container') && fieldList[i][j].querySelector('.ginput_container').classList.contains('ginput_container_textarea')) {
									if (fieldList[i][j].querySelector('textarea').value !== '') {
										formFocusIn(fieldList[i][j], i, j);
									}
								} else if (fieldList[i][j].querySelector('.ginput_container') && fieldList[i][j].querySelector('.ginput_container').classList.contains('ginput_container_select')) {
									if (fieldList[i][j].querySelector('select').value !== '') {
										formFocusIn(fieldList[i][j], i, j);
									}
								} else if (fieldList[i][j].querySelector('input') && fieldList[i][j].querySelector('input').value !== '') {
									formFocusIn(fieldList[i][j], i, j);
								}
							}
						}
					}
				}
			}
		}

		// Form Focus In Function
		function formFocusIn(field, mainIndex, index) {
			field.classList.add(`${formClass[mainIndex][index]}--focus`);
		}

		// Form Focus Out Function
		function formFocusOut(field, mainIndex, index) {
			field.classList.remove(`${formClass[mainIndex][index]}--focus`);
		}

		function updateFormFocus() {
			const formsList = document.querySelectorAll('[data-form]');
			let formChanged = [];
			let formParentPosition = [];
			let formClass = [];
			let fieldList = [];
			if (formsList.length !== 0) {
				for (let i = 0; i < formsList.length; i += 1) {
					formChanged.push(false);
					fieldList.push([]);
				}
			}
			if (formsList.length !== 0) {
				for (let i = 0; i < formsList.length; i += 1) {
					if (!formChanged[i]) {
						formChanged[i] = true;
						fieldList[i] = formsList[i].querySelectorAll('.gfield');
						formParentPosition.push(formsList[i].getBoundingClientRect().y);
						formClass.push([]);
						if (fieldList[i].length !== 0) {
							for (let j = 0; j < fieldList[i].length; j += 1) {
								formClass[i].push(fieldList[i][j].classList[0]);
							}
						}
						if (fieldList[i].length !== 0) {
							for (let j = 0; j < fieldList[i].length; j += 1) {
								fieldList[i][j].addEventListener('focusin', () => {
									formFocusIn(fieldList[i][j], i, j);
								});
								fieldList[i][j].addEventListener('focusout', () => {
									if (fieldList[i][j].querySelector('.ginput_container').classList.contains('ginput_complex')) {
										if (fieldList[i][j].querySelector('input').value === '' || fieldList[i][j].querySelector('input').value === null) {
											formFocusOut(fieldList[i][j], i, j);
										}
									} else if (fieldList[i][j].querySelector('.ginput_container').classList.contains('ginput_container_textarea')) {
										if (fieldList[i][j].querySelector('textarea').value === '' || fieldList[i][j].querySelector('textarea').value === null) {
											formFocusOut(fieldList[i][j], i, j);
										}
									} else if (fieldList[i][j].querySelector('.ginput_container').classList.contains('ginput_container_select')) {
										if (fieldList[i][j].querySelector('select').value === '' || fieldList[i][j].querySelector('select').value === null) {
											formFocusOut(fieldList[i][j], i, j);
										}
									} else if (fieldList[i][j].querySelector('input').value === '' || fieldList[i][j].querySelector('input').value === null) {
										formFocusOut(fieldList[i][j], i, j);
									}
								});
								if (fieldList[i][j].querySelector('.ginput_container') && fieldList[i][j].querySelector('.ginput_container').classList.contains('ginput_complex')) {
									if (fieldList[i][j].querySelector('input') && fieldList[i][j].querySelector('input').value !== '') {
										formFocusIn(fieldList[i][j], i, j);
									}
									if (fieldList[i][j].querySelectorAll('.ginput_complex span').length !== 0) {
										for (let k = 0; k < fieldList[i][j].querySelectorAll('.ginput_complex span').length; k += 1) {
											fieldList[i][j].querySelectorAll('.ginput_complex span')[k].addEventListener('focusin', () => {
												formFocusIn(fieldList[i][j].querySelectorAll('.ginput_complex span')[k], i, j);
											});
											fieldList[i][j].querySelectorAll('.ginput_complex span')[k].addEventListener('focusout', () => {
												if (fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('input')) {
													if (fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('input').value === '' || fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('input').value === null) {
														formFocusOut(fieldList[i][j].querySelectorAll('.ginput_complex span')[k], i, j);
													}
												} else if (fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('select')) {
													if (fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('select').value === '' || fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('select').value === null) {
														formFocusOut(fieldList[i][j].querySelectorAll('.ginput_complex span')[k], i, j);
													}
												}
											});
											if (fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('input')) {
												if (fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('input').value !== '') {
													formFocusIn(fieldList[i][j].querySelectorAll('.ginput_complex span')[k], i, j);
												}
											} else if (fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('select')) {
												if (fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('select').value !== '') {
													formFocusIn(fieldList[i][j].querySelectorAll('.ginput_complex span')[k], i, j);
												}
											}
										}
									}
									if (fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full').length !== 0) {
										for (let k = 0; k < fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full').length; k += 1) {
											if (fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full')[k].querySelector('input')) {
												fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full')[k].addEventListener('focusin', () => {
													formFocusIn(fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full')[k], i, j);
												});
												fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full')[k].addEventListener('focusout', () => {
													if (fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full')[k].querySelector('input').value === '' || fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full')[k].querySelector('input').value === null) {
														formFocusOut(fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full')[k], i, j);
													}
												});
												if (fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full')[k].querySelector('input').value !== '') {
													formFocusIn(fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full')[k], i, j);
												}
											}
										}
									}
								} else if (fieldList[i][j].querySelector('.ginput_container') && fieldList[i][j].querySelector('.ginput_container').classList.contains('ginput_container_textarea')) {
									if (fieldList[i][j].querySelector('textarea').value !== '') {
										formFocusIn(fieldList[i][j], i, j);
									}
								} else if (fieldList[i][j].querySelector('.ginput_container') && fieldList[i][j].querySelector('.ginput_container').classList.contains('ginput_container_select')) {
									if (fieldList[i][j].querySelector('select').value !== '') {
										formFocusIn(fieldList[i][j], i, j);
									}
								} else if (fieldList[i][j].querySelector('input') && fieldList[i][j].querySelector('input').value !== '') {
									formFocusIn(fieldList[i][j], i, j);
								}
							}
						}
					}
				}
			}
		}
	}
}
