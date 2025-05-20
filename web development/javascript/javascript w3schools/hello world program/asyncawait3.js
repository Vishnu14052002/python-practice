console.log("i love you")


const response = "positive"

function girlFriendReply(){
    return new Promise((resolve,reject)=>{
        setTimeout(function girlfirent(){
            if(response == "positive"){
                resolve("I love you too")
            }
            else{
                reject("i dont love you")
            }
        },3000)
    })
}

async function responseFrom(){
    const result = await girlFriendReply()
    console.log(result)

}






// console.log("i love you")

// const response = "positive"

// function girlFriendReply(){
//     return new Promise((resolve, reject) => {
//         setTimeout(function girlfirent(){
//             if (response == "positive") {
//                 resolve("I love you too");
//             } else {
//                 reject("I don't love you");
//             }
//         }, 3000);
//     });
// }

// async function responseFrom(){
//     try {
//         const reply = await girlFriendReply();   // wait and get reply
//         console.log(reply);                      // print the reply
//         console.log("thankyou");                 // then say thank you
//     } catch (error) {
//         console.log(error);                      // if rejected
//     }
// }

// responseFrom();

