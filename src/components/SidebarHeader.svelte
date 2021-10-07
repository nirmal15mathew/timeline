<script>
    import ContextMenuHandler from "./ContextMenuHandler.svelte"
    import ContextMenu from "./ContextMenu.svelte"
    import Searchbar from "./Searchbar.svelte";
    import {SunIcon, MoonIcon, UserIcon} from "svelte-feather-icons"
    import { toggleTheme, currentTheme } from "../store"
    import {push} from "svelte-spa-router"
    export let searchText;

    const contextMenuItems = [
        {
            title: $currentTheme === "light" ? "Dark Theme": "Light Theme", 
            handler: toggleTheme, 
            icon: $currentTheme === "light" ? MoonIcon : SunIcon 
        },
        {
            title: "Account",
            handler: () => {push('/account')},
            icon: UserIcon
        }
    ]
</script>
<ContextMenuHandler>
    <header slot="target">
        <h1 id="list" class="font-bold text-lg text-gray-700 my-2 dark:text-gray-200"><a href="/">
            Timelines
        </a></h1>
        <Searchbar bind:searchText={searchText}/>
    </header>
    <ContextMenu slot="context-menu" menuItems={contextMenuItems}></ContextMenu>
</ContextMenuHandler>