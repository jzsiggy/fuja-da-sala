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

let interact = (id) => {
    let speechDiv = document.querySelector(".speech-div");
    if (tradutor[id]["class"] == "blackboard") {
        parseBlackBoard();
    }
    else if (tradutor[id]["class"] == "computer") {
        parseComputer();
    }

    else {
        if (avatar.collectibles.includes(tradutor[id]["collectible"])) {
            speechDiv.innerText = "Voce ja tem o que posso te dar";
        } else if (hasPreRequisites(avatar.collectibles, tradutor[id]["prerequisites"])) {
            speechDiv.innerText = tradutor[id]["successMessage"];
            if (tradutor[id]["collectible"]) {
                if (!avatar.collectibles.includes(tradutor[id]["collectible"])) {
                    avatar.collectibles.push(tradutor[id]["collectible"]);
                    updateInventory(tradutor[id]["collectible"]);
                };
            };
        } else {
            speechDiv.innerText = tradutor[id]["errorMessage"];
        };
    };

    setTimeout(() => {
        speechDiv.innerText = "";
    }, 4000);
};