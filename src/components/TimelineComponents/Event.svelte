<script>
  import { onMount, createEventDispatcher } from "svelte";
  import {svelteTime} from "svelte-time"
  export let data;

  const dispatcher = createEventDispatcher();
  let el;
  onMount(() => {
    const position = el.getBoundingClientRect();
    dispatcher("position", position);
  });
</script>
<time use:svelteTime={{
  timestamp: data.time,
  format: "h:mm A · D/MM/YYYY",
}} class="dark:text-gray-100 text-gray-700 text-sm"></time>
<article 
  bind:this={el} 
  class="bg-gray-200 dark:bg-gray-600 dark:text-gray-50 p-2 max-w-prose my-2 rounded shadow">
  {data.content}
</article>