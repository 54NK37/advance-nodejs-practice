// console.log(global.process.versions)
// console.log(global.process.env)
// console.log(global.process.argv)
// console.log(global.process.release)
// console.log(global.Buffer);
// console.log(global);

// require takes module name it could be js file / folder which has index.js
 require('find-me')
 console.log(module);//loaded = true for find-me module at this point,also its export has some values

global.name='sanket'
console.log(require('module'));
