let updateInventory = (item) => {
    let inventory = document.querySelector(".inventory > ul");
    let element = document.createElement('li');
    element.style.listStyle = "none";
    // element.style.fontFamily = "'Turret Road', cursive;";
    element.innerText = item;
    inventory.appendChild(element);
};

let hasPreRequisites = (hasList, needsList) => {
    for (let item of needsList) {
        if (!hasList.includes(item)) {
            return false;
        };
    };
    return true;
};

let askQuestions = (character) => {

};

let interact = (id) => {
    let speechDiv = document.querySelector(".speech-div");
    if (tradutor[id]["class"] == "blackboard") {
        parseBlackBoard();
    }
    else if (tradutor[id]["class"] == "computer") {
        parseComputer();
    }

    else {
        console.log(tradutor[id])
        if (avatar.collectibles.includes(tradutor[id]["collectible"])) {
            console.log("vc ja tem");
            speechDiv.innerText = "Ja passou por aqui IRMAO";
        } 
        else if (!hasPreRequisites(avatar.collectibles, tradutor[id]["prerequisites"])) {
            console.log("vc ainda n pode");
            speechDiv.innerText = ["Se n tem o que precisa ainda... bjs"];
        }
        else {
            if (!tradutor[id]["perguntas"]) {
                console.log("nao ha perg");
                avatar.collectibles.push(tradutor[id]["collectible"]);
                speechDiv.innerText = tradutor[id]["successMessage"];
                updateInventory(tradutor[id]["collectible"]);
            }
            else {
                console.log("ha perg");
                askQuestions(tradutor[id]);
                updateInventory(tradutor[id]["collectible"]);
            };
        };
    };
    setTimeout(() => {
        speechDiv.innerText = "";
    }, 4000);
};







        // speechDiv.innerText = tradutor[id]["successMessage"];
        //     if (tradutor[id]["collectible"]) {
        //         if (!avatar.collectibles.includes(tradutor[id]["collectible"])) {
        //             avatar.collectibles.push(tradutor[id]["collectible"]);
        //             updateInventory(tradutor[id]["collectible"]);
        //         };
        //     };