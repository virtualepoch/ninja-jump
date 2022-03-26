var character = document.getElementById("character");
var enemy = document.getElementById("enemy");

function jump() {
  if (character.classList.contains("animate")) {
    return;
  }
  character.classList.add("animate");
  setTimeout(function () {
    character.classList.remove("animate");
  }, 500);
}

setInterval(checkDead, 10);

function checkDead() {
  var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  var blockLeft = parseInt(window.getComputedStyle(enemy).getPropertyValue("left"));
  if (blockLeft < 14 && blockLeft > 10 && characterTop >= 42) {
    alert("GAME OVER");
    enemy.style.animation = "none";
  }
}
