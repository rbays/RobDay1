var button = document.getElementById("button1");
button.addEventListener('click',compare,false);

function compare(){
	var a = document.getElementById("input1").value;
	var b = document.getElementById("input2").value;
	var c = document.getElementById("input3").value;
	
	a = parseInt(a);
	b = parseInt(b);
	c = parseInt(c);
	
	var first = (a+b)*c;
	var second = a+b+c;
	
	var output = first - second;
	
	if(output<0){
		output = -output;
	}
	document.getElementById("answer").innerHTML = output;
}