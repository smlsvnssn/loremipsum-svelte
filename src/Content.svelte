<script>
	import löremIpsum from 'loerem';
	import PresetContent from './parts/PresetContent.svelte';
	import { copyText, setCssColours } from './actions';

	let contentWrapper,
		doRerun = 1;

	// Somewhat clean but weird hack to force rerender on update.
	// Await null promise to react to value change (if statement doesn't work)
	const forceUpdate = async (_) => {};

	export let settings;

	export const copy = () => copyText(contentWrapper),
		rerun = () => doRerun++;

	$: setCssColours(doRerun);
</script>

<div bind:this={contentWrapper} id="wrapper" lang="sv" contentEditable="true" spellcheck="false">
	<!-- Part II of weird hack -->
	{#await forceUpdate(doRerun) then _}
		{#if !settings.renderFormInput}
			<PresetContent />
		{:else}
			{@html löremIpsum(settings)}
		{/if}
	{/await}
</div>
