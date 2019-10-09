let giveItAShake = (div) => {
    div.classList.add("shake");
            setTimeout(() => {
                div.classList.remove("shake");
            }, 500);
}

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
    if (onMobile()) {
        opcoesDiv.style.width = "90%";
    } else {
        opcoesDiv.style.width = "50%";
    };

    let showQuestion = (questNum) => {
        
        let skipAnsweredQuestion = (index) => {
            if (character["perguntas"][index]["respondida"]) {
                questNum++;
                skipAnsweredQuestion(questNum);
            };
        };

        skipAnsweredQuestion(questNum);

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
                    avatar.isInteracting = false;
                }
            } else {
                while (speechDiv.firstChild) {
                    speechDiv.removeChild(speechDiv.firstChild);
                };
                speechDiv.removeEventListener("click", checkAnswer);
                speechDiv.innerText = character["errorMessage"]
                giveItAShake(document.querySelector(`.${character.class}`));
                avatar.life -= 10;
                avatar.isInteracting = false;
            };   
        });
    };
    showQuestion(0);
};

let interact = (id) => {
    avatar.isInteracting = true;
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
        console.log(tradutor[id]);
        let personagemDiv = document.querySelector(`.${tradutor[id]["class"]}`);

        if (avatar.collectibles.includes(tradutor[id]["collectible"])) {
            giveItAShake(personagemDiv);
            speechDiv.innerText = "Ja passou por aqui IRMAO";
            avatar.isInteracting = false;
        } 
        else if (!hasPreRequisites(avatar.collectibles, tradutor[id]["prerequisites"])) {
            giveItAShake(personagemDiv);
            speechDiv.innerText = tradutor[id]["noPrerequisitesMessage"];
            avatar.isInteracting = false;
        }
        else {
            speechDiv.innerText = tradutor[id]["firstMessage"];
            if (!tradutor[id]["perguntas"]) {
                console.log("nao ha perg");
                avatar.collectibles.push(tradutor[id]["collectible"]);
                speechDiv.innerText = tradutor[id]["successMessage"];
                updateInventory(tradutor[id]["collectible"]);
                avatar.isInteracting = false;
            }
            else {
                console.log("ha perg");
                setTimeout(() => {
                    askQuestions(tradutor[id]);
                }, 1000);
            };
        };
    };
};

/// /// /// /// /// only unnanswered questions re appear

