// const { StringDecoder } = require('string_decoder');
// const decoder = new StringDecoder('utf8');

// process.stdin.on('readable', () => {
//   const chunk = process.stdin.read();
//   if (chunk != null) {
//     const buffer = Buffer.from([chunk]);
//     console.log('With .toString():', buffer.toString());
//     console.log('With StringDecoder:', decoder.write(buffer));
//   }
// });

// // 0xE2, 0x82, 0xAC -> €

const {StringDecoder} = require('string_decoder')
const decoder = new StringDecoder('utf8')
process.stdin.on('readable',()=>{
  const chunk = process.stdin.read()
  const buffer = Buffer.from([0xE2, 0x82, 0xAC ])
  console.log('Your data with toString: ',buffer.toString());
  console.log('Your data with decoder:',decoder.write(buffer));
})
