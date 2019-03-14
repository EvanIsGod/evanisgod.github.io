let yOff = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  fill(255);
  rectMode(CENTER);
  noLoop();
}

function draw() {
  let f = map(noise(yOff),0,1,0,height*2);
  for (let i = 0; i < width; i += 5) {
    rect(i, height, 5, f);
    rect(i, height, 5, f);
    fill(random(0,255),random(0,255),random(0,255));
    yOff += 0.01;
  }
}

