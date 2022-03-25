alert("Press OK to start");

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

var checkDead = function () {
  var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
   var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

  if (blockLeft < 50 && blockLeft > 30 && characterTop >= 230) {
    alert("u lose");
  }
};

setInterval(checkDead, 10);

function hello() {
  alert("hello");
}
