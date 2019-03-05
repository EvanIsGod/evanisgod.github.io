
let slider,slider2,slider3, r,g,b, radio, picker, eden, vid, checkbox;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  slider = createSlider(0,255,100);
  slider.position(width/4, height/4);
  slider.style("width", "200px");
  slider2 = createSlider(0,255,100);
  slider2.position(width/4, height/4+20);
  slider2.style("width", "200px");
  slider3 = createSlider(0,255,100);
  slider3.position(width/4, height/4+40);
  slider3.style("width", "200px");
  radio = createRadio();
  radio.option("rectangle");
  radio.option("circle");
  radio.position(width/2,height/2);
  radio.style("width", "200px");
  textAlign(CENTER);
  picker = createColorPicker(color("yellow"));
  picker.position(width/2, height/2+20);
  eden = createVideo("assets/MVI_3607.MOV", vidLoad);
  eden.position(200,200);
  eden.size(300);
  checkbox = createCheckbox("Ya like Jazz?", false);
  checkbox.position(60,60);
}


function myCheckedEvent() {
  if (checkbox.checked()) {
    print("YEET");
  }
}

function draw() {
  background(slider.value(), slider2.value(),slider3.value());
  if (radio.value() === "rectangle"){
    rect(random(0,width), random(0,height), 200,200);
  }
  else if (radio.value() === "circle"){
    ellipse(random(0,width), random(0,height), 200,200);
  }
  fill(picker.value());
  checkbox.changed(myCheckedEvent);
}

function vidLoad() {
  vid.play();
}