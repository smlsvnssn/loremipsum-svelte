<script>
	import Slider from './parts/Slider.svelte';
	import Switch from './parts/Switch.svelte';

	export let rawSettings;
	export let formattedSettings;
	export let renderFormInput;

	// cap min sentence length
	$: rawSettings.minSentenceLength = Math.min(rawSettings.minSentenceLength, rawSettings.maxSentenceLength);

	// if useHeadline, set paragraph length to 1 and vice verca
	$: {
		if (rawSettings.isHeadline) rawSettings.sentencesPerParagraph = 1;

		if (rawSettings.sentencesPerParagraph > 1) rawSettings.isHeadline = false;
	}

	// Format for output
	$: {
		formattedSettings.nyordFrequency = rawSettings.nyordFrequency / 100;
		formattedSettings.neologismerFrequency = rawSettings.neologismerFrequency / 100;
		formattedSettings.namnFrequency = rawSettings.namnFrequency / 100;
		formattedSettings.buzzFrequency = rawSettings.buzzFrequency / 100;
		formattedSettings.paragraphStartWrap = rawSettings.isHeadline ? '<h2>' : '<p>';
		formattedSettings.paragraphEndWrap = rawSettings.isHeadline ? '</h2>' : '</p>';
	}
</script>

<form
	on:input={() => {
		if (!renderFormInput) renderFormInput = true;
	}}>
	<div>
		<Switch label="Preset" label2="My settings" bind:value={renderFormInput} />
	</div>
	<div id="sliders" class="fieldset">
		<Slider title="Number of paragraphs" bind:value={rawSettings.numberOfParagraphs} min="1" max="20" />
		<Slider title="Sentences per paragraph" bind:value={rawSettings.sentencesPerParagraph} min="1" max="20" />
		<Slider title="Max sentence length" bind:value={rawSettings.maxSentenceLength} min="1" max="20" />
		<Slider title="Minimum sentence length" bind:value={rawSettings.minSentenceLength} min="1" max={rawSettings.maxSentenceLength} />
		<Slider title="New swedish words (%)" bind:value={rawSettings.nyordFrequency} min="0" max="100" />
		<Slider title="Faux academic neologisms (%)" bind:value={rawSettings.neologismerFrequency} min="0" max="100" />
		<Slider title="Names (%)" bind:value={rawSettings.namnFrequency} min="0" max="100" />
		<Slider title="Buzz (%)" bind:value={rawSettings.buzzFrequency} min="0" max="100" />
		<div>
			<legend>Punchline</legend>
			<input type="text" bind:value={rawSettings.punchline} />
		</div>
	</div>

	<div id="switchar" class="fieldset">
		<Switch label="Is headline" bind:value={rawSettings.isHeadline} />
		<Switch label="Is name" bind:value={rawSettings.isName} />
		<Switch label={'Begin with "Lörem ipsum"'} bind:value={rawSettings.useLörem} />
		<Switch label="Wrap in <div>" bind:value={rawSettings.wrapInDiv} />
		<Switch label="Always wrap paragraph" bind:value={rawSettings.alwaysWrapParagraph} />
	</div>
</form>
