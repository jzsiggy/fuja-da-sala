const tradutor = {
    0: {
        class: "chao",
    },
    1: {
        class: "avatar-default",
    },
    2: {
        class: "sicuto",
        collectible: "",
        prerequisites: [],
        firstMessage: "",
        perguntas: 
                [
                    {pergunta: "quantos anos eu tenho?", opcoes: ["50", "20", "27"], resposta: "27"},
                    {pergunta: "qual o nome do meu primeiro catchoro?", opcoes: ["bilu", "roberto", "maria"], resposta: "roberto"}, 
                    {pergunta: "nome da minha mae?", opcoes: ["maria gadu", "fabiana", "nicia"], resposta: "maria gadu"}
                ],
        errorMessage: "",
        successMessage: "Eu sou o Sicu",
    },
    3: {
        class: "marcelo",
        collectible: "",
        prerequisites: [],
        firstMessage: "",
        perguntas: 
                [
                    {pergunta: "aonde eu trampo?", opcoes: ["rock in rio", "safra", "bebidas enlatadas SA"], resposta: "safra"},
                    {pergunta: "banda favorita", opcoes: ["mamonas assasinas", "beatles", "kelly kelly"], resposta: "beatles"}, 
                    {pergunta: "bebida favorita", opcoes: ["FoDka", "guarana", "sukinho de UVA"], resposta: "FoDka"}
                ],
        errorMessage: "",
        successMessage: "",
    },
    4: {
        class: "abe",
        collectible: "",
        prerequisites: [],
        firstMessage: "",
        perguntas: 
                [
                    {pergunta: "ja morei em quantos paises?", opcoes: ["3", "1", "5"], resposta: "5"},
                    {pergunta: "Por que eu sumi do curso?", opcoes: ["sou um miguelao", "pregui", "vou pro full"], resposta: "pregui"}, 
                    {pergunta: "", opcoes: ["", "", ""], resposta: ""}
                ],
        errorMessage: "",
        successMessage: "Eu sou Abe",
    },
    5: {
        class: "jesus",
        collectible: "chave da moto",
        prerequisites: ["plant", "chave"],
        firstMessage: "",
        perguntas: 
                [
                    {pergunta: "por que me chamam de jesus?", opcoes: ["EU SOU JESUS", "meu sobre Nome", "sou seu fã"], resposta: "EU SOU JESUS"},
                    {pergunta: "quantos anos eu tenho", opcoes: ["60", "55", "58"], resposta: "58"}, 
                    {pergunta: "cade minha moto", opcoes: ["no estacionas", "em casa", "vendi"], resposta: "em casa"}
                ],
        errorMessage: "Se nao tem os negocio ainda filhão",
        successMessage: "Aqui esta minha moto",
    },
    6: {
        class: "gui",
        collectible: "chave",
        prerequisites: ["plant"],
        firstMessage: "",
        perguntas: 
                [
                    {pergunta: "Qual eh o meu joguin?", opcoes: ["RPG", "Estratégia", "WAR"], resposta: "RPG"},
                    {pergunta: "Por que eu nunca vou almmocar com vcs no sabado?", opcoes: ["namorada", "mamãe", "tenho que estudar"], resposta: "mamãe"}, 
                    {pergunta: "Aonde eu trabalho?", opcoes: ["Startups", "firma do papai", "IRONHACK"], resposta: "Startups"}
                ],
        errorMessage: "Não tens o suficiente para meu objeto",
        successMessage: "Ganhou uma chave",
    },
    7: {
        class: "juka",
        collectible: "",
        prerequisites: [],
        firstMessage: "",
        perguntas: 
                [
                    {pergunta: "", opcoes: ["", "", ""], resposta: ""},
                    {pergunta: "", opcoes: ["", "", ""], resposta: ""}, 
                    {pergunta: "", opcoes: ["", "", ""], resposta: ""}
                ],
        errorMessage: "",
        successMessage: "Eu sou Juks",
    },
    8: {
        class: "coe",
        collectible: "",
        prerequisites: [],
        firstMessage: "",
        perguntas: 
                [
                    {pergunta: "Qual eh meu hobby?", opcoes: ["fotografia", "ir pra praia", "JQUERY"], resposta: "JQUERY"},
                    {pergunta: "qual o nome do meu filhin", opcoes: ["bentinho", "deco", "coe JR"], resposta: "coe JR"}, 
                    {pergunta: "pode usar jquery?", opcoes: ["Nem", "SAI FORA", " PF NAO"], resposta: "PF NAO"}
                ],
        errorMessage: "",
        successMessage: "",
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
        collectible: "plant",
        prerequisites: [],
        errorMessage: "",
        successMessage: "Ganhou uma plantinha",
    },
    13: {
        class: "door",
        collectible: "",
        prerequisites: ["chave", "plant", "chave da moto"],
        errorMessage: "Ainda nao podes sair",
        successMessage: "SAIU",
    },
};