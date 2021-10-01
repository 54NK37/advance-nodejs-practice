// relateive path
require('./globalS')
// global variable directly accessed here
console.log(name);

// absolute path means with respect to root directory serach inside node_modules
require('find-me')
console.log(surname);