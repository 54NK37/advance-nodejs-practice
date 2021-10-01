const http = require("http")

// req :http.ClientRequest
// http.get()
const req =http.request({hostname :'localhost',port : 8000,method:'GET'},
// listener function which gets regeistered on http.ClientRequest
// res:http.IncomingMessage
(res)=>{
console.log(res.statusCode);
console.log(res.headers);
console.log(res.statusMessage);
})

req.on('error',(e)=>console.log(e))
req.end()