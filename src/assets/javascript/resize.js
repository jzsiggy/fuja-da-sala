window.addEventListener("resize", () => {
    let width = window.innerWidth;

    let blockWidth = width / gameSpace[0].length;
    let blocks = document.querySelectorAll(".block");
    blocks.forEach(block => {
        block.style.width = `${blockWidth}px`;
        block.style.height = `${blockWidth}px`;
    });
});

let moveCamera = (avatarDiv) => {
    let gameWindow = document.querySelector("#game-window");    
    let left = avatarDiv.offsetLeft;
    let top = avatarDiv.offsetTop;
    let right = window.innerWidth - left;
    let bottom = window.innerHeight - top;
    
    let height = avatarDiv.offsetHeight;
    let width = avatarDiv.offsetWidth;

    gameWindow.scrollTo((left - right) / 2 + width/2 , (top - bottom) / 2 + height/2)
    window.scrollTo((left - right) / 2 + width/2 , (top - bottom) / 2 + height/2)
};