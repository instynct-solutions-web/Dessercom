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
		window.scrollTo(0, 0);
		window.event.preventDefault();

		// Virtual scroll variables
		if (window.innerWidth >= 1024) {
			this.virtualScroll = new VirtualScroll({
				mouseMultiplier: 0.4,
				touchMultiplier: 2,
			});
		} else {
			this.virtualScroll = new VirtualScroll({
				mouseMultiplier: 0.7,
				touchMultiplier: 2,
			});
		}

		// Preloader variables
		this.preloaderFunction = new Preloader();
		this.preloader = document.querySelector('[data-preloader]');
		this.preloaderDelay = 0;
		this.preloaderSpeed = 0;
		if (this.preloader) {
			if (this.preloader.getAttribute('data-preloader-delay')) {
				this.preloaderDelay = this.preloader.getAttribute('data-preloader-delay');
				this.preloaderSpeed = this.preloaderDelay / 1000;
			} else {
				this.preloaderDelay = 700;
				this.preloaderSpeed = this.preloaderDelay / 1000;
			}
		}
		this.preloaderFunction.initPreloader(this.preloader, this.preloaderSpeed, this.preloaderDelay);

		// Main variables
		this.scrolling = false;
		this.anchorScrolling = false;
		this.ease = 0.06;
		this.time = 10;
		this.windowHeight = window.innerHeight;
		this.scrollbarCode = '<div class="scrollbar" data-scrollbar><span class="scrollbar__thumb" data-scrollbar-thumb></span></div>';
		window.addEventListener('resize', () => {
			this.windowHeight = window.innerHeight;
		});

		// Wolfpack variables
		this.preloader = document.querySelector('[data-preloader]');
		this.wolfpackList = document.querySelectorAll('[data-wolfpack]');
		this.wolfpackMainIndex = 0;
		this.wolfpackLoop = [];
		this.wolfpackCurrentY = [];
		this.wolfpackTargetY = [];
		this.wolfpackHeight = [];
		this.wolfpackParentHeight = [];
		this.wolfpackScrollLimit = [];
		this.wolfpackTransform = [];
		this.wolfpackScrollPosition = [];
		this.wolfpackHovering = [];
		this.wolfpackLastOffset = [];
		this.wolfpackDirection = [];
		this.wolfpackDragging = [];
		this.wolfpackSectionList = [];
		this.wolfpackSectionTopList = [];
		this.wolfpackSectionBottomList = [];
		if (this.wolfpackList.length !== 0) {
			for (let i = 0; i < this.wolfpackList.length; i += 1) {
				const wolfpack = this.wolfpackList[i];
				if (wolfpack.getAttribute('data-wolfpack')) {
					this.wolfpackMainIndex = i;
				}
				this.wolfpackLoop.push(undefined);
				this.wolfpackCurrentY.push(0);
				this.wolfpackTargetY.push(0);
				this.wolfpackHeight.push(wolfpack.scrollHeight);
				this.wolfpackParentHeight.push(wolfpack.parentNode.offsetHeight);
				this.wolfpackScrollLimit.push((this.wolfpackHeight[i] - this.wolfpackParentHeight[i]) * -1);
				this.wolfpackTransform.push(`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`);
				this.wolfpackList[i].style.transform = this.wolfpackTransform[i];
				this.wolfpackScrollPosition.push(0);
				this.wolfpackHovering.push(false);
				this.wolfpackLastOffset.push(0);
				this.wolfpackDirection.push('down');
				this.wolfpackDragging.push(false);
				this.wolfpackSectionList.push(wolfpack.querySelectorAll('[data-wolfpack-section]'));
				this.wolfpackSectionTopList.push([]);
				this.wolfpackSectionBottomList.push([]);
				if (this.wolfpackSectionList[i].length !== 0) {
					for (let j = 0; j < this.wolfpackSectionList[i].length; j += 1) {
						this.wolfpackSectionTopList[i].push(this.wolfpackSectionList[i][j].offsetTop);
						this.wolfpackSectionBottomList[i].push(this.wolfpackSectionTopList[i][j] + this.wolfpackSectionList[i][j].getBoundingClientRect().height + this.windowHeight);
					}
				}
			}
			this.wolfpackClicked = false;
			window.addEventListener('click', () => {
				if (!this.wolfpackClicked) {
					this.wolfpackClicked = true;
					setTimeout(() => {
						for (let i = 0; i < this.wolfpackList.length; i += 1) {
							this.wolfpackHeight[i] = this.wolfpackList[i].scrollHeight;
							if (this.wolfpackList[i].parentNode) {
								this.wolfpackParentHeight[i] = this.wolfpackList[i].parentNode.offsetHeight;
								this.wolfpackScrollLimit[i] = (this.wolfpackHeight[i] - this.wolfpackParentHeight[i]) * -1;
							}
							this.wolfpackSectionList[i] = this.wolfpackList[i].querySelectorAll('[data-wolfpack-section]');
							if (this.wolfpackSectionList[i].length !== 0) {
								for (let j = 0; j < this.wolfpackSectionList[i].length; j += 1) {
									this.wolfpackSectionTopList[i][j] = this.wolfpackSectionList[i][j].offsetTop;
									this.wolfpackSectionBottomList[i][j] = this.wolfpackSectionTopList[i][j] + this.wolfpackSectionList[i][j].getBoundingClientRect().height + this.windowHeight;
								}
							}
						}
						this.wolfpackClicked = false;
					}, 1500);
				}
			});
			window.addEventListener('resize', () => {
				this.wolfpackList = document.querySelectorAll('[data-wolfpack]');
				for (let i = 0; i < this.wolfpackList.length; i += 1) {
					this.wolfpackHeight[i] = this.wolfpackList[i].scrollHeight;
					this.wolfpackParentHeight[i] = this.wolfpackList[i].parentNode.offsetHeight;
					this.wolfpackScrollLimit[i] = (this.wolfpackHeight[i] - this.wolfpackParentHeight[i]) * -1;
					this.wolfpackSectionList[i] = this.wolfpackList[i].querySelectorAll('[data-wolfpack-section]');
					if (this.wolfpackSectionList[i].length !== 0) {
						for (let j = 0; j < this.wolfpackSectionList[i].length; j += 1) {
							this.wolfpackSectionTopList[i][j] = this.wolfpackSectionList[i][j].offsetTop;
							this.wolfpackSectionBottomList[i][j] = this.wolfpackSectionTopList[i][j] + this.wolfpackSectionList[i][j].getBoundingClientRect().height + this.windowHeight;
						}
					}
				}
			});
		}

		// Scrollbar variables
		this.scrollbarList = document.querySelectorAll('[data-scrollbar]');
		this.scrollbarThumbList = document.querySelectorAll('[data-scrollbar-thumb]');
		this.scrollbarIndex = [];
		this.scrollbarCurrentY = [];
		this.scrollbarTargetY = [];
		this.scrollbarHeight = [];
		this.scrollbarThumbHeight = [];
		this.scrollbarScrollLimit = [];
		this.scrollbarTransform = [];
		if (this.scrollbarList.length !== 0) {
			for (let i = 0; i < this.scrollbarList.length; i += 1) {
				this.scrollbarIndex.push(this.scrollbarList[i].getAttribute('data-scrollbar-index'));
				this.scrollbarCurrentY.push(0);
				this.scrollbarTargetY.push(0);
				this.scrollbarHeight.push(this.scrollbarList[i].offsetHeight);
				this.scrollbarThumbHeight.push((this.scrollbarHeight[i] * this.wolfpackParentHeight[this.scrollbarIndex[i]]) / this.wolfpackHeight[this.scrollbarIndex[i]]);
				this.scrollbarScrollLimit.push((this.scrollbarHeight[i] - this.scrollbarThumbHeight[i]) * -1);
				this.scrollbarTransform.push(`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`);
			}
			window.addEventListener('load', () => {
				for (let i = 0; i < this.scrollbarList.length; i += 1) {
					this.scrollbarIndex[i] = this.scrollbarList[i].getAttribute('data-scrollbar-index');
					this.scrollbarCurrentY[i] = 0;
					this.scrollbarTargetY[i] = 0;
					this.scrollbarHeight[i] = this.scrollbarList[i].offsetHeight;
					this.scrollbarThumbHeight[i] = (this.scrollbarHeight[i] * this.wolfpackParentHeight[this.scrollbarIndex[i]]) / this.wolfpackHeight[this.scrollbarIndex[i]];
					this.scrollbarScrollLimit[i] = (this.scrollbarHeight[i] - this.scrollbarThumbHeight[i]) * -1;
					this.scrollbarTransform[i] = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`;
					this.updateScrollbar(i);
				}
			});
		}

		// Location variables
		this.locationHash = window.location.hash;
		this.locationElement = undefined;
		this.locationTop = 0;
		if (window.location.hash) {
			this.locationElement = document.querySelector(this.locationHash);
			window.history.pushState(null, null, '#noscroll');
			setTimeout(() => {
				window.history.pushState(null, null, this.locationHash);
			}, 1);
		}

		// Anchors variables
		this.anchorList = document.querySelectorAll(`a[href*="#"]`);
		this.anchorLocation = [];
		this.anchorLocationTop = [];
		if (this.anchorList.length !== 0) {
			for (let i = 0; i < this.anchorList.length; i += 1) {
				if (this.anchorList[i].pathname === window.location.pathname && this.anchorList[i].getAttribute('href') !== '#') {
					this.anchorLocation.push(document.querySelector(this.anchorList[i].getAttribute('href').replace(window.location.pathname, '')));
					if (this.anchorLocation[i]) {
						this.anchorLocationTop.push(this.anchorLocation[i].getBoundingClientRect().y);
					} else {
						this.anchorLocationTop.push(0);
					}
				} else {
					this.anchorList[i].classList.add('no-anchor');
				}
			}
		}
		window.addEventListener('resize', () => {
			if (this.anchorList.length !== 0) {
				for (let i = 0; i < this.anchorList.length; i += 1) {
					if (this.anchorList[i].pathname === window.location.pathname && this.anchorList[i].getAttribute('href') !== '#') {
						if (this.anchorLocation[i]) {
							this.anchorLocationTop[i] = this.anchorLocation[i].getBoundingClientRect().y + Math.abs(this.wolfpackCurrentY[this.wolfpackMainIndex]);
						} else {
							this.anchorLocationTop[i] = 0;
						}
					}
				}
			}
		});

		// Stay variables
		this.stayList = document.querySelectorAll('[data-stay]');
		this.stayTransform = [];
		if (this.stayList.length !== 0) {
			for (let i = 0; i < this.stayList.length; i += 1) {
				this.stayTransform.push(`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`);
			}
		}

		// Header disappear variables
		this.headerDisappearList = document.querySelectorAll('[data-header-disappear]');
		this.headerDisappearSmall = [];
		this.headerDisappearHide = [];
		if (this.headerDisappearList.length !== 0) {
			for (let i = 0; i < this.headerDisappearList.length; i += 1) {
				if (this.headerDisappearList[i].getAttribute('data-header-small')) {
					this.headerDisappearSmall.push(parseFloat(this.headerDisappearList[i].getAttribute('data-header-small')));
				} else {
					this.headerDisappearSmall.push(250);
				}
				if (this.headerDisappearList[i].getAttribute('data-header-hide')) {
					this.headerDisappearHide.push(parseFloat(this.headerDisappearList[i].getAttribute('data-header-hide')));
				} else {
					this.headerDisappearHide.push(500);
				}
			}
		}

		// Tadam variables
		this.tadamFunction = new Tadam();
		this.tadamList = document.querySelectorAll('[data-tadam]');
		this.tadamTop = [];
		this.tadamRepeat = [];
		this.tadamThreshold = [];
		this.tadamThresholdMobile = [];
		this.tadamElementList = [];
		this.tadamAnimationList = [];
		this.tadamRepeatAnimationList = [];
		this.tadamFinished = [];
		this.tadamVisible = [];
		if (this.tadamList.length !== 0) {
			setTimeout(() => {
				for (let i = 0; i < this.tadamList.length; i += 1) {
					this.tadamTop.push(this.tadamList[i].getBoundingClientRect().y);
					if (this.tadamList[i].getAttribute('data-tadam-repeat') === 'true') {
						this.tadamRepeat.push(true);
					} else {
						this.tadamRepeat.push(false);
					}
					if (this.tadamList[i].getAttribute('data-tadam-threshold-mobile')) {
						this.tadamThresholdMobile.push(this.tadamList[i].getAttribute('data-tadam-threshold-mobile'));
					} else {
						this.tadamThresholdMobile.push('100');
					}
					if (this.tadamList[i].getAttribute('data-tadam-threshold')) {
						this.tadamThreshold.push(this.tadamList[i].getAttribute('data-tadam-threshold'));
					} else {
						this.tadamThreshold.push('200');
					}
					this.tadamElementList.push([]);
					this.tadamAnimationList.push([]);
					this.tadamRepeatAnimationList.push([]);
					if (this.tadamList[i].querySelectorAll('[data-tadam-animate]').length !== 0) {
						for (let j = 0; j < this.tadamList[i].querySelectorAll('[data-tadam-animate]').length; j += 1) {
							this.tadamElementList[i].push(this.tadamList[i].querySelectorAll('[data-tadam-animate]')[j]);
						}
					} else {
						this.tadamElementList[i].push(this.tadamList[i]);
					}
					for (let j = 0; j < this.tadamElementList[i].length; j += 1) {
						if (this.tadamElementList[i][j].getAttribute('data-tadam-animate')) {
							this.tadamAnimationList[i].push(this.tadamElementList[i][j].getAttribute('data-tadam-animate'));
						} else {
							this.tadamAnimationList[i].push('animate');
						}
					}
					for (let j = 0; j < this.tadamElementList[i].length; j += 1) {
						if (this.tadamElementList[i][j].getAttribute('data-tadam-animate-repeat')) {
							this.tadamRepeatAnimationList[i].push(this.tadamElementList[i][j].getAttribute('data-tadam-animate-repeat'));
						} else {
							this.tadamRepeatAnimationList[i].push('repeat');
						}
					}
					this.tadamFinished.push(false);
					this.tadamVisible.push(parseFloat(this.tadamTop[i]) + parseFloat(this.tadamThreshold[i]));
				}
			}, 100);
			window.addEventListener('resize', () => {
				for (let i = 0; i < this.tadamList.length; i += 1) {
					this.tadamTop[i] = this.tadamList[i].getBoundingClientRect().y + Math.abs(this.wolfpackCurrentY[this.wolfpackMainIndex]);
					if (window.innerWidth < 768) {
						this.tadamThreshold[i] = this.tadamThresholdMobile[i];
					} else if (this.tadamList[i].getAttribute('data-tadam-threshold')) {
						this.tadamThreshold[i] = this.tadamList[i].getAttribute('data-tadam-threshold');
					} else {
						this.tadamThreshold[i] = '200';
					}
					this.tadamVisible[i] = parseFloat(this.tadamTop[i]) + parseFloat(this.tadamThreshold[i]);
				}
			});
		}

		// Parallax variables
		this.parallaxList = document.querySelectorAll('[data-parallax]');
		this.parallaxTop = [];
		this.parallaxStop = [];
		this.parallaxSpeed = [];
		this.parallaxCurrentPosition = [];
		this.parallaxPositionY = [];
		this.parallaxScrollVariable = [];
		this.parallaxTransform = [];
		if (this.parallaxList.length !== 0) {
			for (let i = 0; i < this.parallaxList.length; i += 1) {
				this.parallaxTop.push(this.parallaxList[i].getBoundingClientRect().y);
				this.parallaxStop.push(parseFloat(this.parallaxList[i].offsetHeight + this.parallaxList[i].getBoundingClientRect().y + this.windowHeight));
				if (this.parallaxList[i].getAttribute('data-parallax-speed')) {
					this.parallaxSpeed.push(this.parallaxList[i].getAttribute('data-parallax-speed'));
				} else {
					this.parallaxSpeed.push('3');
				}
				this.parallaxCurrentPosition.push(0);
				this.parallaxPositionY.push(0);
				this.parallaxScrollVariable.push(0);
				this.parallaxTransform.push(`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`);
			}
			window.addEventListener('resize', () => {
				for (let i = 0; i < this.parallaxList.length; i += 1) {
					this.parallaxTop[i] = this.parallaxList[i].getBoundingClientRect().y + Math.abs(this.wolfpackCurrentY[this.wolfpackMainIndex]);
					this.parallaxStop[i] = parseFloat(this.parallaxList[i].offsetHeight + this.parallaxList[i].getBoundingClientRect().y + Math.abs(this.wolfpackCurrentY[this.wolfpackMainIndex]) + this.windowHeight);
				}
			});
		}

		// Marquee variables
		this.marqueeList = document.querySelectorAll('[data-marquee]');
		this.marqueeSpeed = [];
		this.marqueeClass = [];
		this.marqueeHTML = [];
		this.marqueeNewHTML = [];
		if (this.marqueeList.length !== 0) {
			for (let i = 0; i < this.marqueeList.length; i += 1) {
				if (this.marqueeList[i].getAttribute('data-marquee-speed')) {
					this.marqueeSpeed.push(this.marqueeList[i].getAttribute('data-marquee-speed'));
				} else {
					this.marqueeSpeed.push(20);
				}
				this.marqueeClass.push(this.marqueeList[i].classList[0]);
				this.marqueeHTML.push(this.marqueeList[i].innerHTML);
				this.marqueeNewHTML.push(`<div class="${this.marqueeClass[i]}--marquee" data-marquee-container><div class="${this.marqueeClass[i]}--marquee-content" data-marquee-content style="animation-duration:${this.marqueeSpeed[i]}s"><p>${this.marqueeHTML[i]}</p><p>${this.marqueeHTML[i]}</p><p>${this.marqueeHTML[i]}</p><p>${this.marqueeHTML[i]}</p><p>${this.marqueeHTML[i]}</p></div></div>`);
			}
		}

		// Follow-me variables
		this.followMeContainerList = document.querySelectorAll('[data-follow-me-container]');
		this.followMeList = document.querySelectorAll('[data-follow-me]');
		this.followMeTop = [];
		this.followMeHeight = [];
		this.followMeContainerHeight = [];
		this.followMeStart = [];
		this.followMeStop = [];
		this.followMeTransform = [];
		if (this.followMeContainerList.length !== 0) {
			for (let i = 0; i < this.followMeContainerList.length; i += 1) {
				this.followMeHeight.push(this.followMeList[i].offsetHeight);
				this.followMeContainerHeight.push(this.followMeContainerList[i].offsetHeight);
				this.followMeTop.push(this.followMeContainerList[i].getBoundingClientRect().y);
				this.followMeStart.push(this.followMeTop[i] + this.windowHeight);
				this.followMeStop.push(parseFloat(this.followMeTop[i] + this.followMeContainerHeight[i] - this.followMeHeight[i]));
				this.followMeTransform.push(`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`);
			}
			window.addEventListener('resize', () => {
				for (let i = 0; i < this.followMeContainerList.length; i += 1) {
					this.followMeHeight[i] = this.followMeList[i].offsetHeight;
					this.followMeContainerHeight[i] = this.followMeContainerList[i].offsetHeight;
					this.followMeTop[i] = this.followMeContainerList[i].getBoundingClientRect().y + Math.abs(this.wolfpackCurrentY[this.wolfpackMainIndex]);
					this.followMeStart[i] = this.followMeTop[i] + this.windowHeight;
					this.followMeStop[i] = parseFloat(this.followMeTop[i] + this.followMeContainerHeight[i] - this.followMeHeight[i]);
				}
			});
		}

		// Animation squence variables
		this.animationSequenceList = document.querySelectorAll('[data-animation]');
		this.animationSequenceName = [];
		this.animationSequenceFullPage = [];
		this.animationSequenceTop = [];
		this.animationSequenceHeight = [];
		this.animationTimeline = [];
		this.animationSequenceStop = [];
		this.animationCurrentPosition = [];
		this.animationPositionY = [];
		this.animationScrollVariable = [];
		if (this.animationSequenceList.length !== 0) {
			for (let i = 0; i < this.animationSequenceList.length; i += 1) {
				this.animationSequenceTop.push(this.animationSequenceList[i].getBoundingClientRect().y);
				this.animationSequenceHeight.push(this.animationSequenceList[i].offsetHeight);
				this.animationTimeline.push(parseFloat(this.windowHeight + this.animationSequenceHeight[i]));
				this.animationSequenceStop.push(parseFloat(this.animationSequenceList[i].offsetHeight + this.animationSequenceList[i].getBoundingClientRect().y + this.windowHeight));
				this.animationCurrentPosition.push(0);
				this.animationPositionY.push(0);
				this.animationScrollVariable.push(0);
				if (this.animationSequenceList[i].getAttribute('data-animation-name')) {
					this.animationSequenceName.push(this.animationSequenceList[i].getAttribute('data-animation-name'));
				} else {
					this.animationSequenceName.push(`sequence-${i}`);
				}
				if (this.animationSequenceList[i].getAttribute('data-animation-full-page')) {
					if (this.animationSequenceList[i].getAttribute('data-animation-full-page') === 'true') {
						this.animationSequenceFullPage.push(true);
					} else {
						this.animationSequenceFullPage.push(false);
					}
				} else {
					this.animationSequenceFullPage.push(false);
				}
				this.animationSequenceList[i].style.animation = `animation-${this.animationSequenceName[i]} 1s linear`;
				this.animationSequenceList[i].style.animationDelay = `calc(var(--scroll-${i}) * -1s)`;
				this.animationSequenceList[i].style.animationPlayState = 'paused';
				this.animationSequenceList[i].style.animationIterationCount = '1';
				this.animationSequenceList[i].style.animationFillMode = 'both';
			}
			window.addEventListener('resize', () => {
				for (let i = 0; i < this.animationSequenceList.length; i += 1) {
					this.animationSequenceTop[i] = this.animationSequenceList[i].getBoundingClientRect().y + Math.abs(this.wolfpackCurrentY[this.wolfpackMainIndex]);
					this.animationSequenceHeight[i] = this.animationSequenceList[i].offsetHeight;
					this.animationTimeline[i] = parseFloat(this.windowHeight + this.animationSequenceHeight[i]);
					this.animationSequenceStop[i] = parseFloat(this.animationSequenceList[i].offsetHeight + this.animationSequenceList[i].getBoundingClientRect().y + Math.abs(this.wolfpackCurrentY[this.wolfpackMainIndex]) + this.windowHeight);
				}
			});
		}

		// Changes variables
		this.changesList = document.querySelectorAll('[data-changes]');
		this.changesTop = [];
		this.changesElements = [];
		this.changesClasses = [];
		this.changesActive = [];
		if (this.changesList.length !== 0) {
			for (let i = 0; i < this.changesList.length; i += 1) {
				this.changesTop.push(this.changesList[i].getBoundingClientRect().y + parseFloat(this.windowHeight / 2));
				if (this.changesList[i].getAttribute('data-changes-elements')) {
					this.changesElements.push(this.changesList[i].getAttribute('data-changes-elements').split(', '));
				} else {
					this.changesElements.push('body');
				}
				if (this.changesList[i].getAttribute('data-changes-classes')) {
					this.changesClasses.push(this.changesList[i].getAttribute('data-changes-classes').split(', '));
				} else {
					this.changesClasses.push('changes');
				}
				this.changesActive.push(false);
			}
			window.addEventListener('resize', () => {
				for (let i = 0; i < this.changesList.length; i += 1) {
					this.changesTop[i] = this.changesList[i].getBoundingClientRect().y + Math.abs(this.wolfpackCurrentY[this.wolfpackMainIndex]) + parseFloat(this.windowHeight / 2);
				}
			});
		}

		// Separate letters variables
		this.separateLetterList = document.querySelectorAll('[data-letters]');
		this.separateLetterClass = [];
		this.separateLetterHTML = [];
		this.separateLetterLines = [];
		if (this.separateLetterList.length !== 0) {
			for (let i = 0; i < this.separateLetterList.length; i += 1) {
				this.separateLetterClass.push(this.separateLetterList[i].classList[0]);
				this.separateLetterHTML.push(this.separateLetterList[i].innerHTML);
				this.separateLetterList[i].innerHTML = '';
				this.separateLetterLines.push(this.separateLetterHTML[i].split('<br>'));
			}
		}

		// Separate words variables
		this.separateWordList = document.querySelectorAll('[data-words]');
		this.separateWordClass = [];
		this.separateWordHTML = [];
		this.separateWordLines = [];
		if (this.separateWordList.length !== 0) {
			for (let i = 0; i < this.separateWordList.length; i += 1) {
				this.separateWordClass.push(this.separateWordList[i].classList[0]);
				this.separateWordHTML.push(this.separateWordList[i].innerHTML);
				this.separateWordList[i].innerHTML = '';
				this.separateWordLines.push(this.separateWordHTML[i].split('<br>'));
			}
		}

		// Separate lines
		this.separateLinesList = document.querySelectorAll('[data-lines]');
		this.separateLinesClass = [];
		this.separateLinesHTML = [];
		this.separateLinesLines = [];
		if (this.separateLinesList.length !== 0) {
			for (let i = 0; i < this.separateLinesList.length; i += 1) {
				this.separateLinesClass.push(this.separateLinesList[i].classList[0]);
				this.separateLinesHTML.push(this.separateLinesList[i].innerHTML);
				this.separateLinesList[i].innerHTML = '';
				this.separateLinesLines.push(this.separateLinesHTML[i].split('<br>'));
			}
		}

		// FORM LABELS
		jQuery(document).bind('gform_post_render', () => {
			setTimeout(() => {
				window.scrollTo(0, 0);
			}, 50);
			this.formsList = document.querySelectorAll('[data-form]');
			this.formChanged = [];
			this.formParentPosition = [];
			this.formClass = [];
			this.fieldList = [];
			if (this.formsList.length !== 0) {
				for (let i = 0; i < this.formsList.length; i += 1) {
					this.formChanged.push(false);
					this.fieldList.push([]);
				}
			}
			if (this.formsList.length !== 0) {
				for (let i = 0; i < this.formsList.length; i += 1) {
					if (!this.formChanged[i]) {
						this.formChanged[i] = true;
						this.fieldList[i] = this.formsList[i].querySelectorAll('.gfield');
						this.formParentPosition.push(this.formsList[i].getBoundingClientRect().y);
						this.formClass.push([]);
						if (this.fieldList[i].length !== 0) {
							for (let j = 0; j < this.fieldList[i].length; j += 1) {
								this.formClass[i].push(this.fieldList[i][j].classList[0]);
							}
						}
						if (this.fieldList[i].length !== 0) {
							for (let j = 0; j < this.fieldList[i].length; j += 1) {
								this.fieldList[i][j].addEventListener('focusin', () => {
									this.formFocusIn(this.fieldList[i][j], i, j);
								});
								this.fieldList[i][j].addEventListener('focusout', () => {
									if (this.fieldList[i][j].querySelector('.ginput_container').classList.contains('ginput_complex')) {
										if (this.fieldList[i][j].querySelector('input').value === '' || this.fieldList[i][j].querySelector('input').value === null) {
											this.formFocusOut(this.fieldList[i][j], i, j);
										}
									} else if (this.fieldList[i][j].querySelector('.ginput_container').classList.contains('ginput_container_textarea')) {
										if (this.fieldList[i][j].querySelector('textarea').value === '' || this.fieldList[i][j].querySelector('textarea').value === null) {
											this.formFocusOut(this.fieldList[i][j], i, j);
										}
									} else if (this.fieldList[i][j].querySelector('.ginput_container').classList.contains('ginput_container_select')) {
										if (this.fieldList[i][j].querySelector('select').value === '' || this.fieldList[i][j].querySelector('select').value === null) {
											this.formFocusOut(this.fieldList[i][j], i, j);
										}
									} else if (this.fieldList[i][j].querySelector('input').value === '' || this.fieldList[i][j].querySelector('input').value === null) {
										this.formFocusOut(this.fieldList[i][j], i, j);
									}
								});
								if (this.fieldList[i][j].querySelector('.ginput_container') && this.fieldList[i][j].querySelector('.ginput_container').classList.contains('ginput_complex')) {
									if (this.fieldList[i][j].querySelector('input').value !== '') {
										this.formFocusIn(this.fieldList[i][j], i, j);
									}
									if (this.fieldList[i][j].querySelectorAll('.ginput_complex span').length !== 0) {
										for (let k = 0; k < this.fieldList[i][j].querySelectorAll('.ginput_complex span').length; k += 1) {
											this.fieldList[i][j].querySelectorAll('.ginput_complex span')[k].addEventListener('focusin', () => {
												this.formFocusIn(this.fieldList[i][j].querySelectorAll('.ginput_complex span')[k], i, j);
											});
											this.fieldList[i][j].querySelectorAll('.ginput_complex span')[k].addEventListener('focusout', () => {
												if (this.fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('input')) {
													if (this.fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('input').value === '' || this.fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('input').value === null) {
														this.formFocusOut(this.fieldList[i][j].querySelectorAll('.ginput_complex span')[k], i, j);
													}
												} else if (this.fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('select')) {
													if (this.fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('select').value === '' || this.fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('select').value === null) {
														this.formFocusOut(this.fieldList[i][j].querySelectorAll('.ginput_complex span')[k], i, j);
													}
												}
											});
											if (this.fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('input')) {
												if (this.fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('input').value !== '') {
													this.formFocusIn(this.fieldList[i][j].querySelectorAll('.ginput_complex span')[k], i, j);
												}
											} else if (this.fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('select')) {
												if (this.fieldList[i][j].querySelectorAll('.ginput_complex span')[k].querySelector('select').value !== '') {
													this.formFocusIn(this.fieldList[i][j].querySelectorAll('.ginput_complex span')[k], i, j);
												}
											}
										}
									}
									if (this.fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full').length !== 0) {
										for (let k = 0; k < this.fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full').length; k += 1) {
											if (this.fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full')[k].querySelector('input')) {
												this.fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full')[k].addEventListener('focusin', () => {
													this.formFocusIn(this.fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full')[k], i, j);
												});
												this.fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full')[k].addEventListener('focusout', () => {
													if (this.fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full')[k].querySelector('input').value === '' || this.fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full')[k].querySelector('input').value === null) {
														this.formFocusOut(this.fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full')[k], i, j);
													}
												});
												if (this.fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full')[k].querySelector('input').value !== '') {
													this.formFocusIn(this.fieldList[i][j].querySelectorAll('.ginput_complex>.ginput_full')[k], i, j);
												}
											}
										}
									}
								} else if (this.fieldList[i][j].querySelector('.ginput_container') && this.fieldList[i][j].querySelector('.ginput_container').classList.contains('ginput_container_textarea')) {
									if (this.fieldList[i][j].querySelector('textarea').value !== '') {
										this.formFocusIn(this.fieldList[i][j], i, j);
									}
								} else if (this.fieldList[i][j].querySelector('.ginput_container') && this.fieldList[i][j].querySelector('.ginput_container').classList.contains('ginput_container_select')) {
									if (this.fieldList[i][j].querySelector('select').value !== '') {
										this.formFocusIn(this.fieldList[i][j], i, j);
									}
								} else if (this.fieldList[i][j].querySelector('input') && this.fieldList[i][j].querySelector('input').value !== '') {
									this.formFocusIn(this.fieldList[i][j], i, j);
								}
							}
						}
					}
				}
			}
		});

		// Links data-cursor
		for (let i = 0; i < document.querySelectorAll('a').length; i += 1) {
			document.querySelectorAll('a')[i].setAttribute('data-cursor', '');
		}

		// Cursor variables
		this.cursorPointerList = document.querySelectorAll('[data-cursor-pointer]');
		this.cursor = document.querySelector('[data-cursor-container]');
		this.cursorTop = 0;
		this.cursorTimer = '';
		this.cursorElementList = document.querySelectorAll('[data-cursor]');
		this.cursorAttribute = [];
		if (this.cursorElementList.length !== 0) {
			this.cursorAttribute.push('');
		}

		setTimeout(() => {
			this.manageEvents();
		}, 10);
	}

	manageEvents() {
		// Wolfpack configurations
		if (this.wolfpackList.length !== 0) {
			for (let i = 0; i < this.wolfpackList.length; i += 1) {
				// Watch hovering
				if (this.preloader.style.display === 'none') {
					this.wolfpackHovering[this.wolfpackMainIndex] = true;
				}
				if (window.innerWidth >= 1024) {
					this.wolfpackList[i].addEventListener('mouseenter', () => {
						if (!this.anchorScrolling) {
							this.scrolling = false;
						}
						this.wolfpackHovering[i] = true;
						for (let j = 0; j < this.wolfpackList.length; j += 1) {
							if (this.wolfpackList[j] !== this.wolfpackList[i]) {
								if (this.wolfpackSectionList[j].length === 0) {
									this.scrollTimer(j);
								} else {
									this.scrollTimerSections(j);
								}
								this.wolfpackHovering[j] = false;
							}
						}
					});
					this.wolfpackList[i].addEventListener('mouseleave', () => {
						if (!this.anchorScrolling) {
							this.scrolling = false;
						}
						this.wolfpackHovering[i] = false;
						if (this.wolfpackList[i] !== this.wolfpackList[this.wolfpackMainIndex]) {
							this.wolfpackHovering[this.wolfpackMainIndex] = true;
						}
					});
				} else {
					this.wolfpackList[i].addEventListener('pointerenter', () => {
						if (!this.wolfpackHovering[i]) {
							if (!this.anchorScrolling) {
								this.scrolling = false;
							}
							this.wolfpackHovering[i] = true;
							for (let j = 0; j < this.wolfpackList.length; j += 1) {
								if (this.wolfpackList[j] !== this.wolfpackList[i]) {
									if (this.wolfpackSectionList[j].length === 0) {
										this.scrollTimer(j);
									} else {
										this.scrollTimerSections(j);
									}
									this.wolfpackHovering[j] = false;
								}
							}
						}
					});
				}
			}
		}

		// Init first loop
		this.firstLoop = true;
		this.firstLoopFinished = false;
		if (this.wolfpackList.length !== 0 && !this.locationHash) {
			for (let i = 0; i < this.wolfpackList.length; i += 1) {
				if (i !== this.wolfpackMainIndex && this.wolfpackSectionList[i].length === 0) {
					if (!this.scrolling) {
						this.startLoop(i);
						this.scrollTimer(i);
					}
					this.time = 0;
				} else {
					if (!this.scrolling) {
						this.startLoopSections(i);
						this.scrollTimerSections(i);
					}
					this.time = 0;
				}
			}
			this.scrolling = true;
		}

		// Watch scroll events
		this.updateWolfpackHeight = false;
		this.updateScrollbarHeight = false;
		this.updateParallaxTop = false;
		this.virtualScroll.on((e) => {
			if (!this.updateWolfpackHeight) {
				this.updateWolfpackHeight = true;
				this.wolfpackList = document.querySelectorAll('[data-wolfpack]');
				for (let i = 0; i < this.wolfpackList.length; i += 1) {
					this.wolfpackHeight[i] = this.wolfpackList[i].scrollHeight;
					this.wolfpackParentHeight[i] = this.wolfpackList[i].parentNode.offsetHeight;
					this.wolfpackScrollLimit[i] = (this.wolfpackHeight[i] - this.wolfpackParentHeight[i]) * -1;
					this.wolfpackSectionList[i] = this.wolfpackList[i].querySelectorAll('[data-wolfpack-section]');
					if (this.wolfpackSectionList[i].length !== 0) {
						for (let j = 0; j < this.wolfpackSectionList[i].length; j += 1) {
							this.wolfpackSectionTopList[i][j] = this.wolfpackSectionList[i][j].offsetTop;
							this.wolfpackSectionBottomList[i][j] = this.wolfpackSectionTopList[i][j] + this.wolfpackSectionList[i][j].getBoundingClientRect().height + this.windowHeight;
						}
					}
				}
			}
			if (!this.updateScrollbarHeight) {
				this.updateScrollbarHeight = true;
				for (let i = 0; i < this.scrollbarList.length; i += 1) {
					this.scrollbarIndex[i] = this.scrollbarList[i].getAttribute('data-scrollbar-index');
					this.scrollbarCurrentY[i] = 0;
					this.scrollbarTargetY[i] = 0;
					this.scrollbarHeight[i] = this.scrollbarList[i].offsetHeight;
					this.scrollbarThumbHeight[i] = (this.scrollbarHeight[i] * this.wolfpackParentHeight[this.scrollbarIndex[i]]) / this.wolfpackHeight[this.scrollbarIndex[i]];
					this.scrollbarScrollLimit[i] = (this.scrollbarHeight[i] - this.scrollbarThumbHeight[i]) * -1;
					this.scrollbarTransform[i] = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`;
					this.updateScrollbar(i);
				}
			}
			if (!this.updateParallaxTop) {
				this.updateParallaxTop = true;
				for (let i = 0; i < this.parallaxList.length; i += 1) {
					this.parallaxTop[i] = this.parallaxList[i].getBoundingClientRect().y + Math.abs(this.wolfpackCurrentY[this.wolfpackMainIndex]);
					this.parallaxStop[i] = parseFloat(this.parallaxList[i].offsetHeight + this.parallaxList[i].getBoundingClientRect().y + Math.abs(this.wolfpackCurrentY[this.wolfpackMainIndex]) + this.windowHeight);
				}
			}
			if (this.wolfpackList.length !== 0) {
				for (let i = 0; i < this.wolfpackList.length; i += 1) {
					if (this.wolfpackSectionList[i].length === 0) {
						if (this.wolfpackHovering[i]) {
							if (!this.scrolling) {
								this.startLoop(i);
								this.showScrollbar(i);
								this.scrollTimer(i);
								this.scrolling = true;
							}
							this.updateTargetY(e.deltaY, i);
							this.time = 10;
						}
					} else if (this.wolfpackHovering[i]) {
						if (!this.scrolling) {
							this.startLoopSections(i);
							this.showScrollbar(i);
							this.scrollTimerSections(i);
							this.scrolling = true;
						}
						this.updateTargetY(e.deltaY, i);
						this.time = 10;
					}
				}
			}
		});

		// Scrollbar dragging
		if (this.scrollbarThumbList.length !== 0) {
			for (let i = 0; i < this.scrollbarThumbList.length; i += 1) {
				this.scrollbarThumbList[i].addEventListener('mousedown', (e) => {
					if (this.wolfpackSectionList[this.scrollbarIndex[i]].length === 0) {
						this.wolfpackDragging[this.scrollbarIndex[i]] = true;
						this.currentMousePosotion = e.clientY;
						this.showScrollbar(this.scrollbarIndex[i]);
						document.querySelector('body').classList.add('dragging');
						document.addEventListener('mousemove', (f) => {
							if (this.wolfpackDragging[this.scrollbarIndex[i]]) {
								f.preventDefault();
								if (!this.scrolling) {
									this.startLoop(this.scrollbarIndex[i]);
									this.showScrollbar(this.scrollbarIndex[i]);
									this.scrolling = true;
								}
								this.dragTargetY(f.clientY, this.scrollbarIndex[i]);
							}
						});
					} else {
						this.wolfpackDragging[this.scrollbarIndex[i]] = true;
						this.currentMousePosotion = e.clientY;
						this.showScrollbar(i);
						document.querySelector('body').classList.add('dragging');
						document.addEventListener('mousemove', (f) => {
							if (this.wolfpackDragging[this.scrollbarIndex[i]]) {
								f.preventDefault();
								if (!this.scrolling) {
									this.startLoopSections(this.scrollbarIndex[i]);
									this.showScrollbar(i);
									this.scrolling = true;
								}
								this.dragTargetY(f.clientY, this.scrollbarIndex[i]);
							}
						});
					}
				});
				document.addEventListener('mouseup', () => {
					this.scrolling = false;
					this.wolfpackDragging[this.scrollbarIndex[i]] = false;
					this.hideScrollbar(i);
					document.querySelector('body').classList.remove('dragging');
				});
			}
		}

		// Anchor init
		if (this.anchorList.length !== 0) {
			for (let i = 0; i < this.anchorList.length; i += 1) {
				if (!this.anchorList[i].classList.contains('no-anchor')) {
					this.anchorList[i].addEventListener('click', (e) => {
						e.preventDefault();
						if (this.wolfpackSectionList[this.wolfpackMainIndex].length === 0) {
							if (!this.anchorScrolling) {
								this.anchorScrolling = true;
							}
							if (!this.scrolling) {
								this.startLoop(this.wolfpackMainIndex);
								this.showScrollbar(this.wolfpackMainIndex);
								this.scrollTimer(this.wolfpackMainIndex);
								this.scrolling = true;
							}
							this.updateTargetY(-(this.anchorLocationTop[i] + this.wolfpackCurrentY[this.wolfpackMainIndex]), this.wolfpackMainIndex);
							this.time = 10;
						} else {
							if (!this.anchorScrolling) {
								this.anchorScrolling = true;
							}
							if (!this.scrolling) {
								this.startLoopSections(this.wolfpackMainIndex);
								this.showScrollbar(this.wolfpackMainIndex);
								this.scrollTimerSections(this.wolfpackMainIndex);
								this.scrolling = true;
							}
							this.updateTargetY(-(this.anchorLocationTop[i] + this.wolfpackCurrentY[this.wolfpackMainIndex]), this.wolfpackMainIndex);
							this.time = 10;
						}
					});
				}
			}
		}

		// Marquee init
		if (this.marqueeList.length !== 0) {
			for (let i = 0; i < this.marqueeList.length; i += 1) {
				this.marquee(i);
			}
		}

		// Separate letters
		if (this.separateLetterList.length !== 0) {
			for (let i = 0; i < this.separateLetterList.length; i += 1) {
				this.separateLetters(i);
			}
		}

		// Separate words
		if (this.separateWordList.length !== 0) {
			for (let i = 0; i < this.separateWordList.length; i += 1) {
				this.separateWords(i);
			}
		}

		// Separate lines
		if (this.separateLinesList.length !== 0) {
			for (let i = 0; i < this.separateLinesList.length; i += 1) {
				this.separateLines(i);
			}
		}

		// CURSOR
		if (this.cursor) {
			this.cursor.classList.remove(this.cursor.classList[1]);
			document.addEventListener('mousemove', (e) => {
				this.moveCursor(e, this.cursor, this.cursorPointerList, this.cursorTop);
				clearTimeout(this.cursorTimer);
				this.cursorTimer = setTimeout(Wolfpack.mouseStopped(this.cursor, this.cursorPointerList), 100);
			});
		}
		if (this.cursorElementList.length !== 0) {
			for (let i = 0; i < this.cursorElementList.length; i += 1) {
				if (this.cursor) {
					this.cursorElement = this.cursorElementList[i];
					this.cursorClass = this.cursor.classList[0]; // eslint-disable-line
					this.cursorAttribute[i] = this.cursorElement.getAttribute('data-cursor-class');
					if (!this.cursorAttribute[i]) {
						this.cursorElement.addEventListener('mouseover', () => {
							if (!this.cursor.classList.contains(`${this.cursorClass}--animate`)) {
								this.cursor.classList.add(`${this.cursorClass}--animate`);
							}
						});
						this.cursorElement.addEventListener('mouseleave', () => {
							this.cursor.classList.remove(`${this.cursorClass}--animate`);
						});
					} else {
						this.cursorElement.addEventListener('mouseover', () => {
							if (!this.cursor.classList.contains(`${this.cursorClass}--${this.cursorAttribute[i]}`)) {
								this.cursor.classList.add(`${this.cursorClass}--${this.cursorAttribute[i]}`);
							}
						});
						this.cursorElement.addEventListener('mouseleave', () => {
							this.cursor.classList.remove(`${this.cursorClass}--${this.cursorAttribute[i]}`);
						});
					}
				}
			}
		}
	}

	positionInit() {
		// Position init
		if (this.locationHash) {
			this.locationTop = this.locationElement.offsetTop + Math.abs(this.wolfpackCurrentY[this.wolfpackMainIndex]);
			if (this.wolfpackSectionList[this.wolfpackMainIndex].length === 0) {
				if (!this.anchorScrolling) {
					this.anchorScrolling = true;
					if (!this.scrolling) {
						this.startLoop(this.wolfpackMainIndex);
						this.scrollTimer(this.wolfpackMainIndex);
					}
					this.scrolling = true;
					this.updateTargetY(-Math.abs(this.locationTop), this.wolfpackMainIndex);
					this.time = 10;
				}
			} else {
				// eslint-disable-next-line
				if (!this.anchorScrolling) {
					this.anchorScrolling = true;
					if (!this.scrolling) {
						this.startLoopSections(this.wolfpackMainIndex);
						this.scrollTimerSections(this.wolfpackMainIndex);
					}
					this.scrolling = true;
					this.updateTargetY(-Math.abs(this.locationTop), this.wolfpackMainIndex);
					this.time = 10;
				}
			}
		}
	}

	updateScrollbar(index) {
		if (this.scrollbarThumbList[index]) {
			this.scrollbarThumbList[index].style.height = `${this.scrollbarThumbHeight[index]}px`;
		}
	}

	scrollTimer(index) {
		const timer = setInterval(() => {
			this.time -= 1;
			if (this.time <= 0) {
				clearInterval(timer);
				this.scrolling = false;
				this.anchorScrolling = false;
				this.hideScrollbar(index);
				this.stopLoop(index);
				setTimeout(() => {
					this.firstLoop = false;
				}, 100);
			}
		}, 200);
	}

	scrollTimerSections(index) {
		const timer = setInterval(() => {
			this.time -= 1;
			if (this.time <= 0) {
				clearInterval(timer);
				this.scrolling = false;
				this.anchorScrolling = false;
				this.hideScrollbar(index);
				this.stopLoopSections(index);
				setTimeout(() => {
					this.firstLoop = false;
				}, 100);
			}
		}, 200);
	}

	updateTargetY(e, index) {
		this.wolfpackTargetY[index] += e;
		this.wolfpackTargetY[index] = Math.max(this.wolfpackScrollLimit[index], this.wolfpackTargetY[index]);
		this.wolfpackTargetY[index] = Math.min(0, this.wolfpackTargetY[index]);
		for (let i = 0; i < this.scrollbarList.length; i += 1) {
			if (parseFloat(index) === parseFloat(this.scrollbarIndex[i])) {
				this.scrollbarTargetY[i] = Math.abs((this.scrollbarHeight[i] * this.wolfpackTargetY[index]) / this.wolfpackHeight[index]);
			}
		}
	}

	dragTargetY(e, index) {
		this.wolfpackTargetY[index] = parseFloat((this.wolfpackList[index].parentNode.getBoundingClientRect().y - e) * this.wolfpackHeight[index]) / this.wolfpackParentHeight[index];
		this.wolfpackTargetY[index] = Math.max((this.wolfpackHeight[index] - this.wolfpackParentHeight[index]) * -1, this.wolfpackTargetY[index]);
		this.wolfpackTargetY[index] = Math.min(0, this.wolfpackTargetY[index]);
		for (let i = 0; i < this.scrollbarList.length; i += 1) {
			if (parseFloat(index) === parseFloat(this.scrollbarIndex[i])) {
				this.scrollbarTargetY[i] = Math.abs((this.scrollbarHeight[i] * this.wolfpackTargetY[index]) / this.wolfpackHeight[index]);
			}
		}
	}

	showScrollbar(index) {
		for (let i = 0; i < this.scrollbarList.length; i += 1) {
			if (parseFloat(index) === parseFloat(this.scrollbarIndex[i])) {
				this.scrollbarClass = this.scrollbarList[i].classList[0]; // eslint-disable-line
				this.scrollbarList[i].classList.add(`${this.scrollbarClass}--show`);
			}
		}
	}

	hideScrollbar(index) {
		for (let i = 0; i < this.scrollbarList.length; i += 1) {
			if (parseFloat(index) === parseFloat(this.scrollbarIndex[i])) {
				this.scrollbarClass = this.scrollbarList[i].classList[0]; // eslint-disable-line
				this.scrollbarList[i].classList.remove(`${this.scrollbarClass}--show`);
			}
		}
	}

	startLoop(index) {
		if (!this.wolfpackLoop[index]) {
			this.wolfpackLoop[index] = window.requestAnimationFrame(() => {
				this.updateLoop(index);
			});
		}
	}

	stopLoop(index) {
		if (this.wolfpackLoop[index]) {
			window.cancelAnimationFrame(this.updateLoop(index));
			this.wolfpackLoop[index] = undefined;
		}
	}

	startLoopSections(index) {
		if (!this.wolfpackLoop[index]) {
			this.wolfpackLoop[index] = window.requestAnimationFrame(() => {
				this.updateLoopSections(index);
			});
		}
	}

	stopLoopSections(index) {
		if (this.wolfpackLoop[index]) {
			window.cancelAnimationFrame(this.updateLoopSections(index));
			this.wolfpackLoop[index] = undefined;
		}
	}

	updateCurrentY(index) {
		this.wolfpackCurrentY[index] += Math.round(((this.wolfpackTargetY[index] - this.wolfpackCurrentY[index]) * this.ease + Number.EPSILON) * 1000) / 1000;
		for (let i = 0; i < this.scrollbarList.length; i += 1) {
			if (parseFloat(index) === parseFloat(this.scrollbarIndex[i])) {
				this.scrollbarCurrentY[i] += Math.round(((this.scrollbarTargetY[i] - this.scrollbarCurrentY[i]) * this.ease + Number.EPSILON) * 1000) / 1000;
			}
		}
	}

	updateTransform(index) {
		if (this.wolfpackCurrentY[index] > -0.5) {
			this.wolfpackTransform[index] = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`;
			for (let i = 0; i < this.scrollbarList.length; i += 1) {
				if (parseFloat(index) === parseFloat(this.scrollbarIndex[i])) {
					this.scrollbarTransform[i] = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`;
				}
			}
		} else {
			this.wolfpackTransform[index] = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${this.wolfpackCurrentY[index]}, 0, 1)`;
			for (let i = 0; i < this.scrollbarList.length; i += 1) {
				if (parseFloat(index) === parseFloat(this.scrollbarIndex[i])) {
					this.scrollbarTransform[i] = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${this.scrollbarCurrentY[i]}, 0, 1)`;
				}
			}
		}
		this.wolfpackList[index].style.transform = this.wolfpackTransform[index];
		for (let i = 0; i < this.scrollbarList.length; i += 1) {
			if (parseFloat(index) === parseFloat(this.scrollbarIndex[i])) {
				this.scrollbarThumbList[i].style.transform = this.scrollbarTransform[i];
			}
		}
	}

	updateTransformSections(index) {
		if (this.wolfpackCurrentY[index] > -0.5) {
			this.wolfpackTransform[index] = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`;
			for (let i = 0; i < this.scrollbarList.length; i += 1) {
				if (parseFloat(index) === parseFloat(this.scrollbarIndex[i])) {
					this.scrollbarTransform[i] = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`;
				}
			}
		} else {
			this.wolfpackTransform[index] = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${this.wolfpackCurrentY[index]}, 0, 1)`;
			for (let i = 0; i < this.scrollbarList.length; i += 1) {
				if (parseFloat(index) === parseFloat(this.scrollbarIndex[i])) {
					this.scrollbarTransform[i] = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${this.scrollbarCurrentY[i]}, 0, 1)`;
				}
			}
		}
		for (let i = 0; i < this.scrollbarList.length; i += 1) {
			if (parseFloat(index) === parseFloat(this.scrollbarIndex[i])) {
				this.scrollbarThumbList[i].style.transform = this.scrollbarTransform[i];
			}
		}
	}

	detectWolfpackSection(index) {
		for (let i = 0; i < this.wolfpackSectionList[index].length; i += 1) {
			if (this.wolfpackScrollPosition[index] + this.windowHeight >= this.wolfpackSectionTopList[index][i] && this.wolfpackScrollPosition[index] - this.windowHeight < this.wolfpackSectionBottomList[index][i]) {
				this.wolfpackSectionList[index][i].style.transform = this.wolfpackTransform[index];
				this.wolfpackSectionList[index][i].style.pointerEvents = 'all';
				this.wolfpackSectionList[index][i].style.opacity = '1';
			} else {
				this.wolfpackSectionList[index][i].style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`;
				this.wolfpackSectionList[index][i].style.pointerEvents = 'none';
				this.wolfpackSectionList[index][i].style.opacity = '0';
			}
		}
	}

	updateLoop(index) {
		this.wolfpackLoop[index] = undefined;
		if (this.scrolling || this.firstLoop) {
			this.updateCurrentY(index);
			this.updateTransform(index);
			this.updateScrollPosition(index);
			this.updateDirection(index);
			this.stay(index);
			this.headerDisappear(index);
			this.parallax(index);
			this.followMe(index);
			this.animationSequence(index);
			this.tadam(index);
			this.changes(index);
			this.startLoop(index);
		}
	}

	updateLoopSections(index) {
		this.wolfpackLoop[index] = undefined;
		if (this.scrolling || this.firstLoop) {
			this.updateCurrentY(index);
			this.updateScrollPosition(index);
			this.updateTransformSections(index);
			this.detectWolfpackSection(index);
			this.updateDirection(index);
			this.staySections(index);
			this.headerDisappear(index);
			this.parallax(index);
			this.followMe(index);
			this.animationSequence(index);
			this.tadam(index);
			this.changes(index);
			this.startLoopSections(index);
		}
	}

	updateDirection(index) {
		if (Math.abs(this.wolfpackCurrentY[index]) < this.wolfpackLastOffset[index]) {
			this.wolfpackLastOffset[index] = Math.abs(this.wolfpackCurrentY[index]);
			this.wolfpackDirection[index] = 'up';
		} else {
			this.wolfpackLastOffset[index] = Math.abs(this.wolfpackCurrentY[index]);
			this.wolfpackDirection[index] = 'down';
		}
	}

	updateScrollPosition(index) {
		this.wolfpackScrollPosition[index] = Math.abs(this.wolfpackCurrentY[index]) + this.windowHeight;
	}

	stay() {
		if (this.stayList.length !== 0) {
			for (let i = 0; i < this.stayList.length; i += 1) {
				this.stayTransform[i] = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${Math.abs(this.wolfpackCurrentY[this.wolfpackMainIndex])}, 0, 1)`;
				this.stayList[i].style.transform = this.stayTransform[i];
			}
		}
	}

	staySections() {
		if (this.stayList.length !== 0) {
			for (let i = 0; i < this.stayList.length; i += 1) {
				this.stayTransform[i] = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`;
				this.stayList[i].style.transform = this.stayTransform[i];
			}
		}
	}

	headerDisappear() {
		if (this.headerDisappearList.length !== 0) {
			for (let i = 0; i < this.headerDisappearList.length; i += 1) {
				if (Math.abs(this.wolfpackCurrentY[this.wolfpackMainIndex]) >= this.headerDisappearSmall[i]) {
					this.headerDisappearList[i].classList.add(`${this.headerDisappearList[i].classList[0]}--small`);
				} else {
					this.headerDisappearList[i].classList.remove(`${this.headerDisappearList[i].classList[0]}--small`);
				}
				if (Math.abs(this.wolfpackCurrentY[this.wolfpackMainIndex]) >= this.headerDisappearHide[i]) {
					if (this.wolfpackDirection[this.wolfpackMainIndex] === 'down') {
						this.headerDisappearList[i].classList.add(`${this.headerDisappearList[i].classList[0]}--hide`);
					} else {
						this.headerDisappearList[i].classList.remove(`${this.headerDisappearList[i].classList[0]}--hide`);
					}
				}
			}
		}
	}

	parallax() {
		if (this.parallaxList.length !== 0) {
			for (let i = 0; i < this.parallaxList.length; i += 1) {
				if (this.wolfpackScrollPosition[this.wolfpackMainIndex] >= this.parallaxTop[i] && this.wolfpackScrollPosition[this.wolfpackMainIndex] < this.parallaxStop[i]) {
					this.parallaxCurrentPosition[i] = Math.abs(this.wolfpackCurrentY[this.wolfpackMainIndex]) + this.windowHeight;
					this.parallaxPositionY[i] = this.parallaxCurrentPosition[i] - this.parallaxTop[i];
					this.parallaxScrollVariable[i] = this.parallaxPositionY[i] / this.parallaxSpeed[i];
					this.parallaxTransform[i] = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${this.parallaxScrollVariable[i]}, 0, 1)`;
					this.parallaxList[i].style.transform = this.parallaxTransform[i];
				}
			}
		}
	}

	marquee(index) {
		this.marqueeList[index].innerHTML = this.marqueeNewHTML[index];
		this.marqueeList[index].style.width = '100%';
		this.marqueeContainerList = document.querySelectorAll('[data-marquee-container]');
		for (let i = 0; i < this.marqueeContainerList.length; i += 1) {
			this.marqueeContainerHTML = this.marqueeContainerList[i].innerHTML;
			this.marqueeContainerList[i].innerHTML = this.marqueeContainerHTML + this.marqueeContainerHTML;
		}
	}

	followMe() {
		if (this.followMeList.length !== 0) {
			for (let i = 0; i < this.followMeList.length; i += 1) {
				this.followMeStart[i] = this.wolfpackScrollPosition[this.wolfpackMainIndex] - this.windowHeight;
				if (this.followMeStart[i] >= this.followMeTop[i] && this.followMeStart[i] <= this.followMeStop[i]) {
					this.followMeTransform[i] = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${Math.abs(this.wolfpackCurrentY[this.wolfpackMainIndex]) - this.followMeTop[i]}, 0, 1)`;
					this.followMeList[i].style.transform = this.followMeTransform[i];
				}
			}
		}
	}

	animationSequence() {
		if (this.animationSequenceList.length !== 0) {
			for (let i = 0; i < this.animationSequenceList.length; i += 1) {
				if (!this.animationSequenceFullPage[i]) {
					if (this.wolfpackScrollPosition[this.wolfpackMainIndex] >= this.animationSequenceTop[i] && this.wolfpackScrollPosition[this.wolfpackMainIndex] < this.animationSequenceStop[i]) {
						this.animationPositionY[i] = this.wolfpackScrollPosition[this.wolfpackMainIndex] - this.animationSequenceTop[i];
						this.animationScrollVariable[i] = this.animationPositionY[i] / this.animationTimeline[i];
						this.animationSequenceList[i].style.setProperty(`--scroll-${i}`, this.animationScrollVariable[i]);
					}
				} else if (this.wolfpackScrollPosition[this.wolfpackMainIndex] - this.windowHeight >= 0 && this.wolfpackScrollPosition[this.wolfpackMainIndex] < this.wolfpackHeight[this.wolfpackMainIndex]) {
					this.animationPositionY[i] = this.wolfpackScrollPosition[this.wolfpackMainIndex] - this.windowHeight;
					this.animationScrollVariable[i] = this.animationPositionY[i] / parseFloat(this.wolfpackHeight[this.wolfpackMainIndex] - this.windowHeight);
					this.animationSequenceList[i].style.setProperty(`--scroll-${i}`, this.animationScrollVariable[i]);
				}
			}
		}
	}

	tadam() {
		if (this.tadamList.length !== 0) {
			for (let i = 0; i < this.tadamList.length; i += 1) {
				if (this.tadamThreshold[i] === '-1' && !this.tadamFinished[i]) {
					for (let j = 0; j < this.tadamElementList[i].length; j += 1) {
						this.tadamFunction.tadamAnimate(this.tadamElementList[i][j], this.tadamAnimationList[i][j]);
					}
					this.tadamFinished[i] = true;
				} else if (this.wolfpackScrollPosition[this.wolfpackMainIndex] >= this.tadamVisible[i] && !this.tadamFinished[i]) {
					for (let j = 0; j < this.tadamElementList[i].length; j += 1) {
						this.tadamFunction.tadamAnimate(this.tadamElementList[i][j], this.tadamAnimationList[i][j]);
					}
					this.tadamFinished[i] = true;
				} else if (this.tadamRepeat[i] && this.wolfpackScrollPosition[this.wolfpackMainIndex] < this.tadamVisible[i] && this.tadamFinished[i]) {
					for (let j = 0; j < this.tadamElementList[i].length; j += 1) {
						this.tadamFunction.tadamAnimate(this.tadamElementList[i][j], this.tadamRepeatAnimationList[i][j]);
					}
					this.tadamFinished[i] = false;
				}
			}
		}
	}

	changes() {
		if (this.changesList.length !== 0) {
			for (let i = 0; i < this.changesList.length; i += 1) {
				if (this.wolfpackScrollPosition[this.wolfpackMainIndex] >= this.changesTop[i] && this.wolfpackScrollPosition[this.wolfpackMainIndex] < this.changesTop[i] + this.changesList[i].offsetHeight) {
					if (!this.changesActive[i]) {
						this.changesActive[i] = true;
						for (let j = 0; j < this.changesElements.length; j += 1) {
							for (let k = 0; k < this.changesElements[j].length; k += 1) {
								document.querySelector(this.changesElements[j][k]).classList.remove(`${document.querySelector(this.changesElements[j][k]).classList[0]}--${this.changesClasses[j][k]}`);
							}
						}
						for (let j = 0; j < this.changesElements[i].length; j += 1) {
							document.querySelector(this.changesElements[i][j]).classList.add(`${document.querySelector(this.changesElements[i][j]).classList[0]}--${this.changesClasses[i][j]}`);
						}
					}
				} else {
					for (let j = 0; j < this.changesList.length; j += 1) {
						if (this.changesList[j] === this.changesList[i]) {
							this.changesActive[i] = false;
						}
					}
				}
			}
		}
	}

	separateLetters(index) {
		for (let j = 0; j < this.separateLetterLines[index].length; j += 1) {
			this.separateCharacterLetters = this.separateLetterLines[index][j].split('');

			this.separateCharacterLineContent = '';
			for (let k = 0; k < this.separateCharacterLetters.length; k += 1) {
				this.separateCharacterLetter = this.separateCharacterLetters[k];
				if (this.separateCharacterLetter === ' ') {
					this.separateCharacterLineContent += `<span class="${this.separateLetterClass[index]}-space separate-character__space">${this.separateCharacterLetter}</span>`;
				} else {
					this.separateCharacterLineContent += `<span class="${this.separateLetterClass[index]}-letter separate-character__letter">${this.separateCharacterLetter}</span>`;
				}
			}
			this.separateLetterList[index].innerHTML = `${this.separateLetterList[index].innerHTML}<div class="${this.separateLetterClass[index]}-line separate-character__line">${this.separateCharacterLineContent}</div>`;
		}
	}

	separateWords(index) {
		for (let j = 0; j < this.separateWordLines[index].length; j += 1) {
			this.separateWordWords = this.separateWordLines[index][j].split(' ');
			this.separateWordLineContent = '';
			for (let k = 0; k < this.separateWordWords.length; k += 1) {
				this.separateWordWord = this.separateWordWords[k];
				if (k < this.separateWordWords.length - 1) {
					this.separateWordLineContent += `<span class="${this.separateWordClass[index]}-word separate-word__word"><span class="${this.separateWordClass[index]}-content separate-word__content">${this.separateWordWord}</span></span><span class="${this.separateWordClass[index]}-space separate-word__space"><span class="${this.separateWordClass[index]}-content separate-word__content">&nbsp;</span></span>`;
				} else {
					this.separateWordLineContent += `<span class="${this.separateWordClass[index]}-word separate-word__word"><span class="${this.separateWordClass[index]}-content separate-word__content">${this.separateWordWord}</span></span>`;
				}
			}
			this.separateWordList[index].innerHTML += `<div class="${this.separateWordClass[index]}-line separate-word__line">${this.separateWordLineContent}</div>`;
		}
	}

	separateLines(index) {
		for (let j = 0; j < this.separateLinesLines[index].length; j += 1) {
			this.separateLinesList[index].innerHTML += `<div class="${this.separateLinesClass[index]}-line separate-line__line"><span class="${this.separateLinesClass[index]}-line-content separate-line__content">${this.separateLinesLines[index][j]}</span></div>`;
		}
	}

	static mouseStopped(cursor, cursorPointers) {
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

	moveCursor(e, cursor, cursorPointers, offsetCursorTop) {
		cursor.classList.add('moving');
		for (let i = 0; i < cursorPointers.length; i += 1) {
			const thisCursorPointer = cursorPointers[i];
			const thisCursorPointerHeight = thisCursorPointer.offsetHeight;
			const thisCursorPointerWidth = thisCursorPointer.offsetWidth;
			if (thisCursorPointer.classList.contains('cursor__ball--big')) {
				TweenMax.to(thisCursorPointer, 0.5, {
					x: e.clientX - parseFloat(thisCursorPointerHeight / 2),
					y: e.clientY - parseFloat(thisCursorPointerWidth / 2) + offsetCursorTop,
				});
			} else if (thisCursorPointer.classList.contains('cursor__image')) {
				if (e.clientX > this.oldx) {
					TweenMax.to(thisCursorPointer, 0.5, {
						x: e.clientX - parseFloat(thisCursorPointerHeight / 2),
						y: e.clientY - parseFloat(thisCursorPointerWidth / 2) + offsetCursorTop,
						rotation: e.clientX / 100,
					});
				} else if (e.clientX < this.oldx) {
					TweenMax.to(thisCursorPointer, 0.5, {
						x: e.clientX - parseFloat(thisCursorPointerHeight / 2),
						y: e.clientY - parseFloat(thisCursorPointerWidth / 2) + offsetCursorTop,
						rotation: -e.clientX / 100,
					});
				}
				this.oldx = e.clientX;
				this.oldy = e.clientY;
			} else {
				TweenMax.to(thisCursorPointer, 0.1, {
					x: e.clientX - parseFloat(thisCursorPointerHeight / 2),
					y: e.clientY - parseFloat(thisCursorPointerWidth / 2) + offsetCursorTop,
				});
			}
		}
	}

	showPageTransition() {
		document.querySelector('[data-page-transition]').classList.add(`${this.pageTransitionClass}--closed`);
		this.newDelay = this.pageTransitionDelay + 100;
		setTimeout(() => {
			document.querySelector('[data-page-transition]').style.display = 'none';
		}, this.newDelay);
	}

	closePageTransition() {
		document.querySelector('[data-page-transition]').style.display = 'flex';
		setTimeout(() => {
			document.querySelector('[data-page-transition]').classList.remove(`${this.pageTransitionClass}--closed`);
		}, 10);
	}

	formFocusIn(field, mainIndex, index) {
		field.classList.add(`${this.formClass[mainIndex][index]}--focus`);
	}

	formFocusOut(field, mainIndex, index) {
		field.classList.remove(`${this.formClass[mainIndex][index]}--focus`);
	}
}
