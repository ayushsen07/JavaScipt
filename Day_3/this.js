/**
 * THIS keyword in js 
 * THIs = this keyword is refered a currect context mean
 */
//tyoe of this word
console.log('type of this keybord  ',typeof(this)) // object type

const user = {
   username : "ayush",
   id: "senayu",

   welcomeMessage : function (){
    console.log(`${this.username} ,'is logged in with ,${this.id} `)
   }
}

user.welcomeMessage()
user.username="sam"
user.welcomeMessage()



// this in itself

console.log(this) // it give null object like this {}


// but inside function
// function one(){
//     console.log("inside this function", this)
// }
// one() // it give lots of thing in simpl function 


// IN arrow function

const hello = ()=>{
    console.log(this) // it give here aain empty object  like this {}
}
hello()

