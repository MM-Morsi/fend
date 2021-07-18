// calback functions 

/** PROMISES **/
// Create Promises
// resolved promise >> condition = true
const aPromise = new Promise((resolve, reject) => {
    const condition = true;
    if(condition){
        setTimeout(function(){
            resolve("Success in promise A");
        }, 300);
    } else {
        reject("promise A was rejected");
    }
});
// rejected promise >> condition =false
const bPromise = new Promise((resolve, reject) => {
    const condition = false;
    if(condition){
        setTimeout(function(){
            resolve("Success in promise B");
        }, 300);
    } else {
        reject("promise B was rejected man");
    }
});
// Use Promises
aPromise
.then((msg) => {console.log(msg);})
.catch((msg) => {console.log(msg);});

bPromise
.then((msg) => {console.log(msg);})
.catch((msg) => {console.log(msg);});
// bPromise rejection was handeled first because resolve has setTimeout for 300 ms


