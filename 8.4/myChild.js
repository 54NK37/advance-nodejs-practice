function longTask() {
    let sum = 0;
    for (let i = 0; i < 1e9; i++) {
        sum += i;
    };
    return sum;
}

process.on('message', (data) => {
    console.log('Message from parent', data);
    let sum = longTask()
    process.send(sum.toString())
})

// setInterval(() => {
//     process.send('Hi Parent')
// }, 2000)

