const btn = document.getElementById("btn");
let id = document.getElementsByClassName("button");

window.addEventListener("keydown", test);
const rightOs = document.getElementById("OSRight");
const leftOs = document.getElementById("OSLeft");

let previousButton = null;

// Function for test keyboard
function test(e) {
  const { code } = e;
  for (let button of id) {
    if (code === button.id) {
      console.log("match");
      console.log(button);
      button.classList.add("btn-worked");
      button.classList.add("btn-click");
      console.log("worked");

      // Remove event listeners from the previous button, if it exists
      if (previousButton) {
        previousButton.removeEventListener("keydown", onKeyDown);
        previousButton.removeEventListener("keyup", onKeyUp);
      }

      // Add event listeners to the new button
      button.addEventListener("keydown", onKeyDown);
      button.addEventListener("keyup", onKeyUp);

      // Set the button to be focusable and give it focus
      button.setAttribute("tabindex", "0");
      button.focus();

      // Update the previous button reference to the new button
      if (e.type === "keydown") {
        previousButton = button;
      }

      // Test RightOS button on Google Chrome
    } else if (code === "MetaRight") {
      rightOs.classList.add("btn-worked");

      // Add event listeners to the new button
      rightOs.addEventListener("Keydown", addWorkedRight());
      rightOs.addEventListener("keyup", removeWorkedRight);

      // Set the button to be focusable and give it focus
      rightOs.setAttribute("tabindex", "0");
      rightOs.focus();

      // Test LeftOS button on Google Chrome
    } else if (code === "MetaLeft") {
      leftOs.classList.add("btn-worked");

      // Add event listeners to the new button
      leftOs.addEventListener("Keydown", addWorkedLeft());
      leftOs.addEventListener("keyup", removeWorkedLeft);

      // Set the button to be focusable and give it focus
      leftOs.setAttribute("tabindex", "0");
      leftOs.focus();
    }
  }
  console.log(e);
}

function onKeyDown(e) {
  const { code } = e;
  for (let button of id) {
    if (code === button.id) {
      button.classList.add("btn-click");
      console.log("click");
    }
  }

  // Update the previous button reference to the current button
  // previousButton = button;
}

const onKeyUp = (e) => {
  const button = e.target;
  button.classList.remove("btn-click");
  console.log("released");
};

// Disable keyboard key functions
document.onkeydown = function (event) {
  event = event || window.event;
  const keyCode = [
    9, 18, 91, 93, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122,
    123, 191, 222,
  ];
  for (let code of keyCode) {
    if (event.keyCode === code) {
      event.preventDefault();
    }
  }
};

// Function for add and remove class to RightOS button
function addWorkedRight() {
  rightOs.classList.add("btn-click");
  console.log("pressed");
}

function removeWorkedRight() {
  rightOs.classList.remove("btn-click");
  console.log("release");
}

// Function for add and remove class to LeftOS button
function addWorkedLeft() {
  leftOs.classList.add("btn-click");
  console.log("pressed");
}

function removeWorkedLeft() {
  leftOs.classList.remove("btn-click");
  console.log("release");
}

// Test Print Screen key
const prnt = document.getElementById("PrintScreen");

document.addEventListener("keyup", (event) => {
  if (event.code === "PrintScreen") {
    prnt.classList.add("btn-worked");
  }
});

// Disable context menu key functionality on keyboard
document.oncontextmenu = function (e) {
  e.preventDefault();
  return false;
};
