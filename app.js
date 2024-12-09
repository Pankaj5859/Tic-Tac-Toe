const buttons = document.getElementsByClassName("btn")
const resetBtn = document.getElementById("resetBtn")
const wm = document.getElementById("winmsg")
let winners = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]]


let countMoves = 0;


function disabledAllBtns() {
    for (let item of buttons) {
        item.disabled = true;
    }
}


function checkWinner() {
    for (item of winners) {
        let s1 = buttons[item[0]].innerText
        let s2 = buttons[item[1]].innerText
        let s3 = buttons[item[2]].innerText

        if (s1 == "❌" && s2 == "❌" && s3 == "❌") {
            wm.innerText = "Player 1 win"
            disabledAllBtns()

            setTimeout(() => {
                window.location.reload()
            }, 3000)

            return true;
        }
        else if (s1 == "⭕" && s2 == "⭕" && s3 == "⭕") {
            wm.innerText = "Player 2 win"
            disabledAllBtns()

            setTimeout(() => {
                window.location.reload()
            }, 3000)

            return true;

        }
    }
}

let turnX = true


for (let item of buttons) {
    item.addEventListener("click", () => {
        if (turnX) {
            countMoves++;
            item.innerText = "❌"
            turnX = false;
            item.disabled = true;
            let flag = checkWinner()
            if (flag) {
                return true;
            }

            if (countMoves == 9) {
                wm.innerText = "Match Drawn"

                setTimeout(() => {
                    window.location.reload()
                }, 3000)
            }
        }
        else {
            countMoves++;
            item.innerText = "⭕"
            turnX = true;
            item.disabled = true;
            let flag = checkWinner()
            if (flag) {
                return true;
            }
            if (countMoves == 9) {
                wm.innerText = "Match Drawn"

                setTimeout(() => {
                    window.location.reload()
                }, 3000)
            }
        }
    })
}

resetBtn.addEventListener("click", () => {
    window.location.reload()
})