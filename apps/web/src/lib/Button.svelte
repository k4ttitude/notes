<script lang="ts">
</script>

<button class="button" on:click {...$$restProps}>
  <slot />
</button>

<style lang="postcss">
  .button {
    @apply p-1 rounded cursor-pointer text-white;
  }

  .button:hover {
    @apply bg-zinc-600;
  }

  .button:disabled {
    @apply bg-zinc-700 text-gray-500 cursor-not-allowed;
  }
</style>
