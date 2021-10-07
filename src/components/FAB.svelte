<script>
    export let isExpandable = false;
    export let iconComponent;
    export let actionEvent;
</script>
{#if isExpandable}
    <button>
        
    </button>
{:else}
    <button class="absolute bottom-5 right-5 rounded-full md:p-3 shadow-md bg-indigo-500 text-gray-900 p-4" on:click={actionEvent}>
        <svelte:component this={iconComponent} size="1.5x"/>
    </button>
{/if}