let UserScore = 0;
let CompScore = 0;

let choices = document.querySelectorAll(".choice");
let userscore = document.querySelector("#userscore");
let Compscore = document.querySelector("#Compscore");
let message = document.querySelector("#msg");
let msgBox = document.querySelector("#msgBox");

const drawGame = () => {
  message.innerHTML = "Game was Draw, Play again...";
  msgBox.style.backgroundColor = "yellow";
};

let showWinner = (userWins) => {
  if (userWins) {
    UserScore++;
    userscore.innerHTML = UserScore;
    message.innerHTML = "You Wins!";
    msgBox.style.backgroundColor = "green";
  } else {
    CompScore++;
    Compscore.innerHTML = CompScore;
    message.innerHTML = "You lose.";
    msgBox.style.backgroundColor = "yellow";
  }
};

const playGame = (UserChoice) => {
  const compChoice = genComChoice();

  if (UserChoice === compChoice) {
    drawGame();
  } else {
    let userWins = false;
    if (UserChoice === "Rock") {
      userWins = compChoice === "paper" ? false : true;
    } else if (UserChoice === "paper") {
      userWins = compChoice === "Scissors" ? false : true;
    } else {
      userWins = compChoice === "Rock" ? false : true;
    }
    showWinner(userWins);
  }
};

choices.forEach((Choice) => {
  Choice.addEventListener("click", () => {
    const UserChoice = Choice.getAttribute("id");
    playGame(UserChoice);
  });
});

const genComChoice = () => {
  const options = ["Rock", "paper", "Scissors"];
  const random = Math.floor(Math.random() * 3);
  console.log(random);
  return options[random];
};
