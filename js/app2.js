var pen = 0;

document.addEventListener("mousemove", addpen);

function addpen() {
	pen = (pen + 1);
	document.getElementById("pic2").innerHTML = pen;
	 
	if (pen == 1000) {
		console.log('newpen')
		document.getElementById("picdrop").innerHTML = '<img src="assets/redpen.png">';
	
	}else if(pen == 2000){
		console.log('newpen')
		document.getElementById("picdrop").innerHTML = '<img src="assets/orangepen.jpg">';
	
	}else if(pen == 5000){
		console.log('newpen')
		document.getElementById("picdrop").innerHTML = '<img src="assets/yellowpen.png">';
	
	
	}else if(pen == 8000){
		console.log('newpen')
		document.getElementById("picdrop").innerHTML = '<img src="assets/greenpen.png">';
	
	}else if(pen == 10000){
		console.log('newpen')
		document.getElementById("picdrop").innerHTML = '<img src="assets/bluepen.png">';
	
	}else if(pen == 20000){
		console.log('newpen')
		document.getElementById("picdrop").innerHTML = '<img src="assets/violetpen.png">';
	
	}else if(pen == 30000){
		document.getElementById("picdrop").innerHTML = 'holy crud 30k pounds of ink';
		console.log('holy crud 3 million pounds of ink');
	}
}