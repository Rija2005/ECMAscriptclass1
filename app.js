// //line by line statment print  in js called as Synchronous progaming
// console.log("one");
// console.log("two");
// console.log("three");
// //Asynchronous progaming that will initiate now and execute later,,if JavaScript has to wait for an operation to complete, it will execute the rest of the code while waiting
// console.log("start");
// setTimeout(()=>{
//     console.log("hello world");//print after 2sec delay
// },2000)
// console.log("end");//print first then above

// //CallBack:is A callback is a function passed as an argument to another function

// //This technique allows a function to call another function

// //A callback function can run after another function has finished
// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b,sumCallback){
//     sumCallback(a,b )
// }
// calculator(3,5,sum)

// function myDisplayer(some){
//     document.getElementById("demo").innerHTML=some//show on browser
// }
// function myCalculator(num1,num2){
//     let sum =num1+num2
//     return sum
// }
// let result=myCalculator(5,5)
// myDisplayer(result)

// // //callback hell
// // function sum(a,b){
// //     console.log(a+b);
// // }
// // function sub(a,b){
// //     console.log(a-b);
// // }
// // function calculator(a,b,sumCallback, subCallback){
// //     sumCallback(a,b )
// //     subCallback(a,b)
// // }
// // calculator(3,5,sum ,sub)//subcallback is not a function
 
// function getData(dataId,getNextdata){
//     setTimeout(()=>{
//         console.log("data",dataId);

// if(getNextdata){
//     getNextdata()
// }//call back hell

//     },2000)
//  }
// getData(1,() => {

//     getData(3,() => {//it will print after 2sec delay

//         getData(5,() => {//it will print after 2 sec delay

//         })
//     })

// })//this is callbackhell//ek function k andar dusry function ko as an argument krnaa


// // getData(1);
// // getData(3);
// // getData(5);


// //PROMISES:A Promise is an object representing the eventual completion or failure of an asynchronous operation. Since most people are consumers of already-created promises, this guide will explain consumption of returned promises before explaining how to create them
// //3 promises:A JavaScript Promise object can be: Pending. Fulfilled. Rejected.

// // let promise =new Promise((resolve,reject )=>{
// //       console.log("iam promise");
// //     //   resolve("iam resolve")//fulfilled
// //       reject("iam reject");//rejected;uncaught error
// // }) 

// //in promise we can make function also .."then "is also build in function used for resolve.."catch" is also build in function for reject..
// // let complete=true;
// // let prom =new Promise(function(resolve,reject){
// //     if(complete){
// //         resolve("iam sucess");

// //     }
// //     else{
// //         reject("iam failure")
// //     }
// // })
// // console.log(prom);



let promise=new Promise(function(resolve,reject){
    let x="hello world";
    let y="hello world";
    if(x==y){
        resolve()
    }
    else{
        reject()
    }
})
promise.then(function(){
    console.log("iam resloved");
})
promise.catch(function(){
    console.log("iam a failure");
})

 

const isPhoneStore = true;
const isPhoneAvailable = true;

function processMessage() {
  return new Promise((resolve, reject) => {
    if (!isPhoneStore) {
      reject({
        name: 'Wrong store',
        message: 'Sorry, this is a food store!',
      });
    } else if (!isPhoneAvailable) {
      reject({
        name: 'Out of stock',
        message: 'Sorry, the X phone is out of stock!',
      });
    } else {
      resolve({
        name: 'OK',
        message: 'The X phone is available! How many you want to buy?',
      });
    }
  });
}

processMessage()
  .then(response => console.log(response))
  .catch(error => console.log(error));



  //we can use then and catch in function as an paameters via creating arrow function../
  