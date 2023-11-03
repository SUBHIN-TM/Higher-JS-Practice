// let prms=new Promise(function(resolve,reject) {
//     let a="hello"
//     resolve(a)    
// })
// console.log(prms); //we can see thatb its return as a promise object
// prms.then(function(data){
//     return data
// })
// .then(function(data){
//     console.log(data+ " recieved");
// })











// //NORMAL HANDLING PROMISE WITHOUT USING ASYNC/AWAIT
// let prms= new Promise((resolve,reject) => {
//     setTimeout(() => {
//         let k="good morning from promise"
//         resolve(k)
//     }, 5000);
// })

// function handling(){
//     prms.then((data)=>{
//         console.log(data);
//     })
//     console.log("normal text");//write after then function  THIS WILL PRINT FIRST DONT WAIT 
// }
// //IN THIS ABOVE FUNCTION W WRITE ASYNC LOG AND NORMAL LOG,BUT NORMAL LOG DIDINT WAIT TO RETURN FROM PROMISE IT WILL PRINT FIRST
// //WHAT WILL DO INCASE WE ONLY EXECUTE AFTER THE PROMISE FUNCTION COME THEN EXECUTE BELOW
// //THEN WE USE ASYNC/AWAIT
// handling()











// //PROMISE HANDLING USING ASYNC/AWAIT
// let prms= new Promise((resolve,reject) => {
//     setTimeout(() => {
//         let k="good morning from promise"
//         resolve(k)
//     }, 5000);
// })

// async function handlingWithAsync(){
//     //suppose log("HI")here it will print 1st and wait in next line to get responsew from proise to save in the k varaiable
//     //WE CAN GET THE ORDER BY USING ASYNC AWAIT
//     let k=await prms
//     console.log(k);
//     console.log("normal text");
// }
// //NOW NORMAL TEXT DONT EXECUTE FIRST,IT ONLY EXECUTE AFTER GET HTE DATA FROM PROMISE 
// //THIS IS WHY WE ASYNC AND AWAIT FUNCTION ARE USED
// //JS ENGINE WAITING IN 61 LINE TO GET PROMISE RESOLVE
// //THIS WAITING IS ONLY VCZ OF ASYN AND AWAIT

// handlingWithAsync()
 





// //NOW WE WILLL ADD 2 MORE FUNCTION WITH DIFFERENT TIME OUT
// let prms1= new Promise(function(resolve,reject){
//     setTimeout(() => {
//         let k="1st program with 5 seconds delay"
//         resolve(k)
//     }, 5000);
  
// })

// let prms2= new Promise(function(resolve,reject){
//    setTimeout(() => {
//     let k="2nd program with 10 seconds delay"
//     resolve(k)
//    }, 10000);
   
// })





// async function handling(){
   
//     let k=await prms1
//     console.log(k);
//     console.log("same time with 5 seconds normal log");

//     console.log("\n");
//     let i=await prms2
//     console.log(i);
//     console.log("same time with 10 seconds normal log");
// }

// handling()












// //REAL WORld SCENERAIO
// const api_url="https://api.github.com/users/SUBHIN-TM" //API TO KNOW MY GIT HUB

// async function calling(){
//    let k= await fetch(api_url)  //FETCH THE PROMISE RESOLVE
//    let g= await k.json()  //WE GET IT NOW IN THE FORM OF OBJECTS,TO CONVERT READABLE CALL JSON()
//    console.log(g);
   
// }
// calling()









//ERROR HANDLING JUST USE TRY AND CATCH
//TRY FOR SUCCESS
//CATCH FOR ERRROR
const api_url="https://api.gitbmnh" 
async function calling(){
    try{
        let k= await fetch(api_url)  //FETCH THE PROMISE RESOLVE
        let g= await k.json()  //WE GET IT NOW IN THE FORM OF OBJECTS,TO CONVERT READABLE CALL JSON()
        console.log(g);
    }
    catch(error){
          console.error("invalid",error.message);
    }
   
 }
 calling()




