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
  xSpeed = random(-5, 5);
  ySpeed = random(-5, 5);
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
}

function mousePressed(){
  xSpeed = random(-3, 3);
  ySpeed = random(-5, 5);
}