let boxes = document.querySelectorAll(".box")
let msgContainer=document.querySelector('.msg-container')
let msg = document.querySelector('.msg')
let newGamebtn=document.querySelector(".new-btn")
let resetbtn=document.querySelector(".resetbtn")



let WinnerCond=[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8]
]


// flag
let flag=true


boxes.forEach((box)=>{
    box.addEventListener('click', ()=>{
     console.log("box is clicked")
      if(flag){
        box.innerHTML= 'O'
        flag = false;
      }
      else{
        box.innerHTML='X'
        flag=true
      }
      box.disabled=true;
      checkWinner()
    })
})


const resetGame=()=>{

  flag=true
  enableBoxes()
  msgContainer.classList.add('hide')
}




const enableBoxes=()=>{
  for(let box of boxes){
    box.disabled=false
    box.innerHTML=""
  }
}




const disableBoxes=()=>{
  for(let box of boxes){
    box.disabled=true

  }
}

const showWinner=(winner)=>{
  msg.innerHTML=`Congratulation The Winner is ${winner}`
  msgContainer.classList.remove("hide")
  disableBoxes()
}

const checkWinner=(winner)=>{
  for(let pattern of WinnerCond){

    let pos1con = boxes[pattern[0]].innerHTML
    let pos2con = boxes[pattern[1]].innerHTML
    let pos3con = boxes[pattern[2]].innerHTML

    if(pos1con !="" && pos2con!="" && pos3con!=""){
      if(pos1con===pos2con && pos2con===pos3con){
          showWinner(pos1con)
      }
    }



  }

}


resetbtn.addEventListener("click",resetGame)
newGamebtn.addEventListener("click", resetGame)