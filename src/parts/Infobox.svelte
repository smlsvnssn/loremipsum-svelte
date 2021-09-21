<script>
	import { params } from '../params.js';
</script>

<div id="infobox" class={$params.showInfobox ? '' : 'hidden'} on:click={() => ($params.showInfobox = false)}>
	<div>
		<h3>Lörem ipsum? Lörem ipsum!</h3>
		<p>Generated faux Swedish for the masses!</p>
		<p>
			Lörem ipsum is also available as a
			<a href="https://www.figma.com/community/plugin/944967340381505004/L%C3%B6rem-Ipsum" target="_blank">figma plugin</a>. Om du vill bygga
			vidare hittar du koden på
			<a href="https://codepen.io/smlsvnssn/pen/VwKPMwM" target="_blank">codepen</a>.
		</p>
	</div>
</div>
