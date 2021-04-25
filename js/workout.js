// source: https://codepen.io/k4u4u4u/pen/BJPYJP

  var divs = ["beginner", "moderate", "intermediate", "challenge", "beginner2", "moderate2", "intermediate2", "challenge2", "beginner3", "moderate3", "intermediate3", "challenge3", "beginner4", "moderate4", "intermediate4", "challenge4"];
  var visibleDivId = null;

  function toggleVisibility(divId) {
    if(visibleDivId === divId) {
      //visibleDivId = null;
    } else {
        visibleDivId = divId;
      }
      hideNonVisibleDivs();
  }

  function hideNonVisibleDivs() {
    var i, divId, div;
    for(i = 0; i < divs.length; i++) {
      divId = divs[i];
      div = document.getElementById(divId);

      if(visibleDivId === divId) {
        div.style.display = "block";
          AOS.init({
          duration: 1200,
        })
      } else {
        div.style.display = "none";
      }
    }
  }
