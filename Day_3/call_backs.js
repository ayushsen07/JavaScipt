function greet(name, callback){                           
    const greeting = "hello  " + name
    callback(greeting)
}

function displaymessage(message){
console.log(message)
}

greet("vishwa  ",displaymessage)


/**
 * So, the order of execution is:

  1 Function definitions.
  2 Invocation of the greet function.
  3 Execution of the greet function, which   includes constructing the greeting message and invoking the displaymessage function.
  4 Execution of the displaymessage function, which logs the message to the console.
  5 Console output.
 */