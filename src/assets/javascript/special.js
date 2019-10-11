let parseBlackBoard = () => {
    console.log("at the blackboard");
    let blackboard = document.querySelector(".big-blackboard");
    setTimeout(() => {
        blackboard.classList.remove("hide");
    }, 100);
    
    if (!onMobile()) {
        document.addEventListener('keypress', removeBlackboard = (event) => {
            if (event.key == "q") {
                blackboard.classList.add("hide");
                document.removeEventListener("keypress", removeBlackboard);
                avatar.isInteracting = false;
            };
        });
    } else {
        document.addEventListener('click', removeBlackboard = (event) => {
            if (!event.target.classList.contains("big-blackboard")) {
                blackboard.classList.add("hide");
                document.removeEventListener("keypress", removeBlackboard);
                avatar.isInteracting = false;
            };
        });
    };
};

let parseComputer = () => {
    console.log("at the computer");
    let computerWindow = window.open("https://hackertyper.net/", "", "width=500,height=300");
}

let parseTable = () => {
    avatar.isInteracting = false;
}

let parseDoor = () => {
    let door = document.querySelector(".door")
    if (avatar.collectibles.includes("CHAVE")) {
        console.log("SAIU");
        gameOver("win")
    } else {
        console.log("Nao POTE");
        door.classList.add("shake")
        setTimeout(() => {
            door.classList.remove("shake")
        }, 500);
    };
    avatar.isInteracting = false;
};