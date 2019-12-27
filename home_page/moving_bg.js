const el = document.querySelector("body");

el.addEventListener("mousemove", (e) => {
  document.querySelector(".home").style.backgroundPositionX = (-e.offsetX/100) + "px";
  
});