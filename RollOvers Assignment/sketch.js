
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
  
  mouseOver();
  fill(fadeColour);
  rect(rectX,rectY,rectSize,rectSize);
  fill(fadeColour2);
  rect(rectX+rectSize,rectY+rectSize, rectSize,rectSize);

  rect(rectX+rectSize,rectY, rectSize,rectSize);

  rect(rectX,rectY+rectSize, rectSize,rectSize);
 
  fadeColour -= (1,1,1);
  if (mouseIsPressed){
    fadeColour = (255,255,255);
  }
}

function mouseOver(){
  if (mouseX >= rectX && mouseX <= rectX+rectSize && mouseY >= rectY && mouseY <= rectY+rectSize){
    fadeColour -= (1,1,1);
    //rect(rectX,rectY, rectSize,rectSize);
    print("on");
    mouseMoved();
  }
  else if (mouseX >= rectX+rectSize && mouseX <= rectX+rectSize*2 && mouseY >= rectY+rectSize && mouseY <= rectY+rectSize*2){
    fill(255,0,255);
    rect(rectX+rectSize,rectY+rectSize, rectSize,rectSize);
  }
  else if (mouseX >= rectX && mouseX <= rectX+rectSize && mouseY >= rectY+rectSize && mouseY <= rectY+rectSize+rectSize){
    fill(0,255,0);
    rect(rectX,rectY+rectSize, rectSize,rectSize);
  }
  else if (mouseX >= rectX+rectSize && mouseX <= rectX+rectSize+rectSize && mouseY >= rectY && mouseY <= rectY+rectSize){
    fill(120,0,60);
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