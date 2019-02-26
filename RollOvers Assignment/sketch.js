// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectSize;
let rectX, rectY;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  rectSize = 100;
  rectX = windowWidth/4;
  rectY = windowHeight/4;
}

function draw() {
  stroke(0);
  rect(rectX,rectY, rectSize,rectSize);
  rect(rectX+rectSize,rectY+rectSize, rectSize,rectSize);
  rect(rectX+rectSize,rectY, rectSize,rectSize);
  rect(rectX,rectY+rectSize, rectSize,rectSize);
  mouseOver();
}

function mouseOver(){
  if (mouseX >= rectX && mouseX <= rectX+rectSize && mouseY >= rectY && mouseY <= rectY+rectSize){
    fill(255,0,0);
    rect(rectX,rectY, rectSize,rectSize);
    fill(255);
  }
  else if (mouseX >= rectX+rectSize && mouseX <= rectX+rectSize*2 && mouseY >= rectY+rectSize && mouseY <= rectY+rectSize*2){
    fill(255,0,255);
    rect(rectX+rectSize,rectY+rectSize, rectSize,rectSize);
    fill(255);
  }
  else if (mouseX >= rectX && mouseX <= rectX+rectSize && mouseY >= rectY+rectSize && mouseY <= rectY+rectSize+rectSize){
    fill(0,255,0);
    rect(rectX,rectY+rectSize, rectSize,rectSize);
    fill(255);
  }
  else if (mouseX >= rectX+rectSize && mouseX <= rectX+rectSize+rectSize && mouseY >= rectY && mouseY <= rectY+rectSize){
    fill(120,0,60);
    rect(rectX+rectSize,rectY, rectSize,rectSize);
    fill(255);
  }
  else{
    fill(255);
  }
}