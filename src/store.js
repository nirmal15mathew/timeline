import {writable} from "svelte/store"
import uniqueId from "./utils/uniqueId"

const template = [
    {
        title: "Personal",
        description: "Had coffee @starbucks",
        lastTime: 1633427651355,
        id: '_yfiazszh0'
    },
    {
        title: "Work",
        description: "Completed code revision",
        lastTime: 1633427673787,
        id: '_dojollzxv'
    },
    {
        title: "Shopping",
        description: "bought wine glasses from @glassmaker",
        lastTime: 1633427713225,
        id:'_f7yx6f7dv'
    }
]

const timelinesStore = writable(template)

function addNewTimeline(title) {
    timelinesStore.update(current => ([...current, {
        title: title,
        description: 'No description added',
        lastTime: Date.now(),
        id: uniqueId()
    }]))
}
function getTimeline(id) {
    let returnData = {}
    let unsub = timelinesStore.subscribe(data => {
        data.forEach(timeline => {
            if (timeline.id === id) {
                returnData = timeline
            }
        })
    })
    unsub()
    return returnData
}
export default timelinesStore;
export {addNewTimeline, getTimeline}


// theme handling
let themeLocalStorage = localStorage.getItem('theme-color')
const currentTheme = writable(themeLocalStorage || 'light')
function toggleTheme() {
    currentTheme.update(theme => {
        if (theme === "light") {
            localStorage.setItem('theme-color', "dark")
            return "dark"
        }
        else {
            localStorage.setItem('theme-color', "light")
            return 'light'
        }
    })
}
export {currentTheme, toggleTheme}