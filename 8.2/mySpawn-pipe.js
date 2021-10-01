const {spawn} = require('child_process')
const child = spawn('wc')

// send input to child process
global.process.stdin.pipe(child.stdin)

child.stdout.on('data',(data)=>{
    console.log(data.toString());
})