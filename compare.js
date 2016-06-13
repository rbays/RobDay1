var button1 = document.getElementById("button1");
button1.addEventListener('click',add,false);


function add(){

var firstnum = parseInt(document.getElementById("input1").value);
var secondnum = parseInt(document.getElementById("input2").value);

	
if(secondnum===firstnum){
	var output = "The same!!";
}
else{
	var output = "different :(";
}
	
	document.getElementById("answer").innerHTML = output;
	
}