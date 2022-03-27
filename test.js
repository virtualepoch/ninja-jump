//CREATE CANVAS AND LOAD IMAGE////////////////////
let canvas = document.createElement("canvas");
let context = canvas.getContext("2d");

canvas.width = 480;
canvas.height = 320;

document.body.appendChild(canvas);

let backgroundReady = false;
let backgroundImg = new Image();

backgroundImg.src = "./images/cityscape02.jpg";

backgroundImg.onload = function () {
  backgroundReady = true;
};

function loadImage() {
  if (backgroundReady) {
    context.drawImage(backgroundImg, 0, 0, 480, 320);
  }
}

function gameLoop() {
  loadImage();
  requestAnimationFrame(gameLoop);
}

gameLoop();

//CHARACTER///////////////////////
let heroReady = false;
let heroImg = new Image();

heroImg.src = "./images/pixel-ghost-blue.png";

heroImg.onload = function () {
  heroReady = true;
};

let hero = {
  speed: 3,
  x: 0,
  y: 0,
};

if (heroReady) {
  context.drawImage(heroImg, hero.x, hero.y, 100, 100);
}
