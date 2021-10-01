const fs = require('fs')
const path = require('path')

const files = fs.readdirSync('./files/')

for(file of files)
{
    let destination = path.join(__dirname,'files',file)
    fs.stat(destination,(err,stats)=>{
        let requiredMs = Date.now()-7*24*60*60*1000
        // get time in ms
        if(stats.mtime.getTime() < requiredMs)
        {
            console.log(destination);
            //  to delete file
            fs.unlink(destination,(err)=>{
                if (err) throw err
            })
        }
    })
}