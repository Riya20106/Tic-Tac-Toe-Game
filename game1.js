let boxes = document.querySelectorAll(".box");
let turn0 = 1;
//playerx ,playery 
let par = document.querySelector("p");


const draw = () => {
    par.innerText = `It's a Draw!`;
    w.forEach((el) => {
        el.classList.remove("hide");
    });
};

let c = 0;
let flag = false;
boxes.forEach((boxes) => {
    boxes.addEventListener("click", () => {
        if (turn0 == 1) {
            boxes.innerText = "O";
            turn0 = 0;
            c++;
        } else {
            boxes.innerText = "X";
            turn0 = 1;
            c++;
        }
        boxes.disabled = true;
        winner();
        if (flag == false && c == 9) {
            draw();
        }
    });

});

let r = document.querySelector("#res");

const disboxes = () => {
    for (let bx of boxes) {
        bx.disabled = true;
    }
};

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const winner = () => {
    for (pattern of winpatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                flag = true;
                console.log(pos1, "winner");
                showwinner(winner);
                disboxes();
                break;
            }
        }
    }
}



let w = document.querySelectorAll(".win");

const showwinner = ((winner) => {
    // alert(`Congratulations! The winner is ${turn0 == false ? "O" : "X"}`);
    par.innerText = `Congratulations! The winner is ${turn0 == false ? "O" : "X"}`
    w.forEach((w) => {
        w.classList.remove("hide");
    })
});

let game = document.querySelector("#ng");

game.addEventListener(("click"), () => {
    boxes.forEach((boxes) => {
        boxes.innerText = "";
        c = 0;
        flag = false;
        boxes.disabled = false;
        w.forEach((w) => {
            w.classList.add("hide");
        })
    });
});

r.addEventListener("click", () => {
    boxes.forEach((boxes) => {
        boxes.innerText = "";
        c = 0;
        flag = false;
        boxes.disabled = false;
        w.forEach((w) => {
            w.classList.add("hide");
        })
    });
});