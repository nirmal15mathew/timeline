<script>
	import routes from "./routes"
	import Router from "svelte-spa-router"
	import Sidebar from "./components/Sidebar.svelte";
	import {currentTheme} from "./store"
</script>
<div class={$currentTheme}>
	<main class="h-screen w-screen bg-gray-100 flex dark:bg-gray-700 transition-colors">
		<Sidebar />
		<main class="flex-grow">
			<Router {routes} />
		</main>
	</main>
</div>

<style global lang="postcss">
	@tailwind base;
  	@tailwind components;
  	@tailwind utilities;
</style>