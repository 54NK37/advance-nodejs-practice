// TCP SOCKET
const net = require('net')
const server = net.createServer()

let sockets = {}
let counter = 0

// gets client socket object on connection => TCP connection oriented
// we can have multiple clients
// to connect with clients : telnet localhost 8000
server.on('connection', socket => {
    socket.counter = ++counter;
    sockets[counter] = socket

    console.log('Client connected');

    // server to client
    socket.write('Welcome client \n')

    // client to server
    socket.on('data', data => {
        // socket.write(data)

        // send data to all clients using sockets
        for(const key in sockets)
        {
            if(key == socket.counter)
            {
                continue
            }
            sockets[key].write(data)
        }
    })

    socket.setEncoding('utf8')

    // when client connection is about to end
    socket.on('end', () => {
        console.log('Client disconnected');
    })
})

// server hosting
server.listen(8000, () => {
    console.log('Server is running on port', server.address());
})