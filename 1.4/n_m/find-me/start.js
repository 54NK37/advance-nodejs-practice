global.surname='farande'
console.log("Inside start.js");
console.log(module);//loaded = false for find-me module at this point,because some lines are still pending 
// and control is yet to be returned
module.exports.name="sanket"