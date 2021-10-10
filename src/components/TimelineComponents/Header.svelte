<script>
    import {replace} from "svelte-spa-router"
    import {ArrowLeftIcon} from "svelte-feather-icons"
    export let timeline;
</script>
<header class="bg-gray-600 px-3 py-4 shadow-md">
    <section class="flex items-center">
        <button on:click={() => replace('/')} class="flex md:hidden pr-2 text-gray-50">
            <ArrowLeftIcon size="1.5x" />
        </button>
        <h1 class="font-semibold text-gray-50 text-lg">{timeline.title}</h1>
    </section>
</header>