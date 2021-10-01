const {fork} = require('child_process')

// starts new high computation process
const forkedProcess = fork('myChild.js')

forkedProcess.send('Hi child')

forkedProcess.on('message',(data)=>{
    console.log('Child says : ',data);
})