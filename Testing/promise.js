const cart = ['shoes', 'pants', 'shirts']


createOrder(cart)
    .then(function (orderId){
        console.log(orderId)
        return orderId
    })
    .then(function(orderId){
        return proceedToPayment(orderId);
    })
    .then(function(paymentInfo){
        console.log(paymentInfo)
    })
    .catch(function(err){
        console.log("Promise was rejected", err.message)
    })


function proceedToPayment(orderId){
    return new Promise(function (resolve, reject){
        resolve("Payment Successful")
    })
}

//creation of promise 
function createOrder(cart){
    const pr = new Promise((resolve, reject) => {
        // create Order 
        // validate cart 
        // order Id
        if(!validateCart(cart)){
            const err = new Error("Cart is not valid");
            reject(err);
        }
        const orderId = "12345";
        if(orderId){
            resolve(orderId);
        }
    })
    return pr;
}

function validateCart(cart){
    return true;
}