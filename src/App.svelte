<script>
	import routes from "./routes"
	import Router from "svelte-spa-router"
	import Sidebar from "./components/Sidebar.svelte";
	import {currentTheme, loadDb} from "./store"
	import {location} from "svelte-spa-router"
import { onMount } from "svelte";

	/**
	 * The following code is for mobile use
	 * 
	*/
	let screenSize = window.innerWidth
	let sidebarShown = true;
	$: {
		sidebarShown = !($location != "/" && screenSize < 768)
	}
	onMount(loadDb)
</script>
<svelte:head>
	{#if $currentTheme === "light"}
		<meta name="theme-color" content="#E5E7EB" />
	{:else}
		<meta name="theme-color" content="#1F2937" />
	{/if}
</svelte:head>
<div class={$currentTheme}>
	<main class="h-screen w-screen bg-gray-100 flex dark:bg-gray-700 transition-colors">
		{#if sidebarShown}
			<Sidebar />
		{/if}
		<main class="flex-1">
			<Router {routes} />
		</main>
	</main>
</div>

<style global lang="postcss">
	@tailwind base;
  	@tailwind components;
  	@tailwind utilities;
</style>