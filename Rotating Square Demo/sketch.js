// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let axis = 0;//0 top, 1 right, 2 bottom, 3 left
let x = 0;
let y = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  background(0,0,255);
  rect(x,y,20,20);
  if (axis === 0){
    x+=10;
    if (x >= windowWidth - x){
      axis = 1;
    }
  }
  if (axis === 1){
    y+=10;
    if (y >= windowHeight - y){
      axis = 2;
    }
  }
  if (axis === 2){
    x-=10;
    if (x <= windowWidth + x){
      axis = 3;
    }
  }
  if (axis === 3){
    y-=10;
    if (y <= windowHeight + y){
      axis = 0;
    }
  }
}