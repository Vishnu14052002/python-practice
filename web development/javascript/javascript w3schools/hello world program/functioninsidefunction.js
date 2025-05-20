function firstFunction(a){
    function secondFunction(b){
        return a+b
    }
    return secondFunction(2)
}

const a1 = firstFunction(1)
console.log(a1)