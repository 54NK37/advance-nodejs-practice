const fs = require('fs')
const util =require('util')

//creates streams  
const out = fs.createWriteStream("./out.log")
const err = fs.createWriteStream("./err.log")

// use streams as stdout and stderr
const console2 = console.Console(out,err)

// setInterval(()=>{
//     console2.log(new Date())
//     console2.error(new Error("Whoops"))
// },5000)


