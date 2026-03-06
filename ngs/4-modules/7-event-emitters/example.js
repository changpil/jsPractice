const EventEmitter = require('events')

const event = new EventEmitter()

setImmediate(() => {
    event.emit("TEST_EVENT")
})
let intervalId

event.on("TEST_EVENT", () => {
    console.log("test event received 1")
    setTimeout(() => clearInterval(intervalId), 5000)
})

event.on("TEST_EVENT", () => {
    setTimeout(() => console.log("test event received 2"), 10)
})

event.on("TEST_EVENT", () => {
    intervalId = setInterval(() => console.log("test event received 3"), 1000)
})

event.on("TEST_EVENT", () => {
    console.log("test event received 4")
})

// event.emit("TEST_EVENT");

