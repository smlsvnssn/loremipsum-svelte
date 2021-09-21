<script>
	import KimDoe from './KimDoe.svelte';
	import löremIpsum from 'loerem';
	import { blur } from 'svelte/transition';
	import * as ö from '../ö';
</script>

<div in:blur>
	<p class="dårrad">
		§ {ö.random(1, 100) + '.' + ö.random(1, 10)}
		<span>
			{@html löremIpsum({
				numberOfParagraphs: 1,
				sentencesPerParagraph: 1,
				maxSentenceLength: 3,
			})}
		</span>
	</p>

	<h1>
		{@html löremIpsum({
			numberOfParagraphs: 1,
			sentencesPerParagraph: 1,
			maxSentenceLength: 8,
			useLörem: false,
			isHeadline: true,
		})}
	</h1>

	<p class="ingress">
		{@html löremIpsum({
			numberOfParagraphs: 1,
			sentencesPerParagraph: 4,
			maxSentenceLength: 8,
		})}
	</p>

	<KimDoe />

	{@html ö.wrapFirstWords(
		löremIpsum({
			numberOfParagraphs: ö.random(1, 4),
			sentencesPerParagraph: 6,
			maxSentenceLength: 10,
			alwaysWrapParagraph: true,
			useLörem: false,
		}),
		4,
		'<span>',
		'</span>',
		3
	)}

	<blockquote>
		{@html löremIpsum({
			numberOfParagraphs: 1,
			sentencesPerParagraph: 4,
			maxSentenceLength: 8,
		})}
	</blockquote>

	{@html ö.wrapFirstWords(
		löremIpsum({
			numberOfParagraphs: ö.random(1, 4),
			sentencesPerParagraph: 6,
			maxSentenceLength: 10,
			alwaysWrapParagraph: true,
		}),
		4,
		'<span>',
		'</span>',
		3
	)}

	<h2>
		{@html löremIpsum({
			numberOfParagraphs: 1,
			sentencesPerParagraph: 1,
			maxSentenceLength: 5,
			useLörem: false,
			isHeadline: true,
		})}
	</h2>

	<figure class="img">
		<img alt="Who knows" src="https://picsum.photos/200/200?nocache=${ö.random(1, true)}" />
	</figure>

	{@html ö.wrapFirstWords(
		löremIpsum({
			numberOfParagraphs: ö.random(1, 4),
			sentencesPerParagraph: 6,
			maxSentenceLength: 10,
			alwaysWrapParagraph: true,
		}),
		4,
		'<span>',
		'</span>',
		3
	)}

	<h3>
		{@html löremIpsum({
			numberOfParagraphs: 1,
			sentencesPerParagraph: 1,
			maxSentenceLength: 5,
			useLörem: false,
			isHeadline: true,
		})}
	</h3>

	{@html ö.wrapFirstWords(
		löremIpsum({
			numberOfParagraphs: ö.random(1, 4),
			sentencesPerParagraph: 6,
			maxSentenceLength: 10,
			alwaysWrapParagraph: true,
		}),
		4,
		'<span>',
		'</span>',
		3
	)}

	<h3>
		{@html löremIpsum({
			numberOfParagraphs: 1,
			sentencesPerParagraph: 1,
			maxSentenceLength: 5,
			useLörem: false,
			isHeadline: true,
		})}
	</h3>

	{@html ö.wrapFirstWords(
		löremIpsum({
			numberOfParagraphs: ö.random(1, 4),
			sentencesPerParagraph: 6,
			maxSentenceLength: 10,
			alwaysWrapParagraph: true,
		}),
		4,
		'<span>',
		'</span>',
		3
	)}
</div>
