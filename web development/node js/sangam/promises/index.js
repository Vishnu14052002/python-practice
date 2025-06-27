

function delay(time){
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time);
    })
}

console.log(`promise `);

delay(2000).then(() => console.log('after 2 seconds promise resolved'))

console.log('end');



function divide(num1, num2) {
    return new Promise((resolve, reject) => {
        if(num2 ===0){
            reject('cannot divide a number by 0');
        }
        else{
            resolve(num1/num2);
        }
    })
}


divide(1,0).then((resolve) => {
    console.log(resolve)
}).catch((reject) => {
    console.log(reject)
})