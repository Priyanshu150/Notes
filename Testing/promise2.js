/* const p = new Promise( (resolve, reject) => {
    resolve("Promise resolved value!!")
    // reject("Promise was rejected");
})

async function handlePromise(){
    const val = await p;
    console.log(val);
    // const val = p;
    // p.then(res => console.log(res))
    // console.log(p)
}

handlePromise() */

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p1 was resolved")
    }, 20000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p2 was resolved")
    }, 30000);
})

async function promiseBehaviour() {
    console.log("Before Await")

    const val1 = await p1
    console.log(val1)

    const val2 = await p2
    console.log(val2)

    console.log("After Await")  
}

promiseBehaviour()



