<script>
	import Controls from './Controls.svelte';
	import Content from './Content.svelte';
	import FunctionCall from './parts/FunctionCall.svelte';
	import Icon from './parts/Icon.svelte';
	import Infobox from './parts/Infobox.svelte';
	import { clickOutside } from './actions';

	let showSettings = false,
		showInfobox = false,
		rawSettings = {
			// gets converted from percent by Controls
			nyordFrequency: 10,
			neologismerFrequency: 5,
			namnFrequency: 0,
			buzzFrequency: 0,
		},
		settings = {
			numberOfParagraphs: 5,
			sentencesPerParagraph: 5,
			maxSentenceLength: 5,
			minSentenceLength: 1,
			punchline: 'Du kan vara drabbad.',
			isHeadline: false,
			isName: false,
			useLörem: true,
			wrapInDiv: false,
			alwaysWrapParagraph: true,
			renderFormInput: false,
		},
		content;

	if (localStorage.getItem('settings')) {
		settings = JSON.parse(localStorage.getItem('settings'));
		rawSettings = JSON.parse(localStorage.getItem('rawSettings'));
	}

	$: {
		localStorage.setItem('settings', JSON.stringify(settings));
		localStorage.setItem('rawSettings', JSON.stringify(rawSettings));
	}

	const toggleSettings = () => (showSettings = !showSettings),
		hideSettings = () => {
			if (showSettings) showSettings = false;
		},
		showInfo = () => (showInfobox = true);
</script>

<main>
	<nav class="settings {showSettings ? '' : 'hidden'}" use:clickOutside={hideSettings}>
		<Controls bind:settings bind:rawSettings />
		<FunctionCall {settings} />
	</nav>

	<Content bind:this={content} {settings} />

	<Icon type="cogs" on:click={toggleSettings} />
	<Icon type="info" on:click={showInfo} />
	<Icon type="rerun" on:click={content.rerun} />
	<Icon type="copy" on:click={content.copy} />

	<Infobox bind:showInfobox />
</main>
