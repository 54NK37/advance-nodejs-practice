const string = 'touché';
// create Buffer from provided data
const buffer = Buffer.from(string);

console.log(string, string.length);
console.log(buffer, buffer.length);

buffer[0]='65'
console.log(string,buffer.toString());
