// process is an event emitter
// called everytime before node process ends
process.on('exit', (code) => {
  // do one final synchronous operation
  // before the node process terminates
  console.log(`About to exit with : ${code}`);
})

//called before exit
process.on('uncaughtException', (err) => {
  // something went unhandled.
  // Do any cleanup and exit anyway!
  console.error(err);    // don't do just that.

  // FORCE exit the process too.
  // safe option
  process.exit(1);
})

// trigger a TypeError exception
console.dog();