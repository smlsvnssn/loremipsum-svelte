<script>
	export let title = "Title";
	export let value = 0;
	export let min = 0;
	export let max = 1;
	export let step = 1;
</script>

<div>
	<legend>{title}</legend>
	<input type="range" class="slider" bind:value {min} {max} {step} />
	<input type="number" class="slider" bind:value {min} {max} {step} />
</div>
