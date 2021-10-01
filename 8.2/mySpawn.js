const {spawn} = require('child_process')

// (COMMAND,ARGS)
const child = spawn('ping',['google.com'])

// child is event emitter and has various events like data,message,disconnect,error,close
// stdio objects: 
// Writable - child.stdin,
// Readable :child.stdout,child.stderr

child.stdout.on('data',(data)=>{
console.log(data.toString());
})

child.stderr.on('data',(data)=>{
    console.log(data.toString());
    })

child.on('exit',(code,signal)=>{
    console.log(`Process ended with exit code ${code}`);
})