<script lang="ts">
  import notesStore, { type Notes } from "../store/notes";

  let notes: Notes = [];
  notesStore.subscribe((values) => {
    notes = values;
  });
</script>

<div class=" flex-1 flex flex-col gap-2 p-2">
  {#each notes as note}
    <div
      class="bg-zinc-700 py-2 px-6 rounded cursor-pointer hover:bg-yellow-600"
    >
      {note.text}
    </div>
  {/each}
</div>
