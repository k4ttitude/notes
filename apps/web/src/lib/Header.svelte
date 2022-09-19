<script lang="ts">
  import PencilIcon from "../assets/icons/pencil.svg?component";
  import TrashIcon from "../assets/icons/trash.svg?component";
  import Button from "./Button.svelte";
  import notesStore, { NEW_ID } from "../store";

  let currentId: string | undefined;
  notesStore.subscribe((values) => {
    currentId = values.currentId;
  });

  const newNote = () => {
    notesStore.update((prev) => ({
      notes: { [NEW_ID]: { id: NEW_ID, text: "New Note" }, ...prev.notes },
      currentId: NEW_ID,
    }));
  };
</script>

<header class="bg-zinc-700 h-10 px-2 flex gap-2 items-center">
  <div class="flex-1" />
  <Button on:click={newNote} disabled={currentId === NEW_ID}>
    <PencilIcon class="w-6 h-6" />
  </Button>
  <Button on:click={() => alert("haha")}>
    <TrashIcon class="w-6 h-6" />
  </Button>
</header>
