var event1 = document.getElementById("button1");
event1.addEventListener('click',eitherside,false);

function eitherside(){
	var number = document.getElementById("input1").value;
	var intnum = parseInt(number);
	
	var up1 = intnum+1;
	var down1 = intnum-1;
	
	var stringup = up1.toString();
	var stringdown = down1.toString();
	
	var outp = "one lower is " + stringdown + " and one higher is " + stringup;
	
	document.getElementById("answer").innerHTML = outp;
}