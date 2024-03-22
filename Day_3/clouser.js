/**function hello(){
    let name ="ayush"
         // here this is not possible to do iot because the name is type of let or let not use outside from the block
}
hello()
comsole.log(name)
*/

function outerfn(){
    let name ='ayush'
    function innerfun(){
        console.log(name)
    }
    return innerfun
}

let fn = outerfn()

fn()
