// RGB Colors


// Variables to store HTML elements
let previewBtnEl = document.getElementById("previewBtn");
let redInEl = document.getElementById("num1");
let greenInEl = document.getElementById("num2");
let blueInEl = document.getElementById("num3");
let display = document.getElementById("display");
let text = document.getElementById("colour");

// Event listner 

previewBtnEl.addEventListener("click", rgb);
// function
function rgb() {
  // input
  let n1 = +redInEl.value;
  let n2 = +greenInEl.value;
  let n3 = +blueInEl.value;

  // VAlidate colours (Costrain colours between 0 - 255)
 
// red value
  if (n1 < 0) {
    n1 = 0;
    redInEl.value = 0 

  }else if (n1 > 255){
n1 = 255
redInEl.value = 255
  }
// green value
if (n2 < 0) {
  n2 = 0;
  greenInEl.value = 0 

}else if (n2 > 255){
n2 = 255
greenInEl.value = 255
}

// blue value
if (n3 < 0) {
  n3 = 0;
 blueInEl.value = 0 

}else if (n3 > 255){
n3 = 255
blueInEl.value = 255
}

  // process
  let myColor = `rgb(${n1}, ${n2}, ${n3})`;

  // output
  display.style.background = myColor;
  text.innerHTML = myColor;
}

document.getElementById("black").addEventListener("click", bl);

// function

function bl() {
  document.getElementById("display").style.backgroundColor = "black";
  document.getElementById("colour").innerHTML = myColor;
}

document.getElementById("white").addEventListener("click", wh);

function wh() {
  display.style.backgroundColor = "white";
  text.innerHTML = myColor;
}

// the second part
