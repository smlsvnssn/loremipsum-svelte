<script>
	import { params } from '../params';
</script>

<div id="functionCall" contentEditable="true" spellcheck="false">
	<pre>löremIpsum({'{'}
			numberOfParagraphs: {$params.settings.numberOfParagraphs}, 
			sentencesPerParagraph: {$params.settings.sentencesPerParagraph}, 
			maxSentenceLength: {$params.settings.maxSentenceLength}, 
			minSentenceLength: {$params.settings.minSentenceLength},
			isHeadline: {$params.settings.isHeadline},
			isName: {$params.settings.isName},
			nyordFrequency: {$params.formatted.nyordFrequency},
			neologismerFrequency: {$params.formatted.neologismerFrequency},
			namnFrequency: {$params.formatted.namnFrequency},
			buzzFrequency: {$params.formatted.buzzFrequency},
			useLörem: {$params.settings.useLörem},
			punchline: '{$params.settings.punchline}',
			wrapInDiv: {$params.settings.wrapInDiv},
			paragraphStartWrap: '{$params.formatted.paragraphStartWrap}',
			paragraphEndWrap: '{$params.formatted.paragraphEndWrap}',
			alwaysWrapParagraph: {$params.settings.alwaysWrapParagraph}
		{'}'}
	)
	</pre>
</div>
