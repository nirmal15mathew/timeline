<script>
    import {PlusCircleIcon} from "svelte-feather-icons"
    import {createEventDispatcher} from "svelte"

    let inputBuffer = "";
    const dispatch = createEventDispatcher()
    function handleClick() {
        dispatch('add-event', inputBuffer)
        inputBuffer = ""
    }
</script>
<footer class="bg-gray-200 w-full p-3 flex dark:bg-gray-700">
    <input type="text" class="rounded-lg p-2 outline-none dark:bg-gray-400 dark:focus:bg-gray-100 text-gray-800 flex-grow focus:ring focus:ring-gray-400" placeholder="Add new event" bind:value={inputBuffer}>
    <button class="p-2 rounded-lg bg-indigo-500 ml-3 text-gray-50 flex-none flex justify-center h-10 w-10" on:click={handleClick}>
        <PlusCircleIcon size="1.5x"/>
    </button>
</footer>