// STEP 1
// async function getData() {
//     return "hello"
// }
// const p = getData()
// console.log(p)


// JavaScript automatically converts it to:
// function getData() {
//   return Promise.resolve("hello")
// }


// What await Actually Does
// await pauses the function until a Promise settles.

// STEP 2
async function getData() {
    return "hello"
}
const p = await getData()
console.log(p)

// await = syntactic sugar for Promise.then()

// STEP
// STEP
// STEP
// STEP
// STEP
// STEP
// STEP
// STEP
