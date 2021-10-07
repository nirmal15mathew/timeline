<script>
    import Footer from "../components/TimelineComponents/Footer.svelte"
    import slide from "../utils/slide"
    import {ArrowLeftIcon} from "svelte-feather-icons"
    import {getTimeline} from "../store"
    import {replace} from "svelte-spa-router"
    export let params = {}
    let timeline = getTimeline(params.id)
    $: timeline = getTimeline(params.id)
</script>

<section class="flex-col h-full flex" transition:slide={{duration: 150}}>
    <header class="bg-gray-600 px-3 py-4 shadow-md">
        <section class="flex items-center">
            <button on:click={() => replace('/')} class="flex md:hidden pr-2 text-gray-50">
                <ArrowLeftIcon size="1.5x" />
            </button>
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