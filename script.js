var css = document.querySelector(".header1");
var css1 = document.querySelector(".header2");

var firstcolor = document.querySelector(".color1");
var secondcolor = document.querySelector(".color2");
var thirdcolor = document.querySelector(".color3");
var fourthcolor = document.querySelector(".color4");
var body = document.querySelector(".gradient");
var divbody = document.querySelector(".newgradient");
var bodygradient = document.querySelector(".bodygradient");

function setbackground() {
	body.style.background = "linear-gradient(to right, " +
				firstcolor.value +
				", " +
				secondcolor.value +
				")";
	css.textContent = body.style.background + ";";
	bodygradient.style.background = "linear-gradient(to right, " +
				firstcolor.value +
				", " +
				secondcolor.value +
				")";
}

function setbackground1() {
	divbody.style.background = "linear-gradient(to right, " +
				thirdcolor.value +
				", " +
				fourthcolor.value +
				")";
	bodygradient.style.background = "linear-gradient(to right, " +
				thirdcolor.value +
				", " +
				fourthcolor.value +
				")";
	css1.textContent = divbody.style.background + ";";

}


firstcolor.addEventListener("input", setbackground);

secondcolor.addEventListener("input", setbackground);

thirdcolor.addEventListener("input", setbackground1);

fourthcolor.addEventListener("input", setbackground1);
