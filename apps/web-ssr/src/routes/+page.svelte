<script lang="ts">
	import Counter from '$lib/Counter.svelte';
	import * as trpc from '@trpc/client';
	import type { AppRouter } from '@notes/server';

	const client = trpc.createTRPCClient<AppRouter>({ url: 'http://localhost:8080/trpc' });

	client.query('todos.list', {});
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
