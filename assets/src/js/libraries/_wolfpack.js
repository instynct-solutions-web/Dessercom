import VirtualScroll from 'virtual-scroll';
import { TweenMax } from 'gsap';
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
		//window.scrollTo(0, 0);
		if (window.event) {
			window.event.preventDefault();
		}

		this.drawerList = document.querySelectorAll('[data-pricing]');
		if (this.drawerList.length !== 0) {
			this.drawerList[1].setAttribute('data-cursor', '');
			this.drawerList[1].setAttribute('data-cursor-class', 'blue');
		}

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

		// Preloader Init
		preloaderFunction.initPreloader(preloader, preloaderSpeed, preloaderDelay);

		this.manageEvents();
	}

	manageEvents() {
		jQuery('a[href*="#"]')
			.not('[href="#"]')
			.not('[href="#0"]')
			.click(function (t) {
				if (window.innerWidth <= 1024) {
					if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
						var e = jQuery(this.hash);
						(e = e.length ? e : jQuery('[name=' + this.hash.slice(1) + ']')),
							e.length &&
								(t.preventDefault(),
								jQuery('html, body').animate(
									{
										//scrollTop: e.offset().top,
									},
									400,
									function () {
										var t = jQuery(e);
										if ((t.focus(), t.is(':focus'))) return !1;
										t.attr('tabindex', '-1'), t.focus();
									}
								));
					}
				}
			});

		// VARIABLES & INIT

		// Checkt Touch devices
		const isTouchDevice = () => {
			return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
		};

		// Orientation
		let previousOrientation = window.orientation;
		const checkOrientation = function () {
			if (window.orientation !== previousOrientation) {
				previousOrientation = window.orientation;
				location.reload();
			}
		};

		window.addEventListener('resize', checkOrientation, false);
		window.addEventListener('orientationchange', checkOrientation, false);
		setInterval(checkOrientation, 2000);

		// Virtual Scroll Variables
		let virtualScroll;
		let activateWatchScroll = false;

		// Virtual Scroll Init
		updateVirtualScroll();

		// Global Variables
		let scrolling = false;
		let anchorScrolling = false;
		const ease = 0.06;
		let time = 10;
		const html = document.querySelector('html');
		let windowHeight = window.innerHeight;

		// Preloader Variables
		const preloader = document.querySelector('[data-preloader]');

		// Wolfpack Variables
		const wolfpackList = document.querySelectorAll('[data-wolfpack]');
		let wolfpackMainIndex = 0;
		let wolfpackLoop = [];
		let wolfpackCurrentY = [];
		let wolfpackTargetY = [];
		let wolfpackHeight = [];
		let wolfpackParentHeight = [];
		let wolfpackScrollLimit = [];
		let wolfpackTransform = [];
		let wolfpackScrollPosition = [];
		let wolfpackHovering = [];
		let wolfpackLastOffset = [];
		let wolfpackDirection = [];
		let wolfpackDragging = [];
		let wolfpackSectionList = [];
		let wolfpackSectionTopList = [];
		let wolfpackSectionBottomList = [];
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
				wolfpackTransform.push(`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`);
				if (window.innerWidth > 1024) {
					wolfpackList[i].style.transform = wolfpackTransform[i];
				}
				wolfpackScrollPosition.push(0);
				wolfpackHovering.push(false);
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
			let wolfpackClicked = false;
			window.addEventListener('click', () => {
				if (!wolfpackClicked) {
					wolfpackClicked = true;
					setTimeout(() => {
						updateWolfpackVariables();
						wolfpackClicked = false;
					}, 500);
					wolfpackClicked = true;
					setTimeout(() => {
						updateWolfpackVariables();
						wolfpackClicked = false;
					}, 1000);
					wolfpackClicked = true;
					setTimeout(() => {
						updateWolfpackVariables();
						wolfpackClicked = false;
					}, 1500);
				}
			});
		}

		// Wolfpack Init
		initWolfpack();

		// Scrollbar Variables
		const scrollbarList = document.querySelectorAll('[data-scrollbar]');
		const scrollbarThumbList = document.querySelectorAll('[data-scrollbar-thumb]');
		let scrollbarIndex = [];
		let scrollbarCurrentY = [];
		let scrollbarTargetY = [];
		let scrollbarHeight = [];
		let scrollbarThumbHeight = [];
		let scrollbarScrollLimit = [];
		let scrollbarTransform = [];
		if (scrollbarList.length !== 0) {
			for (let i = 0; i < scrollbarList.length; i += 1) {
				scrollbarIndex.push(scrollbarList[i].getAttribute('data-scrollbar-index'));
				scrollbarCurrentY.push(0);
				scrollbarTargetY.push(0);
				scrollbarHeight.push(scrollbarList[i].offsetHeight);
				scrollbarThumbHeight.push((scrollbarHeight[i] * wolfpackParentHeight[scrollbarIndex[i]]) / wolfpackHeight[scrollbarIndex[i]]);
				scrollbarScrollLimit.push((scrollbarHeight[i] - scrollbarThumbHeight[i]) * -1);
				scrollbarTransform.push(`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`);
			}
		}

		// Scrollbar Init
		initScrollbarDragging();

		// Location Variables
		const locationHash = window.location.hash;
		let locationElement = undefined;
		let locationTop = 0;
		if (window.location.hash) {
			locationElement = document.querySelector(locationHash);
			//window.history.pushState(null, null, '#');
			/* setTimeout(() => {
				window.history.pushState(null, null, locationHash);
			}, 1); */
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
		let firstLoopFinished = false;

		// First Loop Init
		initFirstLoop();

		// Scroll Watch Variables
		let modulesUpdated = false;

		// Scroll Watch Init
		initScrollWatch();

		// Stay Variables
		const stayList = document.querySelectorAll('[data-stay]');
		let stayTransform = [];
		if (stayList.length !== 0) {
			for (let i = 0; i < stayList.length; i += 1) {
				stayTransform.push(`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`);
			}
		}

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
		const tadamFunction = new Tadam();
		const tadamList = document.querySelectorAll('[data-tadam]');
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
			setTimeout(() => {
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
			}, 100);
		}

		// Parallax Variables
		const parallaxList = document.querySelectorAll('[data-parallax]');
		let parallaxTop = [];
		let parallaxStop = [];
		let parallaxSpeed = [];
		let parallaxCurrentPosition = [];
		let parallaxPositionY = [];
		let parallaxScrollVariable = [];
		let parallaxTransform = [];
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

		// Marquee Variables
		const marqueeList = document.querySelectorAll('[data-marquee]');
		let marqueeSpeed = [];
		let marqueeClass = [];
		let marqueeHTML = [];
		let marqueeNewHTML = [];
		if (marqueeList.length !== 0) {
			for (let i = 0; i < marqueeList.length; i += 1) {
				if (marqueeList[i].getAttribute('data-marquee-speed')) {
					marqueeSpeed.push(marqueeList[i].getAttribute('data-marquee-speed'));
				} else {
					marqueeSpeed.push(20);
				}
				marqueeClass.push(marqueeList[i].classList[0]);
				marqueeHTML.push(marqueeList[i].innerHTML);
				marqueeNewHTML.push(`<div class="${marqueeClass[i]}--marquee" data-marquee-container><div class="${marqueeClass[i]}--marquee-content" data-marquee-content style="animation-duration:${marqueeSpeed[i]}s"><p>${marqueeHTML[i]}</p><p>${marqueeHTML[i]}</p><p>${marqueeHTML[i]}</p><p>${marqueeHTML[i]}</p><p>${marqueeHTML[i]}</p></div></div>`);
			}
		}

		// Marquee Init
		if (marqueeList.length !== 0) {
			for (let i = 0; i < marqueeList.length; i += 1) {
				initMarquee(i);
			}
		}

		// Follow-me variables
		const followMeContainerList = document.querySelectorAll('[data-follow-me-container]');
		let followMeList = document.querySelectorAll('[data-follow-me]');
		let followMeTop = [];
		let followMeHeight = [];
		let followMeContainerHeight = [];
		let followMeStart = [];
		let followMeStop = [];
		let followMeTransform = [];
		if (followMeContainerList.length !== 0) {
			for (let i = 0; i < followMeContainerList.length; i += 1) {
				followMeHeight.push(followMeList[i].offsetHeight);
				followMeContainerHeight.push(followMeContainerList[i].offsetHeight);
				followMeTop.push(followMeContainerList[i].getBoundingClientRect().y);
				followMeStart.push(followMeTop[i] + windowHeight);
				followMeStop.push(parseFloat(followMeTop[i] + followMeContainerHeight[i] - followMeHeight[i]));
				followMeTransform.push(`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`);
			}
		}

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

		// Separate letters variables
		const separateLetterList = document.querySelectorAll('[data-letters]');
		let separateLetterClass = [];
		let separateLetterHTML = [];
		let separateLetterLines = [];
		if (separateLetterList.length !== 0) {
			for (let i = 0; i < separateLetterList.length; i += 1) {
				separateLetterClass.push(separateLetterList[i].classList[0]);
				separateLetterHTML.push(separateLetterList[i].innerHTML);
				separateLetterList[i].innerHTML = '';
				separateLetterLines.push(separateLetterHTML[i].split('<br>'));
			}
		}

		// Separate letters Init
		if (separateLetterList.length !== 0) {
			for (let i = 0; i < separateLetterList.length; i += 1) {
				initSeparateLetters(i);
			}
		}

		// Separate Words variables
		const separateWordList = document.querySelectorAll('[data-words]');
		let separateWordClass = [];
		let separateWordHTML = [];
		let separateWordLines = [];
		if (separateWordList.length !== 0) {
			for (let i = 0; i < separateWordList.length; i += 1) {
				separateWordClass.push(separateWordList[i].classList[0]);
				separateWordHTML.push(separateWordList[i].innerHTML);
				separateWordList[i].innerHTML = '';
				separateWordLines.push(separateWordHTML[i].split('<br>'));
			}
		}

		// Separate Words Init
		if (separateWordList.length !== 0) {
			for (let i = 0; i < separateWordList.length; i += 1) {
				initSeparateWords(i);
			}
		}

		// Separate lines
		const separateLinesList = document.querySelectorAll('[data-lines]');
		let separateLinesClass = [];
		let separateLinesHTML = [];
		let separateLinesLines = [];
		if (separateLinesList.length !== 0) {
			for (let i = 0; i < separateLinesList.length; i += 1) {
				separateLinesClass.push(separateLinesList[i].classList[0]);
				separateLinesHTML.push(separateLinesList[i].innerHTML);
				separateLinesList[i].innerHTML = '';
				separateLinesLines.push(separateLinesHTML[i].split('<br>'));
			}
		}

		// Separate Lines Init
		if (separateLinesList.length !== 0) {
			for (let i = 0; i < separateLinesList.length; i += 1) {
				initSeparateLines(i);
			}
		}

		// FORM LABELS
		setTimeout(() => {
			updateFormFocus();
		}, 200);
		jQuery(document).bind('gform_post_render', () => {
			updateFormFocus();
		});

		// Links Variables
		const linkList = document.querySelectorAll('a');
		for (let i = 0; i < linkList.length; i += 1) {
			linkList[i].setAttribute('data-cursor', 'expand');
			linkList[i].addEventListener('click', () => {
				if (linkList[i].getAttribute('href') === window.location.pathname) {
					location.reload();
				} else if (!linkList[i].getAttribute('href').includes(window.location.pathname + '#') && linkList[i].getAttribute('href').includes('/') && linkList[i].getAttribute('target') !== '_blank') {
					if (virtualScroll) {
						virtualScroll.off(moveScroll);
					}
				}
			});
		}

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

		jQuery(document).bind('gform_post_render', () => {
			setTimeout(() => {
				//window.scrollTo(0, 0);
			}, 100);
			for (let i = 0; i < formsList.length; i += 1) {
				formChanged[i] = false;
			}
			initForms();
		});

		// Cursor Variables
		const cursorPointerList = document.querySelectorAll('[data-cursor-pointer]');
		const cursor = document.querySelector('[data-cursor-container]');
		let cursorTop = 0;
		let cursorTimer = '';
		let cursorElementList = document.querySelectorAll('[data-cursor]');
		let cursorAttribute = [];
		if (cursorElementList.length !== 0) {
			cursorAttribute.push('');
		}

		// FUNCTIONS

		// Virtual Scroll Function
		function updateVirtualScroll() {
			if (window.innerWidth > 1024) {
				if (virtualScroll === undefined) {
					virtualScroll = new VirtualScroll({
						mouseMultiplier: 0.4,
						touchMultiplier: 2,
					});
					activateWatchScroll = true;
				}
			} else {
				if (virtualScroll) {
					activateWatchScroll = false;
					virtualScroll.destroy();
					virtualScroll = undefined;
				}
			}
		}

		// Wolfpack Function
		function initWolfpack() {
			if (wolfpackList.length !== 0) {
				for (let i = 0; i < wolfpackList.length; i += 1) {
					if (preloader.style.display === 'none') {
						wolfpackHovering[wolfpackMainIndex] = true;
					}
					if (window.innerWidth > 1024) {
						wolfpackList[i].addEventListener('mouseenter', () => {
							for (let j = 0; j < wolfpackList.length; j += 1) {
								if (j !== i) {
									wolfpackHovering[j] = false;
								}
							}
							wolfpackHovering[i] = true;
						});
						wolfpackList[i].addEventListener('mouseleave', () => {
							wolfpackHovering[i] = false;
							let isTrue = false;
							for (let j = 0; j < wolfpackHovering.length; j += 1) {
								if (wolfpackHovering[i]) {
									isTrue = true;
								}
							}
							if (!isTrue) {
								wolfpackHovering[wolfpackMainIndex] = true;
							}
						});
						wolfpackList[i].addEventListener('pointerenter', () => {
							for (let j = 0; j < wolfpackList.length; j += 1) {
								if (j !== i) {
									wolfpackHovering[j] = false;
								}
							}
							wolfpackHovering[i] = true;
						});
					}
				}
			}
		}

		// First Loop Function
		function initFirstLoop() {
			if (wolfpackList.length !== 0 && !locationHash) {
				for (let i = 0; i < wolfpackList.length; i += 1) {
					if (i === wolfpackMainIndex && wolfpackSectionList[i].length === 0) {
						if (!scrolling) {
							startLoop(i);
							scrollTimer(i);
						}
						time = 0;
					} else {
						if (!scrolling) {
							startLoopSections(i);
							scrollTimerSections(i);
						}
						time = 0;
					}
				}
				scrolling = true;
			}
		}

		// Scroll Watch Function
		function initScrollWatch() {
			if ((window, innerWidth > 1024)) {
				if (virtualScroll) {
					setTimeout(() => {
						virtualScroll.on(moveScroll);
					}, 500);
				}
			} else {
				window.addEventListener('scroll', () => {
					updateCurrentY();
					updateDirection(wolfpackMainIndex);
					headerDisappear();
				});
			}
		}

		// Move Scroll Function
		function moveScroll(e) {
			if (!modulesUpdated) {
				modulesUpdated = true;
				updateModules();
			}
			if (wolfpackList.length !== 0) {
				for (let i = 0; i < wolfpackList.length; i += 1) {
					if (wolfpackSectionList[i].length === 0) {
						if (wolfpackHovering[i]) {
							if (!scrolling) {
								startLoop(i);
								showScrollbar(i);
								scrollTimer(i);
								scrolling = true;
							}
							updateTargetY(e.deltaY, i);
							time = 10;
						}
					} else if (wolfpackHovering[i]) {
						if (!scrolling) {
							startLoopSections(i);
							showScrollbar(i);
							scrollTimerSections(i);
							scrolling = true;
						}
						updateTargetY(e.deltaY, i);
						time = 10;
					}
				}
			}
		}

		// Scrollbar Dragging Function
		function initScrollbarDragging() {
			if (scrollbarThumbList.length !== 0) {
				for (let i = 0; i < scrollbarThumbList.length; i += 1) {
					scrollbarThumbList[i].addEventListener('mousedown', (e) => {
						if (wolfpackSectionList[scrollbarIndex[i]].length === 0) {
							wolfpackDragging[scrollbarIndex[i]] = true;
							const currentMousePosotion = e.clientY;
							showScrollbar(scrollbarIndex[i]);
							document.querySelector('body').classList.add('dragging');
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
							const currentMousePosotion = e.clientY;
							showScrollbar(i);
							document.querySelector('body').classList.add('dragging');
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
						document.querySelector('body').classList.remove('dragging');
					});
				}
			}
		}

		// Anchors Function
		function initAnchors() {
			if (anchorElementList.length !== 0) {
				const body = document.querySelector('body');
				for (let i = 0; i < anchorElementList.length; i += 1) {
					if (!anchorElementList[i].classList.contains('no-anchor')) {
						anchorElementList[i].addEventListener('click', (e) => {
							if (window.innerWidth > 1024) {
								e.preventDefault();
								if (!modulesUpdated) {
									modulesUpdated = true;
									updateModules();
								}
								body.classList.add('noscroll');
								setTimeout(() => {
									body.classList.remove('noscroll');
								}, 500);
								if (wolfpackSectionList[wolfpackMainIndex].length === 0) {
									if (!anchorScrolling) {
										anchorScrolling = true;
									}
									if (!scrolling) {
										startLoop(wolfpackMainIndex);
										showScrollbar(wolfpackMainIndex);
										scrollTimer(wolfpackMainIndex);
										scrolling = true;
									}
									updateTargetY(-(anchorLocationTop[i] + wolfpackCurrentY[wolfpackMainIndex]), wolfpackMainIndex);
									time = 10;
								} else {
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
								}
							} else {
								anchorLocation[i].scrollIntoView();
							}
						});
					}
				}
			}
		}

		// Location Function
		function initLocation() {
			if (locationHash) {
				if (window.innerWidth > 1024) {
					setTimeout(() => {
						if (!modulesUpdated) {
							modulesUpdated = true;
							updateModules();
						}
						locationTop = locationElement.getBoundingClientRect().y + Math.abs(wolfpackCurrentY[wolfpackMainIndex]);
						if (wolfpackSectionList[wolfpackMainIndex].length === 0) {
							if (!anchorScrolling) {
								anchorScrolling = true;
								if (!scrolling) {
									startLoop(wolfpackMainIndex);
									scrollTimer(wolfpackMainIndex);
								}
								scrolling = true;
								updateTargetY(-Math.abs(locationTop), wolfpackMainIndex);
								time = 10;
							}
						} else {
							// eslint-disable-next-line
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
						}
					}, 750);
				} else {
					setTimeout(() => {
						console.log(locationElement);
						locationElement.scrollIntoView(true);
					}, 500);
				}
			} else {
				window.scrollTo(0, 0);
			}
		}

		// Start Loop Function
		function startLoop(index) {
			if (!wolfpackLoop[index]) {
				wolfpackLoop[index] = window.requestAnimationFrame(() => {
					updateLoop(index);
				});
			}
		}

		// Stop Loop Function
		function stopLoop(index) {
			if (wolfpackLoop[index]) {
				window.cancelAnimationFrame(updateLoop(index));
				wolfpackLoop[index] = undefined;
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

		// Scroll Timer Function
		function scrollTimer(index) {
			const timer = setInterval(() => {
				time -= 1;
				if (time <= 0) {
					clearInterval(timer);
					scrolling = false;
					anchorScrolling = false;
					hideScrollbar(index);
					stopLoop(index);
					setTimeout(() => {
						firstLoop = false;
					}, 100);
				}
			}, 200);
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

		// Update Loop Function
		function updateLoop(index) {
			wolfpackLoop[index] = undefined;
			if (scrolling || firstLoop) {
				updateCurrentY(index);
				updateTransform(index);
				updateScrollPosition(index);
				updateDirection(index);
				stay(index);
				headerDisappear(index);
				parallax(index);
				followMe(index);
				animationSequence(index);
				tadam(index);
				changes(index);
				startLoop(index);
			}
		}

		// Update Loop Sections Function
		function updateLoopSections(index) {
			wolfpackLoop[index] = undefined;
			if (scrolling || firstLoop) {
				updateCurrentY(index);
				updateScrollPosition(index);
				updateTransformSections(index);
				detectWolfpackSection(index);
				updateDirection(index);
				staySections(index);
				headerDisappear(index);
				tadam(index);
				parallax(index);
				followMe(index);
				animationSequence(index);
				changes(index);
				startLoopSections(index);
			}
		}

		// Update Current Y Function
		function updateCurrentY(index) {
			if (window.innerWidth >= 1024) {
				wolfpackCurrentY[index] += Math.round(((wolfpackTargetY[index] - wolfpackCurrentY[index]) * ease + Number.EPSILON) * 1000) / 1000;
				for (let i = 0; i < scrollbarList.length; i += 1) {
					if (parseFloat(index) === parseFloat(scrollbarIndex[i])) {
						scrollbarCurrentY[i] += Math.round(((scrollbarTargetY[i] - scrollbarCurrentY[i]) * ease + Number.EPSILON) * 1000) / 1000;
					}
				}
			} else {
				wolfpackCurrentY[index] = window.scrollY;
			}
		}

		// Update Target Y Function
		function updateTargetY(e, index) {
			wolfpackTargetY[index] += e;
			wolfpackTargetY[index] = Math.max(wolfpackScrollLimit[index], wolfpackTargetY[index]);
			wolfpackTargetY[index] = Math.min(0, wolfpackTargetY[index]);
			for (let i = 0; i < scrollbarList.length; i += 1) {
				if (parseFloat(index) === parseFloat(scrollbarIndex[i])) {
					scrollbarTargetY[i] = Math.abs((scrollbarHeight[i] * wolfpackTargetY[index]) / wolfpackHeight[index]);
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

		// Update Transform Function
		function updateTransform(index) {
			if (wolfpackCurrentY[index] > -0.5) {
				wolfpackTransform[index] = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`;
				for (let i = 0; i < scrollbarList.length; i += 1) {
					if (parseFloat(index) === parseFloat(scrollbarIndex[i])) {
						scrollbarTransform[i] = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`;
					}
				}
			} else {
				wolfpackTransform[index] = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${wolfpackCurrentY[index]}, 0, 1)`;
				for (let i = 0; i < scrollbarList.length; i += 1) {
					if (parseFloat(index) === parseFloat(scrollbarIndex[i])) {
						scrollbarTransform[i] = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${scrollbarCurrentY[i]}, 0, 1)`;
					}
				}
			}
			wolfpackList[index].style.transform = wolfpackTransform[index];
			for (let i = 0; i < scrollbarList.length; i += 1) {
				if (parseFloat(index) === parseFloat(scrollbarIndex[i])) {
					scrollbarThumbList[i].style.transform = scrollbarTransform[i];
				}
			}
		}

		// Update Transform Sections Function
		function updateTransformSections(index) {
			if (wolfpackCurrentY[index] > -0.5) {
				wolfpackTransform[index] = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`;
				for (let i = 0; i < scrollbarList.length; i += 1) {
					if (parseFloat(index) === parseFloat(scrollbarIndex[i])) {
						scrollbarTransform[i] = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`;
					}
				}
			} else {
				wolfpackTransform[index] = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${wolfpackCurrentY[index]}, 0, 1)`;
				for (let i = 0; i < scrollbarList.length; i += 1) {
					if (parseFloat(index) === parseFloat(scrollbarIndex[i])) {
						scrollbarTransform[i] = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${scrollbarCurrentY[i]}, 0, 1)`;
					}
				}
			}
			for (let i = 0; i < scrollbarList.length; i += 1) {
				if (parseFloat(index) === parseFloat(scrollbarIndex[i])) {
					scrollbarThumbList[i].style.transform = scrollbarTransform[i];
				}
			}
		}

		// Detect Wolfpack Sections Function
		function detectWolfpackSection(index) {
			for (let i = 0; i < wolfpackSectionList[index].length; i += 1) {
				if (wolfpackScrollPosition[index] + windowHeight >= wolfpackSectionTopList[index][i] && wolfpackScrollPosition[index] - windowHeight < wolfpackSectionBottomList[index][i]) {
					wolfpackSectionList[index][i].style.transform = wolfpackTransform[index];
					wolfpackSectionList[index][i].style.pointerEvents = 'all';
					wolfpackSectionList[index][i].style.opacity = '1';
				} else {
					wolfpackSectionList[index][i].style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`;
					wolfpackSectionList[index][i].style.pointerEvents = 'none';
					wolfpackSectionList[index][i].style.opacity = '0';
				}
			}
		}

		// Update Direction Function
		function updateDirection(index) {
			if (window.innerWidth > 1024) {
				if (Math.abs(wolfpackCurrentY[index]) < wolfpackLastOffset[index]) {
					wolfpackLastOffset[index] = Math.abs(wolfpackCurrentY[index]);
					wolfpackDirection[index] = 'up';
				} else {
					wolfpackLastOffset[index] = Math.abs(wolfpackCurrentY[index]);
					wolfpackDirection[index] = 'down';
				}
			} else {
				if (window.scrollY < wolfpackLastOffset[index]) {
					wolfpackLastOffset[index] = window.scrollY;
					wolfpackDirection[index] = 'up';
				} else {
					wolfpackLastOffset[index] = window.scrollY;
					wolfpackDirection[index] = 'down';
				}
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
			for (let i = 0; i < scrollbarList.length; i += 1) {
				if (parseFloat(index) === parseFloat(scrollbarIndex[i])) {
					const scrollbarClass = scrollbarList[i].classList[0]; // eslint-disable-line
					scrollbarList[i].classList.remove(`${scrollbarClass}--show`);
				}
			}
		}

		// Stay Function
		function stay() {
			if (stayList.length !== 0) {
				for (let i = 0; i < stayList.length; i += 1) {
					stayTransform[i] = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${Math.abs(wolfpackCurrentY[wolfpackMainIndex])}, 0, 1)`;
					stayList[i].style.transform = stayTransform[i];
				}
			}
		}

		// Stay Sections Function
		function staySections() {
			if (stayList.length !== 0) {
				for (let i = 0; i < stayList.length; i += 1) {
					stayTransform[i] = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`;
					stayList[i].style.transform = stayTransform[i];
				}
			}
		}

		// Header Disappear Function
		function headerDisappear() {
			if (headerDisappearList.length !== 0) {
				for (let i = 0; i < headerDisappearList.length; i += 1) {
					if (window.innerWidth > 1024) {
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
					} else {
						if (window.scrollY >= headerDisappearSmall[i]) {
							headerDisappearList[i].classList.add(`${headerDisappearList[i].classList[0]}--small`);
						} else {
							headerDisappearList[i].classList.remove(`${headerDisappearList[i].classList[0]}--small`);
						}
						if (window.scrollY >= headerDisappearHide[i]) {
							if (wolfpackDirection[wolfpackMainIndex] === 'down') {
								headerDisappearList[i].classList.add(`${headerDisappearList[i].classList[0]}--hide`);
							} else {
								headerDisappearList[i].classList.remove(`${headerDisappearList[i].classList[0]}--hide`);
							}
						}
					}
				}
			}
		}

		// Tadam Function
		function tadam() {
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

		// Parallax Function
		function parallax() {
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

		// Follow Me Function
		function followMe() {
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

		// Animation Sequence Function
		function animationSequence() {
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

		// Changes Function
		function changes() {
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

		// Marquee Init
		function initMarquee(index) {
			marqueeList[index].innerHTML = marqueeNewHTML[index];
			marqueeList[index].style.width = '100%';
			const marqueeContainerList = document.querySelectorAll('[data-marquee-container]');
			for (let i = 0; i < marqueeContainerList.length; i += 1) {
				const marqueeContainerHTML = marqueeContainerList[i].innerHTML;
				marqueeContainerList[i].innerHTML = marqueeContainerHTML + marqueeContainerHTML;
			}
		}

		// Separate Letters Function
		function initSeparateLetters(index) {
			for (let j = 0; j < separateLetterLines[index].length; j += 1) {
				const separateCharacterLetters = separateLetterLines[index][j].split('');
				let separateCharacterLineContent = '';
				for (let k = 0; k < separateCharacterLetters.length; k += 1) {
					const separateCharacterLetter = separateCharacterLetters[k];
					if (separateCharacterLetter === ' ') {
						separateCharacterLineContent += `<span class="${separateLetterClass[index]}-space separate-character__space">${separateCharacterLetter}</span>`;
					} else {
						separateCharacterLineContent += `<span class="${separateLetterClass[index]}-letter separate-character__letter">${separateCharacterLetter}</span>`;
					}
				}
				separateLetterList[index].innerHTML = `${separateLetterList[index].innerHTML}<div class="${separateLetterClass[index]}-line separate-character__line">${separateCharacterLineContent}</div>`;
			}
		}

		// Separate Words Function
		function initSeparateWords(index) {
			for (let j = 0; j < separateWordLines[index].length; j += 1) {
				const separateWordWords = separateWordLines[index][j].split(' ');
				let separateWordLineContent = '';
				for (let k = 0; k < separateWordWords.length; k += 1) {
					const separateWordWord = separateWordWords[k];
					separateWordLineContent += `<span class="${separateWordClass[index]}-word separate-word__word"><span class="${separateWordClass[index]}-content separate-word__content">${separateWordWord}</span></span>`;
				}
				separateWordList[index].innerHTML += `<div class="${separateWordClass[index]}-line separate-word__line">${separateWordLineContent}</div>`;
			}
		}

		// Separate Lines Function
		function initSeparateLines(index) {
			for (let j = 0; j < separateLinesLines[index].length; j += 1) {
				separateLinesList[index].innerHTML += `<div class="${separateLinesClass[index]}-line separate-line__line"><span class="${separateLinesClass[index]}-line-content separate-line__content">${separateLinesLines[index][j]}</span></div>`;
			}
		}

		// Upadte Wolfpack Variables
		function updateWolfpackVariables() {
			for (let i = 0; i < wolfpackList.length; i += 1) {
				wolfpackHeight[i] = wolfpackList[i].scrollHeight;
				wolfpackParentHeight[i] = wolfpackList[i].parentNode.offsetHeight;
				wolfpackScrollLimit[i] = (wolfpackHeight[i] - wolfpackParentHeight[i]) * -1;
				wolfpackSectionList[i] = wolfpackList[i].querySelectorAll('[data-wolfpack-section]');
				if (window.innerWidth <= 1024) {
					wolfpackList[i].style.transform = '';
				}
				if (wolfpackSectionList[i].length !== 0) {
					for (let j = 0; j < wolfpackSectionList[i].length; j += 1) {
						wolfpackSectionTopList[i][j] = wolfpackSectionList[i][j].offsetTop;
						wolfpackSectionBottomList[i][j] = wolfpackSectionTopList[i][j] + wolfpackSectionList[i][j].getBoundingClientRect().height + windowHeight;
					}
				}
			}
		}

		// Update Scrollbar Variables Function
		function updateScrollbarVariables() {
			for (let i = 0; i < scrollbarList.length; i += 1) {
				scrollbarIndex[i] = scrollbarList[i].getAttribute('data-scrollbar-index');
				scrollbarCurrentY[i] = 0;
				scrollbarTargetY[i] = 0;
				scrollbarHeight[i] = scrollbarList[i].offsetHeight;
				scrollbarThumbHeight[i] = (scrollbarHeight[i] * wolfpackParentHeight[scrollbarIndex[i]]) / wolfpackHeight[scrollbarIndex[i]];
				scrollbarScrollLimit[i] = (scrollbarHeight[i] - scrollbarThumbHeight[i]) * -1;
				scrollbarTransform[i] = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`;
				updateScrollbar(i);
			}
		}

		// Update Scrollbar Function
		function updateScrollbar(index) {
			if (scrollbarThumbList[index]) {
				scrollbarThumbList[index].style.height = `${scrollbarThumbHeight[index]}px`;
			}
		}

		// Update Parallax Variables Function
		function updateParallaxVariables() {
			for (let i = 0; i < parallaxList.length; i += 1) {
				parallaxTop[i] = parallaxList[i].getBoundingClientRect().y + Math.abs(wolfpackCurrentY[wolfpackMainIndex]);
				parallaxStop[i] = parseFloat(parallaxList[i].offsetHeight + parallaxList[i].getBoundingClientRect().y + Math.abs(wolfpackCurrentY[wolfpackMainIndex]) + windowHeight);
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

		// Update Tadam Variables Function
		function updateTadamVariables() {
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

		// Update Follow Me Variables Function
		function updateFollowMeVariables() {
			for (let i = 0; i < followMeContainerList.length; i += 1) {
				followMeHeight[i] = followMeList[i].offsetHeight;
				followMeContainerHeight[i] = followMeContainerList[i].offsetHeight;
				followMeTop[i] = followMeContainerList[i].getBoundingClientRect().y + Math.abs(wolfpackCurrentY[wolfpackMainIndex]);
				followMeStart[i] = followMeTop[i] + windowHeight;
				followMeStop[i] = parseFloat(followMeTop[i] + followMeContainerHeight[i] - followMeHeight[i]);
			}
		}

		// Update Animation Sequence Varibles Function
		function updateAnimationSequenceVariables() {
			for (let i = 0; i < animationSequenceList.length; i += 1) {
				animationSequenceTop[i] = animationSequenceList[i].getBoundingClientRect().y + Math.abs(wolfpackCurrentY[wolfpackMainIndex]);
				animationSequenceHeight[i] = animationSequenceList[i].offsetHeight;
				animationTimeline[i] = parseFloat(windowHeight + animationSequenceHeight[i]);
				animationSequenceStop[i] = parseFloat(animationSequenceList[i].offsetHeight + animationSequenceList[i].getBoundingClientRect().y + Math.abs(wolfpackCurrentY[wolfpackMainIndex]) + windowHeight);
			}
		}

		// Update Changes Variables Function
		function updateChangesVariables() {
			for (let i = 0; i < changesList.length; i += 1) {
				changesTop[i] = changesList[i].getBoundingClientRect().y + Math.abs(wolfpackCurrentY[wolfpackMainIndex]) + parseFloat(windowHeight / 2);
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
									if (fieldList[i][j].querySelector('input').value !== '') {
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

		// Update Modules Function
		function updateModules() {
			updateWolfpackVariables();
			updateScrollbarVariables();
			updateParallaxVariables();
			updateAnchorsVariables();
			updateTadamVariables();
			updateFollowMeVariables();
			updateAnimationSequenceVariables();
			updateChangesVariables();
		}

		window.addEventListener('resize', () => {
			updateVirtualScroll();
			windowHeight = window.innerHeight;
			updateWolfpackVariables();
			updateAnchorsVariables();
			initWolfpack();
			updateScrollbarVariables();
			updateTadamVariables();
			updateParallaxVariables();
			updateFollowMeVariables();
			updateAnimationSequenceVariables();
			updateChangesVariables();
		});

		// CURSOR
		if (cursor) {
			cursor.classList.remove(cursor.classList[1]);
			document.addEventListener('mousemove', (e) => {
				moveCursor(e, cursor, cursorPointerList, cursorTop);
				clearTimeout(cursorTimer);
				cursorTimer = setTimeout(mouseStopped(cursor, cursorPointerList), 100);
			});
		}
		if (cursorElementList.length !== 0) {
			for (let i = 0; i < cursorElementList.length; i += 1) {
				if (cursor) {
					const cursorElement = cursorElementList[i];
					const cursorClass = cursor.classList[0];
					cursorAttribute[i] = cursorElement.getAttribute('data-cursor-class');
					if (!cursorAttribute[i]) {
						cursorElement.addEventListener('mouseover', () => {
							if (!cursor.classList.contains(`${cursorClass}--animate`)) {
								cursor.classList.add(`${cursorClass}--animate`);
							}
						});
						cursorElement.addEventListener('mouseleave', () => {
							cursor.classList.remove(`${cursorClass}--animate`);
						});
					} else {
						cursorElement.addEventListener('mouseover', () => {
							if (!cursor.classList.contains(`${cursorClass}--${cursorAttribute[i]}`)) {
								cursor.classList.add(`${cursorClass}--${cursorAttribute[i]}`);
							}
						});
						cursorElement.addEventListener('mouseleave', () => {
							cursor.classList.remove(`${cursorClass}--${cursorAttribute[i]}`);
						});
					}
				}
			}
		}

		function mouseStopped(cursor, cursorPointers) {
			cursor.classList.remove('moving');
			for (let i = 0; i < cursorPointers.length; i += 1) {
				const thisCursorPointer = cursorPointers[i];
				if (thisCursorPointer.classList.contains('cursor__image')) {
					TweenMax.to(thisCursorPointer, 0.5, {
						rotation: 0,
					});
				}
			}
		}

		function moveCursor(e, cursor, cursorPointers, offsetCursorTop) {
			cursor.classList.add('moving');
			for (let i = 0; i < cursorPointers.length; i += 1) {
				const thisCursorPointer = cursorPointers[i];
				const thisCursorPointerHeight = thisCursorPointer.offsetHeight;
				const thisCursorPointerWidth = thisCursorPointer.offsetWidth;
				if (thisCursorPointer.classList.contains('cursor__ball--big')) {
					TweenMax.to(thisCursorPointer, 0.4, {
						x: e.clientX - parseFloat(thisCursorPointerHeight / 2),
						y: e.clientY - parseFloat(thisCursorPointerWidth / 2) + offsetCursorTop,
					});
				} else if (thisCursorPointer.classList.contains('cursor__image')) {
					if (e.clientX > oldx) {
						TweenMax.to(thisCursorPointer, 0.5, {
							x: e.clientX - parseFloat(thisCursorPointerHeight / 2),
							y: e.clientY - parseFloat(thisCursorPointerWidth / 2) + offsetCursorTop,
							rotation: e.clientX / 100,
						});
					} else if (e.clientX < oldx) {
						TweenMax.to(thisCursorPointer, 0.5, {
							x: e.clientX - parseFloat(thisCursorPointerHeight / 2),
							y: e.clientY - parseFloat(thisCursorPointerWidth / 2) + offsetCursorTop,
							rotation: -e.clientX / 100,
						});
					}
					oldx = e.clientX;
					oldy = e.clientY;
				} else {
					TweenMax.to(thisCursorPointer, 0.1, {
						x: e.clientX - parseFloat(thisCursorPointerHeight / 2),
						y: e.clientY - parseFloat(thisCursorPointerWidth / 2) + offsetCursorTop,
					});
				}
			}
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
									if (fieldList[i][j].querySelector('input').value !== '') {
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
