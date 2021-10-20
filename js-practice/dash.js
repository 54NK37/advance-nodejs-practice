const answers =['autoregressivemodel','smartlogmonitor','testlytic','priority','shiftleft','elasticsearch','DevOps','selfhealing']

answers.forEach(answer =>{
    let dashAns = answer.replace(/[a-z | A-Z]/g,' _')
    console.log(`${answer} - ${dashAns}`);
})
