<script>
    import Footer from "../components/TimelineComponents/Footer.svelte"
    import {getTimeline} from "../store"
    export let params = {}
    let timeline = getTimeline(params.id)
    $: timeline = getTimeline(params.id)
</script>

<section class="flex flex-col h-full">
    <header class="bg-gray-600 px-3 py-4 shadow-md">
        <section>
            <h1 class="font-semibold text-gray-50 text-lg">{timeline.title}</h1>
        </section>
    </header>
    <main class="flex-grow flex justify-end">
        <svg class="w-10">
            <line x1="10" y1="0" x2='10' y2="500" stroke="gray"></line>
        </svg>
    </main>
    <Footer />
</section>