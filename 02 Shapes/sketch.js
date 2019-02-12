// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x,y;
let xSpeed, ySpeed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = windowWidth / 2;
  y = windowHeight / 2;
  xSpeed = random(50, 100);
  ySpeed = random(50, 100);
  background(0);
}

function draw() {
  //background(225);
  ellipse(x,y,25,25);
  x += xSpeed;
  y += ySpeed;
  fill(random(255), random(255), random(255));
  if (x < 0 || x > windowWidth){
    xSpeed *= -1;
  }
  if (y < 0 || y > windowHeight){
    ySpeed *= -1;
  }
  if (keyIsPressed) {
    if (key === "r") {
      background(0);
    }
  }
}