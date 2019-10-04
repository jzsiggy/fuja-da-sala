const tradutor = {
    0: {
        class: "chao",
    },
    1: {
        class: "avatar-default",
    },
    2: {
        class: "sicuto",
        collectible: "sapato brisa",
        prerequisites: ["plantinha", "RPG", "chave da moto", "Aulas de alemão"],
        firstMessage: "YOYO mi hermano, que passa?",
        perguntas: 
                [
                    {pergunta: "quantos anos eu tenho?", opcoes: ["50", "20", "27"], resposta: "27", respondida: false},
                    {pergunta: "qual o nome do meu primeiro catchoro?", opcoes: ["bilu", "roberto", "maria"], resposta: "roberto", respondida: false}, 
                    {pergunta: "nome da minha mae?", opcoes: ["maria gadu", "fabiana", "nicia"], resposta: "maria gadu", respondida: false}
                ],
        errorMessage: "TA ERADO",
        noPrerequisitesMessage: "Ta faltando coisa ai meu hermano.",
        successMessage: "Se quer então toma",
    },
    3: {
        class: "marcelo",
        collectible: "",
        prerequisites: [],
        firstMessage: "",
        perguntas: 
                [
                    {pergunta: "aonde eu trampo?", opcoes: ["rock in rio", "safra", "bebidas enlatadas SA"], resposta: "safra", respondida: false},
                    {pergunta: "banda favorita", opcoes: ["mamonas assasinas", "beatles", "kelly kelly"], resposta: "beatles", respondida: false}, 
                    {pergunta: "bebida favorita", opcoes: ["FoDka", "guarana", "sukinho de UVA"], resposta: "FoDka", respondida: false}
                ],
        errorMessage: "",
        successMessage: "",
    },
    4: {
        class: "abe",
        collectible: "Aulas de alemão",
        prerequisites: ["plantinha", "RPG", "chave da moto"],
        firstMessage: "halo my friends",
        perguntas: 
                [
                    {pergunta: "ja morei em quantos paises?", opcoes: ["3", "1", "5"], resposta: "5", respondida: false},
                    {pergunta: "Por que eu sumi do curso?", opcoes: ["sou um miguelao", "pregui", "vou pro full"], resposta: "pregui", respondida: false}, 
                    {pergunta: "", opcoes: ["", "", ""], resposta: "", respondida: false}
                ],
        errorMessage: "THAT IS THE WRONG ANSWER",
        noPrerequisitesMessage: "Vai la colecionar mais coisa, depois se volta! abs!",
        successMessage: "Pega ai minhas aulas de alemão então filhote.",
    },
    5: {
        class: "jesus",
        collectible: "chave da moto",
        prerequisites: ["plantinha", "RPG"],
        firstMessage: "Salve meu irmão do coração.",
        perguntas: 
                [
                    {pergunta: "por que me chamam de jesus?", opcoes: ["EU SOU JESUS", "meu sobre Nome", "sou seu fã"], resposta: "EU SOU JESUS", respondida: false},
                    {pergunta: "quantos anos eu tenho", opcoes: ["60", "55", "58"], resposta: "58", respondida: false}, 
                    {pergunta: "cade minha moto", opcoes: ["no estacionas", "em casa", "vendi"], resposta: "em casa", respondida: false}
                ],
        errorMessage: "Ta errado, neh filhão",
        noPrerequisitesMessage: "Se precisa de mais coisa pra falar comigo, ne",
        successMessage: "Aqui esta minha moto",
    },
    6: {
        class: "gui",
        collectible: "RPG",
        prerequisites: ["plantinha"],
        firstMessage: "Salve brodi.",
        perguntas: 
                [
                    {pergunta: "Qual eh o meu joguin?", opcoes: ["RPG", "Estratégia", "WAR"], resposta: "RPG", respondida: false},
                    {pergunta: "Por que eu nunca vou almmocar com vcs no sabado?", opcoes: ["namorada", "mamãe", "tenho que estudar"], resposta: "mamãe", respondida: false}, 
                    {pergunta: "Aonde eu trabalho?", opcoes: ["Startups", "firma do papai", "IRONHACK"], resposta: "Startups", respondida: false}
                ],
        errorMessage: "EeEeEerrrou garotinho! bjs do tio",
        noPrerequisitesMessage: "Putzz, tu nao tem o que eu gosto... depois se vem falar comigo.",
        successMessage: "Beleza irmao.. se me ganhou. pode levar meu RPG",
    },
    7: {
        class: "juka",
        collectible: "CHAVE",
        prerequisites: ["plantinha", "RPG", "chave da moto", "Aulas de alemão", "sapato brisa", "Bento"],
        firstMessage: "salve, salve",
        perguntas: 
                [
                    {pergunta: "", opcoes: ["", "", ""], resposta: "", respondida: false},
                    {pergunta: "", opcoes: ["", "", ""], resposta: "", respondida: false}, 
                    {pergunta: "", opcoes: ["", "", ""], resposta: "", respondida: false}
                ],
        errorMessage: "Precisa conhecer mais xuxu de aboboras. bjk",
        noPrerequisitesMessage: "Brodi, pra falar com o pops tem que falar com os outros.",
        successMessage: "Eu sou Juks",
    },
    8: {
        class: "coe",
        collectible: "Bento",
        prerequisites: ["plantinha", "RPG", "chave da moto", "Aulas de alemão", "sapato brisa"],
        firstMessage: "Oi filhin",
        perguntas: 
                [
                    {pergunta: "Qual eh meu hobby?", opcoes: ["fotografia", "ir pra praia", "JQUERY"], resposta: "JQUERY", respondida: false},
                    {pergunta: "qual o nome do meu filhin", opcoes: ["bentinho", "deco", "coe JR"], resposta: "coe JR", respondida: false}, 
                    {pergunta: "pode usar jquery?", opcoes: ["Nem", "SAI FORA", " PF NAO"], resposta: "PF NAO", respondida: false}
                ],
        errorMessage: "Pcisa conhecer mais o prof... Tchau tau",
        noPrerequisitesMessage: "Tu ta usando jquery irmao? Saia daqui",
        successMessage: "beleza meu compatriota. orgulho de titio! toma aqui",
    },
    9: {
        class: "table",
        collectible: "",
        prerequisites: [],
        errorMessage: "",
        successMessage: "",
    },
    10: {
        class: "blackboard",
        collectible: "",
        prerequisites: [],
        errorMessage: "",
        successMessage: "",
    },
    11: {
        class: "computer",
        collectible: "",
        prerequisites: [],
        errorMessage: "",
        successMessage: "",
    },
    12: {
        class: "vase",
        collectible: "plantinha",
        prerequisites: [],
        errorMessage: "",
        successMessage: "Pode pegar minhas plantas!",
    },
    13: {
        class: "door",
        collectible: "",
        prerequisites: ["chave", "plant", "chave da moto"],
        errorMessage: "Ainda nao podes sair",
        successMessage: "SAIU",
    },
};