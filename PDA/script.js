/* 
Author: Gagan Deep
Version: 2.1.0
*/
var spinCount = 0;
function myfunction() {
  if (spinCount > 100) {
    alert("No more Spins");
    return false;
  }
  var x = 1024; //min value
  var y = 9999; // max value
  document.getElementById("output").innerHTML = ""; 
  var deg = Math.floor(Math.random() * (x - y)) + y;

  document.getElementById('box').style.transform = "rotate(" + deg + "deg)"; 
  var element = document.getElementById('mainbox');
  element.classList.remove('animate');


  setTimeout(function() {
    element.classList.add('animate');
    
    while (deg >= 360) {
  deg = deg - 360;
}
  
  if (deg >= 337 || deg < 22)
  {
  document.getElementById("output").innerHTML = "Presenter for Today is Gaurav"; 
  }
  if (deg >= 22 && deg < 67)
  {
  document.getElementById("output").innerHTML = "Presenter for Today is Volunteer !!"; 
  }
  if (deg >= 67 && deg < 112)
  {
  document.getElementById("output").innerHTML = "Presenter for Today is Aditya"; 
  }
  if (deg >= 112 && deg < 157)
  {
  document.getElementById("output").innerHTML = "Presenter for Today is Kishan"; 
  }
  if (deg >= 157 && deg < 202)
  {
  document.getElementById("output").innerHTML = "Presenter for Today is Sunny"; 
  }
  if (deg >= 202 && deg < 247)
  {
  document.getElementById("output").innerHTML = "Presenter for Today is Gagan"; 
  }  
  if (deg >= 247 && deg < 292)
  {
  document.getElementById("output").innerHTML = "Presenter for Today is Dheeraj"; 
  }
  if (deg >= 292 && deg < 337)
  {
  document.getElementById("output").innerHTML = "Presenter for Today is Sumit"; 
  }
    
    
    
  }, 5000); //5000 = 5 second
  

  
  
  spinCount++;
}
