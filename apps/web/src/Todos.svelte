<script lang="ts">
  import trpc from './lib/trpc';
  import type { AppRouter } from '@notes/server'
  
  trpc.query('todos.list')
</script>
