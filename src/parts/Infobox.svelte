<script>
	export let showInfobox;

	const hideInfo = () => (showInfobox = false);
</script>

<div id="infobox" class={showInfobox ? '' : 'hidden'} on:click={hideInfo}>
	<div>
		<h3>Lörem ipsum? Lörem ipsum!</h3>
		<p>Generated faux Swedish for the masses. Has all the options.</p>
		<p>
			Lörem ipsum is also available as a
			<a href="https://www.figma.com/community/plugin/944967340381505004/L%C3%B6rem-Ipsum" target="_blank">figma plugin</a>, and as an
			<a href="https://www.npmjs.com/package/loerem" target="_blank">npm package</a>.
		</p>
		<p>
			Fork the project on
			<a href="https://github.com/smlsvnssn/loremipsum-svelte" target="_blank">github</a>. There's also an older version on
			<a href="https://codepen.io/smlsvnssn/pen/VwKPMwM" target="_blank">codepen</a>.
		</p>
		<p>
			Made with 🩸, 😅 & 😭 by <a href="https://lhli.net" target="_blank">lhli.net</a>
		</p>
	</div>
</div>
