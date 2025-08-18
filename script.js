const button = document.querySelector(".roll-die");
const dieImage = document.querySelector(".central-die")
const card = document.querySelector(".history-card");
const historyContainer = document.querySelector(".history-container")


let attemptCount = 0;
let history = [];


function rollDie(){

    button.disabled = true;

    let animationTime = setInterval(()=>{
        let random = Math.floor(Math.random()*6) + 1; //switch between faces 1 - 6
        dieImage.src = `./images/die-face-${random}.png`;
    },200);

    setTimeout(()=>{
        clearInterval(animationTime);
        let final = Math.floor(Math.random()*6) + 1;
        dieImage.src=`./images/die-face-${final}.png`;
        
        
        attemptCount++;

        history.unshift({attempt: attemptCount, face: final});
        if (history.length > 5) history.pop();
    
        renderHistory();

    button.disabled = false;
    
    },2000)

}

function renderHistory(){
    historyContainer.innerHTML = "";

    history.forEach(entry => {
        let card = document.createElement("div");
        card.classList.add("history-card");

        let attemptSpan = document.createElement("span");
        attemptSpan.classList.add("attempt-number");
        attemptSpan.textContent = "Attempt #" + entry.attempt;
        
        let dieFace = document.createElement("img");
        dieFace.src = `./images/die-face-${entry.face}.png`;

        card.appendChild("attemptSpan");
        card.appendChild("dieFace");

        historyContainer.prepend("card");

        
    });

}

button.addEventListener("click", rollDie);

