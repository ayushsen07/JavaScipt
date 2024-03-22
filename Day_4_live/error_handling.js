/**
 * syntax related
 */

  //console.log("heloo 

  /**
   * runtime error
   */

  /**let x=5
  console.log(x.toUpperCase())  ******it give runtime error because to upper case not valid for the integer value*****
  */

  /**
   * ligic related
   
  let num=5;
  for(i=-2;i<5;i++){
    console.log(num/i)  // here it give error at i =0; so it is logical error
  }
  */


//  ********  for handling error*********

try{let obj = undefined
console.log(obj.name)
console.log("helo")
}catch(err){
    console.log("handle error")
}finally{
    console.log("always execute in both condition")
}