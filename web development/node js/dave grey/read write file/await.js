async function getData(){
    try{
        const apiData = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await apiData.json();
        console.log(data);
    }
    catch(error){
        console.log(error)
    }
}

console.log(data)

getData()