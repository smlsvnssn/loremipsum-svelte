<script>
	import Infobox from './parts/Infobox.svelte';
	import Controls from './Controls.svelte';
	import Content from './Content.svelte';
	import FunctionCall from './parts/FunctionCall.svelte';
	import Icon from './parts/Icon.svelte';
	import { clickOutside, copyText, setCssColours } from './actions';
	import { params } from './params';

	let updateLayout = 1;

	$: setCssColours(updateLayout);
</script>

<main>
	<Content update={updateLayout} />
	<nav
		class="settings {$params.showSettings ? '' : 'hidden'}"
		use:clickOutside={() => {
			if ($params.showSettings) $params.showSettings = false;
		}}>
		<Controls />
		<FunctionCall />
	</nav>

	<Icon type="rerun" on:click={() => updateLayout++} />
	<Icon type="cogs" on:click={() => ($params.showSettings = !$params.showSettings)} />
	<Icon type="copy" on:click={() => copyText($params.contentElement)} />
	<Icon type="info" on:click={() => ($params.showInfobox = true)} />

	<Infobox />
</main>
