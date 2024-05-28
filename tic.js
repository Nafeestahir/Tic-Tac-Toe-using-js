let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset-btn");
let newgame = document.querySelector(".new-btn");
let show = document.querySelector(".hide-cont");
let result = document.querySelector(".Game-res");

let turn = true;
let win_condition = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const winnerChecking = () => {
    for (let pattern of win_condition) {
        let pos1 = boxes[pattern[0]].innerHTML;
        let pos3 = boxes[pattern[1]].innerHTML;
        let pos2 = boxes[pattern[2]].innerHTML;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                showwinner(pos1);
                disableboxes();
            }
        }

    }
};

const reset_game = () => {
    turn = 0;
    enableboxes();
    show.classList.add("hide-cont");
}

const showwinner = (winner) => {
    result.innerHTML = `Congratulation Winner is ${winner}`;
    show.classList.remove("hide-cont");
};

const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn === true) {
            box.innerHTML = "o";
            turn = false;
        }
        else {
            box.innerHTML = "x";
            turn = true;
        }
        box.disabled = true;
        winnerChecking();
    })
});

reset_btn.addEventListener("click", reset_game);
newgame.addEventListener("click", reset_game);