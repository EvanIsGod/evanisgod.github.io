// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(900, 900);
  background(0,0,255);
}

function keyTyped() {
  if (key === "a") {
    rect(mouseX,mouseY,50,50);
  }
  if (key === "s") {
    ellipse(mouseX, mouseY, 100, 100);
  }
  if (key === "d") {
    triangle(mouseX,mouseY,mouseX/2,mouseY/2,mouseX*2,mouseY*2);
  }
  if (mouseIsPressed){
    fill(random(0,255), random(0,255), random(0,255));
  }
}


function draw() {
  textFont("Times New Roman");
  text("Evan Ewen", 12, 30);
}