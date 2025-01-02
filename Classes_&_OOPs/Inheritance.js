class Person{
    constructor(name, age,place){
    this.name=name;
    this.age=age;
    this.place=place;
    }

    introduce() {
      console.log(`hey, this is ${this.name} i am ${this.age} year old from ${this.place}`);
              
    }
}    


const ayush = new Person('ayush', 20,'Bhopal')
ayush.introduce()

// for extends thsi class by child class 

class Student extends Person{
    constructor(name,age,place, grade){
        super(name,age,place)
        this.grade= grade;

    }

    showGrade(){
        console.log(`${this.name}'s grade is ${this.grade} `);
        
    }
    intoduce(){
        console.log('i am overloading');
        
    }
}

const mithun = new Student('mithun',30,'benguluru', 78)
mithun.showGrade()
mithun.introduce()


//HERE IS PROBLEM -> like when we want to access the methods that we atreate inside the class lie that Person.Introduce() than -> it give not a function so for this using wiht the class use static keyword before method like 'static intoduce(){} this syntax is used by this we able to use with the calss 