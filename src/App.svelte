<script>
	import Controls from './Controls.svelte';
	import Content from './Content.svelte';
	import FunctionCall from './parts/FunctionCall.svelte';
	import Icon from './parts/Icon.svelte';
	import Infobox from './parts/Infobox.svelte';
	import { clickOutside, copyText, setCssColours } from './actions';

	let showSettings = false,
		contentElement,
		showInfobox = false,
		renderFormInput = false,
		rawSettings = {
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
		formattedSettings = {},
		doRerun = 1;

	const rerun = () => doRerun++,
		cogs = () => (showSettings = !showSettings),
		copy = () => copyText(contentElement),
		info = () => (showInfobox = true);

	$: setCssColours(doRerun);
	$: settings = Object.assign({}, rawSettings, formattedSettings);
</script>

<main>
	<nav
		class="settings {showSettings ? '' : 'hidden'}"
		use:clickOutside={() => {
			if (showSettings) showSettings = false;
		}}>
		<Controls bind:rawSettings bind:formattedSettings bind:renderFormInput />
		<FunctionCall {settings} />
	</nav>

	<Content {doRerun} {settings} {renderFormInput} bind:contentElement />

	<Icon type="rerun" on:click={rerun} />
	<Icon type="cogs" on:click={cogs} />
	<Icon type="copy" on:click={copy} />
	<Icon type="info" on:click={info} />

	<Infobox bind:showInfobox />
</main>
