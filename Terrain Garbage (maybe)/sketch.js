// Source Code Built Off Of:
// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/y7sgcFhk6ZM

let inc = 0.01;
let start = 0;
let highest = height;
let highestX = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  let xoff = start;
  for (let x = 0; x < width; x++) {
    stroke(255);
    let currHeight = noise(xoff) * height;
    rect(x, currHeight, 1, height);

    xoff += inc;
    fill(random(255), random(255), random(255));
    }

  start += inc;
  }
function drawFlag(){
  if (currHeight > height/3){
    line(x,currHeight, x, currHeight+10);
    triangle(x, currHeight, x+5, currHeight+5, x +5, currHeight);
  }
}