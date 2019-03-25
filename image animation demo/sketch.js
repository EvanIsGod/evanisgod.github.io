
let walkingFrames = [];
let walkingFrames2 = [];
let counter = 0;
let counter2 = 0;
let xMove = 150;
let yMove = 250;
let xSpeed = 10;
let ySpeed = 10;
let xOff = 0;
let yOff = 0;

function preload(){
  for (let i = 0; i < 3; i++){
    walkingFrames.push(loadImage("assets/frame-1.png"));
    walkingFrames.push(loadImage("assets/frame-2.png"));
    walkingFrames.push(loadImage("assets/frame-1flip.png"));
    walkingFrames.push(loadImage("assets/frame-2flip.png"));
    walkingFrames2.push(loadImage("assets/frame-1.png"));
    walkingFrames2.push(loadImage("assets/frame-2.png"));
    walkingFrames2.push(loadImage("assets/frame-1flip.png"));
    walkingFrames2.push(loadImage("assets/frame-2flip.png"));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
}

function draw() {
  let xEnemy = map(noise(xOff),0,1,0,width);
  let yEnemy = map(noise(yOff),0,1,0,height);
  //background(220);
  image(walkingFrames[counter],xMove,yMove,100,100);
  image(walkingFrames2[counter2], xEnemy, yEnemy, 100,100);
  movement();
  counter2 ++;
  if (counter2 > 4){
    counter2 = 0;
  }
  xOff += 0.01;
  yOff += 0.01;
}

function movement() {
  if (key === "ArrowRight"){
    counter ++;
    xMove += xSpeed;
    if (counter > 3) {
      counter = 2;
    }
  }
  if (key === "ArrowLeft"){
    counter ++;
    xMove -= xSpeed;
    if (counter > 1){
      counter = 0;
    }
  }
  if (key === "ArrowUp"){
    counter += 1;
    yMove -= ySpeed;
    if (counter > 1){
      counter = 0;
    }
  }
  if (key === "ArrowDown"){
    counter += 1;
    yMove += ySpeed;
    if (counter > 3) {
      counter = 2;
    }
  }
  if (xMove > width || xMove < 0 || yMove > height || yMove < 0){
    xMove = 150;
    yMove = 250;
  }
}