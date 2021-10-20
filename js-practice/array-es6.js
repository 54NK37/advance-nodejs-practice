const js= "Javascript"
const jsArray = Array.from(js)
console.log(jsArray);

console.log(jsArray.join('-'));
console.log(...jsArray.entries());
console.log(...jsArray.keys());
console.log(...jsArray.values());

const number = 44
const numberArray = Array.of(number)
console.log(numberArray);

console.log(jsArray.concat(numberArray,45,46));

console.log(jsArray.reverse());

console.log(jsArray.sort());