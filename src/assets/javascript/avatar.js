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
                moveDomElements();
            } else {
                console.log(tradutor[gameSpace[this.y - 1][this.x]]["message"]);
            }
        };   
    };
    moveDown() {
        if (this.y < gameSpace.length - 1) {
            if (gameSpace[this.y + 1][this.x] == 0) {
                this.prevX = this.x;
                this.prevY = this.y;
                this.y++;
                moveDomElements();
            } else {
                console.log(tradutor[gameSpace[this.y + 1][this.x]]["message"]);
            }
        };
    };
    moveLeft() {
        if (this.x > 0) {
            if (gameSpace[this.y][this.x - 1] == 0) {
                this.prevX = this.x;
                this.prevY = this.y;
                this.x--;
                moveDomElements();
            } else {
                console.log(tradutor[gameSpace[this.y][this.x - 1]]["message"]);
            }
        };
    };
    moveRight() {
        if (this.x < gameSpace[this.y].length - 1) {
            if (gameSpace[this.y][this.x + 1] == 0) {
                this.prevX = this.x;
                this.prevY = this.y;
                this.x++;
                moveDomElements();
            } else {
                console.log(tradutor[gameSpace[this.y][this.x + 1]]["message"]);
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

let moveDomElements = () => {
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

document.addEventListener('keypress', moveAvatar);