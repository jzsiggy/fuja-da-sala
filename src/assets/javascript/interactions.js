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

let unnansweredQuestions = (questions) => {
    let perguntasRespondidas = 0;
    questions.forEach(question => {
        if (question["respondida"]) {
            perguntasRespondidas++;
        };
    });
    if (perguntasRespondidas == questions.length) {
        return false
    };
    return true;
};

let askQuestions = (character) => {
    let speechDiv = document.querySelector(".speech-div");
    let opcoesDiv = document.createElement("div");
    opcoesDiv.style.display = "flex";
    opcoesDiv.style.justifyContent = "space-between";
    opcoesDiv.style.width = "50%";

    let showQuestion = (questNum) => {
        let pergunta = character["perguntas"][questNum]["pergunta"];
        let opcoes = character["perguntas"][questNum]["opcoes"];
        speechDiv.innerText = pergunta;
        opcoes.forEach(opcao => {
            let opcaoItem = document.createElement("p");
            opcaoItem.innerText = opcao;
            opcoesDiv.appendChild(opcaoItem);
        });
        speechDiv.appendChild(opcoesDiv);
        speechDiv.addEventListener("click", checkAnswer = (e) => {
            console.log(e.path[0]["innerText"]);
            if (e.path[0]["innerText"] == character["perguntas"][questNum]["resposta"]) {
                speechDiv.removeEventListener("click", checkAnswer);
                speechDiv.removeChild(opcoesDiv);
                while (opcoesDiv.firstChild) {
                    opcoesDiv.removeChild(opcoesDiv.firstChild);
                };
                character["perguntas"][questNum]["respondida"] = true;
                if (unnansweredQuestions(character["perguntas"])) {
                    showQuestion(questNum + 1);
                }
                else {
                    while (speechDiv.firstChild) {
                        speechDiv.removeChild(speechDiv.firstChild);
                    };
                    speechDiv.innerText = character["successMessage"]
                    avatar.collectibles.push(character["collectible"]);
                    updateInventory(character["collectible"]);
                }
            } else {
                while (speechDiv.firstChild) {
                    speechDiv.removeChild(speechDiv.firstChild);
                };
                speechDiv.removeEventListener("click", checkAnswer);
                speechDiv.innerText = character["errorMessage"]
            };   
        });
    };
    showQuestion(0);
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

