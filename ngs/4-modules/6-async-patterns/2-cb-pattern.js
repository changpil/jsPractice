


// callback-style
// const fs = require('fs');
// fs.readFile(__filename, function cb(err, data) {
//   if (err) {
//     console.error("Error reading file:", err);
//     return; // stop execution
//   }

//   console.log("File data is", data);
// });
// console.log('TEST');




// Modern Way — Promise Version (Recommended)
// const fs = require("fs/promises");
// fs.readFile(__filename)
//   .then(data => {
//     console.log("File data is", data);
//   })
//   .catch(err => {
//     console.error("Error reading file:", err);
//   });
// console.log('TEST');




// Async/Await (best) ESM module
// __filename CommonJS module only
// top level await usage can be only in ESM module
// import fs from "fs/promises";
// import { fileURLToPath } from "url";
// const __filename = fileURLToPath(import.meta.url);
// try {
//   const data = await fs.readFile(__filename);
//   console.log("File data is", data);
// } catch (err) {
//   console.error(err);
// }
// console.log("TEST");

import fs from "fs/promises"
import { fileURLToPath } from "url"
const __filename = fileURLToPath(import.meta.url)
async function main() {
    try {
        const data = await fs.readFile(__filename)
        console.log("File data is", data)
    } catch (err) {
        console.error(err)
    }
    console.log("TEST")
}
main()
await main()
console.log("DONE")





// commonJS await/sync
// const fs = require("fs/promises");
// async function main() {
//   try {
//     const data = await fs.readFile(__filename);
//     console.log("File data is", data);
//   } catch (err) {
//     console.error("Read failed:", err);
//   }
//   console.log("TEST 2");
// }
// main();
// console.log("TEST 1");



