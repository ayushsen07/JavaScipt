let boxes = document.querySelectorAll(".box")
let reset = document.querySelector('#reset')
let newGameBtn = document.querySelector('#new-btn')
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turnO= true;  // player , playerO


 const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

// for enable the game
const  resetGame = ()=>{
    turnO = true
    enableBoxes()
    msgContainer.classList.add("hide")
}


boxes.forEach((box) =>{
    box.addEventListener('click', ()=>{
        console.log("box was clicked")
        if(turnO){
            box.innerHTML="O"
            turnO= false
        }
        else{
            box.innerHTML = "X"
            turnO = true;
        }
        box.disabled = true

        // for chechking winner
       checkWinner();
    })
});

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled=true
    }
}
    const enableBoxes = ()=>{
        for(let box of boxes){
            box.disabled=false
            box.innerHTML= ""
        }
}
const showWinner = (winner)=>{
    msg.innerHTML= `Congratulations, Winner is ${winner}`
    msgContainer.classList.remove("hide")
    disableBoxes(); // for disable all boxes after one win

}

const checkWinner= ()=>{   //winner msg showing
    for(let pattern of winPatterns ){   
     
    let  pos1val = boxes[pattern[0]].innerHTML
    
    let pos2val = boxes[pattern[1]].innerHTML
    let pos3val= boxes[pattern[2]].innerHTML

    if(pos1val != "" && pos2val != "" && pos3val !=""){
        if(pos1val=== pos2val && pos2val===pos3val){
            console.log("winner" , pos1val)
            showWinner(pos1val) // for winner msg showing
        }
    }

  }
};


newGameBtn.addEventListener("click", resetGame)
reset.addEventListener("click" , resetGame)
