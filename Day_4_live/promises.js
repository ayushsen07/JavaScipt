const simranPromis =new Promise((resolve,reject)=>{
    let parentDecision = true

    if(parentDecision){
        resolve("yayy shaddi ki taiyyari kro**  ")
    }
    else{
        reject("papa ne IAS  dundh liya hai sorry....!")
    }

});

simranPromis.then((msg)=>{
    console.log("simran message :",msg)
    console.log("lets book the wedding venue ")
}).catch((msg)=>{
    console.log("simran message :",msg)
    console.log("tender kha ho yarr ")
})
