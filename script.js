var css = document.querySelector("h3");
var firstcolor = document.querySelector(".color1");
var secondcolor = document.querySelector(".color2");
var body = document.querySelector(".gradient");

function setbackground() {
	body.style.background = "linear-gradient(to right, " +
				firstcolor.value +
				", " +
				secondcolor.value +
				")";
	css.textContent = body.style.background + ";";
}


firstcolor.addEventListener("input", setbackground);

secondcolor.addEventListener("input", setbackground);
