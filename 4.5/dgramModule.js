// UDP SOCKET
const dgram = require('dgram')
const PORT = 3232
const HOST = '127.0.0.1'

//SERVER UDP SOCKET
const server = dgram.createSocket('udp4')

server.bind(PORT,HOST)

server.on('listening',()=>{
    console.log('UDP Server listening');
})

server.on('message',(msg, rinfo)=>{
console.log(`${rinfo.address}:${rinfo.port} Client says : `,msg.toString());
})

// CLIENT: NEW UDP SOCKET
const client = dgram.createSocket('udp4')
const buffer = Buffer.from('Hello sanket')

client.send('Hello',PORT,HOST,(error)=>{
    if(error)
    throw new error

    console.log('UDP message 1 sent');
})

client.send(buffer,5,buffer.length,PORT,HOST,(error)=>{
    if(error)
    throw new error

    console.log('UDP message 2 sent');
    client.close()
})