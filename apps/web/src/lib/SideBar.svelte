<script lang="ts">
  import notesStore from "../store";

  let notes: typeof $notesStore.notes = {};
  notesStore.subscribe((values) => {
    notes = values.notes;
  });

  const select = (id: string) => {
    notesStore.update((prev) => ({
      ...prev,
      currentId: id,
    }));
  };
</script>

<div class=" flex-1 flex flex-col gap-2 p-2">
  {#each Object.values(notes) as note}
    <div
      class="bg-zinc-700 py-2 px-6 rounded cursor-pointer hover:bg-yellow-600"
      on:click={() => select(note.id)}
    >
      {note.text}
    </div>
  {/each}
</div>
