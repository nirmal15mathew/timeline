<script>
    import { createEventDispatcher } from "svelte";
    import { XIcon } from "svelte-feather-icons";
    export let modalTitle;
    export let isOpen;
  
    let dispatch = createEventDispatcher();
  </script>
  
  {#if isOpen}
  <div class="fixed top-0 left-0 w-screen h-screen bg-gray-700 bg-opacity-50 grid place-items-center z-100 always-top">
    <div class="rounded bg-gray-50 p-3 max-w-sm w-1/3 dark:bg-gray-600">
    <header class="p-2 flex justify-between">
      <h1 class="text-sm font-semibold text-gray-700 dark:text-gray-200">
        {modalTitle}
      </h1>
      <button class="text-gray-500 hover:text-gray-700 dark:text-gray-200" on:click={_ => dispatch('close')}>
        <XIcon size="1.5x"/>
      </button>
    </header>
    <section class="p-2">
      <slot name="content"></slot>
    </section>
    <footer class="p-2">
      <slot name="footer"></slot>
    </footer>
  </div>
  </div>
  {/if}
<style>
  .always-top {
    z-index: 999;
  }
</style>