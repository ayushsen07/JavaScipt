<<<<<<< HEAD
// for each loop in any thing 

const arr = ['java','cpp','py','rb']
const values=arr.forEach( function val(item){   // this is for each loop by simple function
    console.log(item)
  // return item;       // for each function never return anytype of value
} )
console.log("retrn by the forEach loop" , values)



// By arrow function
arr.forEach(element => {
    console.log(element)
});


console.log('another method')   // another method for printing by arrow method
arr.forEach((element) =>console.log(element));


// *********for each in array of objects

const obj=[
    {
        name:"ayu",
        id:'ayu12'
    },
    {
        name:'manu',
        id:'manu12'
    },
    {
        name:'hari',
        id:'hari78'
    }
]

obj.forEach(element => console.log(element));  // this give the whole attribute of object

// for any specific item fetch in the object
obj.forEach(item=>console.log(item.name))  // it gives all the name attribute in the array of object
=======
// for each loop in any thing 

const arr = ['java','cpp','py','rb']
arr.forEach( function val(item){   // this is for each loop by simple function
    console.log(item)
} )

// By arrow function
arr.forEach(element => {
    console.log(element)
});


console.log('another method')   // another method for printing by arrow method
arr.forEach((element) =>console.log(element));


// *********for each in array of objects

const obj=[
    {
        name:"ayu",
        id:'ayu12'
    },
    {
        name:'manu',
        id:'manu12'
    },
    {
        name:'hari',
        id:'hari78'
    }
]

obj.forEach(element => console.log(element));  // this give the whole attribute of object

// for any specific item fetch in the object
obj.forEach(item=>console.log(item.name))  // it gives all the name attribute in the array of object
>>>>>>> 98e1b135a33696cca19f27557dcf42cbeea459db
obj.forEach(item=>console.log(item.id))   // it gives all the id attribute in the array of object