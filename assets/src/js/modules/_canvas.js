/* eslint-disable */
const p5 = require('p5');

export default class Canvas {
	constructor() {
		// All DOM selector / elements goes here
		this.container = document.querySelector('[data-canvas-grid]');
		if (this.container) {
			this.manageEvents();
		}
	}

	manageEvents() {
		const sketch = function (p) {
			let deg = 0;
			let step = 60;
			let margin = 30;
			p.setup = function () {
				p.createCanvas(400, 400);
				p.angleMode(p.DEGREES);
			};
			p.draw = function () {
				p.background(255);

				for (let x = margin + 1; x < p.width - margin; x += step) {
					for (let y = margin + 1; y < p.height - margin; y += step) {
						p.push();
						p.translate(x, y);
						p.rotate(deg);
						p.strokeWeight(8);
						p.stroke(0, 255);
						p.line(-10, 0, 10, 0);
						p.line(0, -10, 0, 10);
						p.pop();
					}
				}

				deg += 1;
			};
		};
		new p5(sketch, this.container);
		// All Dom events goes here
	}
}
