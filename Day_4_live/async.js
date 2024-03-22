/** 
function getmessage(){
    return 'hello buddy'
}
console.log(getmessage())  // here it give a direct output that is hello buddy
*/


// but when we use asnyc keyboard it used before the function as a keyword
async function getmessage(){
    return 'hello buddy'
}
console.log(getmessage())

// another way of get this message as a promise

getmessage().then(result=> console.log(result))  // this ttype of make it a simply way of get output  as similsr as  a at first function provide output like that
// "hello buddy"