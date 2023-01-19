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
  const buttonclicked2 = document.querySelector(".buttonclicked2");

  buttons[0].addEventListener("click", function () {
    buttonBackground.style.backgroundColor = "white";
    buttonBackground.style.height = "100vh";
    buttonText.style.color = "#151515";
    buttonclicked.classList.toggle("hidden");
    clicked = true;
  });

  buttons[1].addEventListener("click", function () {
    buttonBackground.style.backgroundColor = "white";
    buttonBackground.style.height = "100vh";
    buttonText.style.color = "#151515";
    buttonclicked2.classList.toggle("hidden");
  });
}

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
  arrow.src = isArrow1 ? "img/arrow2.svg" : "img/arrow1.svg";
  // toggle the flag
  isArrow1 = !isArrow1;
}

// set an interval to call the toggleArrow function every 0.5 seconds
setInterval(toggleArrow, 500);

// select the img element
let img = document.querySelector(".secondright img");

// set a flag to track which image is currently being displayed
let isImg1 = true;

// create a function to toggle between the two images
function toggleImg() {
  // change the source of the img element to switch between img/article4-2.png and img/article4-2-2.png
  img.src = isImg1 ? "img/article4-2-2.png" : "img/article4-2.png";
  // toggle the flag
  isImg1 = !isImg1;
}

// set an interval to call the toggleImg function every 0.5 seconds
setInterval(toggleImg, 500);

//RANDOM TEXT
// Select the div element
let randomText = document.querySelector("#random-text");

// Function to generate random letters and spaces
function generateRandomText() {
  // String of possible characters to generate
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  // String to store the generated text
  let text = "";

  // Loop to generate a random number of characters
  for (let i = 0; i < 252; i++) {
    // Generate a random index within the range of the characters string
    let index = Math.floor(Math.random() * characters.length);
    // Add the character at the randomly generated index to the text string
    text += characters[index];
    text += "     ";
  }

  // Insert the generated text into the div element
  randomText.innerHTML = text;
}

// Call the generateRandomText function
generateRandomText();

// Set an interval to call the generateRandomText function every 1000 milliseconds (1 second)
setInterval(generateRandomText, 1000);

function setMiddleHoverText() {
  const hover1 = document.querySelector(".hover1");
  const hover2 = document.querySelector(".hover2");
  const hover3 = document.querySelector(".hover3");
  const hover4 = document.querySelector(".hover4");
  const middleHover = document.querySelector(".middlehover");

  hover1.addEventListener("mouseover", function () {
    middleHover.innerHTML =
      "''So I started making scans of the slides and it ended up being the wrong resolution, the wrong cropping''";
  });

  hover2.addEventListener("mouseover", function () {
    middleHover.innerHTML = "''full of sh*t, full of the wrong things''";
  });

  hover3.addEventListener("mouseover", function () {
    middleHover.innerHTML = "''Let me make a movie out of it,''";
  });

  hover4.addEventListener("mouseover", function () {
    middleHover.innerHTML =
      "''It was exciting. And it was also done with new technology.''";
  });
}

window.onload = function () {
  changeBackground();
  setMiddleHoverText();
};

const text2_3_1 = document.querySelector(".text2-3-1");
const text2_3_2 = document.querySelector(".text2-3-2");

text2_3_1.addEventListener("mouseover", () => {
  text2_3_2.style.display = "block";
});

text2_3_1.addEventListener("mouseout", () => {
  text2_3_2.style.display = "none";
});
