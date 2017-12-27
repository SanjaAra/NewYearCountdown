var wrapp = document.querySelector('.wrapp');
var winner = document.querySelector('.winner');
var xo = "O";
var endGame = false;

createTable();

var boxes = document.getElementsByClassName('box');

var lines = [
    [boxes[0], boxes[1], boxes[2]],
    [boxes[3], boxes[4], boxes[5]],
    [boxes[6], boxes[7], boxes[8]],
    [boxes[0], boxes[3], boxes[6]],
    [boxes[1], boxes[4], boxes[7]],
    [boxes[2], boxes[5], boxes[8]],
    [boxes[0], boxes[4], boxes[8]],
    [boxes[2], boxes[4], boxes[6]]
]

for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', insertSymbol)
}

function insertSymbol() {
    (xo == "O") ? xo = "X": xo = "O";
    this.innerHTML = xo;
    this.classList.add('active');
    if (!endGame) {
        compMove();
        checkLines();
    }

}

function checkLines() {
    for (let i = 0; i < lines.length; i++) {
        let box1 = lines[i][0];
        let box2 = lines[i][1];
        let box3 = lines[i][2];
        if (box1.innerHTML == box2.innerHTML && box1.innerHTML == box3.innerHTML && box1.innerHTML != "") {
            box1.style.background = "tomato";
            box2.style.background = "tomato";
            box3.style.background = "tomato";
            winner.innerHTML = "<h1>Winner is " + box1.innerHTML + "</h1>";
            endGame = true;
        }
    }
}



function createTable() {
    var text = '';
    for (let i = 0; i < 9; i++) {
        text += '<div class="box"></div>';
    }
    wrapp.innerHTML = text;
}

function compMove() {
    (xo == "O") ? xo = "X": xo = "O";
    var emptyFields = [];
    for (var i = 0; i < boxes.length; i++) {
        if (boxes[i].innerHTML == "") {
            emptyFields.push(boxes[i])
        }
    }
    var rand = Math.floor(Math.random() * emptyFields.length);
    setTimeout(() => {
        emptyFields[rand].classList.add('active');
        emptyFields[rand].innerHTML = xo;
        checkLines()
    }, 500)

}