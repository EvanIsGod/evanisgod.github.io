let yOff = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  fill(255);
  //rectMode(CENTER);
  //noLoop();
  generateTerrain();
}

function generateTerrain(){
  for (let i = 0; i < width; i += 5) {
    rect(i, noise(yOff), 5, windowHeight);
    fill(random(0,255),random(0,255),random(0,255));
  }
}

function draw() {
  yOff += 0.01;
  map(noise,0,1,0,height);
}