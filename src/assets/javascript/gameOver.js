let gameOver = (gameSituation) => {
    avatar.isGameOver = true;
    avatar.isInteracting = true;
    let screen = document.querySelector("body");
    let restartBtn = document.createElement("a");
    
    let endScreen = document.createElement("div");
    endScreen.classList.add("end-screen")
    endScreen.style.height = "100vh";
    endScreen.style.width = "100vw";
    if (gameSituation == 'lose') {
        endScreen.style.backgroundImage = "url('./src/assets/images/seFodeu.png')";
    } else if (gameSituation == "win") {
        endScreen.style.backgroundImage = "url('./src/assets/images/ganhou.jpg')";
    };
    endScreen.style.backgroundSize = "contain";
    endScreen.style.backgroundRepeat = "no-repeat";
    endScreen.style.backgroundPositionY = "25%";
    endScreen.style.position = "fixed";
    endScreen.style.top = "0";
    endScreen.style.zIndex = "2";
    endScreen.style.display = "flex";
    endScreen.style.justifyContent = "center";
    endScreen.style.alignItems = "center";

    restartBtn.style.backgroundColor = "red";
    restartBtn.style.borderRadius = "7px";
    restartBtn.style.padding = "20px";
    restartBtn.style.marginTop = "80px";
    restartBtn.style.color = "white";
    restartBtn.style.fontFamily = "Turret Road";
    restartBtn.style.fontWeight = "bold";
    restartBtn.innerText = "restart";
    restartBtn.addEventListener("click", () => {
        console.log("restart");
        restart();
    });

        screen.appendChild(endScreen);
        endScreen.appendChild(restartBtn);
    avatar.isGameOver = true;
};

let restart = () => {
    let body = document.querySelector("body");
    let endScreen = document.querySelector(".end-screen");
    let inventoryDiv = document.querySelector(".inventory > ul");

    avatar.collectibles = [];
    avatar.life = 100;
    avatar.showLife();
    timer.minutes = 4;
    timer.seconds = 59;
    body.removeChild(endScreen);
    avatar.isGameOver = false;
    avatar.isInteracting = false;
    inventoryDiv.innerHTML = " ";
    // clear inventory - life - timer - questions - remove endScreen - isinteracting = false - isgameover = false
}