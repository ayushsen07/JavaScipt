// here is the functioon that id *Promise.any * it work when any one is resolve so it give resolve 
const G1Promise = new Promise((resoleve, reject)=>{
    setTimeout(()=>{
       if( Math.random() >0.5){
        resoleve("GFriend 1 : Hey I am in for date")
       }else{
        reject("GFriend 1 : sorry i cant do that ")
       }
    },3000)
})

const G2Promise = new Promise((resoleve, reject)=>{
    setTimeout(()=>{
       if( Math.random() >0.5){
        resoleve("GFriend 2 : Hey I am in for date")
       }else{
        reject("GFriend 2 : sorry my parent are strict")
       }
    },3000)
})

const G3Promise = new Promise((resoleve, reject)=>{
    setTimeout(()=>{
       if( Math.random() >0.5){
        resoleve("GFriend 3 : Hey I am in for date")
       }else{
        reject("GFriend 3 : sorry i have a BF")
       }
    },1000)
})

Promise.any([G1Promise,G2Promise,G3Promise]).then((msg)=>{
    console.log(msg)
    console.log("yayy i do that")

}).catch((msg)=>{
    console.log(msg)
    console.log("quite the planing of date")
})