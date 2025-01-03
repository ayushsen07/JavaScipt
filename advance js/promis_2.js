// here the multiple problem so we use all promise it work when the all the promise is resolve so it resolve and if any one is reject than it give reject

const f1Promise = new Promise((resoleve, reject)=>{
    setTimeout(()=>{
       if( Math.random() >0.5){
        resoleve("Friend 1 : Hey I am in for Goa")
       }else{
        reject("Friend 1 : sorry mujhe kam hai")
       }
    },3000)
})

const f2Promise = new Promise((resoleve, reject)=>{
    setTimeout(()=>{
       if( Math.random() >0.5){
        resoleve("Friend 2 : Hey I am in for Goa")
       }else{
        reject("Friend 2 : sorry meri class hai")
       }
    },1000)
})

const f3Promise = new Promise((resoleve, reject)=>{
    setTimeout(()=>{
       if( Math.random() >0.5){
        resoleve("Friend 3 : Hey I am in for Goa")
       }else{
        reject("Friend 3 : sorry pw lecture atend karna hai")
       }
    },1000)
})

Promise.all([f1Promise,f2Promise,f3Promise]).then((msg)=>{
    console.log(msg)
    console.log("yaa continue plan of goa")

}).catch((msg)=>{
    console.log(msg)
    console.log("quite the planing of goa")
})