import { getAllTimelines, addTimelineToDb, removeTimelineFromDb} from "./utils/db"
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

const timelinesStore = writable([])

async function loadDb() {
    let allTimelines = await getAllTimelines()
    timelinesStore.set(allTimelines)
}

async function addNewTimeline(title) {
    let newObj = {
        title: title,
        description: 'No description added',
        lastTime: Date.now(),
        id: uniqueId()
    }
    timelinesStore.update(current => ([newObj, ...current]))
    await addTimelineToDb(newObj);
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

async function deleteTimeline(id) {
    let tdata = {}
    let unsub = timelinesStore.subscribe(data => {
        data.forEach((timeline, ind) => {
            if (timeline.id === id) {
                console.log(ind)
                let buffer = data
                buffer.splice(ind, 1)
                console.log(buffer)
                timelinesStore.update(_ => buffer)
                tdata.id = timeline.id
            }
        })
    })
    removeTimelineFromDb(tdata.id)
    unsub()
}

export default timelinesStore;
export {addNewTimeline, getTimeline, loadDb, deleteTimeline}


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