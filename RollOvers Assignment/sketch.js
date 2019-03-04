
let rectSize;
let rectX, rectY;
let fadeColour, fadeColour2, fadeColour3, fadeColour4;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  rectSize = (500,500);
  rectX = windowWidth/6;
  rectY = windowHeight/6;
  fadeColour = (255,255,255);
  fadeColour2 = (255,0,0);
  fadeColour3 = (0,255,0);
  fadeColour4 = (0,0,255);
}

function draw() {
  stroke(0);
  fill(fadeColour);
  rect(rectX,rectY,rectSize,rectSize);
  fill(fadeColour2);
  rect(rectX+rectSize,rectY+rectSize, rectSize,rectSize);
  fill(fadeColour3);
  rect(rectX+rectSize,rectY, rectSize,rectSize);
  fill(fadeColour4);
  rect(rectX,rectY+rectSize, rectSize,rectSize);
  mouseOver();
 
  fadeColour -= (1,1,1);
  fadeColour2 -= (1,0,0);
  fadeColour3 -= (0,1,0);
  fadeColour4 -= (0,0,1);
  if (mouseIsPressed){
    fadeColour = (255,255,255);
    fadeColour2 = (255,0,0);
    fadeColour3 = (0,255,0);
    fadeColour4 = (0,0,255);
  }
}

function mouseOver(){
  if (mouseX >= rectX && mouseX <= rectX+rectSize && mouseY >= rectY && mouseY <= rectY+rectSize){
    fill(fadeColour);
    rect(rectX,rectY, rectSize,rectSize);
    print("on");
    mouseMoved();
  }
  else if (mouseX >= rectX+rectSize && mouseX <= rectX+rectSize*2 && mouseY >= rectY+rectSize && mouseY <= rectY+rectSize*2){
    fill(fadeColour2);
    rect(rectX+rectSize,rectY+rectSize, rectSize,rectSize);
    mouseMoved2();
  }
  else if (mouseX >= rectX && mouseX <= rectX+rectSize && mouseY >= rectY+rectSize && mouseY <= rectY+rectSize+rectSize){
    fill(fadeColour3);
    rect(rectX,rectY+rectSize, rectSize,rectSize);
  }
  else if (mouseX >= rectX+rectSize && mouseX <= rectX+rectSize+rectSize && mouseY >= rectY && mouseY <= rectY+rectSize){
    fill(fadeColour4);
    rect(rectX+rectSize,rectY, rectSize,rectSize);
  }
}

function mouseMoved(){
  if ((mouseX >= rectX && mouseX <= rectX+rectSize && mouseY >= rectY && mouseY <= rectY+rectSize) === false){
    fill(fadeColour);
    rect(rectX,rectY, rectSize,rectSize);
    print("gone");
  }
}

function mouseMoved2(){
  if ((mouseX >= rectX && mouseX <= rectX+rectSize && mouseY >= rectY && mouseY <= rectY+rectSize) === false){
    fill(fadeColour);
    rect(rectX,rectY, rectSize,rectSize);
    print("gone");
  }
}