var character = document.getElementById("character");
var block = document.getElementById("block");

function jump() {
  if (character.classList.contains("animate")) {
    return;
  }

  character.classList.add("animate");
  setTimeout(function () {
    character.classList.remove("animate");
  }, 500);
}

var checkDead = setInterval(function () {
  var characterTop = parsInt(window.getComputedStyle(character).getPropertyValue("top"));
  var blockLeft = parsInt(window.getComputedStyle(block).getPropertyValue("left"));

  if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
    block.style.animation = "none";
    block.style.display = "none";
    alert("u lose");
  }
}, 10);
