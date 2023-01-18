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