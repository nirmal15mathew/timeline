<script>
    export let menuItems = [];
</script>
<div class="rounded bg-gray-50 py-2 dark:bg-gray-600 dark:text-gray-100 w-32 shadow-md flex justify-center text-gray-700">
    <ul class="w-full">
        {#each menuItems as menuItem}
            <li class="dark:hover:bg-gray-700 w-full hover:bg-gray-300 px-2 py-1">
                <button on:click={menuItem.handler} class="w-full flex items-center">
                    <svelte:component this={menuItem.icon} size="1x" class="mr-1" />
                    {menuItem.title}
                </button>
            </li>
        {/each}
    </ul>
</div>

<style>
    div {
        animation: grow-up 200ms;
    }
    @keyframes grow-up {
        from {
            transform: scale(0);
        }
        to {
            transform: scale(1);
        }
    }
</style>