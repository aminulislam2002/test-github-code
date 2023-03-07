// Option 01
{
  /* <button onclick="console.log(10)">Click me</button> <br /> */
}
console.log("This is separet js file");
// option 02 (!important. we will use this.)
function makeGreen() {
  document.body.style.backgroundColor = "green";
}
//   option 03
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}
//   Option 03.1
const makePurple = document.getElementById("make-purple");
makePurple.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};
// Option 04
const makePinkButton = document.getElementById("make-pink");
makePinkButton.addEventListener("click", makePink);
function makePink() {
  document.body.style.backgroundColor = "pink";
}

// Option 04.1
const makeAquaButton = document.getElementById("make-aqua");
makeAquaButton.addEventListener("click", function makeAqua() {
  document.body.style.backgroundColor = "aqua";
});

// Option 05 (!important. we will use this.)
document.getElementById("make-goldenrod").addEventListener("click", function () {
  document.body.style.backgroundColor = "goldenrod";
});
