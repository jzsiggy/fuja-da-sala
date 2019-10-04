let updateInventory = (item) => {
    let inventory = document.querySelector(".inventory > ul");
    let element = document.createElement('li');
    element.style.listStyle = "none";
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
    let speechDiv = document.querySelector(".speech-div");
    let opcoesDiv = document.createElement("div");
    opcoesDiv.style.display = "flex";
    opcoesDiv.style.justifyContent = "space-between";
    opcoesDiv.style.width = "50%";

    let questNum = 0;
    let pergunta = character["perguntas"][questNum]["pergunta"];
    let opcoes = character["perguntas"][questNum]["opcoes"];
    speechDiv.innerText = pergunta;
    opcoes.forEach(opcao => {
        let opcaoItem = document.createElement("p");
        opcaoItem.innerText = opcao;
        opcoesDiv.appendChild(opcaoItem);
    });
    speechDiv.appendChild(opcoesDiv);

    console.log(pergunta, opcoes)
};

let interact = (id) => {
    let speechDiv = document.querySelector(".speech-div");
    if (tradutor[id]["class"] == "blackboard") {
        parseBlackBoard();
    }
    else if (tradutor[id]["class"] == "computer") {
        parseComputer();
    }
    else if (tradutor[id]["class"] == "table") {
        parseTable();
    }
    else if (tradutor[id]["class"] == "door") {
        parseDoor();
    }

    else {
        console.log(tradutor[id])
        if (avatar.collectibles.includes(tradutor[id]["collectible"])) {
            console.log("vc ja tem");
            speechDiv.innerText = "Ja passou por aqui IRMAO";
        } 
        else if (!hasPreRequisites(avatar.collectibles, tradutor[id]["prerequisites"])) {
            console.log("vc ainda n pode");
            speechDiv.innerText = tradutor[id]["noPrerequisitesMessage"];
        }
        else {
            speechDiv.innerText = tradutor[id]["firstMessage"];
            if (!tradutor[id]["perguntas"]) {
                console.log("nao ha perg");
                avatar.collectibles.push(tradutor[id]["collectible"]);
                speechDiv.innerText = tradutor[id]["successMessage"];
                updateInventory(tradutor[id]["collectible"]);
            }
            else {
                console.log("ha perg");
                setTimeout(() => {
                    askQuestions(tradutor[id]);
                }, 1000);
            };
        };
    };
    // setTimeout(() => {
    //     speechDiv.innerText = "";
    // }, 2000);
};

///// personagens que nao tem nenhum collectible para dar sempre falam q vc ja passou por ele //////
///// change updateInventory to translate avatar.collectibles into innerText, instead of appending always to innertext OR call it addToInventory /////





        // speechDiv.innerText = tradutor[id]["successMessage"];
        //     if (tradutor[id]["collectible"]) {
        //         if (!avatar.collectibles.includes(tradutor[id]["collectible"])) {
        //             avatar.collectibles.push(tradutor[id]["collectible"]);
        //             updateInventory(tradutor[id]["collectible"]);
        //         };
        //     };