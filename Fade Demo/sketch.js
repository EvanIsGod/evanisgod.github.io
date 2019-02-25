// Fade Demo
// Evan Ewen
// February 25, 2019

let buttonX, buttonY, buttonSize;
let rectX, rectY, rectW, rectH;
let rectColour = 0;
let fadeIn = false;
let buttonOver = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  buttonX = width/2;
  buttonY = height/4;
  buttonSize = 50;
  rectX = width/2;
  rectY = height/1.8;
  rectW = width/2;
  rectH = height*0.4;
  ellipseMode(CENTER);
  rectMode(CENTER);
  noStroke();
}

function mousePressed(){
  if (buttonOver) {
    fadeIn = !fadeIn;
  }
}

function draw() {
  print(mouseDistance(mouseX,mouseY,buttonX,buttonY));
  background(0);
  ellipse(buttonX,buttonY, buttonSize, buttonSize);
  if (mouseDistance(mouseX,mouseY,buttonX,buttonY) < buttonSize/2){
    fill(200,200,200);
    buttonOver = true;
  }
  else {
    fill (60,30,30);
    buttonOver = false;
  }
  if (frameCount % 2 ===0){
    rectColour+=2;
  }
  rectColour = frameCount;
  fill(rectColour);
  rect(rectX, rectY, rectW, rectH);
  if (fadeIn){
    rectColour -= 2;
  }
  else {
    rectColour += 2;
  }
  rectColour = constrain(rectColour,0,255);
}

function mouseDistance(X1,Y1, X2,Y2){
  let a = abs(X1 - X2);
  let b = abs(Y1 - Y2);
  let c = sqrt(sq(a)+sq(b));
  return c;
}