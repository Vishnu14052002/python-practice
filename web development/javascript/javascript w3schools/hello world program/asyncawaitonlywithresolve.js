console.log("i love you");


function myGirlFriendReply(){
    return new Promise((resolve) => {setTimeout(()=> {
        resolve("i love you too")
    },3000)})
}


async function finalResultFunction(){
    let FinalGirlFriendResult = await myGirlFriendReply();
    console.log(FinalGirlFriendResult)
    console.log("thankyou")
    
}

finalResultFunction()