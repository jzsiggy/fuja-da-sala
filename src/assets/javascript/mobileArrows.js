if (onMobile()) {
    let upArrow = document.querySelector(".up");
    let downArrow = document.querySelector(".down");
    let leftArrow = document.querySelector(".left");
    let rightArrow = document.querySelector(".right");

    upArrow.addEventListener("click", () => {
        console.log("up");
        avatar.moveUp();
    });

    downArrow.addEventListener("click", () => {
        console.log("down");
        avatar.moveDown();
    });

    leftArrow.addEventListener("click", () => {
        console.log("left");
        avatar.moveLeft();
    });

    rightArrow.addEventListener("click", () => {
        console.log("right");
        avatar.moveRight();
    });
}