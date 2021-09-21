import { writable } from 'svelte/store';

export const params = writable({
	renderFormInput: false,
	showSettings: false,
	showInfobox: false,
	contentElement: null,
	settings: {
		numberOfParagraphs: 5,
		sentencesPerParagraph: 5,
		maxSentenceLength: 5,
		minSentenceLength: 1,
		nyordFrequency: 10,
		neologismerFrequency: 5,
		namnFrequency: 0,
		buzzFrequency: 0,
		punchline: 'Du kan vara drabbad.',
		isHeadline: false,
		isName: false,
		useLörem: true,
		wrapInDiv: false,
		alwaysWrapParagraph: true,
	},
	formatted: {},
});