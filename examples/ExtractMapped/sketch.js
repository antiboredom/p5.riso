let red;
let blue;
let green;
let img;

function preload() {
  img = loadImage("data/sam.png");
}

function setup() {
  pixelDensity(1);
  createCanvas(img.width * 2, img.height * 2);
  background(255);

  image(img, 0, img.height);

  red = new Riso("black");
  blue = new Riso("teal");
  // yellow = new Riso("black");
  // green = new Riso("GREEN");

  let imgs = extractMappedChannels(img, 0.1);

  // red.image(img, 0, 0);
  red.image(imgs[0], 0, 0);
  blue.image(imgs[1], 0, 0);
  // yellow.image(imgs[2], 0, 0);

  drawRiso();

  // let newimg = testMapChannels(img);
  // image(newimg, newimg.width, 0);

  // green.image(imgs[2], 0, 0);
}

// function mouseClicked() {
//   exportRiso();
// }
