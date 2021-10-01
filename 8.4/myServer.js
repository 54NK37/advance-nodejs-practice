const http = require('http')
const server = http.createServer()
const  {fork} = require('child_process')
const childProcess = fork('myChild.js')

function longTask() {
    let sum = 0;
    for (let i = 0; i < 1e10; i++) {
        sum += i;
    };
    return sum;
  }

  
server.on('request',(req,res)=>{
    if(req.url === '/compute')
    {
        // this would block server till computation is completed and hence wont take any request
        // let sum = longTask()
        // res.write(sum.toString())

        // now server doesnt get blocked as it is another child process
        childProcess.send('start computation')
        childProcess.on('message',(data)=>{
            res.write(data)
        })
    }
    else{
        res.write('Server working')
        res.end()
    }
})
server.listen(5000)