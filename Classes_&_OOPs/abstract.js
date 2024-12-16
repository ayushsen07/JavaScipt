
// Abstract :- is used to hide some secret info from the developers ot users  for making abstract variable use _ this before variable it shows a variable is secret


class Student{
    constructor(name){
        this.name = name;
        this._accoutNo='435345';
    }
     get getSecret(){
        return this._accoutNo
     }
     set setSecret(newSecret){
         this._accoutNo=newSecret
       }

}

const amit = new Student('amit')
console.log(amit);
console.log(amit.getSecret);
console.log(amit);



amit.setSecret= '87878'
