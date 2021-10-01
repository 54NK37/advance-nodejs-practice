const fs = require('fs')

console.log('SYNC step 1');
fs.readFile(__filename,()=>{

  console.log('ASYNC call 1');

  // Timer is started for same,and when timer is out its callback with get regeistered into event queue
  // When callstack is empty,cb from event queue will be called inside call stack by event loop
  setTimeout(()=>{
    console.log('Timeout!!');
    console.log('ASYNC call 2');
  },2000)

  // it gets executed at immediate next iteration of evemt loop
  setImmediate(()=>{
    console.log('Immediate!!');
    console.log('ASYNC call 3');
  })


})

console.log('SYNC step 2');