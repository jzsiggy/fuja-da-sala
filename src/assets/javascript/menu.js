let menuBtn = document.querySelector(".menu-icon");

let toggleShow = () => {
    let inventory = document.querySelector(".inventory");

    // console.log(inventory);
    inventory.classList.toggle("slideInRight");
    inventory.classList.toggle("slideOutRight");
    inventory.classList.remove("hide");
};

menuBtn.addEventListener("click", toggleShow);