let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#resetbtn');
let msg = document.querySelector('#winner');
let msgContainer = document.querySelector('.msgContainer');

// which player turn is it.
let turn = true;

// wining patterns
const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

// i need to add event listener to happen something when ill click on that boxes
// to add event listner on 9 boxes ill use forEach loop with call back function 

boxes.forEach((box) => {
    box.addEventListener('click',()=>{
        console.log("Box was clicked");
        if(turn) box.innerHTML = "O";
        else box.innerHTML = "X";
        turn=!turn; // to flip the value
        box.disabled = true; // doesnt change after assigning the value

        checkWinner(); 
    })
});

// after getting a winner still game runs 
// so make all buttons disable

const disableboxes = ()=>{
    for(let box of boxes)
        box.disabled = true;
}

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
    msgContainer.classList.add('hide');
}

resetBtn.addEventListener('click', ()=>{
    enableBoxes();
})

const showWinner = (winner)=>{
    msg.innerHTML = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disableboxes();
    
}



const checkWinner = ()=>{
    for(let patterns of winPattern){
        let v1 = boxes[patterns[0]].innerHTML;
        let v2 = boxes[patterns[1]].innerHTML;
        let v3 = boxes[patterns[2]].innerHTML;
        if(v1!="" && v2!="" && v3!=""){
            if(v1===v2 && v2===v3){
                console.log("winner",v1);
                showWinner(v1);
            }
        }
        
    }
}


