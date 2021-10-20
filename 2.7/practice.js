function main() {
    console.log('Inside main');

    setImmediate(() => {
        console.log('SetImmediate');
        process.nextTick(() => {
            console.log('Next tick inside SetImmediate');
        })
    })

    setTimeout(() => {
        console.log('Timeout 2000');
    }, 2000)



    setTimeout(() => {
        process.nextTick(() => {
            console.log('Next tick inside setTimeout');
        })
        console.log('Timeout 0');
    }, 0)


    process.nextTick(() => {
        console.log('Next tick');
    })

}

console.log('Before main');
main()
console.log('After main');