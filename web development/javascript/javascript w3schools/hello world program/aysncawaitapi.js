function getApi(){
    return new Promise((resolve,reject)=>{
        let data = fetch('https://jsonplaceholder.typicode.com/posts');
        if(data){
            resolve("data fettched succcessfully")
        }
        else{
            reject("data is not feteched")
        }
    })
}


async function callApi(){
    try {
        const FinalResult = await getApi()
        console.log(FinalResult)
    } catch (error) {
        console.log(error)
    }
}

callApi()