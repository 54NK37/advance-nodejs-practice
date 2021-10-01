exports.id = 'm2';

exports.content = [2];
exports.content.push(22);
exports.content.push(222);

// circular dependency
const m1 = require('./m1');//at this point m1 has not loaded completely yet
// control stays here itself being child 
console.log('m1 is not loaded yet', m1);//and has partial value inside m1
