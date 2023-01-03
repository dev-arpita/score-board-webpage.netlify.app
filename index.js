
let scoreElA = document.getElementById("score-el-a");

let scoreElB = document.getElementById("score-el-b");
let teamA = document.getElementById("team-a")
let teamB = document.getElementById("team-b")

let winner = document.getElementById("winner");

let firstTeamScore = 0;
let secondTeamScore = 0;

function scoreA1() {
   firstTeamScore +=1 ;
   scoreElA.textContent = firstTeamScore;
}

function scoreA2() {
  firstTeamScore +=2 ;
   scoreElA.textContent = firstTeamScore;
}

function scoreA3() {
   firstTeamScore +=3 ;
   scoreElA.textContent = firstTeamScore;
}

function scoreB1() {
    secondTeamScore += 1;
    scoreElB.textContent = secondTeamScore;
}

function scoreB2() {
    secondTeamScore += 2;
    scoreElB.textContent = secondTeamScore;
}

function scoreB3() {
    secondTeamScore += 3;
    scoreElB.textContent = secondTeamScore;
}

function restart() {
firstTeamScore = 0;
secondTeamScore = 0;
scoreElB.textContent = secondTeamScore;
scoreElA.textContent = firstTeamScore;
}

// let result =




