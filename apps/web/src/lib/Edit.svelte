<script lang="ts">
  import notesStore, { type Note } from "../store";

  let note: Note | undefined;

  notesStore.subscribe(({ notes, currentId }) => {
    if (!currentId) {
      return;
    }
    note = notes[currentId];
  });

  $: console.log(note);

  const onChange = (
    e: Event & { currentTarget: EventTarget & HTMLTextAreaElement }
  ) => {
    if (!note) {
      return;
    }
    notesStore.update((prev) => ({
      ...prev,
      notes: {
        ...prev.notes,
        [note!.id]: { ...note!, text: e.currentTarget.value },
      },
    }));
  };
</script>

<div class="flex-1 flex flex-col py-2 px-6">
  <textarea class="rounded flex-1" value={note?.text} on:keydown={onChange} />
</div>
