const EventEmitter = require('events')

class Something extends EventEmitter {
    someFunction() {
        // passing arguments to listener functions
        this.emit('welcome', 'Sanket')
        this.emit('goodbye')
    }
}

const something = new Something()

// event listener function registration
something.on('welcome', (param = 'Anonymous') => {
    console.log(`Hi ${param}.Welcome!!!`);
})

something.on('goodbye', (param = 'Anonymous') => {
    console.log(`Goodbye ${param}.Have a nice day.`);
})

const secondGoodbye = (param = 'Anonymous') => {
    console.log(`Second time Goodbye ${param}.Have a nice day.`);
}

// second listener
something.on('goodbye', secondGoodbye)

something.someFunction()
// to remove listener same function should be passed which was used during registration
something.removeListener('goodbye', secondGoodbye)
something.someFunction()

