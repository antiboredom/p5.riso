let blue;
let red;

var redx = new Array(1000);
var redy = new Array(1000);

var bluex = new Array(1000);
var bluey = new Array(1000);

function setup() {
  createCanvas(windowWidth, windowHeight);

  red = new Riso('red');
  for (var i = 0; i < 1000; i++) {
    redx[i] = random(width);
    redy[i] = random(height);
  }

  blue = new Riso('blue');
  for (var i = 0; i < 1000; i++) {
    bluex[i] = random(width);
    bluey[i] = random(height);
  }
}

function draw() {
  background(255, 255, 255, 100);
  clearRiso();

  red.fill(255);
  blue.fill(255);

  for (var i = 0; i < 1000; i++) {
    red.ellipse(redx[i], redy[i], 5, 5);
    redx[i] += random(-5, 5);
    redy[i] += random(-5, 5);
  }

  for (var i = 0; i < 1000; i++) {
    blue.ellipse(bluex[i], bluey[i], 5, 5);
    bluex[i] += random(-5, 5);
    bluey[i] += random(-5, 5);
  }

  drawRiso();
}

function mouseClicked() {
  exportRiso();
}
