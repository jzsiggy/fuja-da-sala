class Avatar {
    constructor (x, y) {
        this.x = x,
        this.y = y,
        this.collectibles = []
    };
    moveUp() {
        if (this.y > 0) {
            if (gameSpace[this.y - 1][this.x] == 0) {
                this.prevX = this.x;
                this.prevY = this.y;    
                this.y--;
                moveDomAvatar();
            } else {
                // console.log("interaction");
                console.log(tradutor[gameSpace[this.y - 1][this.x]]["message"]);
                interact(gameSpace[this.y - 1][this.x]);
            }
        };   
    };
    moveDown() {
        if (this.y < gameSpace.length - 1) {
            if (gameSpace[this.y + 1][this.x] == 0) {
                this.prevX = this.x;
                this.prevY = this.y;
                this.y++;
                moveDomAvatar();
            } else {
                // console.log("interaction");
                // console.log(tradutor[gameSpace[this.y + 1][this.x]]["message"]);
                interact(gameSpace[this.y + 1][this.x]);
            }
        };
    };
    moveLeft() {
        if (this.x > 0) {
            if (gameSpace[this.y][this.x - 1] == 0) {
                this.prevX = this.x;
                this.prevY = this.y;
                this.x--;
                moveDomAvatar();
            } else {
                // console.log("interaction");
                // console.log(tradutor[gameSpace[this.y][this.x - 1]]["message"]);
                interact(gameSpace[this.y][this.x - 1]);
            }
        };
    };
    moveRight() {
        if (this.x < gameSpace[this.y].length - 1) {
            if (gameSpace[this.y][this.x + 1] == 0) {
                this.prevX = this.x;
                this.prevY = this.y;
                this.x++;
                moveDomAvatar();
            } else {
                // console.log("interaction");
                // console.log(tradutor[gameSpace[this.y][this.x + 1]]["message"]);
                interact(gameSpace[this.y][this.x + 1]);
            }
        };
    };
}

let avatar = new Avatar(0, 0);

let moveAvatar = (e) => {
    if (e.key == "w") {
        avatar.moveUp();
    } else if (e.key == "s") {
        avatar.moveDown();
    } else if (e.key == "d") {
        avatar.moveRight();
    } else if (e.key == "a") {
        avatar.moveLeft();
    }
};

let moveDomAvatar = () => {
    gameSpace[avatar.prevY][avatar.prevX] = 0;
    gameSpace[avatar.y][avatar.x] = 1;

    let row = document.querySelectorAll('.row')[avatar.y];
    let blocks = row.querySelectorAll(".block");
    let avatarPosition = blocks[avatar.x];

    let prevRow = document.querySelectorAll('.row')[avatar.prevY];
    let prevBlocks = prevRow.querySelectorAll(".block");
    let prevAvatarPosition = prevBlocks[avatar.prevX];

    avatarPosition.classList.toggle("chao");
    avatarPosition.classList.toggle("avatar");
    prevAvatarPosition.classList.toggle("avatar");
    prevAvatarPosition.classList.toggle("chao");
};

// let itemInInventory = (item) => {
//     let inventory = document.querySelector(".inventory > ul");
//     let elements = inventory.querySelectorAll("li");
//     console.log(elements)
//     elements.forEach(element => {
//         if (element.innerText = item) {
//             console.log(`${item} is already in inventory`)
//             return true;
//         };
//     });
//     return false;
// };

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
    if (hasPreRequisites(avatar.collectibles, tradutor[id]["prerequisites"])) {
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
    setTimeout(() => {
        speechDiv.innerText = "";
    }, 1000);
};

document.addEventListener('keypress', moveAvatar);