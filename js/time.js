var myCurrentTime = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  document.getElementById("time").innerHTML = t;
}

w3.slideshow(".slide", 7500);
