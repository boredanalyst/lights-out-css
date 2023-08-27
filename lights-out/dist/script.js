function lightsOut(){
  var body = document.querySelector('body');
  body.classList.toggle("lights-out");
  
  var button = document.querySelector("button");
  button.classList.toggle("button-off");
  
  var span = document.querySelector("span");
  span.classList.toggle("glow");
  
  var para = document.querySelector("p");
  para.classList.toggle("seen")
}

var button = document.querySelector("#light")

button.addEventListener('click', lightsOut)