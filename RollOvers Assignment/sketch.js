// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectSize;
let rectX, rectY;
let fadeColour;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  rectSize = (500,500);
  rectX = windowWidth/6;
  rectY = windowHeight/6;
  fadeColour = (0,50,90);
}

function draw() {
  stroke(0);
  rect(rectX,rectY, rectSize,rectSize);
  rect(rectX+rectSize,rectY+rectSize, rectSize,rectSize);
  rect(rectX+rectSize,rectY, rectSize,rectSize);
  rect(rectX,rectY+rectSize, rectSize,rectSize);
  mouseOver();
  changeAll();
}

function square1() {
  if (mouseX >= rectX && mouseX <= rectX+rectSize && mouseY >= rectY && mouseY <= rectY+rectSize){
    fill(fadeColour);
    rect(rectX,rectY, rectSize,rectSize);
    fill(255);
    fadeColour += constrain(1,1,1);
  }
}

function square2() {
  if (mouseX >= rectX+rectSize && mouseX <= rectX+rectSize*2 && mouseY >= rectY+rectSize && mouseY <= rectY+rectSize*2){
    fill(fadeColour);
    rect(rectX+rectSize,rectY+rectSize, rectSize,rectSize);
    fill(255);
    fadeColour += constrain(1,1,1);
  }
}

function square3() {
  if (mouseX >= rectX && mouseX <= rectX+rectSize && mouseY >= rectY+rectSize && mouseY <= rectY+rectSize+rectSize){
    fill(fadeColour);
    rect(rectX,rectY+rectSize, rectSize,rectSize);
    fill(255);
    fadeColour += constrain(1,1,1);
  }
}

function square4() {
  if (mouseX >= rectX+rectSize && mouseX <= rectX+rectSize+rectSize && mouseY >= rectY && mouseY <= rectY+rectSize){
    fill(fadeColour);
    rect(rectX+rectSize,rectY, rectSize,rectSize);
    fill(255);
    fadeColour += constrain(1,1,1);
  }
}

function changeAll(){
  if (mouseIsPressed) {
    fill(0);
    fadeColour = (0,0,0);
  }
}

function mouseOver(){
  square1();
  square2();
  square3();
  square4();
  fill(255);
}
