


// Promise.resolve().then(() => console.log("promise"))

// STEP 1
// const p = new Promise((res) => res())
// p.then(() => {
//     console.log("then")
// })
// console.log("done")


// STEP 2
// const p = new Promise(
//     () => {
//         console.log("resolve")
//     }
// )
// p.then(() => {
//     console.log("then")
// })
// console.log("done")


// STEP 3
// const p = new Promise(resolve => resolve(value))
// **** Your promise is pending forever, but a pending promise by itself does not keep the Node.js process alive ***
// const p = new Promise((res, rej) => {
//     console.log("promise")
//     res("running promise")
// })
// p.then(result => {
//     console.log("then")
//     console.log(result)
// })
// console.log("done")

// STEP 4 unresolved event loop
// **** Your promise is pending forever, but a pending promise by itself does not keep the Node.js process alive ***
// const p = new Promise(() => {
//     setInterval(() => {
//         console.log("promise")
//     }, 1000)
// })
// p.then(result => {
//     console.log("then")
//     console.log(result)
// })
// console.log("done")


// STEP 5
// This does not make sense. You cannot get the resolved value synchronously.
// You must use resolved value (result) inside .then() or a chain of .then() calls.
// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("timeout")
//         resolve("send args")
//     }, 1000)
// })
// const result = p.then(result => {
//     console.log("then")
//     return result
// })
// console.log(result)
// console.log("done")


// STEP 6
// const p = new Promise((resolve, reject) => {
//     setInterval(() => {
//         console.log("timeout")
//         resolve("send args")
//     }, 1000)
// })
// p.then(result => {
//     console.log("then")
//     // use result inside of .then
//     console.log(result)
//     console.log("done")
// })


// STEP 7
// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("timeout")
//         resolve("send args")
//     }, 1000)
// })
// const result = await p.then(result => {
//     console.log("then")
//     return result
// })
// console.log(result)
// console.log("done")


// STEP 8 catch
// const p = new Promise((res, rej) => {
//     rej("reject")
// })
// const pThen = p.then(result => {
//     console.log("then")
//     console.log(result)
// }).catch(err => {
//     console.log("catch")
//     console.log(err)
// })
// console.log("done")


// STEP 9 Do not use catch first with chaining
// const p = new Promise((res, rej) => {
//     rej("reject")
// })
// const pCatch = p.catch(err => {
//     console.log("catch")
//     console.log(err)
// }).then(result => {
//     console.log("then")
//     console.log(result)
// })
// console.log("done")


// STEP 10 Do not use catch first with chaining
// const p = new Promise((res, rej) => {
//     rej("reject")
// })
// const pThen = p.then(result => {
//     console.log("then")
//     console.log(result)
// }).catch(err => {
//     console.log("catch")
//     console.log(err)
// })
// console.log("done")


// STEP 11
// const p = new Promise((res, rej) => {
//     res("run")
// })
// const pThen = p.then(result => {
//     console.log("then")
//     console.log(result)
// }).catch(err => {
//     console.log("catch")
//     console.log(err)
// })
// console.log("done")


// STEP 12 multiple handlers attached to the same Promise.
// const p = new Promise((res, rej) => {
//     setTimeout(() => rej("reject"), 1000)
// })
// const p1 = p.then(result => {
//     console.log("then1")
//     console.log(result)
// }).catch(err => {
//     console.log("catch1")
//     console.log(err)
// })
// const p2 = p.then(result => {
//     console.log("then2")
//     console.log(result)
// }).catch(err => {
//     console.log("catch2")
//     console.log(err)
// })
// console.log("done")


// STEP 13 Promise Returning Function (Very Common Pattern)
// function fetchUser() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const user = { id: 1, name: "Chang" }
//             resolve(user)
//         }, 1000)
//     })
// }
// fetchUser().then(user => {
//     console.log(user.name)
// })
// console.log("done")

// STEP 14 Promise Chain Example
// function getNumber() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(5)
//         }, 1000)
//     })
// }
// getNumber()
//     .then(num => num * 2)
//     .then(num => num + 3)
//     .then(result => console.log(result))
// console.log("done")

// STEP 14 Error Handling Example
// function divide(a, b) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (b === 0) {
//                 reject("Cannot divide by zero")
//             } else {
//                 resolve(a / b)
//             }
//         }, 1000)
//     })
// }
// divide(10, 0)
//     .then(result => console.log(result))
//     .catch(error => console.log(error))


// STEP 15 Real-World Example (API Call)
// fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then(response => response.json())
//     .then(data => console.log(data.name))
//     .catch(err => console.error(err))

// async function getData() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
//     const data = await response.json()
//     console.log(data.name)
// }
// getData()

// STEP 16 Simple Multiple Promises
// const p1 = Promise.resolve(1)
// const p2 = Promise.resolve(2)
// const p3 = Promise.resolve(3)

// Promise.all([p1, p2, p3]).then(values => {
//     console.log(values)
// })



// STEP 17 Multiple Promises
function p1() { return new Promise(resolve => setTimeout(resolve(1), 1000)) }
function p2() { return new Promise(resolve => setTimeout(resolve(2), 2000)) }
function p3() { return new Promise(resolve => etTimeout(resolve(3), 3000)) }
Promise.all([p1(), p2(), p3()]).then(values => {
    console.log(values)
})

// STEP 18 Super Important Interview Pattern
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
async function run() {
    console.log("Start")
    await delay(2000)
    console.log("End")
}
run()
