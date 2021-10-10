import db, { getAllTimelines, addTimelineToDb, removeTimelineFromDb, addEvent, getAllEventsOfTimeline} from "./utils/db"
import {writable, get} from "svelte/store"
import uniqueId from "./utils/uniqueId"

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
                let buffer = data
                buffer.splice(ind, 1)
                timelinesStore.update(_ => buffer)
                tdata.id = timeline.id
            }
        })
    })
    removeTimelineFromDb(tdata.id)
    db.events.where('timelineId').equals(id).delete()
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


/**
 * Manage all the events in specefic timelines
 * Event structure
 * time - Date.now
 * content - string
 * eventId - uniqueId
 * tags? - array containing string/char
 */
const exampleEvent = {
    eventId: '_ndSpow9d',
    time: Date.now(),
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
}
const exampleEvent2 = {
    eventId: '_4dqrj7iwv',
    time: Date.now(),
    content: exampleEvent.content
}
const eventsStore = writable({
    '_mo9tkpd4o': [exampleEvent, exampleEvent, exampleEvent, exampleEvent, exampleEvent],
    '_4dqrj7iwv': [exampleEvent2]
})

// takes the id of the timeline and list of events as 
// parameters.
async function addEventsList(id, eventsList) {
    eventsStore.update(state => {
        state[id] = eventsList
        return state
    })
    // get the last element, which is the new event added
    var obj = eventsList.slice(-1)[0]
    await addEvent({...obj, timelineId: id})
}
function getEventsList(id) {
    return get(eventsStore)[id] || []
}

async function loadEvents(timelineId) {
    let eventsOfTimeline = await getAllEventsOfTimeline(timelineId)
    eventsStore.update(state => {
        state[timelineId] = eventsOfTimeline
        return state
    })
}
export {eventsStore, addEventsList, getEventsList, loadEvents}