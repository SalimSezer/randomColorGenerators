var r = 0,
  g = 0,
  b = 0;
function random() {
  r = Math.floor(Math.random() * 255);
  g = Math.floor(Math.random() * 255);
  b = Math.floor(Math.random() * 255);
  document.getElementById("message").innerHTML =
    "rgb" + "(" + r + "," + g + "," + b + ")";
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  // document.getElementById("container").style.backgroundColor =
  //   "rgb(" + r + "," + g + "," + b + ")";
}
