/**
 * Initially invoked Function Exdpression
 */
 // IIFE = we use for initially invoking the function and "the global pollution makes an problem so for ignore or remove  the problem of global pollution such as variable and attributes"

// named iife
( function chai(){
    console.log("hello IIFE")
 })();

 // simple iife
 ( () =>{
    console.log("hello IIFE 2")
 })();

 // with perameter
 ( (name) =>{
    console.log(name)
 })("ayu")

