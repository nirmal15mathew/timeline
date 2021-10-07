import {linear} from "svelte/easing"
function slide(node, {delay, duration, direction}) {
    let factor = 1
    if (direction === 'l2r') {
        factor = -1
    }
    return {
        delay,
        duration,
        easing: linear,
        css: function(t) {
            let xTrans = factor*(100 - t*100)
            return `transform: translateX(${xTrans}%)`
        }
    }
}
export default slide