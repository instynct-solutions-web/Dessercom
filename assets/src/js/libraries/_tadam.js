import { gsap, TweenLite, TimelineMax, Power4 } from 'gsap';
import lottie from 'lottie-web';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase);

export default class Tadam {
	constructor() {
		this.animateList = [];
		this.animationList = [];
	}

	tadamStoreAnimations(element, animation) {
		this.animateList.push(element);
		if (animation === 'x-0--y-0') {
			this.animation = TweenLite.to(element, 1.5, {
				ease: CustomEase.create('custom', 'M0,0 C0.038,0 0.214,1 1,1 '),
				x: 0,
				y: 0,
				force3D: true,
				paused: true,
			});
			this.animationList.push(this.animation);
		} else if (animation === 'opacity-1--delay-0.4') {
			this.animation = TweenLite.to(element, 0.75, {
				ease: CustomEase.create('custom', 'M0,0 C0.038,0 0.214,1 1,1 '),
				autoAlpha: 1,
				delay: 0.4,
				force3D: true,
				paused: true,
			});
			this.animationList.push(this.animation);
		} else if (animation === 'opacity-1--delay-0.6') {
			this.animation = TweenLite.to(element, 0.75, {
				ease: CustomEase.create('custom', 'M0,0 C0.038,0 0.214,1 1,1 '),
				autoAlpha: 1,
				delay: 0.6,
				force3D: true,
				paused: true,
			});
			this.animationList.push(this.animation);
		} else if (animation === 'opacity-1--y-0--delay-0.4') {
			this.animation = TweenLite.to(element, 0.75, {
				ease: CustomEase.create('custom', 'M0,0 C0.038,0 0.214,1 1,1 '),
				autoAlpha: 1,
				y: 0,
				delay: 0.4,
				force3D: true,
				paused: true,
			});
			this.animationList.push(this.animation);
		} else if (animation === 'opacity-1--y-0--delay-0.5') {
			this.animation = TweenLite.to(element, 0.75, {
				ease: CustomEase.create('custom', 'M0,0 C0.038,0 0.214,1 1,1 '),
				autoAlpha: 1,
				y: 0,
				delay: 0.5,
				force3D: true,
				paused: true,
			});
			this.animationList.push(this.animation);
		} else if (animation === 'opacity-1--y-0--delay-0.6') {
			this.animation = TweenLite.to(element, 0.75, {
				ease: CustomEase.create('custom', 'M0,0 C0.038,0 0.214,1 1,1 '),
				autoAlpha: 1,
				y: 0,
				delay: 0.6,
				force3D: true,
				paused: true,
			});
			this.animationList.push(this.animation);
		} else if (animation === 'opacity-1--y-0--delay-0.7') {
			this.animation = TweenLite.to(element, 0.75, {
				ease: CustomEase.create('custom', 'M0,0 C0.038,0 0.214,1 1,1 '),
				autoAlpha: 1,
				y: 0,
				delay: 0.7,
				force3D: true,
				paused: true,
			});
			this.animationList.push(this.animation);
		} else if (animation === 'opacity-1--y-0--delay-1') {
			this.animation = TweenLite.to(element, 0.75, {
				ease: CustomEase.create('custom', 'M0,0 C0.038,0 0.214,1 1,1 '),
				autoAlpha: 1,
				y: 0,
				delay: 1,
				force3D: true,
				paused: true,
			});
			this.animationList.push(this.animation);
		} else if (animation === 'scaleY-1--delay-0.4') {
			this.animation = TweenLite.to(element, 0.75, {
				ease: CustomEase.create('custom', 'M0,0 C0.038,0 0.214,1 1,1 '),
				scaleY: 1,
				delay: 0.4,
				force3D: true,
				paused: true,
			});
			this.animationList.push(this.animation);
		} else if (animation === 'scaleX-1') {
			this.animation = TweenLite.to(element, 0.75, {
				ease: CustomEase.create('custom', 'M0,0 C0.038,0 0.214,1 1,1 '),
				scaleX: 1,
				force3D: true,
				paused: true,
			});
			this.animationList.push(this.animation);
		} else if (animation === 'scaleX-1--delay-0.5') {
			this.animation = TweenLite.to(element, 0.75, {
				ease: CustomEase.create('custom', 'M0,0 C0.038,0 0.214,1 1,1 '),
				scaleX: 1,
				delay: 0.5,
				force3D: true,
				paused: true,
			});
			this.animationList.push(this.animation);
		} else if (animation === 'scaleX-1--delay-0.7') {
			this.animation = TweenLite.to(element, 1.5, {
				ease: CustomEase.create('custom', 'M0,0 C0.038,0 0.214,1 1,1 '),
				scaleX: 1,
				delay: 0.7,
				force3D: true,
				paused: true,
			});
			this.animationList.push(this.animation);
		} else if (animation === 'scaleX-1--delay-1.3') {
			this.animation = TweenLite.to(element, 1.5, {
				ease: CustomEase.create('custom', 'M0,0 C0.038,0 0.214,1 1,1 '),
				scaleX: 1,
				delay: 1.3,
				force3D: true,
				paused: true,
			});
			this.animationList.push(this.animation);
		} else if (animation === 'scaleX-1--delay-1.4') {
			this.animation = TweenLite.to(element, 1.5, {
				ease: CustomEase.create('custom', 'M0,0 C0.038,0 0.214,1 1,1 '),
				scaleX: 1,
				delay: 1.4,
				force3D: true,
				paused: true,
			});
			this.animationList.push(this.animation);
		} else if (animation === 'scaleX-1--delay-1.5') {
			this.animation = TweenLite.to(element, 1.5, {
				ease: CustomEase.create('custom', 'M0,0 C0.038,0 0.214,1 1,1 '),
				scaleX: 1,
				delay: 1.5,
				force3D: true,
				paused: true,
			});
			this.animationList.push(this.animation);
		} else if (animation === 'mask-image') {
			this.animation = TweenLite.to(element, 1.5, {
				ease: CustomEase.create('custom', 'M0,0 C0.038,0 0.214,1 1,1 '),
				scale: 1,
				autoAlpha: 1,
				force3D: true,
				paused: true,
			});
			this.animationList.push(this.animation);
		} else if (animation === 'mask-image--delay-0.5') {
			this.animation = TweenLite.to(element, 1.5, {
				ease: CustomEase.create('custom', 'M0,0 C0.038,0 0.214,1 1,1 '),
				scale: 1,
				autoAlpha: 1,
				delay: 0.5,
				force3D: true,
				paused: true,
			});
			this.animationList.push(this.animation);
		} else if (animation === 'opacity-1--rotation-0--delay-0.1') {
			this.animation = TweenLite.to(element, 2, {
				ease: Power4.easeInOut,
				autoAlpha: 1,
				rotation: 0,
				delay: 0.1,
				force3D: true,
				paused: true,
			});
			this.animationList.push(this.animation);
		} else if (animation === 'opacity-1--scale-1') {
			this.animation = TweenLite.to(element, 3, {
				ease: CustomEase.create('custom', 'M0,0 C0.038,0 0.214,1 1,1 '),
				height: '100%',
				scale: 1,
				force3D: true,
				paused: true,
			});
			this.animationList.push(this.animation);
		} else if (animation === 'opacity-1--rotation-0') {
			this.animation = TweenLite.to(element, 3, {
				ease: Power4.easeInOut,
				autoAlpha: 1,
				rotation: 0,
				force3D: true,
				paused: true,
			});
			this.animationList.push(this.animation);
		} else if (animation === 'words') {
			this.elementList = element.querySelectorAll('.separate-word__word');
			this.timeline = new TimelineMax({ paused: true });
			this.timeline.staggerTo(
				this.elementList,
				0.75,
				{
					ease: CustomEase.create('custom', 'M0,0 C0.038,0 0.214,1 1,1 '),
					autoAlpha: 1,
					y: 0,
					force3D: true,
				},
				0.02
			);
			this.animationList.push(this.timeline);
		} else if (animation === 'words--delay-0.2') {
			this.elementList = element.querySelectorAll('.separate-word__word');
			this.timeline = new TimelineMax({ paused: true });
			this.timeline.staggerTo(
				this.elementList,
				0.75,
				{
					ease: CustomEase.create('custom', 'M0,0 C0.038,0 0.214,1 1,1 '),
					autoAlpha: 1,
					y: 0,
					delay: 0.2,
					force3D: true,
				},
				0.01
			);
			this.animationList.push(this.timeline);
		} else if (animation === 'words--delay-0.3') {
			this.elementList = element.querySelectorAll('.separate-word__word');
			this.timeline = new TimelineMax({ paused: true });
			this.timeline.staggerTo(
				this.elementList,
				0.75,
				{
					ease: CustomEase.create('custom', 'M0,0 C0.038,0 0.214,1 1,1 '),
					autoAlpha: 1,
					y: 0,
					delay: 0.3,
					force3D: true,
				},
				0.01
			);
			this.animationList.push(this.timeline);
		} else if (animation === 'words--delay-0.5') {
			this.elementList = element.querySelectorAll('.separate-word__word');
			this.timeline = new TimelineMax({ paused: true });
			this.timeline.staggerTo(
				this.elementList,
				0.75,
				{
					ease: CustomEase.create('custom', 'M0,0 C0.038,0 0.214,1 1,1 '),
					autoAlpha: 1,
					y: 0,
					delay: 0.5,
					force3D: true,
				},
				0.01
			);
			this.animationList.push(this.timeline);
		} else if (animation === 'words--delay-0.7') {
			this.elementList = element.querySelectorAll('.separate-word__word');
			this.timeline = new TimelineMax({ paused: true });
			this.timeline.staggerTo(
				this.elementList,
				0.75,
				{
					ease: CustomEase.create('custom', 'M0,0 C0.038,0 0.214,1 1,1 '),
					autoAlpha: 1,
					y: 0,
					delay: 0.7,
					force3D: true,
				},
				0.02
			);
			this.animationList.push(this.timeline);
		} else if (animation === 'jobs-benefits') {
			this.elementList = element.querySelectorAll('.jobs-benefits__item');
			this.timeline = new TimelineMax({ paused: true });
			this.timeline.staggerTo(
				this.elementList,
				0.75,
				{
					ease: CustomEase.create('custom', 'M0,0 C0.038,0 0.214,1 1,1 '),
					autoAlpha: 1,
					y: 0,
					delay: 0.4,
					force3D: true,
				},
				0.05
			);
			this.animationList.push(this.timeline);
		} else if (animation === 'team-divisions') {
			this.elementList = element.querySelectorAll('.team-grid__division-item');
			this.timeline = new TimelineMax({ paused: true });
			this.timeline.staggerTo(
				this.elementList,
				0.75,
				{
					ease: CustomEase.create('custom', 'M0,0 C0.038,0 0.214,1 1,1 '),
					autoAlpha: 1,
					y: 0,
					delay: 0.3,
					force3D: true,
				},
				0.01
			);
			this.animationList.push(this.timeline);
		} else if (animation === 'team-members') {
			this.elementList = element.querySelectorAll('.team-grid__division-member');
			this.timeline = new TimelineMax({ paused: true });
			this.timeline.staggerTo(
				this.elementList,
				0.75,
				{
					ease: CustomEase.create('custom', 'M0,0 C0.038,0 0.214,1 1,1 '),
					autoAlpha: 1,
					y: 0,
					delay: 0.4,
					force3D: true,
				},
				0.05
			);
			this.animationList.push(this.timeline);
		} else if (animation === 'services-buttons') {
			this.elementList = element.querySelectorAll('.services-hero__item');
			this.timeline = new TimelineMax({ paused: true });
			this.timeline.staggerTo(
				this.elementList,
				0.75,
				{
					ease: CustomEase.create('custom', 'M0,0 C0.038,0 0.214,1 1,1 '),
					autoAlpha: 1,
					y: 0,
					delay: 0.4,
					force3D: true,
				},
				0.05
			);
			this.animationList.push(this.timeline);
		} else if (animation === 'services-extras') {
			this.elementList = element.querySelectorAll('.services-extra__item');
			this.timeline = new TimelineMax({ paused: true });
			this.timeline.staggerTo(
				this.elementList,
				0.75,
				{
					ease: CustomEase.create('custom', 'M0,0 C0.038,0 0.214,1 1,1 '),
					autoAlpha: 1,
					y: 0,
					delay: 0.4,
					force3D: true,
				},
				0.05
			);
			this.animationList.push(this.timeline);
		} else if (animation === 'services-others') {
			this.elementList = element.querySelectorAll('.services-other__item');
			this.timeline = new TimelineMax({ paused: true });
			this.timeline.staggerTo(
				this.elementList,
				0.75,
				{
					ease: CustomEase.create('custom', 'M0,0 C0.038,0 0.214,1 1,1 '),
					autoAlpha: 1,
					y: 0,
					delay: 0.4,
					force3D: true,
				},
				0.05
			);
			this.animationList.push(this.timeline);
		} else if (animation === 'navigation') {
			this.elementList = element.querySelectorAll('.menu__item');
			this.timeline = new TimelineMax({ paused: true });
			this.timeline.staggerTo(
				this.elementList,
				1.5,
				{
					ease: Power4.easeInOut,
					autoAlpha: 1,
					y: 0,
					delay: 0.5,
					force3D: true,
				},
				0.1
			);
			this.animationList.push(this.timeline);
		} else if (animation === 'home-services') {
			this.serviceList = element.querySelectorAll('.home-services__link-content');
			this.backgroundList = element.querySelectorAll('.home-services__link-background-container');
			this.timeline = new TimelineMax({ paused: true });
			this.timeline.staggerTo(
				this.serviceList,
				0.75,
				{
					ease: CustomEase.create('custom', 'M0,0 C0.038,0 0.214,1 1,1 '),
					autoAlpha: 1,
					y: 0,
					force3D: true,
				},
				0.2
			);
			this.timeline.staggerTo(
				this.backgroundList,
				1.2,
				{
					ease: CustomEase.create('custom', 'M0,0 C0.038,0 0.214,1 1,1 '),
					scaleX: 1,
					force3D: true,
				},
				0
			);

			this.animationList.push(this.timeline);
		} /* else if (animation === 'home-services') {
			this.serviceList = element.querySelectorAll('.home-services__item');
			this.serviceDelay = 0.2;
			for (let i = 0; i < this.serviceList.length; i += 1) {
				this.service = this.serviceList[i];
				this.element = this.service.querySelector('.home-services__link-content');
				this.animation = TweenLite.to(this.element, 0.75, {
					ease: CustomEase.create('custom', 'M0,0 C0.038,0 0.214,1 1,1 '),
					autoAlpha: 1,
					y: 0,
					delay: this.serviceDelay,
					force3D: true,
					paused: true,
				});
				this.animationList.push(this.animation);
				this.serviceDelay += 0.2;
				this.backgroundList = this.service.querySelectorAll('.home-services__link-background-container');
				this.backgroundTimeline = new TimelineMax({ paused: true });
				this.backgroundTimeline.staggerTo(
					this.backgroundList,
					1.2,
					{
						ease: CustomEase.create('custom', 'M0,0 C0.038,0 0.214,1 1,1 '),
						scaleX: 1,
						force3D: true,
					},
					0
				);
				this.animationList.push(this.backgroundTimeline);
			}
		} */ else if (animation === 'lottie-lines') {
			this.animationElement = element;
			this.animationOptions = {
				container: this.animationElement,
				renderer: 'svg',
				loop: true,
				autoplay: false,
				path: this.animationElement.getAttribute('data-lottie-lines'),
			};
			this.animation = lottie.loadAnimation(this.animationOptions);
			this.animationList.push(this.animation);
		} else if (animation === 'lottie-lines-once') {
			this.animationElement = element;
			this.animationOptions = {
				container: this.animationElement,
				renderer: 'svg',
				loop: false,
				autoplay: false,
				initialSegment: [0, 180],
				path: this.animationElement.getAttribute('data-lottie-lines'),
			};
			this.animation = lottie.loadAnimation(this.animationOptions);
			this.animationList.push(this.animation);
		}
	}

	tadamAnimate(element) {
		for (let i = 0; i < this.animateList.length; i += 1) {
			if (element === this.animateList[i]) {
				this.animationList[i].play();
			}
		}
	}

	/* 	tadamAnimate(element, animation) {
	   else if (animation === 'home-commitments') {
			this.elementList = element.querySelectorAll('.home-commitment__item');
			this.timeline = new TimelineMax();
			this.timeline.staggerTo(
				this.elementList,
				0.75,
				{
					ease: CustomEase.create('custom', 'M0,0 C0.038,0 0.214,1 1,1 '),
					autoAlpha: 1,
					y: 0,
					delay: 0.7,
					force3D: true,
				},
				0.01
			);
		} else if (animation === 'pricing-items') {
			this.itemList = element.querySelectorAll('.pricing-hero__item');
			this.itemTimeline = new TimelineMax();
			this.itemTimeline.staggerTo(
				this.itemList,
				0.75,
				{
					ease: CustomEase.create('custom', 'M0,0 C0.038,0 0.214,1 1,1 '),
					scaleX: 1,
					delay: 0.4,
					force3D: true,
				},
				0.1
			);
			this.buttonList = element.querySelectorAll('.pricing-hero__drawer-button');
			this.buttonTimeline = new TimelineMax();
			this.buttonTimeline.staggerTo(
				this.buttonList,
				0.75,
				{
					ease: CustomEase.create('custom', 'M0,0 C0.038,0 0.214,1 1,1 '),
					autoAlpha: 1,
					scale: 1,
					rotation: 0,
					delay: 0.75,
					force3D: true,
				},
				0.1
			);
			this.titleList = element.querySelectorAll('.pricing-hero__drawer-title-word');
			this.titleTimeline = new TimelineMax();
			this.titleTimeline.staggerTo(
				this.titleList,
				0.75,
				{
					ease: CustomEase.create('custom', 'M0,0 C0.038,0 0.214,1 1,1 '),
					autoAlpha: 1,
					y: 0,
					delay: 1,
					force3D: true,
				},
				0.01
			);
			this.priceList = element.querySelectorAll('.pricing-hero__subitem-price-line');
			this.priceTimeline = new TimelineMax();
			this.priceTimeline.staggerTo(
				this.priceList,
				0.75,
				{
					ease: CustomEase.create('custom', 'M0,0 C0.038,0 0.214,1 1,1 '),
					autoAlpha: 1,
					y: 0,
					delay: 1.1,
					force3D: true,
				},
				0.01
			);
			this.lineList = element.querySelectorAll('.pricing-hero__subitem-line');
			this.lineTimeline = new TimelineMax();
			this.lineTimeline.staggerTo(
				this.lineList,
				0.75,
				{
					ease: CustomEase.create('custom', 'M0,0 C0.038,0 0.214,1 1,1 '),
					scaleX: 1,
					delay: 1.2,
					force3D: true,
				},
				0.01
			);
			this.textList = element.querySelectorAll('.pricing-hero__subitem-text-line');
			this.textTimeline = new TimelineMax();
			this.textTimeline.staggerTo(
				this.textList,
				0.75,
				{
					ease: CustomEase.create('custom', 'M0,0 C0.038,0 0.214,1 1,1 '),
					autoAlpha: 1,
					y: 0,
					delay: 1.2,
					force3D: true,
				},
				0.01
			);
		}
	} */
}
