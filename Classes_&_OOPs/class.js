class Person{
    constructor(name,place){
        this.name=name;
        this.place=place;
    }

    sayhi(){
        console.log(`Hi ${this.name}`);
        
    }
}

const hitesh = new Person('hitesh' , 'jaipur')  // in this we  use perenthesis with the class name like with person but it is not a function so why ?-> because it referring ti the constuctor function thats by use this 
const Vishwa = new Person('Vishwa' , 'Benguluru')
console.log(new Person('ayush' , 'sehore'));

console.log(hitesh);
console.log(Vishwa);




// Class Expression
// Why calss expression :- Class Expression is here for storing calss in sife a variable and passed to any other function or variable

// class are not hoisted  



const Student  = class{
    constructor(name){
        this.name = name;
    }

    sayHi(){
        console.log(`hello ${this.name}`);
        
    }
}

console.log(new Student('ayush'));
const ayush = new Student('ayush')
console.log(ayush);

