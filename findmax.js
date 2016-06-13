var button1 = document.getElementById("button1");
button1.addEventListener('click',add,false);


function add(){

var firstnum = parseInt(document.getElementById("input1").value);
var secondnum = parseInt(document.getElementById("input2").value);

var biggest = 0;
	
if(secondnum>firstnum){
	biggest = secondnum;
}
else{
	biggest = firstnum;
}
	
	document.getElementById("answer").innerHTML = biggest.toString();
	
}