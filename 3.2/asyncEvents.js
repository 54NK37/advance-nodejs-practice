const EventEmitter = require('events')
const fs = require('fs')

const abc = new EventEmitter()
const someAsncFunction = function(file)
{
    // Emmitting events from async call
    fs.readFile(file,(error,data)=>{
        if(error)
        {
            return abc.emit('error',error)
        }
        abc.emit('data',data)
    })
}

abc.on('data', (data) => {
    console.log('Received data after async call',data.toString());
})

abc.on('error', (error) => {
    console.log('Error occured : ', error);
})

someAsncFunction(__filename)