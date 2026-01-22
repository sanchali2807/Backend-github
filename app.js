// // let a = 10;
// // let b = 20;
// function add(x,y){
//     return x+y;
// }
// function subtract (x,y){
//     return x-y;
// }
// function divide(x,y){
//     return x/y;
// }
// function multiply(x,y){
//     return x*y;
// }
// process.stdin.on("data", (data) => {
//     console.log("Input:", data.toString().trim());
// });

// console.log("Addition:", add(a, b));
// console.log("Subtraction:", subtract(a, b));
// console.log("Multiplication:", multiply(a, b));
// console.log("Division:", divide(a, b));

// function one(){
//     two();
// }
// function two(){
//     console.log("two");
// }
// one();



//callback
// asynchronous  

// function fetchData(callBack){
//     setTimeout(()=>{
//         callBack("recieved");
//     },2000);
// }
// fetchData((data) => {
//     console.log(data);
// })




// promises
// three states pending , resolve , reject
// by default in pending state


const mypromise = new Promise((resolve,reject)=>{
    let success = true;
    if(success)resolve('Done!!');
    else reject("Lost!!");
});

/// call the promise
mypromise
.then(result => { // success handle
    console.log(result);
})
.catch(error =>{ // error hndle
    console.log(error);
});