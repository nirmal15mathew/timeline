import Dexie from "dexie";
const db = new Dexie("appDb")

db.version(1).stores({
    timelines: "&id, title, lastTime, *tags",
})


async function addTimelineToDb(obj) {
    if (typeof obj === 'object'){
        await db.timelines.add(obj);
    }
    else {
        throw new Error("argument was not of Type Object");
    }
}

async function removeTimelineFromDb(id) {
    if (typeof id === "string") {
        await db.timelines.where('id').equals(id).delete()
    }
}

async function getAllTimelines(){
    return await db.timelines.limit(20).toArray()
}

export default db;
export {addTimelineToDb, removeTimelineFromDb, getAllTimelines}