const fs = require('fs')
const path = require('path')

const filesDir = fs.readdirSync('./files/')

// for (let file of filesDir) {
//     let destination = path.join('./files/', file)
//     var b = fs.readFileSync(destination)
//     b = b.toString().slice(0, b.length / 2)
//     fs.writeFileSync(destination, b)
// }

fs.stat(path.join('./files/', 'httpsNew.js'), (err, stats) => {
    if (err) {
        throw err
    }

    console.log(stats);
    fs.truncate(path.join('./files/', 'httpsNew.js'), Math.ceil(stats.size/2), (err) => {
        if (err) {
            throw err
        }
    })
})
