let rectSize = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  for (let x = 0; x < width; x += rectSize){
    for (let y = 0; y < height; y += rectSize){
      fill(random(0,255),random(0,255),random(0,255));
      rect(x,y,rectSize,rectSize);
    }
  }
}

function draw() {
  loopy();
}

function loopy(){
  if (key === "w"){
    rectSize += 5;
    setup();
    print("yeet");
  }
  else {
    rectSize = 10;
  }
}
