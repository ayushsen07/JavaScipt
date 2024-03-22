
function helloStudent(){
    console.log ("helllo viswha sir")
}
helloStudent()

// perameter function 
function sum(a,b){
    var ans = a+b
    console.log(ans)

}
sum(2,3)

// if user do not give value of one perameter

function sum(a,b=5){  /// default prameter
    return a+b
}
console.log(sum(3))
