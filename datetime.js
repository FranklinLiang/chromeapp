function loadDate(){
  var dt = new Date();
  document.getElementById("datetime").innerHTML = dt.toLocaleString();
}

window.onload = loadDate;
