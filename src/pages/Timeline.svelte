<script>
    import Header from "../components/TimelineComponents/Header.svelte"
    import Footer from "../components/TimelineComponents/Footer.svelte"
    import MainArea from "../components/TimelineComponents/MainArea.svelte";
    import slide from "../utils/slide"
    import {getTimeline, getEventsList, addEventsList, loadEvents} from "../store"
    import uniqueId from "../utils/uniqueId"
    import { onMount } from "svelte";

    export let params = {}

    let timeLineId = params.id
    $: timeLineId = params.id
    let timeline = getTimeline(params.id)
    $: timeline = getTimeline(params.id)

    async function handleEventAddition(e) {
        let events = getEventsList(timeLineId)
        let newEvent = {
            content: e.detail,
            time: Date.now(),
            eventId: uniqueId()
        }
        await addEventsList(timeLineId, [...events, newEvent])
    }
    onMount(async () => loadEvents(timeLineId || ""))
</script>

<section class="h-full flex flex-col" transition:slide={{duration: 150}}>
    <Header timeline={timeline} />
    <MainArea bind:timelineId={timeLineId}/>
    <Footer on:add-event={handleEventAddition}/>
</section>

<style>
</style>