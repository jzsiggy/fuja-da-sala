let parseBlackBoard = () => {
    console.log("at the blackboard");
    let blackboard = document.querySelector(".big-blackboard");
    blackboard.classList.remove("hide");
    console.log(blackboard);
    
    document.addEventListener('keypress', removeBlackboard = (event) => {
        if (event.key == "q") {
            blackboard.classList.add("hide");
            document.removeEventListener("keypress", removeBlackboard);
        };
    });
};

let parseComputer = () => {
    console.log("at the computer");
}

let parseDoor = () => {
    console.log("at the door");
}