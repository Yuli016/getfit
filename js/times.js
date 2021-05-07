var myCurrentTime1 = setInterval(myTimer1, 1000);

function myTimer1() {
  var d1 = new Date();
  var t1 = d1.toLocaleTimeString();
  document.getElementById("time1").innerHTML = t1;
}


var myCurrentTime2 = setInterval(myTimer2, 1000);

function myTimer2() {
  var d2 = new Date();
  var t2 = d2.toLocaleTimeString();
  document.getElementById("time2").innerHTML = t2;
}


var myCurrentTime3 = setInterval(myTimer3, 1000);

function myTimer3() {
  var d3 = new Date();
  var t3 = d3.toLocaleTimeString();
  document.getElementById("time3").innerHTML = t3;
}


var myCurrentTime4 = setInterval(myTimer4, 1000);

function myTimer4() {
  var d4 = new Date();
  var t4 = d4.toLocaleTimeString();
  document.getElementById("time4").innerHTML = t4;
}
