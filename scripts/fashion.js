let photos = document.querySelector("section")
let body = document.querySelector("body")
let sun1 = document.querySelector("#sun1")
let sun2 = document.querySelector("#sun2")
let sun3 = document.querySelector("#sun3")
let win1 = document.querySelector("#win1")
let win2 = document.querySelector("#win2")
let win3 = document.querySelector("#win3")
let sun = document.querySelector("#sun")
let winter = document.querySelector("#win")
let divSun = document.querySelector("#summer")
let divWin = document.querySelector("#winter")

divSun.style.display = "none";
divWin.style.display = "none";
//divSpr.style.display = "none";
//divFal.style.display = "none";

sun.onclick = () => {
  if (divSun.style.display === "none") {
    divSun.style.display = "block";
    divWin.style.display = "none";
    body.style.background = "#FF9100";
  } else {
    divSun.style.display = "none";

  }
}

winter.onclick = () => {
  if (divWin.style.display === "none") {
    divWin.style.display = "block";
    divSun.style.display = "none";
    body.style.background = "#6997BF";
  } else {
    divWin.style.display = "none";

  }
}
let images = document.querySelectorAll("img");
images.forEach(function(el) {
  el.onmouseenter = (e) => {
    // change image tilt by changing a CSS class
    el.style.transform = 'scale(1.5)';
  }
});

images.forEach(function(el) {
  el.onmouseleave = (e) => {
    // change image tilt by changing a CSS class
    el.style.transform = 'scale(1)';
  }
});


//images.onmouseenter = (e) => {
// change image tilt by changing a CSS class
// e.target.style.transform('scale(50%,50%)');
//};
