let javascript = true;

let MyJavascript = new Promise((resolve, reject) =>{
    if(javascript){
        resolve("i learned javascript")
    }
    else{
        reject("im learning javascript")
    }
});

console.log(MyJavascript)

MyJavascript.then((message)=>{
    console.log(message)
}).catch((error)=>{
    console.log(error)
})