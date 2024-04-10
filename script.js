// RGB Colors

// Variables to store HTML Elements
let redInEl = document.getElementById("redIn");
let greenInEl = document.getElementById("greenIn");
let blueInEl = document.getElementById("blueIn");
let heightInValue = document.getElementById("heightIn");
let widthInValue = document.getElementById("widthIn");
// Change size varibles
heightInValue.addEventListener("change", changeSize);
widthInValue.addEventListener("change", changeSize);

//Black and white variables
//Event Listner
redInEl.addEventListener("input", rgbPreview);
greenInEl.addEventListener("input", rgbPreview);
blueInEl.addEventListener("input", rgbPreview);
//Event Function
function rgbPreview() {
  //Input: get red green blue values
  let rValue = +redInEl.value;
  let gValue = +greenInEl.value;
  let bValue = +blueInEl.value;

  //validate Colors (Constrain colors between 0 - 255)
  // Check rValue
  if (rValue < 0) {
    rValue = 0;
    redInEl.value = 0;
  } else if (rValue > 255) {
    rValue = 255;
    redInEl.value = 255;
    console.log("rValue");
  }

  // Check gValue
  if (gValue < 0) {
    gValue = 0;
    greenInEl.value = 0;
  } else if (rValue > 255) {
    gValue = 255;
    greenInEl.value = 255;
  }

  // Check bValue
  if (bValue < 0) {
    bValue = 0;
    blueInEl.value = 0;
  } else if (rValue > 255) {
    bValue = 255;
    blueInEl.value = 255;
  }

  //Process : build rgb string rgb
  let rgbStringOutEl = document.getElementById("rgbStrOut");
  let rgbString = "rgb(" + rValue + "," + gValue + "," + bValue + ")";
  console.log(rgbString);
  //Output : displayv rgb string and update the color preview
  rgbStringOutEl.innerHTML = rgbString;
  document.getElementById("display").style.background = rgbString;
}

function changeSize() {
  // Size values
  var h = +heightInValue.value;
  var w = +widthInValue.value;

  // Contain size Values
  if (h < 50) {
    h = 50;
  } else if (h > 200) {
    h = 200;
  }

  if (w < 50) {
    w = 50;
  } else if (w > 400) {
    w = 400;
  }

  document.getElementById("display").style.height = `${h}px`;
  document.getElementById("display").style.width = `${w}px`;
}
