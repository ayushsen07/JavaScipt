const myHero={

    greet : function(place, city){ 
        console.log(`Hello  ${this.name} sir from ${place} ${city}`);    // this have current context, usually object current context

    }
}

myHero.greet()


// call :- change the binding of this keyword to other object 

// const myH={
//     name:"Rohit",
//     place: 'India',
//     city :'mumbai'
// }

// myHero.greet.call(myH)

// apply :- change the binding of this keyword to other object and pass the argument in the array form

const myfavm={
    name : 'Vishwa',
}

myHero.greet.apply(myfavm,['india', 'Bengaluru'])
