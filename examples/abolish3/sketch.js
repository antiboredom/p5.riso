let blue, red;
let img;

function preload() {
  img = loadImage('data/claire.jpg');
}

function setup() {
  createCanvas(8.5 * 72, 11 * 72);
  blue = new Riso('blue', width, height);
  red = new Riso('red', width, height);
  noLoop();
}

function draw() {
  background(255);

  risoNoStroke();
  clearRiso();

  let reds = extractRGBChannel(img, 0);
  let blues = extractRGBChannel(img, 2);

  blue.imageMode(CENTER);
  red.imageMode(CENTER);
  blue.image(blues, width / 2, height / 2, img.width / 2, img.height / 2);
  red.image(reds, width / 2, height / 2, img.width / 2, img.height / 2);

  let textGraphic = createGraphics(width, height);
  textGraphic.fill(0);
  textGraphic.textStyle(BOLD);
  textGraphic.textFont('Helvetica');
  textGraphic.textAlign(CENTER, CENTER);
  textGraphic.textSize(80);
  textGraphic.text('ABOLISH', width * 0.5, height * 0.7);

  blue.cutout(textGraphic);

  drawRiso();
}

function mousePressed() {
  exportRiso();
}
