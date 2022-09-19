<script lang="ts">
  import notesStore, { type Note } from "../store";

  let note: Note | undefined;

  notesStore.subscribe(({ notes, currentId }) => {
    if (!currentId) {
      return;
    }
    note = notes.find((_note) => _note.id === currentId);
  });

  const onChange = (
    e: Event & { currentTarget: EventTarget & HTMLTextAreaElement }
  ) => {
    if (!note) {
      return;
    }

    notesStore.update((prev) => {
      const notes = prev.notes;
      const index = notes.findIndex((_note) => _note.id === note!.id);
      return {
        ...prev,
        notes: [
          ...notes.slice(0, index),
          { ...note!, text: e.currentTarget.value },
          ...notes.slice(index + 1),
        ],
      };
    });
  };
</script>

<div class="flex-1 flex flex-col py-2 px-6">
  <textarea class="rounded flex-1" value={note?.text} on:keyup={onChange} />
</div>
