const EventEmitter = require('events')

class Server extends EventEmitter {
    tasks ={}
    taskId=1
    constructor(client) {
        super()
        // gets executed immedietely in next event tick i.e after line 16 of serverNew
        process.nextTick(()=>{
            this.emit('response', 'Welcome to task manger')
        })
        // listener function,which emits response from server
        client.on('command', (command,args) => {
            console.log('Command : ', command);
            switch (command) {
                case 'help':
                case 'add':
                case 'delete':
                case 'ls':
                this[command](args)
                break;
                default :
                this.emit('response','Unknown command');
               

            }
        })

    }

    help() {
        this.emit('response', 
        `Available commands : 
            add [Task name]
            delete [Task id]
            ls`)
    }

    add(args) {
        let taskName = args.join(' ')
        this.tasks[this.taskId]=taskName
        this.emit('response',`Added task : ${taskName}`)
        this.taskId++
    }

    delete(taskId) {
        let deletedTask = this.tasks[taskId]
        delete this.tasks[taskId]
        this.emit('response',`Deleted task : ${deletedTask}`)
    }

    ls() {
        this.emit('response',this.tasks)
    }
}

module.exports = (client) => {
   return new Server(client)
}