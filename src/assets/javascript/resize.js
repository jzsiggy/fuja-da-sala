window.addEventListener("resize", () => {
    let width = window.innerWidth;
    let blockWidth = width / gameSpace[0].length;
    let blocks = document.querySelectorAll(".block");
    blocks.forEach(block => {
        block.style.width = `${blockWidth}px`;
        block.style.height = `${blockWidth}px`;
    });
});