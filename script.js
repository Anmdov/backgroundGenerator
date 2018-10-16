var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".random");
/* random.onclick = setRandomColor;
setRandomColor(); */

 function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	//document.body.style.background = style;
	css.textContent = body.style.background + ";";

}


function setRandomColor() {
	var randomColor1 = getRandomColor();
	var randomColor2 = getRandomColor();
	color1.value = randomColor1;
	color2.value = randomColor2;
	setGradient();
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

random.addEventListener("click", setRandomColor);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
