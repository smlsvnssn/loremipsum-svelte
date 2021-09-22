<script>
	import * as ö from '../ö';
	export let label = "Title";
	export let label2 = null;
	export let value = 0;
	let id = "id" + ö.randomChars();
</script>

<div>
	{#if label2}
		<label for={id}>{label}</label>
	{/if}
	<input type="checkbox" class="switch" {id} bind:checked={value} />
	<label for={id}>{label2 ? label2 : label}</label>
</div>
