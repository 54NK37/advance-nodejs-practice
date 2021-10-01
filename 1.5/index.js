// instead of

console.log(process.env.PORT);

// read from a config utility

const { config } = require('./util');

console.log(config.port);
