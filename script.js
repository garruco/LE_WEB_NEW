document.querySelector(".alta").addEventListener("click", function () {
  // Scroll to a specific element on the page
  document.querySelector(".desc").scrollIntoView({
    behavior: "smooth",
  });
});

document.querySelector(".baixa").addEventListener("click", function () {
  // Scroll to a specific element on the page
  document.querySelector(".desc").scrollIntoView({
    behavior: "smooth",
  });
});

const buttonYellow = document.querySelector(".button");
const buttonWhite = document.querySelector(".button-white");
const buttonTitle = document.querySelector(".buttontitle");
const buttonDesc = document.querySelector(".buttondesc");
var clicked = false;

buttonWhite.addEventListener("mouseover", function () {
  buttonTitle.innerHTML = "“absence in designis very important”:";
  buttonDesc.innerHTML =
    "Karel Martens on paying attention to the things we don’t see";
});

buttonYellow.addEventListener("mouseover", function () {
  buttonTitle.innerHTML = "thirteen ways of looking at a typeface:";
  buttonDesc.innerHTML = "michael bierut";
});

const buttons = document.querySelectorAll(".button");
const buttonText = document.querySelector(".buttontext");

buttons.forEach((button) => {
  button.addEventListener("mouseover", () => {
    if (!clicked) {
      buttonText.style.opacity = "1";
    }
  });
  button.addEventListener("mouseout", () => {
    if (!clicked) {
      buttonText.style.opacity = "0";
    }
  });
});

function changeBackground() {
  var buttonBackground = document.querySelector(".buttonbackground");
  var buttons = document.querySelectorAll(".button");
  const buttonclicked = document.querySelector(".buttonclicked");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      buttonBackground.style.backgroundColor = "white";
      buttonBackground.style.height = "100vh";
      buttonText.style.color = "#151515";
      buttonclicked.classList.toggle("hidden");
      clicked = true;
    });
  });
}
window.onload = changeBackground;

const image = document.querySelector(".buttonclicked img");
const originalSrc = image.src;

image.addEventListener("mouseover", function () {
  image.src = "img/michael2.png";
});

image.addEventListener("mouseout", function () {
  image.src = originalSrc;
});

const text = document.querySelector(".fontchangingtext");
const fonts = ["Helvetica", "Futura", "Garamond"];
let i = 0;

setInterval(function () {
  text.style.fontFamily = fonts[i];
  i = (i + 1) % fonts.length;
}, 500);

//fontchangingtext2

let fontIndex = 0;
const fontStyles = [
  { fontWeight: "normal", fontStyle: "normal", textDecoration: "none" },
  { fontWeight: "bold", fontStyle: "normal", textDecoration: "none" },
  { fontWeight: "normal", fontStyle: "oblique", textDecoration: "none" },
  { fontWeight: "bold", fontStyle: "oblique", textDecoration: "underline" },
];

function cycleFontStyles() {
  const fontchangingtext2 = document.querySelector(".fontchangingtext2");
  fontchangingtext2.style.fontWeight = fontStyles[fontIndex].fontWeight;
  fontchangingtext2.style.fontStyle = fontStyles[fontIndex].fontStyle;
  fontchangingtext2.style.textDecoration = fontStyles[fontIndex].textDecoration;
  fontIndex = (fontIndex + 1) % fontStyles.length;
}

setInterval(cycleFontStyles, 150);

//bg
const newButtonContainer = document.querySelector(".newbuttoncontainer");
const newButtonClicked = document.querySelector(".newbuttonclicked");
var styleElem = document.head.appendChild(document.createElement("style"));

newButtonContainer.addEventListener("click", function () {
  newButtonClicked.style.display = "block";
  newButtonContainer.style.backgroundColor = "#151515";
  newButtonContainer.style.color = "white";
  styleElem.innerHTML = ".newbutton:after {background: white;}";
});

//animcoes textos na vertical e diagonal
function startAnimation() {
  var animationTexts = document.querySelectorAll(".animationtext");
  for (var i = 0; i < animationTexts.length; i++) {
    animationTexts[i].style.visibility = "hidden";
  }

  var delay = 200;
  for (var i = 0; i < animationTexts.length; i++) {
    setTimeout(
      (function (x) {
        return function () {
          animationTexts[x].style.visibility = "visible";
        };
      })(i),
      delay * i
    );
  }

  setTimeout(function () {
    startAnimation();
  }, (animationTexts.length + 2) * delay);
}

startAnimation();

function startAnimation2() {
  var animationTexts = document.querySelectorAll(".animationtext2");
  for (var i = 0; i < animationTexts.length; i++) {
    animationTexts[i].style.visibility = "hidden";
  }

  var delay = 200;
  for (var i = 0; i < animationTexts.length; i++) {
    setTimeout(
      (function (x) {
        return function () {
          animationTexts[x].style.visibility = "visible";
        };
      })(i),
      delay * i
    );
  }

  setTimeout(function () {
    startAnimation2();
  }, (animationTexts.length + 2) * delay);
}

startAnimation2();

// select the img element
let arrow = document.querySelector(".articleskip img");

// set a flag to track which image is currently being displayed
let isArrow1 = true;

// create a function to toggle between the two images
function toggleArrow() {
  // change the source of the img element to switch between arrow1.svg and arrow2.svg
  arrow.src = isArrow1 ? "/img/arrow2.svg" : "/img/arrow1.svg";
  // toggle the flag
  isArrow1 = !isArrow1;
}

// set an interval to call the toggleArrow function every 0.5 seconds
setInterval(toggleArrow, 500);
