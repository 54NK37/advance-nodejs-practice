const fs = require('fs')

// default cb value to make it work as both cb,promise and async-await
const readFileAsArray = (file, cb = () => { }) => {

    return new Promise((resolve, reject) => {
        fs.readFile(file, (error, data) => {

            if (error) {
                reject(error)
                return cb(error)
            }
            const lines = data.toString().trim().split('\n')
            resolve(lines)
            cb(null, lines)
        })
    })

}

// callback-last argument
readFileAsArray('./numbers', (error, data) => {
    if (error) {
        throw error
    }
    console.log("After File data readas array", data);
})

// promise
readFileAsArray('./numbers')
    .then(data => {
        //called for resolve
        console.log("After File data readas array", data);
    })
    .catch(error => {
        //called for reject
        console.log(error);
    })

// async-await
async function rfa() {
    try {
        // resolve object is retrieved as data by await
        // it throws error object for reject 
        const data = await readFileAsArray('./numbers')
        console.log("After File data readas array", data);
    }
    catch (error) {
        console.log(error);
    }
}
rfa()