// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let weirdX = 0;
let weirdY = 0;
let wonkyX; 
let wonkyY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0,0,255);
  wonkyX = windowWidth;
  wonkyY = windowHeight;
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
  if (key === " "){
    background(0,0,255);
    textFont("Times New Roman");
    text("Evan Ewen", 12, 30);
  }
}



function draw() {
  textFont("Comic Sans");
  text("Evan Ewen", 100, 100);
  weirdX += 10;
  weirdY += 20;
  wonkyX -= 10;
  wonkyY -= 10;
  triangle(windowWidth/2, windowHeight/2, weirdX, weirdY, wonkyX, wonkyY);
  print(weirdX, weirdY, wonkyX, wonkyY);
}