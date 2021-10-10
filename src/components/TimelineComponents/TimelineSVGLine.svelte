<script>
    import EventsListRender from "./EventsListRender.svelte";
	import {draw} from "svelte/transition"
    export let eventsList;
	let dataPoints = [];
	let length = 0;
	
	function findMax(datap) {
		let maxVal = 0;
		for (let data of datap) {
			if (data > maxVal) {
				maxVal = data;
			}
		}
		return maxVal
	}
	$: length = findMax(dataPoints)
</script>
<ul>
	<EventsListRender {eventsList} bind:dataPoints={dataPoints}/>
</ul>
<svg width="30" height={length+50}>
<line x1="10" y1="0" x2="10" y2={length} stroke="#ccc" stroke-width="3px" transition:draw={{duration: 150}}></line>
{#each dataPoints as point}
	<circle cx="10" cy={point - 60} r="5px" fill="#777" />
{/each}
</svg>
