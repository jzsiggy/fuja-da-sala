if (onMobile()) {
    let upArrow = document.querySelector(".up");
    let downArrow = document.querySelector(".down");
    let leftArrow = document.querySelector(".left");
    let rightArrow = document.querySelector(".right");

    upArrow.addEventListener("click", () => {
        if (!avatar.isInteracting) {
            avatar.moveUp();
        };
    });

    downArrow.addEventListener("click", () => {
        if (!avatar.isInteracting) {
            avatar.moveDown();
        };
    });

    leftArrow.addEventListener("click", () => {
        if (!avatar.isInteracting) {
            avatar.moveLeft();
        };
    });

    rightArrow.addEventListener("click", () => {
        if (!avatar.isInteracting) {
            avatar.moveRight();
        };
    });
}