

// STEP 1
// const requestListener = () => {
//     console.log("listener")
// }
// async function main() {
//     await requestListener()
//     console.log("Guess what?")
// }
// console.log("main 1")
// // await main().   // option 1: with await
// main()      // option 2: without await
// console.log("main end")


// STEP 2
// const requestListener = () => {
//     console.log("listener")
// }
// async function main() {
//     await requestListener()
//     console.log("Guess what?")
// }
// console.log("main 1")
// await main().   // option 1: with await
// console.log("main end")


// STEP 3
// setTimeout(() => console.log("timeout"))
// Promise.resolve().then(() => console.log("promise"))
// console.log("sync")


// STEP 4
// Promise.resolve().then(() => console.log("promise"))
// process.nextTick(() => console.log("nextTick"))

// STEP 5
// setTimeout(() => console.log("timeout"))
// Promise.resolve().then(() => console.log("promise"))
// process.nextTick(() => console.log("nextTick"))
// console.log("sync")
// console.log("start")

// STEP 6 nextTick(()
// process.nextTick(() => {
//     console.log("nextTick")
// })
// Promise.resolve().then(() => {
//     console.log("promise")
// })
// setTimeout(() => {
//     console.log("timeout")
// }, 0)
// console.log("end")
