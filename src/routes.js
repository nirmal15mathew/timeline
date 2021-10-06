import Home from "./pages/Home.svelte";
import Timeline from "./pages/Timeline.svelte"
import Account from "./pages/Account.svelte"
const routes = {
    '/': Home,
    '/timeline/:id': Timeline,
    '/account': Account
}

export default routes;