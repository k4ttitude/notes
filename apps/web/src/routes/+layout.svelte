<script lang="ts">
	import '../app.css';
	import newNoteIcon from '$lib/assets/icons/pencil-square.svg?src';
</script>

<div class="flex items-center py-4 bg-zinc-700">
	<div class="text-white">
		{@html newNoteIcon}
	</div>
	<div />
</div>

<main>
	<slot />
</main>

<footer>
	<p class="text-red-500">
		visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit
	</p>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
