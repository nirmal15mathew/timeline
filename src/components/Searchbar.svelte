<script>
    export let searchText;
</script>
<section class="px-2 py-3 w-full">
    <input 
        type="text" 
        bind:value={searchText} class="w-full rounded-full px-2 py-1 outline-none bg-gray-300 focus:bg-gray-50 dark:bg-gray-200 focus:ring focus:ring-gray-300" placeholder="Search...">
</section>