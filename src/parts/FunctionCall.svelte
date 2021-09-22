<script>
	export let settings;
</script>

<div id="functionCall" contentEditable="true" spellcheck="false">
	<pre>löremIpsum({'{'}
			numberOfParagraphs: {settings.numberOfParagraphs}, 
			sentencesPerParagraph: {settings.sentencesPerParagraph}, 
			maxSentenceLength: {settings.maxSentenceLength}, 
			minSentenceLength: {settings.minSentenceLength},
			isHeadline: {settings.isHeadline},
			isName: {settings.isName},
			nyordFrequency: {settings.nyordFrequency},
			neologismerFrequency: {settings.neologismerFrequency},
			namnFrequency: {settings.namnFrequency},
			buzzFrequency: {settings.buzzFrequency},
			useLörem: {settings.useLörem},
			punchline: '{settings.punchline}',
			wrapInDiv: {settings.wrapInDiv},
			paragraphStartWrap: '{settings.paragraphStartWrap}',
			paragraphEndWrap: '{settings.paragraphEndWrap}',
			alwaysWrapParagraph: {settings.alwaysWrapParagraph}
		{'}'}
	)
	</pre>
</div>
