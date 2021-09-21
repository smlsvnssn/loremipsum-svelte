<script>
	import löremIpsum from 'loerem';
	import { params } from './params';
	import PresetContent from './parts/PresetContent.svelte';

	export let update;

	let el;

	// referenced by 'copy' button
	$: $params.contentElement = el;

	// Somewhat clean but weird hack to force rerender on update
	const forceUpdate = async (_) => null;
</script>

<div bind:this={el} id="wrapper" lang="sv" contentEditable="true" spellcheck="false">
	{#if !$params.renderFormInput}
		{#await forceUpdate(update) then _}
			<PresetContent />
		{/await}
	{:else}
		{@html löremIpsum(Object.assign({}, $params.settings, $params.formatted))}
	{/if}
</div>
