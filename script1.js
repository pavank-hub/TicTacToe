const boxes = document.querySelectorAll('.box');
const resetbtn = document.querySelector('#resetbtn');

let turn = true;

// win pattern
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

boxes.forEach((box) => {
    box.addEventListener('click',()=>{
        if(turn) box.innerHTML = "O";
        else box.innerHTML = "X";
        turn=!turn;

        box.disabled = true;
        
    })
});