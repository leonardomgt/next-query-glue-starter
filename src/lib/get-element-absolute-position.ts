export function getElementAbsolutePosition(element) {
	if (!element) {
		return;
	}
	const rect = element.getBoundingClientRect();
	return {
		x: rect.left + window.pageXOffset,
		y: rect.top + window.pageYOffset,
		width: rect.width,
		height: rect.height
	};
}