class Timer {
    constructor(minutes, seconds) {
        this.minutes = minutes;
        this.seconds = seconds;
    };
    show() {
        let roomSpace = document.querySelector("#room-space");
        let timerDiv = document.createElement("div");
        timerDiv.style.position = "fixed";
        timerDiv.style.top = "0";
        timerDiv.style.margin = "5%";
        timerDiv.style.color = "white";
        timerDiv.style.fontWeight = "bolder";
        timerDiv.style.fontSize = "3rem";
        timerDiv.style.fontFamily = "Turret road";
        roomSpace.appendChild(timerDiv);

        this.div = timerDiv;
    }

    updateSeconds() {
        this.seconds--;
        if (this.seconds == 0) {
            if (this.minutes == 0) {
                gameOver("lose");
            } else {
                this.seconds = 59;
                this.minutes--;
            };
        };
        this.div.innerText = `00 : 0${this.minutes} : ${doubleDigits(this.seconds)}`;
    };
};

let doubleDigits = (seconds) => {
    if (seconds < 10) {
        return `0${seconds}`;
    } else {
        return seconds;
    };
};

let timer = new Timer(2, 10);

timer.show();

setInterval(() => {
    if (!avatar.isGameOver) {
        timer.updateSeconds();
    };
}, 1000);