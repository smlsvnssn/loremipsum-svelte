<script>
	import Slider from './parts/Slider.svelte';
	import Switch from './parts/Switch.svelte';
	import { params } from './params.js';

	// cap min sentence length
	$: $params.settings.minSentenceLength = Math.min($params.settings.minSentenceLength, $params.settings.maxSentenceLength);

	// if useHeadline, set paragraph length to 1 and vice verca
	$: {
		if ($params.settings.isHeadline) {
			$params.settings.sentencesPerParagraph = 1;
		}
		if ($params.settings.sentencesPerParagraph > 1) {
			$params.settings.isHeadline = false;
		}
	}

	// Format for output
	$: {
		$params.formatted.nyordFrequency = $params.settings.nyordFrequency / 100;
		$params.formatted.neologismerFrequency = $params.settings.neologismerFrequency / 100;
		$params.formatted.namnFrequency = $params.settings.namnFrequency / 100;
		$params.formatted.buzzFrequency = $params.settings.buzzFrequency / 100;
		$params.formatted.paragraphStartWrap = $params.settings.isHeadline ? '<h2>' : '<p>';
		$params.formatted.paragraphEndWrap = $params.settings.isHeadline ? '</h2>' : '</p>';
	}
</script>

<form
	on:input={() => {
		if (!$params.renderFormInput) $params.renderFormInput = true;
	}}>
	<div>
		<Switch label="Preset" label2="My settings" bind:value={$params.renderFormInput} />
	</div>
	<div id="sliders" class="fieldset">
		<Slider title="Number of paragraphs" bind:value={$params.settings.numberOfParagraphs} min="1" max="20" />
		<Slider title="Sentences per paragraph" bind:value={$params.settings.sentencesPerParagraph} min="1" max="20" />
		<Slider title="Max sentence length" bind:value={$params.settings.maxSentenceLength} min="1" max="20" />
		<Slider title="Minimum sentence length" bind:value={$params.settings.minSentenceLength} min="1" max={$params.settings.maxSentenceLength} />
		<Slider title="New swedish words (%)" bind:value={$params.settings.nyordFrequency} min="0" max="100" />
		<Slider title="Faux academic neologisms (%)" bind:value={$params.settings.neologismerFrequency} min="0" max="100" />
		<Slider title="Names (%)" bind:value={$params.settings.namnFrequency} min="0" max="100" />
		<Slider title="Buzz (%)" bind:value={$params.settings.buzzFrequency} min="0" max="100" />
		<div>
			<legend>Punchline</legend>
			<input type="text" bind:value={$params.settings.punchline} />
		</div>
	</div>

	<div id="switchar" class="fieldset">
		<Switch label="Is headline" bind:value={$params.settings.isHeadline} />
		<Switch label="Is name" bind:value={$params.settings.isName} />
		<Switch label={'Begin with "Lörem ipsum"'} bind:value={$params.settings.useLörem} />
		<Switch label="Wrap in <div>" bind:value={$params.settings.wrapInDiv} />
		<Switch label="Always wrap paragraph" bind:value={$params.settings.alwaysWrapParagraph} />
	</div>
</form>
