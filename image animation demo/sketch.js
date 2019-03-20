
let direction = 1;
let pinImages = [];
let counter = 0;
let speed = 1;

function preload(){
  for (let i = 0; i < 9; i++){
    pinImages.push(loadImage("assets/tile000.png"));
    pinImages.push(loadImage("assets/tile002.png"));
    pinImages.push(loadImage("assets/tile004.png"));
    pinImages.push(loadImage("assets/tile006.png"));
    pinImages.push(loadImage("assets/tile052.png"));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  image(pinImages[counter],width/2,height/2,100,100);
  if (key === "RIGHT"){
    counter = 2;
  }
  
}