var button = document.getElementById("button1");
button.addEventListener('click',compare,false);

function compare(){
	var a = document.getElementById("input1").value;
	var b = document.getElementById("input2").value;
		
	a = parseInt(a);
	b = parseInt(b);
	
	var numbers = [a,b];
	var over10 = 0;
	
	
	for (i=0;i<numbers.length;i++){
		if (numbers[i]>10){
			over10++;
		}	
	}
		
	output = "There are "+over10+" numbers over 10";
	}
	document.getElementById("answer").innerHTML = output;
}