<script>
    import TimelineSvgLine from "./TimelineSVGLine.svelte";
    import {eventsStore} from "../../store"
    import { onMount } from "svelte";
    export let timelineId;
    let eventsList = [];
    let buffer = {};
    onMount(() => {
        let unsub = eventsStore.subscribe(state => {
            buffer = state
        })
        return unsub
    })
    $: eventsList = buffer[timelineId] || []
</script>
<main class="flex-grow flex justify-end overflow-y-auto">
    <TimelineSvgLine { eventsList }/>
</main>