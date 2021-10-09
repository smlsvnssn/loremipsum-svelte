import { random, hsla } from 'ouml';
/*
generic
*/

export const clickOutside = (node, cb) => {
	const onClick = (e) => {
		if (!node.contains(e.target)) cb();
	}

	document.body.addEventListener('click', onClick);

	return {
		update(newCb) { cb = newCb },
		destroy() { document.body.removeEventListener('click', onClick) }
	}
}

export const copyText = node => {
	const range = document.createRange(),
		selection = window.getSelection();

	range.selectNodeContents(node);
	selection.removeAllRanges();
	selection.addRange(range);
	navigator.clipboard.writeText(node.innerHTML);
}

/*
specific
*/

export const setCssColours = () => {
	const hue = random(360),
		[light, dark] = [
			[85, hue, "multiply"],
			[10, hue + 180, "screen"],
		],
		[a, b] = random(2) > 0 ? [light, dark] : [dark, light],
		props = {
			"--bg": hsla(a[1], 50, a[0]),
			"--clr": hsla(b[1], 50, b[0]),
			"--bgAlpha": hsla(a[1], 50, a[0], 0.7),
			"--clrAlpha": hsla(b[1], 50, b[0], 0.7),
			"--bgAlphaLight": hsla(a[1], 50, a[0], 0.1),
			"--clrAlphaLight": hsla(b[1], 50, b[0], 0.1),
			"--multiply": a[2],
			"--screen": b[2],
		};

	for (const prop in props) {
		// i.e. :root
		document.documentElement.style.setProperty(prop, props[prop]);
	}
};