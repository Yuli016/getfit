var mySeconds;
var intervalHandle;

	function resetPage(){
		document.getElementById("inputArea").style.display="block";
	}

		function tick(){
			var timeDisplay=document.getElementById("timer");

			var min=Math.floor(mySeconds/60);
			var sec=mySeconds-(min*60);

			if (sec < 10) {
				sec="0"+sec;
			}

			var message=min.toString()+":"+sec;

			timeDisplay.innerHTML=message;

			if(mySeconds===0){
				alert("Your Balance Workout is Done!");
				clearInterval(intervalHandle);
				resetPage();
			}
			mySeconds--;
		}

	function startCounter(){
		var myInput=document.getElementById("minutes").value;
		if (isNaN(myInput)){
			alert("Please enter a number to set a minute timer countdown");
			return;
		}
		mySeconds=myInput*60;

		intervalHandle=setInterval(tick, 1000);

		document.getElementById("inputArea").style.display="block";
	}

		var myInput=document.createElement("input");
		myInput.setAttribute("type","text");
		myInput.setAttribute("id","minutes");

		var myButton=document.createElement("input");
		myButton.setAttribute("type","button");
		myButton.setAttribute("value","Start Timer");

		myButton.onclick=function(){
			startCounter();

		}
		document.getElementById("inputArea").appendChild(myInput);
		document.getElementById("inputArea").appendChild(myButton);

////////////////////////////////////////////
var mySeconds2;
var intervalHandle2;

	function resetPage2(){
		document.getElementById("inputArea2").style.display="block";
	}

		function tick2(){
			var timeDisplay2=document.getElementById("timer2");

			var min2=Math.floor(mySeconds2/60);
			var sec2=mySeconds2-(min2*60);

			if (sec2 < 10) {
				sec2="0"+sec2;
			}

			var message2=min2.toString()+":"+sec2;

			timeDisplay2.innerHTML=message2;

			if(mySeconds2===0){
				alert("Your Strength Workout is Done!");
				clearInterval(intervalHandle2);
				resetPage2();
			}
			mySeconds2--;
		}

	function startCounter2(){
		var myInput2=document.getElementById("minutes2").value;
		if (isNaN(myInput2)){
			alert("Please enter a number to set a minute timer countdown");
			return;
		}
		mySeconds2=myInput2*60;

		intervalHandle2=setInterval(tick2, 1000);

		document.getElementById("inputArea2").style.display="block";
	}

		var myInput2=document.createElement("input");
		myInput2.setAttribute("type","text");
		myInput2.setAttribute("id","minutes2");

		var myButton2=document.createElement("input");
		myButton2.setAttribute("type","button");
		myButton2.setAttribute("value","Start Timer");

		myButton2.onclick=function(){
			startCounter2();
		}

		document.getElementById("inputArea2").appendChild(myInput2);
		document.getElementById("inputArea2").appendChild(myButton2);

////////////////////////////////////////////
var mySeconds3;
var intervalHandle3;

	function resetPage3(){
		document.getElementById("inputArea3").style.display="block";
	}

		function tick3(){
			var timeDisplay3=document.getElementById("timer3");

			var min3=Math.floor(mySeconds3/60);
			var sec3=mySeconds3-(min3*60);

			if (sec3 < 10) {
				sec3="0"+sec3;
			}

			var message3=min3.toString()+":"+sec3;

			timeDisplay3.innerHTML=message3;

			if(mySeconds3===0){
				alert("Your Flexibility Workout is Done!");
				clearInterval(intervalHandle3);
				resetPage3();
			}
			mySeconds3--;
		}

	function startCounter3(){
		var myInput3=document.getElementById("minutes3").value;
		if (isNaN(myInput3)){
			alert("Please enter a number to set a minute timer countdown");
			return;
		}
		mySeconds3=myInput3*60;

		intervalHandle3=setInterval(tick3, 1000);

		document.getElementById("inputArea3").style.display="block";
	}

		var myInput3=document.createElement("input");
		myInput3.setAttribute("type","text");
		myInput3.setAttribute("id","minutes3");

		var myButton3=document.createElement("input");
		myButton3.setAttribute("type","button");
		myButton3.setAttribute("value","Start Timer");

		myButton3.onclick=function(){
			startCounter3();
		}

		document.getElementById("inputArea3").appendChild(myInput3);
		document.getElementById("inputArea3").appendChild(myButton3);
////////////////////////////////////////////
var mySeconds4;
var intervalHandle4;

	function resetPage4(){
		document.getElementById("inputArea4").style.display="block";
	}

		function tick4(){
			var timeDisplay4=document.getElementById("timer4");

			var min4=Math.floor(mySeconds4/60);
			var sec4=mySeconds4-(min4*60);

			if (sec4 < 10) {
				sec4="0"+sec4;
			}

			var message4=min4.toString()+":"+sec4;

			timeDisplay4.innerHTML=message4;

			if(mySeconds4===0){
				alert("Your Endurance Workout is Done!");
				clearInterval(intervalHandle4);
				resetPage4();
			}
			mySeconds4--;
		}

	function startCounter4(){
		var myInput4=document.getElementById("minutes4").value;
		if (isNaN(myInput4)){
			alert("Please enter a number to set a minute timer countdown");
			return;
		}
		mySeconds4=myInput4*60;

		intervalHandle4=setInterval(tick4, 1000);

		document.getElementById("inputArea4").style.display="block";
	}

		var myInput4=document.createElement("input");
		myInput4.setAttribute("type","text");
		myInput4.setAttribute("id","minutes4");

		var myButton4=document.createElement("input");
		myButton4.setAttribute("type","button");
		myButton4.setAttribute("value","Start Timer");

		myButton4.onclick=function(){
			startCounter4();
		}

		document.getElementById("inputArea4").appendChild(myInput4);
		document.getElementById("inputArea4").appendChild(myButton4);
