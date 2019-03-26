'use strict'

const http = require('http')

const server = http.createServer((creq, cres) => {
    if (creq.url) processRequest(creq, cres)
})

function processRequest(creq, cres) {
    const url = creq.url
    http.get(url, (sreq, sres) => {
        sreq.pipe(cres)
    })
}

server.listen(3000)
