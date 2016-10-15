var img = {
a:'Do a comp',
b:'Do hide and seek',
c:'Do TTT', 
d:"Play some anti tank H&G",
e:"Play as sniper in PF",
f:"fill an alt in Apoc",
g:"Do some Gmod minigames",
h:"Try to AWP",
i:"Do heavy only WT",
j:'Prop Hunt',
k:"Negev deathmatch",
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