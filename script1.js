let inputValue = document.getElementById("guessNo");
let heading = document.getElementsByTagName("h1");
let again = document.getElementById("again");
let check = document.querySelector(".check");
let message = document.querySelector(".message");
let score = document.querySelector(".score");
let highscore = document.querySelector(".highscore");
let body = document.getElementsByTagName("body");

let highscoreValue = 0;
let initialSCore = 20;
let randomNo = Math.trunc(Math.random() * 20 + 1);

/////////////to check the answer//////

function checkingAnswer(e) {
  if (inputValue.value.length < 1) {
    message.innerText = "⛔️ No number!";
    return;
  }
  if (initialSCore <= 1 && inputValue.value != randomNo) {
    message.innerText = "💥 You lost the game!";
    initialSCore = 0;
    inputValue.value = "";
    score.innerText = initialSCore;
    body[0].style.backgroundColor = "#DA6E6E";
    gameStatus();
    return;
  }
  if (inputValue.value == randomNo) {
    console.log("value", randomNo);
    message.innerText = "🎉 Correct Number!";
    body[0].style.backgroundColor = "#60b347";
    gameStatus();
    if (initialSCore > highscoreValue) {
      highscoreValue = initialSCore;
      highscore.innerText = initialSCore;
    }
  } else if (inputValue.value < randomNo) {
    console.log("value is less", randomNo);
    message.innerText = "📉 Too low!";
    --initialSCore;
    score.innerText = initialSCore;
  } else {
    console.log("value is more", randomNo);

    message.innerText = "📈 Too high!";
    --initialSCore;
    score.innerText = initialSCore;
  }
}

/////////////to reset the game//////
function reset(e) {
  //   console.log(body[0]);
  randomNo = Math.trunc(Math.random() * 20 + 1);
  message.innerText = "Start guessing...";
  score.innerText = 20;
  initialSCore = 20;
  inputValue.value = "";
  body[0].style.backgroundColor = "#222";
  check.removeAttribute("disabled");
  check.style.cursor = "pointer";
  heading[0].innerHTML = "Guess My Number!";
}

//////////to disable button///////////
function gameStatus(status) {
  check.setAttribute("disabled", "");
  check.style.cursor = "not-allowed";
  heading[0].innerHTML =
    "click <span class=againHeading >Again!</span> to play";
}

//////////////eventListeners//////////////
check.addEventListener("click", checkingAnswer);
again.addEventListener("click", reset);
