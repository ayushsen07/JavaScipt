const myHero={

    greet : function(place, city){ 
        console.log(`Hello  ${this.name} sir from ${place} ${city}`);    // this have current context, usually object current context

    }
}

// myHero.greet()


// call :- change the binding of this keyword to other object 

const myH={
    name:"Rohit",
    place: 'India',
    city :'mumbai'
}

myHero.greet.call(myH, 'India')

// apply :- change the binding of this keyword to other object and pass the argument in the array form

const myfavm={
    name : 'Vishwa',
}

myHero.greet.apply(myfavm,['india', 'Bengaluru'])


// bind :- change this binding and give a function to use whenever you need 

const myh= myHero.greet.bind(myH , 'India','bhopal')
myh()
