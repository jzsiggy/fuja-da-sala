class Avatar {
    constructor (x, y) {
        this.x = x,
        this.y = y,
        this.collectibles = [],
        this.direction = "up";
        this.prevDirection = "";
        this.class = "avatar-up-1";
        this.isInteracting = false;
        this.life = 100;
    };
    moveUp() {
        this.prevDirection = this.direction;
        this.direction = "up";
        if (this.y > 0) {
            if (gameSpace[this.y - 1][this.x] == 0) {
                this.prevX = this.x;
                this.prevY = this.y;    
                this.y--;
                moveDomAvatar();
            } else {
                interact(gameSpace[this.y - 1][this.x]);
            }
        };   
    };
    moveDown() {
        this.prevDirection = this.direction;
        this.direction = "down";
        if (this.y < gameSpace.length - 1) {
            if (gameSpace[this.y + 1][this.x] == 0) {
                this.prevX = this.x;
                this.prevY = this.y;
                this.y++;
                moveDomAvatar();
            } else {
                interact(gameSpace[this.y + 1][this.x]);
            }
        };
    };
    moveLeft() {
        this.prevDirection = this.direction;
        this.direction = "left";
        if (this.x > 0) {
            if (gameSpace[this.y][this.x - 1] == 0) {
                this.prevX = this.x;
                this.prevY = this.y;
                this.x--;
                moveDomAvatar();
            } else {
                interact(gameSpace[this.y][this.x - 1]);
            }
        };
    };
    moveRight() {
        this.prevDirection = this.direction;
        this.direction ="right";
        if (this.x < gameSpace[this.y].length - 1) {
            if (gameSpace[this.y][this.x + 1] == 0) {
                this.prevX = this.x;
                this.prevY = this.y;
                this.x++;
                moveDomAvatar();
            } else {
                interact(gameSpace[this.y][this.x + 1]);
            }
        };
    };
    changedDirection() {
        if (this.direction != this.prevDirection) {
            return true;
        } else {
            return  false;
        };
    };
    showLife() {
        let roomSpace = document.querySelector("#room-space");
        let lifeBar = document
    };
};

let avatar = new Avatar(0, 5);

let moveAvatar = (e) => {
    if (!avatar.isInteracting) {
        if (e.key == "w") {
            avatar.moveUp();
        } else if (e.key == "s") {
            avatar.moveDown();
        } else if (e.key == "d") {
            avatar.moveRight();
        } else if (e.key == "a") {
            avatar.moveLeft();
        };
    };
};

let toggleDirectionClass = (direction, element) => {
    if (avatar.changedDirection()) {
        avatar.class = `avatar-${direction}-1`;
    };
    if (avatar.class == `avatar-${direction}-1`) {
        element.classList = `block avatar-${direction}-2`;
        avatar.class = `avatar-${direction}-2`;
    } else if (avatar.class == `avatar-${direction}-2`) {
        element.classList = `block avatar-${direction}-1`;
        avatar.class = `avatar-${direction}-1`;
    };
};

let setDomAvatarDirection = (element) => {
    if (avatar.direction == "down") {
        toggleDirectionClass("down", element);
    };
    if (avatar.direction == "up") {
        toggleDirectionClass("up", element);
    };
    if (avatar.direction == "left") {
        toggleDirectionClass("left", element);
    };
    if (avatar.direction == "right") {
        toggleDirectionClass("right", element);
    };
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

    setDomAvatarDirection(avatarPosition);

    prevAvatarPosition.classList = "block chao";

    moveCamera(avatarPosition);
};

document.addEventListener('keypress', moveAvatar);