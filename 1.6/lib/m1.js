exports.id = 'm1';

exports.content = [1];
const m2 = require('./m2');//control goes to m2 file and all lines are executed of m2
console.log(m2);//now loaded=true for m2

exports.content.push(11);
exports.content.push(111);
