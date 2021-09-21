<script>
	import * as ö from '../ö';
	import löremIpsum from 'loerem';

	const randUser = async () => {
		let url = `https://randomuser.me/api/?nat=dk,no?nocache=${ö.random(1, true)}`,
			r = await ö.load(url);
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
						{ö.random(1, 32)}/{ö.random(1, 13)}
						{ö.random(1960, 2020)}
					</time>
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
