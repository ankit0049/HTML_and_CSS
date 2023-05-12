// Get references to the HTML elements
const rectangleBtn = document.getElementById("rectangleBtn");
const circleBtn = document.getElementById("circleBtn");
const rectangleDiv = document.getElementById("rectangleDiv");
const circleDiv = document.getElementById("circleDiv");

// Move the circle towards the rectangle
function moveCircle() {
  // Calculate the distance between the circle and rectangle
  const distanceX = rectangleDiv.offsetLeft - circleDiv.offsetLeft;
  const distanceY = rectangleDiv.offsetTop - circleDiv.offsetTop;
  const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
  
  // Move the circle towards the rectangle
  circleDiv.style.transition = "all 1s";
  circleDiv.style.transform = `translate(${distanceX}px, ${distanceY}px)`;
}
