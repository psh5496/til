var character = document.getElementById("character");
var block = document.getElementById("block");
var scoreHTML = document.getElementById("score");
var startHTML = document.getElementById("start");
var resetHTML = document.getElementById("reset");
score = 0;

function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate");
    }
    setTimeout(function () {
        character.classList.remove("animate");
    }, 500);
}

document.body.onkeyup = (e) => {
    if (e.keyCode == 32) {
        jump();
    }
}


function checkdead() {
    setInterval(function () {
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
            block.style.animation = "none";
            block.style.display = "none";
            alert("u lose.");
        }
    }, 10);
}

function scoref() {
    setInterval(function () {
        score++;
        scoreHTML.innerHTML = `<h1>score : ${score}</h1>`;
    }, 100)
}

async function init() {
    try {
        await checkdead();
        await scoref();
    } catch (err) {
        console.error(err); // error 발생 시 catch 블락에서 잡히도록 handling
    }
}   

startHTML.addEventListener('click', function(event){
    init();
});
