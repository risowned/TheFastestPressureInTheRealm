//The fastest presser in this realm
const body = document.querySelector("body");
const defaultString = "";
const defaultURLInitializer = "url('')";
let sCount = 0; // s key pressure counter
let lCount = 0; // l key pressure counter
let inputAllowed = 1; // a counter initialised to stop the key-press counting once someone wins
let gameTime = 0;
let interval = 0;
let startButton = document.getElementById("gameStartButton");
startButton.addEventListener("click", function (event) {
  inputAllowed = 0;

  // to reset back everything to initial position after every click of start button
  document.getElementById("sInputId").innerHTML = defaultString;
  document.getElementById("lInputId").innerHTML = defaultString;
  document.getElementById("resultPara").innerHTML = defaultString;
  document.getElementById("lBlock").style.backgroundImage =
    defaultURLInitializer;
  document.getElementById("sBlock").style.backgroundImage =
    defaultURLInitializer;

  gameTime = document.getElementById("gameInputId").value;
  interval = gameTime;
  setTimeout(() => {
    endGameAction();
  }, gameTime * 1000);
});
document.body.addEventListener("keypress", function (event) {
  if (event.key === "s" && inputAllowed === 0) {
    sCount = sCount + 1;
    document.getElementById("sInputId").innerHTML = sCount;
  }
  if (event.key === "l" && inputAllowed === 0) {
    lCount = lCount + 1;
    document.getElementById("lInputId").innerHTML = lCount;
  }
  if (lCount === 0 && sCount === 0 && inputAllowed === 0) {
    // this condition is for if game started but bothe s and l keys are not pressed
    document.getElementById("resultPara").innerHTML =
      "<b>Press S and L, you have given wrong input</b>";
  }
});

function endGameAction() {
  inputAllowed = 1;
  if (lCount > sCount) {
    // when l kye press count greater than s kye press count
    document.getElementById("resultPara").innerHTML = "<b>L Wins</b>";
    document.getElementById("lBlock").style.backgroundImage =
      "url('https://i.pinimg.com/originals/e5/83/3e/e5833e1bea7d379f0f4e4ae250b7cf81.gif')";
  } else if (lCount < sCount) {
    // when s kye press count greater than l kye press count
    document.getElementById("resultPara").innerHTML = "<b>S Wins</b>";
    document.getElementById("sBlock").style.backgroundImage =
      "url('https://i.pinimg.com/originals/e5/83/3e/e5833e1bea7d379f0f4e4ae250b7cf81.gif')";
  } else if (lCount === 0 && sCount === 0) {
    //when game started but no kye(s,l) is pressed
    document.getElementById("resultPara").innerHTML =
      "<b>No Input received</b>";
  } else {
    // when both kye press countings are same
    document.getElementById("resultPara").innerHTML = "<b>Its a Draw</b>";
  }
  // to initialise both kye press counts to "0" once game is over and
  // start game button is pressed again without reloading the page
  sCount = 0;
  lCount = 0;
}

let x = setInterval(function () {
  if (interval > 0) {
    interval = Math.floor(interval - 1 / 10);
    document.getElementById(
      "countDown"
    ).innerHTML = `<b>Countdown: </b> ${interval}  sec(s)`;
  }
}, 1000);
