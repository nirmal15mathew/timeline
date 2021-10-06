<script>
    import Timelinelink from "../components/Timelinelink.svelte";
    import ModalCard from "./Modal/ModalCard.svelte";
    import SidebarHeader from "./SidebarHeader.svelte";
    import {PlusIcon} from "svelte-feather-icons"
    import {location} from "svelte-spa-router"
    import timelineStore, {addNewTimeline} from "../store";
    import FAB from "./FAB.svelte"

    let modalOpen = false;

    let searchText = "";
    let bufferStore = [];
    $: {
        bufferStore = []
        $timelineStore.forEach(timeline => {
        if (timeline.title.search(new RegExp(`${searchText}`, 'i')) != -1) {
            bufferStore = [...bufferStore,timeline]
        }
    })}

    let createBuffer = "";
    function addEvnt() {
        addNewTimeline(createBuffer)
        modalOpen = false
    }
</script>
<aside class="h-screen left-0 bg-gray-200 p-3 w-3-screen relative dark:bg-gray-800 transition-colors">
    <SidebarHeader bind:searchText={searchText} />
    <ul>
        {#each bufferStore as timeline}
            <li class="my-1">
                <Timelinelink 
                    linkTitle={timeline.title} 
                    description={timeline.description} 
                    lastTime={timeline.lastTime} 
                    id={timeline.id}
                    isActive={'/timeline/'+timeline.id === $location}
                />
            </li>
        {/each}
    </ul>
    <FAB actionEvent={() => {modalOpen = true}} iconComponent={PlusIcon} />
    <ModalCard isOpen={modalOpen} modalTitle="New Timeline" on:close={() => {modalOpen = false}}>
        <main slot="content" class="w-full">
            <input type="text" class="bg-gray-300 rounded focus:bg-gray-200 outline-none p-2 w-full focus:ring focus:ring-gray-400" bind:value={createBuffer}>
        </main>
        <div slot="footer">
            <button class="rounded p-2 text-gray-50 bg-indigo-600" on:click={addEvnt}>Add</button>
        </div>
    </ModalCard>
</aside>

<style>
    .w-3-screen {
        width: 30vw;
        min-width: 280px;
    }
</style>