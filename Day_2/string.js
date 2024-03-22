// string data type

let name= 'ayush'

let place= "bhopal"

console.log( name)
console.log( place)

console.log(typeof name)
console.log(typeof place)

console.log( name[0])
console.log( place[3])
console.log( name[10])   // if give those indx whioch is nort present



// note :- String is immutable not change


// length of string
console.log(name.length)

// concatination of two string

let first_name= "ayush"
let last_name = " sen"
let full_name= first_name.concat(last_name)
console.log(full_name)

// convert into upper case
console.log(full_name.toUpperCase())

// get a character from any given index 
console.log(name.charAt(4))

// slicing in string
console.log(full_name.slice(-5))


// index of given character or string

console.log(full_name.indexOf('h'))



// trim function
let word = '  ayush'
console.log(word)
console.log(word.trim())   // trim is function used to remove the extra space in string from both side


// split
name="ayush sen kumar"
console.log(name.split())   //  this function make a array of given string if three word are give in string than split make a array of threee word