const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const rand = Math.floor(Math.random() * 3);
    return options[rand];
};

let userscore = document.querySelector("#userscore");
let compscore = document.querySelector("#compscore");

let userScoreValue = 0;
let compScoreValue = 0;

compscore.innerText = compScoreValue;
userscore.innerText = userScoreValue;

let paper = document.querySelector("#paper");
let scissors = document.querySelector("#sis");
let rock = document.querySelector("#rock");

function showCompChoice(comp) {
    let p = document.createElement("p");
    p.innerText = "Computer choice: " + comp;
    document.body.appendChild(p);
}

paper.onclick = () => {
    let user = "paper";
    let comp = gencompchoice();
    showCompChoice(comp);

    if (user === comp) {
        alert("Match tie");
    } else if (comp === "rock") {
        userScoreValue++;
        userscore.innerText = userScoreValue;
        alert("You won");
    } else if (comp === "scissors") {
        compScoreValue++;
        compscore.innerText = compScoreValue;
        alert("You lost");
    }
};

rock.onclick = () => {
    let user = "rock";
    let comp = gencompchoice();
    showCompChoice(comp);

    if (user === comp) {
        alert("Match tie");
    } else if (comp === "scissors") {
        userScoreValue++;
        userscore.innerText = userScoreValue;
        alert("You won");
    } else if (comp === "paper") {
        compScoreValue++;
        compscore.innerText = compScoreValue;
        alert("You lost");
    }
};

scissors.onclick = () => {
    let user = "scissors";
    let comp = gencompchoice();
    showCompChoice(comp);

    if (user === comp) {
        alert("Match tie");
    } else if (comp === "rock") {
        compScoreValue++;
        compscore.innerText = compScoreValue;
        alert("You lost");
    } else if (comp === "paper") {
        userScoreValue++;
        userscore.innerText = userScoreValue;
        alert("You won");
    }
};
let restart = document.querySelector("#restart");
restart.onclick = () => {
    userScoreValue = 0;
    compScoreValue = 0;
    userscore.innerText = userScoreValue;
    compscore.innerText = compScoreValue;
};
document.addEventListener("keydown", function(event) {
    if (event.key === "r" || event.key === "R") {
        location.reload();
    }
});
