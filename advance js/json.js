
       // JSON


/**
 * J- java
 * S-script
 * O-object
 * N-notation
 * 
 * why it use -> 1. its light weight, support many language, in rest apis its a stadard practice
 * 
 * JSON-> it is in the form of strings of objects
 * 
 * it has two function 
 * -> object to json -> stringfy
 * -> json to object-> parse
 */

const person={
    name :'ayush',
    age :20
}

console.log(person);

// object to JSON
const jsonPErson = JSON.stringify(person);
console.log(jsonPErson);

// json to object

const obPerson = JSON.parse(jsonPErson)
console.log(obPerson);


