const [a,b,c] = [1,2,3]  // this is the desstructuring the data in the array

console.log(a)
console.log(b)
console.log(c)

// try to fetch the absent value 
//console.log(g) // it gives undefined 

const [f,g,h,j]= [4,5,6,[5,6,7,8,]]
console.log(f)
console.log(g)
console.log(h)
console.log(j) // here j= [5,6,7,8,]




/**
 * destructuring in object
 * 
 */

const per   ={
    name:"ayush",
    age : 18,
    city : "bhopal",

    address : {
        place: "near cafe",
        state : "m p",
        country : 'india',
    }
}

const {name,age,city,happy, address :{state, country}} = per
console.log(name)
console.log(age)
console.log(city)
console.log(happy)  // it not define so it give undefined
console.log(address)
//console.log(state)

