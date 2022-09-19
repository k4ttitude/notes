<script lang="ts">
	import newNoteIcon from '$lib/assets/icons/pencil-square.svg?src';
	import deleteIcon from '$lib/assets/icons/trash.svg?src';
	import IconButton from './IconButton.svelte';
</script>

<div class="flex items-center py-3 bg-zinc-700">
	<div class="flex-1" />
	<div class="text-white flex">
		<IconButton svg={newNoteIcon} />
		<IconButton svg={deleteIcon} />
	</div>
</div>
