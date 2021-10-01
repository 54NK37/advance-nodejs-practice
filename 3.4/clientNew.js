const EventEmitter = require('events')
const readline = require('readline')

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})
const client = new EventEmitter()

// clients listener func is  registered here 
const server = require('./serverNew')(client)

// here response function has been regestered on server now
server.on('response',(response)=>{
    console.log('Response:',response);
})

rl.on('line',(input)=>{
    [command,...args] = input.split(" ")
    client.emit('command',command,args)
})
