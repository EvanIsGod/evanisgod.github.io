// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0,0,255);
}

function draw() {
  fill(255,51,0);
  ellipse(windowWidth/2, windowHeight/2, 90, 140);
  fill(0,0,0);
  ellipse(windowWidth/2 - 30, windowHeight/2 - 30, 10,5);
  ellipse(windowWidth/2 + 30, windowHeight/2 - 30, 10,5);
  line(windowWidth/2 - 20, windowHeight/2 + 10, windowWidth/2, windowHeight/2 + 20);
  line(windowWidth/2 + 20, windowHeight/2 + 10, windowWidth/2, windowHeight/2 + 20);

}