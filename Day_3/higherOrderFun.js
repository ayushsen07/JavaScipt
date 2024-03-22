function operation(operatorFn,a,b){    // her the operation function is the hgher oerer function 

    return operatorFn(a,b)    // here the function return as the return type
}

function add(a,b){
    return a+b;
}
 

 let result = operation(add,5,6)
 console.log(result)