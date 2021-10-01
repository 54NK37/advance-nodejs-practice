const lodash = require('lodash')
const print = (stars,headers)=>{
  console.log(lodash.repeat('*',stars));
  console.log(headers);
  console.log(lodash.repeat('*',stars));
}

// to see wrapping function
console.log(require('module').wrapper);

if(require.main == module)
{
  // to run as script through terminal and passing arguments
  print(global.process.argv[2],global.process.argv[3])
}
else{
  //  to use as module inside another file
  module.exports = print
}