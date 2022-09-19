<script lang="ts">
	import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex flex-1">
	<div class="left w-80" />
	<div class="right flex-1">
		<Counter />
	</div>
</section>

<style>
	.left {
		border-right: 1px solid #ccc;
	}
</style>
