var button1 = document.getElementById("button1");
button1.addEventListener('click',add,false);


function add(){

var firstnum = document.getElementById("input1").value;
var seconenum = document.getElementById("input2").value;
var total = parseInt(firstnum) + parseInt(seconenum);
document.getElementById("answer").innerHTML = total.toString();
	
}