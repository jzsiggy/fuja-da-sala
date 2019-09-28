class Avatar {
    constructor (x, y) {
    this.x = x,
    this.y = y
    }

    moveUp() {
        this.prevX = this.x;
        this.prevY = this.y;
        if (this.y > 0) {
            this.y--;
        };
    }
    moveDown() {
        this.prevX = this.x;
        this.prevY = this.y;
        if (this.y < gameSpace.length - 1) {
            this.y++;
        };
    }
    moveLeft() {
        this.prevX = this.x;
        this.prevY = this.y;
        if (this.x > 0) {
            this.x--;
        };
    }
    moveRight() {
        this.prevX = this.x;
        this.prevY = this.y;
        if (this.x < gameSpace[this.y].length - 1) {
            this.x++;
        };
    }
}

let avatar = new Avatar(8, 3);

let moveAvatar = (e) => {
    let hasMoved = 0;

    if (e.key == "w") {
        avatar.moveUp();
        hasMoved = 1;
    } else if (e.key == "s") {
        avatar.moveDown();
        hasMoved = 1;
    } else if (e.key == "d") {
        avatar.moveRight();
        hasMoved = 1;
    } else if (e.key == "a"){
        avatar.moveLeft();
        hasMoved = 1;
    }

    if (hasMoved) {
        gameSpace[avatar.prevX][avatar.prevY] = 0;
        gameSpace[avatar.x][avatar.y] = 1;

        // debugger

        let row = document.querySelectorAll('.row')[avatar.y];
        let blocks = row.querySelectorAll(".block");
        let avatarPosition = blocks[avatar.x];

        let prevRow = document.querySelectorAll('.row')[avatar.prevY];
        let prevBlocks = prevRow.querySelectorAll(".block");
        let prevAvatarPosition = prevBlocks[avatar.prevX]

        avatarPosition.classList.toggle("chao");
        avatarPosition.classList.toggle("avatar");
        prevAvatarPosition.classList.toggle("avatar");
        prevAvatarPosition.classList.toggle("chao");
    };
};

document.addEventListener('keypress', moveAvatar);