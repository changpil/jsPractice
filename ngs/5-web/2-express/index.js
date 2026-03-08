// you need to do npm install express
// const express = require('express')

// const server = express()

// server.listen(4242, () => {
//     console.log('Express Server is running...')
// })


// built-in module http

import http from 'http'
const requestListener = (req, res) => {
    res.end("Hello world\n")
}
let server
async function main() {
    // Passing a function : requestListener
    // Calling a function: requestListener()
    server = await http.createServer(requestListener)
}
// const server = http.createServer(requestListener)
// await main()
main()
server.listen(4242, () => {
    console.log('Express Server is running...')
})
