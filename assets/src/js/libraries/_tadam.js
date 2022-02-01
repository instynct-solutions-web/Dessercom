import { TweenLite, TimelineMax, Power4 } from 'gsap';

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
		} else if (animation === 'opacity-1--y-0--delay-1.4') {
			TweenLite.to(element, 1.5, {
				ease: Power4.easeInOut,
				autoAlpha: 1,
				y: 0,
				delay: 1.4,
				force3D: true,
			});
		} else if (animation === 'scaleX-1') {
			TweenLite.to(element, 1.5, {
				ease: Power4.easeInOut,
				scaleX: 1,
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
		} else if (animation === 'home-services') {
			this.serviceList = element.querySelectorAll('.home-services__item');
			this.serviceDelay = 0.2;
			for (let i = 0; i < this.serviceList.length; i += 1) {
				this.service = this.serviceList[i];
				this.elementList = this.service.querySelectorAll('.separate-character__letter');
				this.timeline = new TimelineMax();
				this.timeline.staggerTo(
					this.elementList,
					1.2,
					{
						ease: Power4.easeInOut,
						autoAlpha: 1,
						y: 0,
						delay: this.serviceDelay,
						force3D: true,
					},
					0.03
				);
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
		} else if (animation === 'words--opacity-1--y-0--delay-1.1') {
			this.elementList = element.querySelectorAll('.separate-word__word');
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
				0.1
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
		}
	}
}
