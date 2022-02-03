import { TweenLite, TimelineMax, Power4 } from 'gsap';
import lottie from 'lottie-web';

export default class Tadam {
	tadamAnimate(element, animation) {
		if (animation === 'x-0--rotation-5') {
			TweenLite.to(element, 2.5, {
				ease: Power4.easeInOut,
				x: 0,
				y: 0,
				force3D: true,
			});
		} else if (animation === 'opacity-1--y-0--delay-0.4') {
			TweenLite.to(element, 1.5, {
				ease: Power4.easeInOut,
				autoAlpha: 1,
				y: 0,
				delay: 0.4,
				force3D: true,
			});
		} else if (animation === 'opacity-1--y-0--delay-0.5') {
			TweenLite.to(element, 1.5, {
				ease: Power4.easeInOut,
				autoAlpha: 1,
				y: 0,
				delay: 0.5,
				force3D: true,
			});
		} else if (animation === 'opacity-1--y-0--delay-0.6') {
			TweenLite.to(element, 1.5, {
				ease: Power4.easeInOut,
				autoAlpha: 1,
				y: 0,
				delay: 0.6,
				force3D: true,
			});
		} else if (animation === 'opacity-1--y-0--delay-0.7') {
			TweenLite.to(element, 1.5, {
				ease: Power4.easeInOut,
				autoAlpha: 1,
				y: 0,
				delay: 0.7,
				force3D: true,
			});
		} else if (animation === 'opacity-1--y-0--delay-1') {
			TweenLite.to(element, 1.5, {
				ease: Power4.easeInOut,
				autoAlpha: 1,
				y: 0,
				delay: 1,
				force3D: true,
			});
		} else if (animation === 'scaleX-1') {
			TweenLite.to(element, 1.5, {
				ease: Power4.easeInOut,
				scaleX: 1,
				force3D: true,
			});
		} else if (animation === 'scaleX-1--delay-0.5') {
			TweenLite.to(element, 1.5, {
				ease: Power4.easeInOut,
				scaleX: 1,
				delay: 0.5,
				force3D: true,
			});
		} else if (animation === 'scaleX-1--delay-0.7') {
			TweenLite.to(element, 1.5, {
				ease: Power4.easeInOut,
				scaleX: 1,
				delay: 0.7,
				force3D: true,
			});
		} else if (animation === 'scaleX-1--delay-1.3') {
			TweenLite.to(element, 1.5, {
				ease: Power4.easeInOut,
				scaleX: 1,
				delay: 1.3,
				force3D: true,
			});
		} else if (animation === 'scaleX-1--delay-1.4') {
			TweenLite.to(element, 1.5, {
				ease: Power4.easeInOut,
				scaleX: 1,
				delay: 1.4,
				force3D: true,
			});
		} else if (animation === 'scaleX-1--delay-1.5') {
			TweenLite.to(element, 1.5, {
				ease: Power4.easeInOut,
				scaleX: 1,
				delay: 1.5,
				force3D: true,
			});
		} else if (animation === 'mask-image') {
			TweenLite.to(element, 2, {
				ease: Power4.easeInOut,
				scale: 1,
				autoAlpha: 1,
				force3D: true,
			});
		} else if (animation === 'opacity-1--rotation-0--delay-0.1') {
			TweenLite.to(element, 2, {
				ease: Power4.easeInOut,
				autoAlpha: 1,
				rotation: 0,
				delay: 0.1,
				force3D: true,
			});
		} else if (animation === 'opacity-1--scale-1') {
			TweenLite.to(element, 3, {
				ease: Power4.easeInOut,
				height: '100%',
				scale: 1,
				force3D: true,
			});
		} else if (animation === 'opacity-1--rotation-0') {
			TweenLite.to(element, 3, {
				ease: Power4.easeInOut,
				autoAlpha: 1,
				rotation: 0,
				force3D: true,
			});
		} else if (animation === 'letters-lines') {
			this.lineList = element.querySelectorAll('.separate-character__line');
			this.lineDelay = 0.2;
			for (let i = 0; i < this.lineList.length; i += 1) {
				this.line = this.lineList[i];
				this.elementList = this.line.querySelectorAll('.separate-character__letter');
				this.timeline = new TimelineMax();
				this.timeline.staggerTo(
					this.elementList,
					1.2,
					{
						ease: Power4.easeInOut,
						autoAlpha: 1,
						y: 0,
						delay: this.lineDelay,
						force3D: true,
					},
					0.03
				);
				this.lineDelay += 0.1;
			}
		} else if (animation === 'letters-lines--delay-1.1') {
			this.lineList = element.querySelectorAll('.separate-character__line');
			this.lineDelay = 1.1;
			for (let i = 0; i < this.lineList.length; i += 1) {
				this.line = this.lineList[i];
				this.elementList = this.line.querySelectorAll('.separate-character__letter');
				this.timeline = new TimelineMax();
				this.timeline.staggerTo(
					this.elementList,
					1.2,
					{
						ease: Power4.easeInOut,
						autoAlpha: 1,
						y: 0,
						delay: this.lineDelay,
						force3D: true,
					},
					0.03
				);
				this.lineDelay += 0.1;
			}
		} else if (animation === 'home-services') {
			this.serviceList = element.querySelectorAll('.home-services__item');
			this.serviceDelay = 0.2;
			TweenLite.to(element, 1.2, {
				ease: Power4.easeInOut,
				autoAlpha: 1,
				y: 0,
				delay: this.serviceDelay,
				force3D: true,
			});

			for (let i = 0; i < this.serviceList.length; i += 1) {
				this.service = this.serviceList[i];
				this.element = this.service.querySelector('.home-services__link-content');
				TweenLite.to(this.element, 1.2, {
					ease: Power4.easeInOut,
					autoAlpha: 1,
					y: 0,
					delay: this.serviceDelay,
					force3D: true,
				});
				this.serviceDelay += 0.2;
				this.backgroundList = this.service.querySelectorAll('.home-services__link-background-container');
				this.backgroundTimeline = new TimelineMax();
				this.backgroundTimeline.staggerTo(
					this.backgroundList,
					1.5,
					{
						ease: Power4.easeInOut,
						scaleX: 1,
						force3D: true,
					},
					0
				);
			}
		} else if (animation === 'home-commitments') {
			this.elementList = element.querySelectorAll('.home-commitment__item');
			this.timeline = new TimelineMax();
			this.timeline.staggerTo(
				this.elementList,
				1.5,
				{
					ease: Power4.easeInOut,
					autoAlpha: 1,
					y: 0,
					force3D: true,
				},
				0.15
			);
		} else if (animation === 'letters') {
			this.elementList = element.querySelectorAll('.separate-character__letter');
			this.timeline = new TimelineMax();
			this.timeline.staggerTo(
				this.elementList,
				1.2,
				{
					ease: Power4.easeInOut,
					autoAlpha: 1,
					y: 0,
					force3D: true,
				},
				0.03
			);
		} else if (animation === 'letters--delay-0.2') {
			this.elementList = element.querySelectorAll('.separate-character__letter');
			this.timeline = new TimelineMax();
			this.timeline.staggerTo(
				this.elementList,
				1.2,
				{
					ease: Power4.easeInOut,
					autoAlpha: 1,
					y: 0,
					delay: 0.2,
					force3D: true,
				},
				0.03
			);
		} else if (animation === 'navigation') {
			this.elementList = element.querySelectorAll('.menu__item');
			this.timeline = new TimelineMax();
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
		} else if (animation === 'lines') {
			this.elementList = element.querySelectorAll('.separate-line__line');
			this.timeline = new TimelineMax();
			this.timeline.staggerTo(
				this.elementList,
				1.5,
				{
					ease: Power4.easeInOut,
					autoAlpha: 1,
					y: 0,
					force3D: true,
				},
				0.1
			);
		} else if (animation === 'lines--delay-0.2') {
			this.elementList = element.querySelectorAll('.separate-line__line');
			this.timeline = new TimelineMax();
			this.timeline.staggerTo(
				this.elementList,
				1.5,
				{
					ease: Power4.easeInOut,
					autoAlpha: 1,
					y: 0,
					delay: 0.2,
					force3D: true,
				},
				0.1
			);
		} else if (animation === 'lines--delay-0.3') {
			this.elementList = element.querySelectorAll('.separate-line__line');
			this.timeline = new TimelineMax();
			this.timeline.staggerTo(
				this.elementList,
				1.5,
				{
					ease: Power4.easeInOut,
					autoAlpha: 1,
					y: 0,
					delay: 0.3,
					force3D: true,
				},
				0.1
			);
		} else if (animation === 'lines--delay-0.5') {
			this.elementList = element.querySelectorAll('.separate-line__line');
			this.timeline = new TimelineMax();
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
		} else if (animation === 'lines--delay-1.1') {
			this.elementList = element.querySelectorAll('.separate-line__line');
			this.timeline = new TimelineMax();
			this.timeline.staggerTo(
				this.elementList,
				1.5,
				{
					ease: Power4.easeInOut,
					autoAlpha: 1,
					y: 0,
					delay: 1.1,
					force3D: true,
				},
				0.05
			);
		} else if (animation === 'pricing-items') {
			this.itemList = element.querySelectorAll('.pricing-hero__item');
			this.itemTimeline = new TimelineMax();
			this.itemTimeline.staggerTo(
				this.itemList,
				1.5,
				{
					ease: Power4.easeInOut,
					scaleX: 1,
					delay: 0.6,
					force3D: true,
				},
				0.4
			);
			this.buttonList = element.querySelectorAll('.pricing-hero__drawer-button');
			this.buttonTimeline = new TimelineMax();
			this.buttonTimeline.staggerTo(
				this.buttonList,
				1.5,
				{
					ease: Power4.easeInOut,
					autoAlpha: 1,
					scale: 1,
					rotation: 0,
					delay: 1,
					force3D: true,
				},
				0.4
			);
			this.titleList = element.querySelectorAll('.pricing-hero__drawer-title-line');
			this.titleTimeline = new TimelineMax();
			this.titleTimeline.staggerTo(
				this.titleList,
				1.5,
				{
					ease: Power4.easeInOut,
					autoAlpha: 1,
					y: 0,
					delay: 1.1,
					force3D: true,
				},
				0.4
			);
			this.priceList = element.querySelectorAll('.pricing-hero__subitem-price-line');
			this.priceTimeline = new TimelineMax();
			this.priceTimeline.staggerTo(
				this.priceList,
				1.5,
				{
					ease: Power4.easeInOut,
					autoAlpha: 1,
					y: 0,
					delay: 1.3,
					force3D: true,
				},
				0.2
			);
			this.lineList = element.querySelectorAll('.pricing-hero__subitem-line');
			this.lineTimeline = new TimelineMax();
			this.lineTimeline.staggerTo(
				this.lineList,
				1.5,
				{
					ease: Power4.easeInOut,
					scaleX: 1,
					delay: 1.6,
					force3D: true,
				},
				0.2
			);
			this.textList = element.querySelectorAll('.pricing-hero__subitem-text-line');
			this.textTimeline = new TimelineMax();
			this.textTimeline.staggerTo(
				this.textList,
				1.5,
				{
					ease: Power4.easeInOut,
					autoAlpha: 1,
					y: 0,
					delay: 1.2,
					force3D: true,
				},
				0.2
			);
		} else if (animation === 'lottie-lines') {
			this.animationElement = element;
			this.animationOptions = {
				container: this.animationElement,
				renderer: 'svg',
				loop: true,
				autoplay: false,
				path: this.animationElement.getAttribute('data-lottie-lines'),
			};
			this.animation = lottie.loadAnimation(this.animationOptions);
			this.animation.play();
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
			this.animation.play();
		}
	}
}
