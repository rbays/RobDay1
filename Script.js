		window.addEventListener('load',myFunction,false);
		
		function myFunction(){
			document.getElementById("demo").innerHTML = "Hello world";
		}
		var whey = document.getElementById("whey");
		whey.innerHTML = "test thing?";



		var button1 = document.getElementById("button1");
		button1.addEventListener('click',text_update,false);
		
		function text_update(){
			var userinput = document.getElementById("input1").value;
			document.getElementById("button1").innerHTML = userinput;
		}