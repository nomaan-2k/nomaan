// Simple retro typing effect for subtitle
const subtitle = document.querySelector(".subtitle");
const text = subtitle.innerText;
subtitle.innerText = "";

let i = 0;
function typeEffect() {
  if (i < text.length) {
    subtitle.innerText += text.charAt(i);
    i++;
    setTimeout(typeEffect, 50);
  }
}

window.onload = typeEffect;
