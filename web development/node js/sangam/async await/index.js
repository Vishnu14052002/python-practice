

function delay(time){
    new Promise((resolve, reject) => {
        setTimeout(resolve, time)
    })
}

async function delay1(name){
    await delay(2000);
    console.log(name)
}

delay1('vishnu')




async function divide(num1, num2) {
    try{
        if(num2 === 0){
            throw new Error(' cannot divide b 0');
        }
        return num1 / num2;
    }
    catch(err){
        console.log(err)
        return null
    }
}

async function main(){
    console.log(await divide(1,4))
}

main()