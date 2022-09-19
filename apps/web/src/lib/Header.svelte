<script lang="ts">
  import PencilIcon from "../assets/icons/pencil.svg?component";
  import TrashIcon from "../assets/icons/trash.svg?component";
  import Button from "./Button.svelte";
  import notesStore, { type Note } from "../store";

  let note: Note;
  notesStore.subscribe(({ notes, currentId }) => {
    note = notes.find((_note) => _note.id === currentId)!;
  });

  const newNote = () => {
    const newId = crypto.randomUUID();
    notesStore.update((prev) => ({
      notes: [{ id: newId, text: "" }, ...prev.notes],
      currentId: newId,
    }));
  };
</script>

<header class="bg-zinc-700 h-10 px-2 flex gap-2 items-center">
  <div class="flex-1" />
  <Button on:click={newNote} disabled={!note.text}>
    <PencilIcon class="w-6 h-6" />
  </Button>
  <Button on:click={() => alert("haha")}>
    <TrashIcon class="w-6 h-6" />
  </Button>
</header>
