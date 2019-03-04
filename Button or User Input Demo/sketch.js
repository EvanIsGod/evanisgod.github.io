let input, button;

function setup() {
  createCanvas(400, 400);
	input = createInput();
	input.position(20,65);
	
	button = createButton("Confirm");
	button.position(20,90);
	button.mousePressed(evens);
	
	textSize(50);
	
}

function greeting(){
	let name = input.value();
	for (let i = 0; i < 200; i++){
		fill(random(255),255,255);
		text(name, random(width), random(height));
	}
}

function evens(){
	loop();
	let roof = input.value();
	while (roof > 0){
		if (roof % 2 === 0){
			print(roof);
		}
		roof-=1;
	}	
}