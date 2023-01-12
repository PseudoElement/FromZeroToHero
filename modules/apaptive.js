import { header, leftPart, rightPart, html, summary } from "./constants.js";
window.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth < 850) {
    header.style.flexDirection = "column";
    header.style.alignItems = "center";
    leftPart.style.width = "100%";
    html.style.fontSize = "15px";
    rightPart.style.margin = "2rem auto";
  }
});
window.addEventListener("resize", () => {
  if (window.innerWidth >= 850) {
    header.style.flexDirection = "row";
    header.style.alignItems = null;
    leftPart.style.width = "50%";
    html.style.fontSize = "20px";
    rightPart.style.margin = null;
  }
  if (window.innerWidth < 850) {
    header.style.flexDirection = "column";
    header.style.alignItems = "center";
    leftPart.style.width = "100%";
    html.style.fontSize = "15px";
    rightPart.style.margin = "2rem auto";
  }
});
