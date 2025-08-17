const button = document.querySelector(".roll-die");
const dieImage = document.querySelector(".central-die")
const card = document.querySelector(".history-card");

function rollDie(){
    let animationTime = setInterval(()=>{
        let random = Math.floor(Math.random()*6) + 1; //switch between faces 1 - 6
        dieImage.src = `./images/die-face-${random}.png`;
    },200);

    setTimeout(()=>{
        clearInterval(animationTime);
        let final = Math.floor(Math.random()*6) + 1;
        dieImage.src=`./images/die-face-${final}.png`;
    },2000)
}

button.addEventListener("click", rollDie);

function updateHistory(){
    
}