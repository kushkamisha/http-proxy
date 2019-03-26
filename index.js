'use strict'

const http = require('http')
const url = require('url')

const server = http.createServer((clientReq, clientRes) => {

    const headers = clientReq.headers
    console.log({ headers })

    if (clientReq.url) {
        console.log('getting the website')
        // const myUrl = url.parse(clientReq.url)
        // console.log({ myUrl })

        // const options = {
        //     ...url.parse(clientReq.url), //.href,//myUrl.origin,
        //     method: clientReq.method,
        //     query: '/',
        //     headers: clientReq.headers
        // }
        // console.log({ options })

        // const serverReq=http.request(options, servqerRes => {
        //     console.log('i am here')
        //     // console.log({ clientRes })
        //     serverRes.pipe(clientReq, { end: true })
        // })
        // serverReq.on('error', (e) => {
        //     console.error(`problem with request: ${e.message}`);
        // });

        http.get(clientReq.url, serverRes => {
            let data = ''

            serverRes.on('data', chunk => {
                data += chunk
            })

            serverRes.on('end', () => {
                Object.keys(headers).forEach(header => {
                    clientRes.setHeader(header, headers[header])
                })

                clientRes.end(data)
            })

        }).on('error', err => {
            console.error({ err })
        })
    }
})

server.listen(3000)
