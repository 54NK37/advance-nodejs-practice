const fs = require('fs')

function doSomething(file)
{
    return new Promise((resolve,reject)=>{
        fs.readFile(file,(err,data)=>{
            if(err)
            {
                reject(err)
            }
            const newData = data.toString().split('\n')
            resolve(newData)
        })
    })
    

}

doSomething('./numbers')
.then(data=>{
    console.log(data);
})
.catch(err =>{
    console.log(err);
})