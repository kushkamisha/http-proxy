'use strict'

const http = require('http')

const server = http.createServer((req, res) => {
    res.end('<h1>Yeeey!</h1>')
})

server.listen(3000)
