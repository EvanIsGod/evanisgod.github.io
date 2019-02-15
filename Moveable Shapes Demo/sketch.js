
let x = 200;
let y  = 200;
let rSize = 100;
let pickedUp = false;
let mouseOver = false;
let diffX = 0;
let diffY = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(0,255,0);
  fill(255);
  mouseOver = false;
  if (mouseX >= x - rSize/2 && mouseX <= x + rSize/2 && mouseY >= y - rSize/2 && mouseY <= y + rSize/2){
    fill(0);
    mouseOver = true;
  }
  if (pickedUp){
    x = mouseX - diffX;
    y = mouseY - diffY;
  }
  rect(x,y,rSize,rSize);
}

function mousePressed() {
  if (mouseOver === true){
    pickedUp = true;
    diffX = mouseX - x;
    diffY = mouseY - y;
  }
}

function mouseReleased(){
  pickedUp = false;
}