// function fetchData() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("Data has been fetched!");  // Resolves after 2 seconds
//       }, 2000);
//     });
//   }


//   fetchData()

//   // This is an async function where we use await to wait for the result
// async function getData() {
//     console.log("Fetching data...");
  
//     // The function pauses here until fetchData() Promise resolves
//     let result = await fetchData();
  
//     // After fetchData resolves, this line is executed
//     console.log(result);  // "Data has been fetched!"
// }
  
// getData();  // Call the async function



// console.log("first code");

// console.log("last code");

// // Convert setTimeout into a promise-based function
// function delay() {
//     return new Promise(resolve => {
//         setTimeout(function () {
//             console.log("code in timeout function");
//             resolve(); // Resolve the promise when the timeout completes
//         }, 3000);
//     });
// }

// async function mainDelay() {
//     await delay();  // Waits for the delay function to complete (after 3 seconds)
// }

// async function waiting() {
//     await mainDelay();  // Waits for mainDelay (which waits for delay)
//     console.log("code in waiting function");
// }

// waiting();






function timeTakingFunction(){
    return new Promise(resolve => {
        setTimeout(function timeoutfunction(){
            console.log("this function takes 3 seconds to run");
            resolve();  // Now 'await' will wait for this to finish
        }, 3000);
    });
}

async function final(){
    await timeTakingFunction();  // This will now wait for 3 seconds
    console.log("hello world");
}

final();

