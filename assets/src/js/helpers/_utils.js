export default class Utils {
	static map(value, x1, y1, x2, y2) {
		return ((value - x1) * (y2 - x2)) / (y1 - x1) + x2;
	}

	static calculateRatio(element, event) {
		const elem = element;
		const rect = elem.getBoundingClientRect();
		const xWidth = rect.right - rect.left;
		const x = event.clientX - rect.left; // x position within the element.
		const xRatio = (x / xWidth) * 100;
		return xRatio;
	}
}
