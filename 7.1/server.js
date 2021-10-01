const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  // fs.readFile('./big.file', (err, data) => {
  //   if (err) throw err;
  //
  //   res.end(data);
  // });

  // this server doesnt consume large memory due to big file
  // as data is feeded in the form of chunks
  const src = fs.createReadStream('./big.file');
  src.pipe(res);
});

server.listen(8000);
