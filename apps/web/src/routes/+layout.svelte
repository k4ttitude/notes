<script lang="ts">
	import '../app.css';
	import Header from '../lib/components/Header.svelte';
</script>

<Header />

<main class="flex-1 flex">
	<slot />
</main>

<style>
</style>
