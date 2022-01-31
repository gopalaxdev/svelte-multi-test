<script>
	function handleClick() {
		console.log('Click Handled');
	}
</script>

<h1>Welcome to SvelteKit Dashboard</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<button on:click={handleClick}> click me </button>
