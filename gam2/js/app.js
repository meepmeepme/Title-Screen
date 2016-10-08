var img = {
a:'Speed build a house',
b:'Speed build a car',
c:'Make a redstone contraption',
d:"Play some master builders",
e:"Randomly generate a world and build a house in a cliff",
f:"Build a rollercoaster",
g:"Make a village",
h:"Make a plane",
i:"Start a survival world with the goal of a gold and diamond throne",
j:'Create redstone clocks',
k:"Make a camp",
};
var imgcall;

document.addEventListener("mousemove", mouse);

function mouse() {
	imgcall = Math.floor(Math.random()*10);
	console.log(imgcall)
	if (imgcall == 0) {
		document.getElementById("number").innerHTML = img.a;
	}else if (imgcall == 1) {
		document.getElementById("number").innerHTML = img.b;
	}else if (imgcall == 2) {
		document.getElementById("number").innerHTML = img.c;
	}else if (imgcall == 3) {
		document.getElementById("number").innerHTML = img.d;
	}else if (imgcall == 4) {
		document.getElementById("number").innerHTML = img.e;
	}else if (imgcall == 5) {
		document.getElementById("number").innerHTML = img.f;
	}else if (imgcall == 6) {
		document.getElementById("number").innerHTML = img.g;
	}else if (imgcall == 7) {
		document.getElementById("number").innerHTML = img.h;
	}else if (imgcall == 8) {
		document.getElementById("number").innerHTML = img.i;
	}else if (imgcall == 9) {
		document.getElementById("number").innerHTML = img.j;
	}else if (imgcall == 10) {
		document.getElementById("number").innerHTML = img.k;
	}
}