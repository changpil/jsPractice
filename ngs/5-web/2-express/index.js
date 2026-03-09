// you need to do npm install express
// const express = require('express')

// const server = express()

// server.listen(4242, () => {
//     console.log('Express Server is running...')
// })


// built-in module http
import http from 'http'
const requestListener = (req, res) => {
    console.log(req.url)
    console.dir(req, { depth: 0 })
    res.end("Hello world\n")
}

// STEP 1
const server = http.createServer()
server.on("request", requestListener)

server.listen(4242, () => {
    console.log('Express Server is running...')
})
