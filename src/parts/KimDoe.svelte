<script>
	import löremIpsum from 'loerem';
	import { random, load } from 'ouml';

	const randUser = async () => {
		let url = `https://randomuser.me/api/?nat=dk,no?nocache=${random(1, true)}`,
			r = await load(url);
		return r.results[0];
	};
</script>

<article class="byline">
	{#await randUser() then user}
		<div>
			<div class="img">
				<img alt="Kim Doe" src={user.picture.thumbnail} />
			</div>
			<div class="author">
				<address class="text">
					{löremIpsum({
						numberOfParagraphs: 1,
						sentencesPerParagraph: 1,
						maxSentenceLength: 1,
						isHeadline: true,
						nyordFrequency: 0,
					})}
					{löremIpsum({
						numberOfParagraphs: 1,
						sentencesPerParagraph: 1,
						maxSentenceLength: 1,
						isHeadline: true,
						nyordFrequency: 0,
					})}
					<br />
					<time class="text">
						{random(1, 32)}/{random(1, 13)}
						{random(1960, 2020)}
					</time>
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a href="#" class="text">
						{löremIpsum({
							numberOfParagraphs: 1,
							sentencesPerParagraph: 1,
							maxSentenceLength: 3,
							useLörem: false,
						})}
					</a>
				</address>
			</div>
		</div>
	{/await}
</article>
