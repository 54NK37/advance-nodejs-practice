const http = require('http')

// http server
// server : http.server
const server = http.createServer()
const fs = require("fs")

server.on('request', (req, res) => {
    // req : http.IncomingMessage
    // res : http.ServerResponse

    // ROUTING
    switch (req.url) {
        case "/home":
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(fs.readFileSync("home.html"))
            // tcp connection is ended with this function 
            res.end()
            break;

        case "/about":
            res.write("About page \n")
            res.end()
            break;

        default:
            // response code,msg,headers
            res.writeHead(404,"Resource not found",{'Content-Type':'text/plain'})
            res.write("Resource not found")
            res.end()
    }

})


server.timeout = 10000

server.listen(8000, () => {
    console.log('Server up at port 8000');
})

