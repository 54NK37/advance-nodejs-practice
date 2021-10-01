// custom repl 
const repl = require('repl')

// start repl server
let r= repl.start({
  // various custom properties for our repl
  ignoreUndefined:true,
  replMode:repl.REPL_MODE_STRICT
})

// we can add custom package to server instance and use it inside repl
r.context.lodash=require('lodash')
