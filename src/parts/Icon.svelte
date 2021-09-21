<script>
	import Info from './icons/Info.svelte';
	import Copy from './icons/Copy.svelte';
	import Cogs from './icons/Cogs.svelte';
	import Rerun from './icons/Rerun.svelte';

	export let type = 'cogs';

	const types = {
		cogs: { component: Cogs },
		info: { component: Info },
		copy: { component: Copy },
		rerun: { component: Rerun },
	};
</script>

<div class="icon {type}" on:click|stopPropagation>
	<svg>
		<svelte:component this={types[type].component} />
	</svg>
</div>
