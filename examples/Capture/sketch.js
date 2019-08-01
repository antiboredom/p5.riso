let blue;
let red;
let img;

var capture; // this is the video camera
var capimg;
var left, right;
var theblur; // this is the blur
var a = 0.1;
var b = 1.0-a;

function setup() {
	createCanvas(640, 480);
	
	// red = new Riso("red", width/2, height);
	// blue = new Riso("blue", width, height/2);
	red = new Riso("red", width, height);
  blue = new Riso("blue", width, height);
	
	pixelDensity(1);
	background(100);
	capture = createCapture(VIDEO); // this opens the digitizer
	theblur = createImage(640, 480);
	capture.size(640, 480);
	capture.hide();
	scale(-1.0,1.0);
	//frameRate(10);

}

function draw() {
	background(255);
	clearRiso();
	
	blue.fill(100);
	red.fill(100);
	
	capimg = capture.get(0, 0, 640, 480); // what the fuck is this?

	blue.image(capture, 0, 0, capture.width, capture.height);
	red.image(capture, 0, 0, capture.width, capture.height);
	
	// blue.draw();
	red.draw();
	// drawRiso();
}

function mouseClicked(){
	exportRiso();
}