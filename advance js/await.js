/**
 *console.log("hello from the at first")

setTimeout(()=>{
    console.log(" hello from the middle")
    },6000)
    // here this the asynchronus function so the middle statement execute after the time out hit and before it move forward


    console.log("hello forom the last")
   */

    // but we want to wait fopr hit time frame and than move forward so we use AWAIT keyword

    async function printafterAwait(){
       console.log('first line')

       let data = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('helo middle')
        },5000)
       })
       let result = await data 
          console.log(result)
          console.log('hello froom the last')
    }
    printafterAwait()
