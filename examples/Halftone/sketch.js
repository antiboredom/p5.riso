let pink;
let img;

function preload() {
  img = loadImage('data/monkeys.jpg');
}

function setup() {
  pixelDensity(1);
  createCanvas(img.width, img.height);

  pink = new Riso('fluorescentpink');
}

function draw() {
  background(220);

  clearRiso();

  let halftoned = halftoneImage(img, 'line', 3, 45, 90);

  pink.image(halftoned, 0, 0);

  drawRiso();
}
