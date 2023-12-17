let c = 0;
$("#change").click(function () {
  if (c == 1) {
    acerto();
  }

  $("#change").html("<a onclick='acerto()'>Sim</a>");
  $("#move").show();
  c = 1;
});

$("#move").hover(function () {
  change();
});

function acerto() {
  alert("Lutar pelo amor é bom, mas alcançá-lo sem luta é melhor - Shakespeare");
}

function change() {
  let i = Math.floor(Math.random() * 300) + 1;
  let j = Math.floor(Math.random() * 400) + 1;
  $("#move").css({ top: j + "px", left: i + "px" });
}
