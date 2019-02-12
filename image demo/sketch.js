// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let img;
let imgSize;
let newX = 0
let newY = 0

function preload(){
  img = loadImage("assets/gear.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  imgSize = 200;
}

function draw() {
  //background(220);
  image(img,newX,newY,imgSize,imgSize);
  newX + 10;
  newY + 10;
}

function mousePressed(){
  tint(random(0,255),random(0,255),random(0,255));
  image(img,mouseX,mouseY,imgSize,imgSize);
}

function mouseWheel(event){
  if (event.delta > 0){
    imgSize += 25;
  }
  else{
    if (imgSize > 25){
      imgSize -= 25;
    }
  }
}