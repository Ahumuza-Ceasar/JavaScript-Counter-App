let increaseBtn=document.querySelector('.increase')


let decreaseBtn = document.querySelector('.decrease')

let resetBtn = document.querySelector('.reset')
let countLabel = document.querySelector('#count')
let count = 0;


function increase(){
    count+=1
    countLabel.textContent=count

}


function decrease(){
    count-=1
    countLabel.textContent=count

}


function reset(){
    count=0
    countLabel.textContent=count

}

increaseBtn.addEventListener("click",increase)
decreaseBtn.addEventListener("click",decrease)
resetBtn.addEventListener("click",reset)

