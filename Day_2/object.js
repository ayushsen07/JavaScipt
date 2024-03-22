const user={
    name : "ayush",
    age : 18,
    city  : "bhopal",

}

// access the data from the object
console.log(user.name)
console.log(user.age)
console.log(user.city)
console.log(user)
//console.log(user)

// adding the data into the object

user.country="India"
user.state='mp'

console.log(user.country)

console.log("full info of object")
console.log(user)

// remove any thing from the object

delete user.country
console.log(user)


// for itrate in the object

const person={
    name : "vanshika",
    age : 19,

    address: {
        city : "bhopal",
        state : "m p",
        country : "india",

    }
}
for(let key in person){
    console.log(key)
    console.log(person[key])

}

// direct method to get the all the kry of the object
console.log(Object.keys(person))
console.log(Object.values(person))

console.log(Object.entries(person))

// assign a all the value of privioux oibject in the new object
console.log(" new object")
const new_person = Object.assign({}, person)
console.log(new_person)

// in assign object add the new entries
const new_per=Object.assign({},person, { role : "developer"})
console.log(new_per)