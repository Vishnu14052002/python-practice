const a = parseInt(document.getElementById("first").value);

function findEvenNumbers(){
    const a = parseInt(document.getElementById("first").value);
    const b = parseInt(document.getElementById("second").value);
    const c = parseInt(document.getElementById("third").value);
    const d = parseInt(document.getElementById("forth").value);
    const e = parseInt(document.getElementById("fifth").value);
    let newarr = [];

    const arr = [a,b,c,d,e]
    console.log(arr)

    for(let i = 0; i <= arr.length; i++){
        console.log(arr[i])
        if (arr[i] % 2 == 0){
            newarr.push(arr[i])
        }
    }
    
    document.getElementById("find").innerHTML = newarr.sort(function(a, b){return a-b})
}



const head = document.getElementById("heading")
document.getElementById("heading_two").innerHTML = head.innerHTML

const all = document.querySelectorAll("h3")
console.log(all[1].innerHTML)

