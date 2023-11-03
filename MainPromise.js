const vegetables=["cucumbar","tomato"]
// const vegetables=["onion"]

checkAvailable(vegetables)//VEGETABLE SEND TO PROMISE FUNCTION AS AN ARGUMENT
.then(function(outFromServer){ //WE GOT ARETURN VALUE FROM PROMISE FUNCTION HERE
    console.log(outFromServer + " available");//JUST PRINTED THE VALUE WHICH PROMISE RETURNED
    return outFromServer//NOW THIS RETURN VALUE, WE RETURNED OR PASSED TO NEXT THEN CONDITION
})

.then(function(outFromServer){ //HERE IM RECIECED AVOVE RETURN AS PARAMETER
    return priceOfItem(outFromServer) //I PASSED AS ARGUMENT THAT RETURN TO NEXT PROMISE
})

.then(function(upDatedRate){  //now i recived again a paramtere from promise function
    console.log(upDatedRate);//I JUST USED PROMISE RETURN VALUE FOR ONLY PRINTING
    //WE CAN PASS IN TO NEXT STEP IF WEE NEED
})

.then(function(){
    console.log("the end");
})

.catch(function(error){
    console.log(error.message);
})


//SERVER SIDE
function checkAvailable(veget){
    // return new Promise(function (resolve,reject){
        return new Promise(function (resolve,reject){
        if(veget.includes("cucumbar") || veget.includes("tomato")){
            resolve("tomato")
        }else{
            setTimeout(() => {
                let er=new Error ("sorry")
                reject(er)
            },2000);
          
            // reject(new Error("item is not availabale"))
            
        }

    })
   
}


function priceOfItem(itemPrice){
    return new Promise(function(resolve,reject){
        resolve(itemPrice + "20 rupees per KG")
    }) 
}











