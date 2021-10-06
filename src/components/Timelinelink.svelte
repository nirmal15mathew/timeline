<script>
    import Time from "svelte-time"
    import {link} from "svelte-spa-router"
    import ContextMenuHandler from "./ContextMenuHandler.svelte"
    import ContextMenu from "./ContextMenu.svelte"
    import { TrashIcon, ChevronUpIcon } from "svelte-feather-icons";
    export let linkTitle;
    export let description;
    export let lastTime;
    export let id;
    export let isActive = false;
    const normalStyle = "cursor-pointer flex justify-between items-center hover:bg-gray-300 rounded p-2 dark:hover:bg-gray-700"
    const activeStyle = "cursor-pointer flex justify-between items-center rounded p-2 bg-gray-300 dark:bg-gray-700"
</script>
<ContextMenuHandler>
    <a href={'/timeline/'+id} use:link slot="target">
        <article class={isActive ? activeStyle : normalStyle}>
            <div>
                <h3 class="text-base text-gray-700 font-semibold dark:text-gray-100">{linkTitle}</h3>
                <p id="description" class="text-sm text-gray-400 dark:text-gray-300">{description}</p>
            </div>
            <div>
                <time class="text-sm text-gray-400">
                    <Time timestamp={lastTime} relative />
                </time>
            </div>
        </article>
    </a>
    <ContextMenu slot="context-menu" menuItems={[{title: 'Delete', icon: TrashIcon},{title: 'Pin', icon: ChevronUpIcon}]}></ContextMenu>
</ContextMenuHandler>
<style>
    
</style>