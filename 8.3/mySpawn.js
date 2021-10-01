const {spawn} = require('child_process')

// uses shell and hence we can use shell syntax
// const child = spawn('ping google.com',{
//     stdio:'inherit',
//     shell:true
// })

// change current working dir
// const child = spawn('dir',{
//     stdio:'inherit',
//     shell:true,
//     cwd:"D:\\Sanket\\Node\\advanced-nodejs-master\\8.2"
// })

// custom env variables
const child = spawn('echo %JAVA_HOME%',{
    stdio:'inherit',
    shell:true,
    env:{JAVA_HOME:"new path"}
})