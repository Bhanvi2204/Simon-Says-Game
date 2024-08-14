let gameseq = [];
let userseq = [];

let btns = ['red', 'yellow', 'blue', 'green'];
let started = false;
let level = 0;

let h2 = document.querySelector('h2');


document.addEventListener("keypress", function () {
    if (started === false) {
        console.log("The game is started");
        started = true;
        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    userseq=[];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4); // Changed to 4 to include all colors
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`); // Changed to `.${randColor}` to select by class
    
    console.log(randIdx);
    console.log(randColor);
    console.log(randBtn);
    gameseq.push(randColor);
    console.log(gameseq);
    btnFlash(randBtn);
}
function checkAns(idx){
    // let index=level-1;
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game over!Your score was <b>${level}<b><br> Press any key to start the game again!`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200);
        reset();
    }
}
function btnPress(){
    let btn=this;
    userFlash(btn);

    let usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    checkAns(userseq.length-1);
    // console.log(usercolor);
}

let allBtns = document.querySelectorAll(".btn");
for (let i = 0; i < allBtns.length; i++) {
    allBtns[i].addEventListener("click", btnPress);
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}