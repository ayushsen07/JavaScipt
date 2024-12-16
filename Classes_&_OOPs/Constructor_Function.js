
function User(username,email){
this.username=username;
this.email=email;

// console.log(this);
return this
// console.log('hello');


}
const Hitesh =new User('Chai', 'chai@google.com')

const vishwa =new User('aimerz',' vihswa@aimerz.com')
console.log(vishwa);
console.log(Hitesh);


//Point of new keword

/**
 * Step 1  ->  It creates new object
 * step 2-> call constructor function because new keyword
 * step 3-> this keyword get all argument that writen by you, arguments add int his keyword
 * step 4 -> you get all the arguments final step 
 * 
 */