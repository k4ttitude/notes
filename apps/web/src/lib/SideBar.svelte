<script lang="ts">
  import notesStore from "../store";

  let notes: typeof $notesStore.notes = [];
  let currentId: typeof $notesStore.currentId;
  notesStore.subscribe((values) => {
    notes = values.notes;
    currentId = values.currentId;
  });

  const select = (id: string) => {
    notesStore.update((prev) => {
      const prevNoteIndex = prev.notes.findIndex(
        (note) => note.id === prev.currentId
      );
      if (!prev.notes[prevNoteIndex].text) {
        return {
          ...prev,
          notes: [
            ...prev.notes.slice(0, prevNoteIndex),
            ...prev.notes.slice(prevNoteIndex + 1),
          ],
          currentId: id,
        };
      }
      return {
        ...prev,
        currentId: id,
      };
    });
  };
</script>

<div class=" flex-1 flex flex-col gap-2 p-2">
  {#each notes as note}
    <div
      class={`bg-zinc-700 py-2 px-6 rounded cursor-pointer hover:bg-yellow-600 ${
        note.id === currentId ? "bg-yellow-600" : ""
      }`}
      on:click={() => select(note.id)}
    >
      {note.text || "New Note"}
    </div>
  {/each}
</div>
