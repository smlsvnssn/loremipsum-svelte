<script>
	import Slider from './parts/Slider.svelte';
	import Switch from './parts/Switch.svelte';

	export let rawSettings;
	export let settings;

	$: {
		// cap min sentence length
		settings.minSentenceLength = Math.min(settings.minSentenceLength, settings.maxSentenceLength);

		// if useHeadline, set paragraph length to 1 and vice verca
		if (settings.isHeadline) settings.sentencesPerParagraph = 1;
		if (settings.sentencesPerParagraph > 1) settings.isHeadline = false;

		// Format for output
		settings.nyordFrequency = rawSettings.nyordFrequency / 100;
		settings.neologismerFrequency = rawSettings.neologismerFrequency / 100;
		settings.namnFrequency = rawSettings.namnFrequency / 100;
		settings.buzzFrequency = rawSettings.buzzFrequency / 100;
		settings.paragraphStartWrap = settings.isHeadline ? '<h2>' : '<p>';
		settings.paragraphEndWrap = settings.isHeadline ? '</h2>' : '</p>';
	}
</script>

<form
	on:input={() => {
		if (!settings.renderFormInput) settings.renderFormInput = true;
	}}>
	<div>
		<Switch label="Preset" label2="My settings" bind:value={settings.renderFormInput} />
	</div>
	<div id="sliders" class="fieldset">
		<Slider title="Number of paragraphs" bind:value={settings.numberOfParagraphs} min="1" max="20" />
		<Slider title="Sentences per paragraph" bind:value={settings.sentencesPerParagraph} min="1" max="20" />
		<Slider title="Max sentence length" bind:value={settings.maxSentenceLength} min="1" max="20" />
		<Slider title="Minimum sentence length" bind:value={settings.minSentenceLength} min="1" max={settings.maxSentenceLength} />
		<Slider title="New swedish words (%)" bind:value={rawSettings.nyordFrequency} min="0" max="100" />
		<Slider title="Faux academic neologisms (%)" bind:value={rawSettings.neologismerFrequency} min="0" max="100" />
		<Slider title="Names (%)" bind:value={rawSettings.namnFrequency} min="0" max="100" />
		<Slider title="Buzz (%)" bind:value={rawSettings.buzzFrequency} min="0" max="100" />
		<div>
			<legend>Punchline</legend>
			<input type="text" bind:value={settings.punchline} />
		</div>
	</div>

	<div id="switchar" class="fieldset">
		<Switch label="Is headline" bind:value={settings.isHeadline} />
		<Switch label="Is name" bind:value={settings.isName} />
		<Switch label={'Begin with "Lörem ipsum"'} bind:value={settings.useLörem} />
		<Switch label="Wrap in <div>" bind:value={settings.wrapInDiv} />
		<Switch label="Always wrap paragraph" bind:value={settings.alwaysWrapParagraph} />
	</div>
</form>
