<script lang="ts">
  import SideBar from "./lib/SideBar.svelte";
  import Header from "./lib/Header.svelte";
  import Edit from "./lib/Edit.svelte";
</script>

<Header />

<main class="flex flex-1 bg-white">
  <section class="left w-80 border-r border-gray-500">
    <SideBar />
  </section>
  <section class="right flex-1 flex">
    <Edit />
  </section>
</main>

<style>
</style>
