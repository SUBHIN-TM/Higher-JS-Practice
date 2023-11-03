//SMALL THING
// function sum(a,b,c){
//     let result=a+b+c
//     return result
// }

//  let x=sum(10,20,30)
//  console.log(x);
















// //CALL BACK
// console.log("Just call back Chapter 1");
// const cart=["shoe","shirt"]
// api.createOrder(cart,function(){
//     api.proceedtoPayment(function(){
//         api.showOrderSummery(function(){
//             api.updateWallet()
//         })
//     })
// })

// // HERE WE PROVIDE PAYMENT FUNCTIONAN AS CALLBACK FUNCTION TO CREATE ORTDER










// //CHAT GPT BASIC CALL BACK
// console.log("\n");
// console.log("CHAT GPT BASIC CALL BACK");
// // Simulating an asynchronous operation to fetch data
// function fetchData(callback) {
//     setTimeout(function () {
//         const data = "Hello, this is the fetched data!";
//         callback(data); // Calling the callback with the fetched data
//     }, 2000); // Simulate a 2-second delay
// }

// // Define a callback function
// function processData(data) {
//     console.log("Data received: " + data);
// }

// // Call the fetchData function and pass the processData function as a callback
// fetchData(processData);








 
// //MY CALLBACK FUNCTION
// console.log("\n");
// function downloading(driveServer){
//     setTimeout(() => {
//         let data="my image that downloded from my drive ";
//         driveServer(data)     
//     }, 5000);
// }
// function display(image){
//     console.log(image);
// }

// downloading(display)








// //WHY CALL BACK 1ST METHORD MY FINDINGS
// console.log("\n");
// console.log("1st method");
// console.log("running 1");
// console.log("running 2");
// setTimeout(() => {
//     console.log("running 3");
// }, 5000);
// console.log("running 4");
// //we cant get the delay before running 4 WE GET THE TIMOUT AFTER ALL STCK ELLEMNTS EXECUTED.TO GET THE TIME WITH OREDER USE CALL BACK



















// //USING NORMALLY FUNCTION ITS ANCT GET THE DATA IT SHOW UNDEFINED PRROVE 1.
// console.log("\n");
// console.log("METHOD TO SOLVE ");
// console.log("running 1");
// console.log("running 2");
// function delay(){
//     setTimeout(() => {
//        let a="running 3"
//        return a  
//     }, 5000);
// }

// // console.log(delay());
// let k=delay()
// console.log(k);
// console.log("running 4");
// //NOW IT MAINTAIN THE DATA IN ORDER BUT WE DIDINT GET THE DATA ,ITYS DISPLAYED AS UNDEFINED
// //UN DEFINED BCZ IT NOT RETURN ANYTHING,IT RETURN ONLY AFTER 5 SECOND.SO JS SHOULD JUMP TO NEXT LINE,DONT WAIT FOR 5SECONDS
// //1-CALLED THE FUNCTION,SO EXECUTED IT,THAT TIME SET TIME OUT IS IN QUEUE IT WILL COME TO STACK AFTER 5SECONDS,BUT NO ONE IS CALLING AGAI THAT TIME OUT,ALREDY EXECUTED THAT FUNCTION LINE
// //IN ABOVE METHOD 1 IT WILL AFTER 5S BCZ IT CALLED DIRECTLY,IN THIS METHOD IT CALLED INNER FUNCTION SO IT CANT SEND THE OUTPUT TO NO WHERE,BCZ AT THE TIME OF OUTPUT COME THE LINE ALREDY PAASED
// //THATS WHY A=UNDEFINED
// //WE GOT ORDER BUT DONT GET THE VALUE









// // NOW USE AS CALL BACK FUNCTION  SO THE VALUE IS SAFE  PROOVE 2
// console.log("\n");
// console.log("METHOD TO SOLVE USING CALLBACK ");
// console.log("running 1");
// console.log("running 2");
// function delay(x){
//     setTimeout(() => {
//        let a="running 3"
//        x(a)
//     }, 5000);
// }

//  function callBack(data){
//     console.log(data);
//  }

// delay(callBack)
// console.log("running 4");
// //now the data is safe NEVER SHOW AS UNDEFINED


 



//CALL BACK HELL
 const eductaion=["plus TWo","degree","engineering"] 
selection(eductaion, function (branch) {
    choosePlace(branch,function (fees){
        paymentmode(fees,function(status){
            provideIdCard();
        })

    })
})







//STUDY ONLY THIS 3 BELOw




// //WHY WE NEEED CALLBACK 
// function delay(){
//     setTimeout(() => {
//         let a ="data from server collected"
//         return a
//     },3000);
// }
// let k=delay()
// console.log(k);




// //TO OVER COME THIS WE USE CALLBACK
// function delay(callback){
//     setTimeout(() => {
//         let a ="data from server collected"
//         callback(a)
        
//     }, 3000);
// }

// function callback(data){
//     console.log(data);
// }
// delay(callback)







// //PROMISE WAY
// function delay(){
//     return new Promise (function(resolve,reject){
//         setTimeout(() => {
//             let a="data from server collected"
//             resolve(a) 
//         },3000);

//     })

//     }
//      function callback(data) {
//         console.log(data);
        
//      }


// delay().then(function(data){
//     callback(data)
// })