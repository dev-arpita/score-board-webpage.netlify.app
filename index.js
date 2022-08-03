
let scoreElA = document.getElementById("score-el-a");

let scoreElB = document.getElementById("score-el-b");
let teamA = document.getElementById("team-a")
let teamB = document.getElementById("team-b")

let winner = document.getElementById("winner");

let firstTeamScore = 0;
let secondTeamScore = 0;

function scorea1() {
   firstTeamScore +=1 ;
   scoreElA.textContent = firstTeamScore;
}

function scorea2() {
  firstTeamScore +=2 ;
   scoreElA.textContent = firstTeamScore;
}

function scorea3() {
   firstTeamScore +=3 ;
   scoreElA.textContent = firstTeamScore;
}

function scoreb1() {
    secondTeamScore += 1;
    scoreElB.textContent = secondTeamScore;
}

function scoreb2() {
    secondTeamScore += 2;
    scoreElB.textContent = secondTeamScore;
}

function scoreb3() {
    secondTeamScore += 3;
    scoreElB.textContent = secondTeamScore;
}

function restart() {
firstTeamScore = 0;
secondTeamScore = 0;
scoreElB.textContent = secondTeamScore;
scoreElA.textContent = firstTeamScore;
}

// if (firstTeamScore > secondTeamScore)
//     return "BRAVO! you win LeBron James";
// else
// return  "Oops! you're loosing the game"}


