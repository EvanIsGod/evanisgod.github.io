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
  let xoff2 = start * 2;
  for (let x = 0; x < width; x++) {
    stroke(255);
    let currHeight = noise(xoff) * height;
    rect(x, currHeight, 1, height);

    xoff += inc;
  }
  for (let x = 0; x < width; x++) {
    stroke(random(255), random(255), random(225));
    let currHeight = noise(xoff2) * height;
    rect(x, currHeight, 1, height);

    xoff += inc;
  }
  
  start += inc;
}

function drawFlag() {

}