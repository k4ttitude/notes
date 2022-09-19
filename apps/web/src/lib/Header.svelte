<script lang="ts">
  import PencilIcon from "../assets/icons/pencil.svg?component";
  import TrashIcon from "../assets/icons/trash.svg?component";
  import Button from "./Button.svelte";
  import notesStore from "../store/notes";

  const newNote = () => {
    notesStore.update((prev) => [
      { id: crypto.randomUUID(), text: "" },
      ...prev,
    ]);
  };
</script>

<header class="bg-zinc-700 h-10 px-2 flex gap-2 items-center">
  <div class="flex-1" />
  <Button on:click={newNote}>
    <PencilIcon class="w-6 h-6" />
  </Button>
  <Button on:click={() => alert("haha")}>
    <TrashIcon class="w-6 h-6" />
  </Button>
</header>
