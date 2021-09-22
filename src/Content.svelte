<script>
	import löremIpsum from 'loerem';
	import PresetContent from './parts/PresetContent.svelte';

	export let doRerun;
	export let settings;
	export let contentElement;
	export let renderFormInput;

	// Somewhat clean but weird hack to force rerender on update.
	// Await null promise to react to value change (if statement doesn't work)
	const forceUpdate = async (_) => null;
</script>

<div bind:this={contentElement} id="wrapper" lang="sv" contentEditable="true" spellcheck="false">
	<!-- Part II of weird hack -->
	{#await forceUpdate(doRerun) then _}
		{#if !renderFormInput}
			<PresetContent />
		{:else}
			{@html löremIpsum(settings)}
		{/if}
	{/await}
</div>
