<script>

import Event from "./Event.svelte";
export let eventsList = [];
export let dataPoints;
function addToData(i, pos) {
    dataPoints[i] = pos.y + (pos.height / 2)
}
</script>

{#each eventsList as data, i}
  <Event {data} on:position={(e) => addToData(i, e.detail)} />
{/each}
