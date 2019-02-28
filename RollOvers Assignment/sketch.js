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
  fadeColour = (255,255,255);
}

function draw() {
  stroke(0);
  rect(rectX,rectY,rectSize,rectSize);
  rect(rectX+rectSize,rectY+rectSize, rectSize,rectSize);
  rect(rectX+rectSize,rectY, rectSize,rectSize);
  rect(rectX,rectY+rectSize, rectSize,rectSize);
  mouseOver();
  fadeColour -= constrain(1,1,1);
}

function square1() {
  for (let i = 0; i < 256; i++){
    fill(fadeColour);
    rect(rectX,rectY, rectSize,rectSize);
    if (mouseX >= rectX && mouseX <= rectX+rectSize && mouseY >= rectY && mouseY <= rectY+rectSize){
      fill(0);
    }
    changeAll();
  }
}

function square2() {
  for (let i = 0; i < 256; i++){
    fill(fadeColour);
    rect(rectX+rectSize,rectY+rectSize, rectSize,rectSize);
    if (mouseX >= rectX && mouseX <= rectX+rectSize && mouseY >= rectY && mouseY <= rectY+rectSize){
      fill(0);
    }
  }
  changeAll();
}

function square3() {
  for (let i = 0; i < 256; i++){
    fill(fadeColour);
    rect(rectX,rectY+rectSize, rectSize,rectSize);
    if (mouseX >= rectX && mouseX <= rectX+rectSize && mouseY >= rectY && mouseY <= rectY+rectSize){
      fill(0);
    }
  }
  changeAll();
}

function square4() {
  for (let i = 0; i < 256; i++){
    fill(fadeColour);
    rect(rectX+rectSize,rectY, rectSize,rectSize);
    if (mouseX >= rectX && mouseX <= rectX+rectSize && mouseY >= rectY && mouseY <= rectY+rectSize){
      fill(0);
    }
  }
  changeAll();
}

function changeAll(){
  if (mouseIsPressed) {
    fill(0);
    fadeColour = (255,255,255);
  }
}

function mouseOver(){
  square1();
  square2();
  square3();
  square4();
  fill(255);
}

function mouseMoved(){
  return true;
}