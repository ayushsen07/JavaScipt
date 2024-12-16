

function SetUsername(username){
    this.username=username
    // console.log("value of this ", this);
    // console.log(username);  // without call it called but the probolem is that like after calling a function it gone  permantly from execution context so the createUser function can not find the variabel called username fro that
    

}

function createUser(username,email,password){
    
    SetUsername.call(this,username);
    
    
    this.email=email;
    this.password=password;
    // console.log("value of this ", this);
}

const chai = createUser('chai','chai@google.com','123')

const chaiCode = createUser('chaiCode','chai@fb.com','1234')
console.log(chai);
// console.log(chai);


